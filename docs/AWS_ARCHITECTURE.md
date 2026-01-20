# ExiusCart AWS Architecture

Complete AWS hosting guide for ExiusCart - Multi-tenant SaaS platform.

---

## Architecture Diagram

```
                                         ┌─────────────────────┐
                                         │      Route 53       │
                                         │    (DNS Manager)    │
                                         │   exiuscart.com     │
                                         └──────────┬──────────┘
                                                    │
                                         ┌──────────▼──────────┐
                                         │     CloudFront      │
                                         │   (CDN - Global)    │
                                         │   SSL Termination   │
                                         └──────────┬──────────┘
                                                    │
                 ┌──────────────────────────────────┼──────────────────────────────────┐
                 │                                  │                                  │
      ┌──────────▼──────────┐           ┌──────────▼──────────┐           ┌──────────▼──────────┐
      │     S3 Bucket       │           │     S3 Bucket       │           │        ALB          │
      │  (Marketing Site)   │           │   (Static Assets)   │           │  (Load Balancer)    │
      │  exiuscart.com      │           │  assets.exiuscart   │           │  api.exiuscart.com  │
      └─────────────────────┘           └─────────────────────┘           └──────────┬──────────┘
                                                                                     │
                                                    ┌────────────────────────────────┤
                                                    │                                │
                                         ┌──────────▼──────────┐          ┌──────────▼──────────┐
                                         │    ECS Fargate      │          │    ECS Fargate      │
                                         │   (FastAPI App)     │          │   (FastAPI App)     │
                                         │    Container 1      │          │    Container 2      │
                                         └──────────┬──────────┘          └──────────┬──────────┘
                                                    │                                │
                                                    └────────────┬───────────────────┘
                                                                 │
                      ┌──────────────────────────────────────────┼──────────────────────────────────────────┐
                      │                                          │                                          │
           ┌──────────▼──────────┐                    ┌──────────▼──────────┐                    ┌──────────▼──────────┐
           │   RDS PostgreSQL    │                    │   ElastiCache       │                    │     S3 Bucket       │
           │   (Primary DB)      │                    │   (Redis Cache)     │                    │   (File Uploads)    │
           │   Multi-AZ          │                    │   Sessions/Cache    │                    │   Invoices/Images   │
           └─────────────────────┘                    └─────────────────────┘                    └─────────────────────┘
```

---

## Domain Structure

| Domain | Service | Purpose |
|--------|---------|---------|
| `exiuscart.com` | CloudFront → S3 | Marketing website |
| `www.exiuscart.com` | Redirect → exiuscart.com | WWW redirect |
| `app.exiuscart.com` | CloudFront → S3/ECS | Shop owner dashboard |
| `admin.exiuscart.com` | CloudFront → S3/ECS | ExiusCart admin panel |
| `api.exiuscart.com` | CloudFront → ALB → ECS | FastAPI backend |
| `assets.exiuscart.com` | CloudFront → S3 | Static assets (images, files) |

---

## AWS Services Detail

### 1. Route 53 (DNS)

**Purpose:** Domain management and DNS routing

**Configuration:**
```
exiuscart.com
├── A Record (Alias) → CloudFront Distribution
├── AAAA Record (Alias) → CloudFront Distribution (IPv6)
├── MX Records → Email provider
└── TXT Records → Domain verification

Subdomains:
├── app.exiuscart.com → CloudFront (Shop Dashboard)
├── admin.exiuscart.com → CloudFront (Admin Dashboard)
├── api.exiuscart.com → CloudFront → ALB
└── assets.exiuscart.com → CloudFront → S3
```

**Estimated Cost:** $0.50/month per hosted zone + $0.40 per million queries

---

### 2. CloudFront (CDN)

**Purpose:** Global content delivery, SSL termination, caching

**Distributions:**

| Distribution | Origin | Cache Policy |
|--------------|--------|--------------|
| Marketing Site | S3 Bucket | Cache static (1 day) |
| Shop Dashboard | S3 Bucket | Cache static (1 hour) |
| Admin Dashboard | S3 Bucket | Cache static (1 hour) |
| API | ALB | No cache (pass-through) |
| Assets | S3 Bucket | Cache (30 days) |

**Features:**
- SSL/TLS termination (ACM certificates)
- Gzip/Brotli compression
- Geographic restrictions (optional)
- WAF integration (optional)

**Estimated Cost:** $0.085 per 10,000 requests + $0.085 per GB (first 10TB)

---

### 3. S3 Buckets

**Purpose:** Static file hosting, file uploads, backups

| Bucket Name | Purpose | Public | Versioning |
|-------------|---------|--------|------------|
| `exiuscart-website` | Marketing site static files | Yes (via CloudFront) | No |
| `exiuscart-shop-dashboard` | Shop dashboard static files | Yes (via CloudFront) | No |
| `exiuscart-admin-dashboard` | Admin dashboard static files | Yes (via CloudFront) | No |
| `exiuscart-uploads` | User uploads (invoices, images) | No (signed URLs) | Yes |
| `exiuscart-backups` | Database backups | No | Yes |

**Bucket Policy Example (Website):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CloudFrontAccess",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::exiuscart-website/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

**Estimated Cost:** $0.023 per GB storage + $0.09 per GB transfer

---

### 4. ECS Fargate (Container Service)

**Purpose:** Run FastAPI backend containers

**Cluster Configuration:**
```
Cluster: exiuscart-cluster
├── Service: exiuscart-api
│   ├── Task Definition: exiuscart-api-task
│   ├── Desired Count: 2 (minimum)
│   ├── CPU: 512 (0.5 vCPU)
│   ├── Memory: 1024 MB
│   └── Auto Scaling: 2-10 tasks
```

**Task Definition:**
```json
{
  "family": "exiuscart-api",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "containerDefinitions": [
    {
      "name": "api",
      "image": "ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/exiuscart-api:latest",
      "portMappings": [
        {
          "containerPort": 8000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {"name": "DATABASE_URL", "value": "postgresql://..."},
        {"name": "REDIS_URL", "value": "redis://..."},
        {"name": "AWS_S3_BUCKET", "value": "exiuscart-uploads"}
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/exiuscart-api",
          "awslogs-region": "me-south-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

**Auto Scaling Policy:**
- Scale up: CPU > 70% for 2 minutes
- Scale down: CPU < 30% for 5 minutes
- Min: 2 tasks, Max: 10 tasks

**Estimated Cost:** ~$0.04/hour per task (~$30-60/month for 2 tasks)

---

### 5. Application Load Balancer (ALB)

**Purpose:** Distribute traffic to ECS containers, health checks

**Configuration:**
```
ALB: exiuscart-api-alb
├── Listener: HTTPS (443) → Target Group
├── Target Group: exiuscart-api-tg
│   ├── Protocol: HTTP
│   ├── Port: 8000
│   ├── Health Check: /health
│   └── Targets: ECS Tasks (auto-registered)
└── Security Group: Allow 443 from CloudFront only
```

**Health Check:**
```
Path: /health
Interval: 30 seconds
Timeout: 5 seconds
Healthy threshold: 2
Unhealthy threshold: 3
```

**Estimated Cost:** $0.0225/hour (~$16/month) + $0.008 per LCU-hour

---

### 6. RDS PostgreSQL

**Purpose:** Primary database for all application data

**Configuration:**
```
Instance: exiuscart-db
├── Engine: PostgreSQL 15
├── Instance Class: db.t3.micro (dev) / db.t3.small (prod)
├── Storage: 20 GB gp3 (auto-scaling to 100 GB)
├── Multi-AZ: Yes (production)
├── Backup: 7 days retention
└── Encryption: Yes (AWS KMS)
```

**Connection String:**
```
postgresql://exiuscart_user:PASSWORD@exiuscart-db.xxxxx.me-south-1.rds.amazonaws.com:5432/exiuscart
```

**Security:**
- VPC only (no public access)
- Security group allows port 5432 from ECS only
- SSL required for connections
- Automated backups enabled

**Estimated Cost:**
- db.t3.micro: ~$15/month
- db.t3.small: ~$30/month
- Storage: $0.115/GB/month

---

### 7. ElastiCache Redis

**Purpose:** Session storage, caching, rate limiting

**Configuration:**
```
Cluster: exiuscart-redis
├── Engine: Redis 7.x
├── Node Type: cache.t3.micro (dev) / cache.t3.small (prod)
├── Nodes: 1 (dev) / 2 (prod - with replica)
└── Encryption: In-transit and at-rest
```

**Usage:**
- Session storage (JWT tokens)
- API response caching
- Rate limiting counters
- Real-time data (WhatsApp order status)

**Connection String:**
```
redis://exiuscart-redis.xxxxx.cache.amazonaws.com:6379
```

**Estimated Cost:**
- cache.t3.micro: ~$12/month
- cache.t3.small: ~$25/month

---

### 8. ECR (Container Registry)

**Purpose:** Store Docker images for ECS deployment

**Repositories:**
```
exiuscart-api          # FastAPI backend
exiuscart-shop         # Shop dashboard (if using SSR)
exiuscart-admin        # Admin dashboard (if using SSR)
```

**Lifecycle Policy:**
- Keep last 10 tagged images
- Delete untagged images after 7 days

**Estimated Cost:** $0.10 per GB/month

---

### 9. ACM (SSL Certificates)

**Purpose:** Free SSL certificates for all domains

**Certificates:**
```
Certificate 1: *.exiuscart.com, exiuscart.com
├── Covers: exiuscart.com
├── Covers: app.exiuscart.com
├── Covers: admin.exiuscart.com
├── Covers: api.exiuscart.com
└── Covers: assets.exiuscart.com
```

**Validation:** DNS validation (automatic renewal)

**Estimated Cost:** FREE

---

### 10. VPC (Network)

**Purpose:** Isolated network for all resources

**Configuration:**
```
VPC: exiuscart-vpc (10.0.0.0/16)
├── Public Subnets (for ALB, NAT Gateway)
│   ├── 10.0.1.0/24 (AZ-a)
│   └── 10.0.2.0/24 (AZ-b)
├── Private Subnets (for ECS, RDS, Redis)
│   ├── 10.0.10.0/24 (AZ-a)
│   └── 10.0.20.0/24 (AZ-b)
├── NAT Gateway (for outbound internet from private subnets)
├── Internet Gateway (for public subnets)
└── VPC Endpoints (S3, ECR, CloudWatch)
```

**Security Groups:**
```
sg-alb:
  - Inbound: 443 from CloudFront IPs
  - Outbound: 8000 to sg-ecs

sg-ecs:
  - Inbound: 8000 from sg-alb
  - Outbound: 5432 to sg-rds
  - Outbound: 6379 to sg-redis
  - Outbound: 443 to VPC endpoints

sg-rds:
  - Inbound: 5432 from sg-ecs

sg-redis:
  - Inbound: 6379 from sg-ecs
```

**Estimated Cost:**
- NAT Gateway: ~$32/month + $0.045/GB processed
- VPC Endpoints: ~$7/month each

---

## Cost Summary

### Development Environment

| Service | Configuration | Monthly Cost |
|---------|---------------|--------------|
| Route 53 | 1 hosted zone | $0.50 |
| CloudFront | ~50 GB transfer | $5 |
| S3 | ~5 GB storage | $1 |
| ECS Fargate | 1 task (0.5 vCPU, 1GB) | $15 |
| ALB | Basic usage | $16 |
| RDS | db.t3.micro | $15 |
| ElastiCache | cache.t3.micro | $12 |
| ECR | ~2 GB images | $0.20 |
| NAT Gateway | Basic | $32 |
| **Total** | | **~$97/month** |

### Production Environment

| Service | Configuration | Monthly Cost |
|---------|---------------|--------------|
| Route 53 | 1 hosted zone | $0.50 |
| CloudFront | ~500 GB transfer | $45 |
| S3 | ~50 GB storage | $5 |
| ECS Fargate | 2-4 tasks (1 vCPU, 2GB) | $60-120 |
| ALB | Moderate usage | $25 |
| RDS | db.t3.small (Multi-AZ) | $60 |
| ElastiCache | cache.t3.small (replica) | $50 |
| ECR | ~5 GB images | $0.50 |
| NAT Gateway | Moderate | $45 |
| WAF | Basic rules | $10 |
| **Total** | | **~$300-400/month** |

---

## Region Selection

**Recommended Region:** `me-south-1` (Bahrain) - Closest to UAE

**Alternative:** `ap-south-1` (Mumbai) - If Bahrain not available

**Benefits of me-south-1:**
- Lowest latency for UAE users (~20ms)
- Data residency compliance
- All required services available

---

## CI/CD Pipeline

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   GitHub    │────►│   GitHub    │────►│    ECR      │────►│    ECS      │
│   Push      │     │   Actions   │     │   (Images)  │     │  (Deploy)   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐     ┌─────────────┐
                    │  Build &    │────►│     S3      │
                    │  Export     │     │  (Static)   │
                    └─────────────┘     └─────────────┘
```

**GitHub Actions Workflow:**
1. On push to `main` branch
2. Run tests
3. Build Docker image → Push to ECR
4. Build Next.js static → Upload to S3
5. Deploy new ECS task definition
6. Invalidate CloudFront cache

---

## Monitoring & Logging

### CloudWatch

**Logs:**
- `/ecs/exiuscart-api` - API container logs
- `/aws/rds/instance/exiuscart-db` - Database logs
- CloudFront access logs → S3

**Metrics:**
- ECS: CPU, Memory, Task count
- ALB: Request count, Latency, Error rate
- RDS: Connections, CPU, Storage
- ElastiCache: Cache hits, Memory

**Alarms:**
- API Error rate > 5%
- CPU usage > 80%
- Database connections > 80%
- Disk space < 20%

### X-Ray (Optional)

- Distributed tracing for API requests
- Performance bottleneck identification

---

## Backup Strategy

| Resource | Backup Method | Retention | Frequency |
|----------|---------------|-----------|-----------|
| RDS | Automated snapshots | 7 days | Daily |
| RDS | Manual snapshots | 30 days | Weekly |
| S3 Uploads | Cross-region replication | - | Real-time |
| Redis | RDB snapshots | 1 day | Daily |

---

## Security Checklist

- [ ] All data encrypted at rest (RDS, S3, ElastiCache)
- [ ] All data encrypted in transit (SSL/TLS)
- [ ] VPC with private subnets for databases
- [ ] Security groups with minimal access
- [ ] IAM roles with least privilege
- [ ] Secrets in AWS Secrets Manager
- [ ] WAF rules for API protection
- [ ] CloudTrail enabled for audit logs
- [ ] GuardDuty enabled for threat detection

---

## Quick Start Commands

### 1. Create ECR Repository
```bash
aws ecr create-repository --repository-name exiuscart-api --region me-south-1
```

### 2. Build and Push Docker Image
```bash
# Login to ECR
aws ecr get-login-password --region me-south-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.me-south-1.amazonaws.com

# Build image
docker build -t exiuscart-api ./backend

# Tag image
docker tag exiuscart-api:latest ACCOUNT_ID.dkr.ecr.me-south-1.amazonaws.com/exiuscart-api:latest

# Push image
docker push ACCOUNT_ID.dkr.ecr.me-south-1.amazonaws.com/exiuscart-api:latest
```

### 3. Deploy Static Site to S3
```bash
# Build Next.js
cd apps/exiuscart-website
npm run build

# Sync to S3
aws s3 sync out/ s3://exiuscart-website --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"
```

---

## Next Steps

1. **Create AWS Account** and set up IAM users
2. **Register Domain** in Route 53 or transfer existing
3. **Set up VPC** with public/private subnets
4. **Create RDS** PostgreSQL instance
5. **Create ElastiCache** Redis cluster
6. **Set up ECS** cluster and task definitions
7. **Configure ALB** and target groups
8. **Create S3** buckets for static files
9. **Set up CloudFront** distributions
10. **Configure CI/CD** with GitHub Actions

---

## Files to Create

```
ExiusCart/
├── infrastructure/
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── vpc.tf
│   │   ├── ecs.tf
│   │   ├── rds.tf
│   │   ├── elasticache.tf
│   │   ├── s3.tf
│   │   ├── cloudfront.tf
│   │   └── outputs.tf
│   └── docker/
│       ├── api.Dockerfile
│       └── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── deploy-api.yml
│       ├── deploy-website.yml
│       └── deploy-dashboards.yml
└── docs/
    └── AWS_ARCHITECTURE.md (this file)
```
