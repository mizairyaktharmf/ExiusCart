# ExiusCart - Authentication & Verification System Documentation

> **Project:** ExiusCart - Multi-tenant SaaS Platform for UAE Businesses
> **Version:** 1.1
> **Last Updated:** January 2026
> **Infrastructure:** AWS-Based (Free Tier Optimized)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Year 1 Budget Plan](#2-year-1-budget-plan)
3. [AWS Services Stack](#3-aws-services-stack)
4. [Architecture Diagram](#4-architecture-diagram)
5. [Authentication Flow (Email Only)](#5-authentication-flow-email-only)
6. [Email System](#6-email-system)
7. [Domain & Email Setup](#7-domain--email-setup)
8. [DNS Configuration (Namecheap)](#8-dns-configuration-namecheap)
9. [Cost Estimation](#9-cost-estimation)
10. [Implementation Checklist](#10-implementation-checklist)

---

## 1. Overview

ExiusCart uses a fully AWS-based infrastructure optimized for **FREE TIER** in Year 1. The system supports:

- Shop owner registration with **email verification only** (no SMS to save cost)
- Staff account management with 2-device login limit
- Trial system (14 days) with automated reminders
- Subscription management
- Password reset via **email only**

### Key Decision: No SMS in Year 1
To minimize costs, we use **email-only verification**. SMS can be added later when revenue allows.

---

## 2. Year 1 Budget Plan

### Monthly Cost Breakdown

```
YEAR 1 (Free Tier Active):
├── Domain (Namecheap)          → $10/year ($0.83/month)
├── Microsoft 365 (1 user)      → $6/month
├── EC2 (t2.micro)              → FREE (750 hrs/month)
├── RDS PostgreSQL (db.t2.micro)→ FREE (750 hrs/month)
├── Cognito                     → FREE (50,000 MAU)
├── Lambda                      → FREE (1M requests/month)
├── API Gateway                 → FREE (1M requests/month)
├── S3                          → FREE (5GB storage)
├── SES (Email)                 → FREE (62,000 emails/month from EC2)
├── SSL Certificates (ACM)      → FREE (always)
├── SNS SMS                     → ❌ SKIPPED (no SMS - saves $20/month)
─────────────────────────────────────────────────────────────────────
TOTAL YEAR 1:                   ~$6.83/month (~$82/year)
```

### Cost Comparison

| Item | With SMS | Without SMS (Our Plan) |
|------|----------|------------------------|
| Monthly Cost | ~$27 | **~$7** |
| Yearly Cost | ~$324 | **~$82** |
| Savings | - | **$242/year saved!** |

---

## 3. AWS Services Stack

| Purpose | AWS Service | Free Tier | Paid Pricing |
|---------|-------------|-----------|--------------|
| **Authentication** | Amazon Cognito | 50,000 MAU free | $0.0055/MAU after |
| **Email Sending** | Amazon SES | 62,000 emails/month (from EC2) | $0.10/1,000 emails |
| **SMS OTP** | Amazon SNS | None | ~$0.05/SMS (UAE) |
| **Database** | Amazon RDS (PostgreSQL) | 750 hrs/month (1 year) | ~$15/month |
| **Serverless API** | AWS Lambda | 1M requests/month free | $0.20/1M requests |
| **API Management** | API Gateway | 1M requests/month free | $3.50/1M requests |
| **File Storage** | Amazon S3 | 5GB free | $0.023/GB |
| **Hosting** | AWS Amplify | 1000 build mins/month | ~$0.01/build min |
| **SSL Certificates** | AWS Certificate Manager | **Always Free** | Free |

---

## 3. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     EXIUSCART AWS ARCHITECTURE                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│    FRONTEND (Next.js on AWS Amplify)                                    │
│    ┌────────────────────────────────────────────────────────────┐       │
│    │  exiuscart.com         → Landing/Marketing Page            │       │
│    │  app.exiuscart.com     → Shop Owner Dashboard              │       │
│    │  admin.exiuscart.com   → Admin Dashboard                   │       │
│    └────────────────────────────────────────────────────────────┘       │
│                              │                                          │
│                              ▼                                          │
│    ┌────────────────────────────────────────────────────────────┐       │
│    │                    AMAZON COGNITO                          │       │
│    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │       │
│    │  │ User Pool   │  │ Identity    │  │ Custom      │        │       │
│    │  │ (Auth)      │  │ Pool        │  │ Attributes  │        │       │
│    │  └─────────────┘  └─────────────┘  └─────────────┘        │       │
│    │                                                            │       │
│    │  Custom Attributes:                                        │       │
│    │  - shopId (string)                                         │       │
│    │  - role (admin/staff)                                      │       │
│    │  - trialEndsAt (datetime)                                  │       │
│    │  - subscriptionStatus (trial/active/expired)               │       │
│    │  - deviceCount (number)                                    │       │
│    └────────────────────────────────────────────────────────────┘       │
│                              │                                          │
│                              ▼                                          │
│    ┌────────────────────────────────────────────────────────────┐       │
│    │              AWS LAMBDA + API GATEWAY                      │       │
│    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │       │
│    │  │ Auth        │  │ Trial       │  │ Staff       │        │       │
│    │  │ Functions   │  │ Management  │  │ Management  │        │       │
│    │  └─────────────┘  └─────────────┘  └─────────────┘        │       │
│    │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │       │
│    │  │ Device      │  │ Subscription│  │ Email       │        │       │
│    │  │ Tracking    │  │ Handler     │  │ Triggers    │        │       │
│    │  └─────────────┘  └─────────────┘  └─────────────┘        │       │
│    └────────────────────────────────────────────────────────────┘       │
│                              │                                          │
│              ┌───────────────┼───────────────┐                          │
│              ▼               ▼               ▼                          │
│    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                   │
│    │  AMAZON SES  │ │  AMAZON SNS  │ │  AMAZON RDS  │                   │
│    │  (Email)     │ │  (SMS)       │ │  (Database)  │                   │
│    │              │ │              │ │              │                   │
│    │  Sends:      │ │  Sends:      │ │  Stores:     │                   │
│    │  - OTP codes │ │  - OTP codes │ │  - Users     │                   │
│    │  - Welcome   │ │  - Alerts    │ │  - Shops     │                   │
│    │  - Invoices  │ │              │ │  - Orders    │                   │
│    │  - Reminders │ │              │ │  - Products  │                   │
│    └──────────────┘ └──────────────┘ └──────────────┘                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Authentication Flow (Email Only)

> **Note:** We use EMAIL-ONLY verification to save costs. No SMS in Year 1.

### 5.1 Shop Owner Registration

```
Step 1: User fills registration form
        ├── Shop Name
        ├── Owner Name
        ├── Email Address
        ├── Phone Number (+971...) ← Stored but NOT verified via SMS
        └── Password

Step 2: Cognito creates user (unverified status)
        └── Custom attributes set:
            ├── role: "admin"
            ├── trialEndsAt: [current date + 14 days]
            └── subscriptionStatus: "trial"

Step 3: Email Verification (NO SMS)
        └── AWS SES sends email with 6-digit OTP code

Step 4: User enters OTP code from email
        └── Cognito marks user as verified

Step 5: Account activated
        ├── Lambda creates shop record in RDS
        ├── SES sends welcome email
        └── User redirected to dashboard

💡 Phone number is collected for contact purposes but NOT verified via SMS
```

### 5.2 Staff Account Creation

```
Step 1: Shop owner clicks "Add Staff" in dashboard

Step 2: Owner fills staff details
        ├── Name
        ├── Email
        ├── Phone (optional, for contact only)
        └── Role (staff/manager)

Step 3: Lambda function
        ├── Creates Cognito user with temp password
        ├── Sets custom attributes:
        │   ├── shopId: [owner's shop ID]
        │   ├── role: "staff"
        │   └── deviceCount: 0
        └── AWS SES sends email with credentials

Step 4: Staff receives email
        ├── Login link
        └── Temporary password

Step 5: Staff first login
        ├── Cognito forces password change
        └── Device registered (count: 1)
```

### 5.3 Login Flow with Device Tracking

```
Step 1: User enters email + password

Step 2: Cognito validates credentials

Step 3: Lambda Pre-Authentication Trigger
        ├── Check device count
        │   ├── If deviceCount < 2 → Allow login
        │   └── If deviceCount >= 2 → Check if known device
        │       ├── Known device → Allow
        │       └── New device → Block with error message
        │
        └── Check subscription status
            ├── If "active" → Allow
            ├── If "trial" → Check trialEndsAt
            │   ├── Not expired → Allow
            │   └── Expired → Redirect to billing
            └── If "expired" → Redirect to billing

Step 4: Successful login
        ├── Update lastLogin timestamp
        ├── Register device if new
        └── Return JWT tokens
```

### 5.4 Password Reset (Email Only)

```
Step 1: User clicks "Forgot Password"

Step 2: User enters email address

Step 3: AWS SES sends reset code via email
        └── 6-digit code valid for 15 minutes

Step 4: User enters code + new password

Step 5: Password updated
        └── User can login with new password

💡 NO SMS option - email only to save costs
```

---

## 6. Email System

### 6.1 Two Email Systems

ExiusCart uses **two separate email systems**:

#### Microsoft 365 (Human Emails) - $6/month
For emails that require human reading and response.

**Strategy: 1 Paid User + FREE Aliases**

```
PAID USER (Primary - $6/month):
└── admin@exiuscart.com (main inbox)

FREE ALIASES (all go to admin@ inbox):
├── hello@exiuscart.com    → Alias (Customer support)
├── sales@exiuscart.com    → Alias (Sales inquiries)
├── billing@exiuscart.com  → Alias (Payment issues)
├── support@exiuscart.com  → Alias (Technical support)
└── info@exiuscart.com     → Alias (General inquiries)
```

**How Aliases Work:**
- All emails to hello@, sales@, billing@ arrive in admin@ inbox
- You can reply FROM any alias (appears as hello@exiuscart.com to customer)
- **Cost: $0 extra** - aliases are FREE in Microsoft 365!

#### AWS SES (System/Automated Emails) - FREE
For emails sent automatically by the application:

| Email Address | Purpose |
|---------------|---------|
| noreply@exiuscart.com | OTP codes, verification |
| notifications@exiuscart.com | Order alerts, reminders |
| invoices@exiuscart.com | Billing invoices |

### 6.2 Why Two Systems?

| Aspect | Microsoft 365 | AWS SES |
|--------|---------------|---------|
| **Who sends?** | Humans (you/team) | Application (code) |
| **Daily limit** | ~10,000 emails | Unlimited |
| **Cost** | $6/month (1 user) | FREE (62K/month) |
| **Has inbox?** | Yes (read replies) | No |
| **Best for** | Support, sales | OTP, invoices, alerts |

### 6.3 Microsoft 365 Alias Setup Guide

**Step 1:** Login to Microsoft 365 Admin Center
```
https://admin.microsoft.com
```

**Step 2:** Go to Users → Active Users → Select admin@exiuscart.com

**Step 3:** Click "Manage email aliases"

**Step 4:** Add aliases (FREE):
```
+ hello@exiuscart.com
+ sales@exiuscart.com
+ billing@exiuscart.com
+ support@exiuscart.com
+ info@exiuscart.com
```

**Step 5:** Save changes

Now all these emails arrive in ONE inbox (admin@) but you can reply as any of them!

### 6.4 Automated Email Types (AWS SES)

| Email Type | Trigger | Template |
|------------|---------|----------|
| Email Verification OTP | Registration | `verification-otp` |
| Welcome Email | After verification | `welcome` |
| Password Reset | Forgot password | `password-reset` |
| Trial Reminder (Day 7) | Scheduled | `trial-reminder-7` |
| Trial Reminder (Day 12) | Scheduled | `trial-reminder-12` |
| Trial Ending (Day 14) | Scheduled | `trial-ending` |
| Trial Expired | Trial ends | `trial-expired` |
| Invoice | Payment received | `invoice` |
| Staff Invitation | Owner adds staff | `staff-invite` |
| Low Stock Alert | Stock < threshold | `low-stock-alert` |
| New Order Alert | Order placed | `new-order` |

---

## 7. Domain & Email Setup

### 7.1 Complete Setup Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    EXIUSCART.COM - COMPLETE SETUP                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  NAMECHEAP (Domain Registrar) - $10/year                                │
│  └── exiuscart.com                                                      │
│      └── DNS Management (supports all record types)                     │
│                                                                         │
│  MICROSOFT 365 (Human Emails) - $6/month                                │
│  └── admin@exiuscart.com (PRIMARY - paid user)                          │
│      ├── hello@exiuscart.com    (FREE alias)                            │
│      ├── sales@exiuscart.com    (FREE alias)                            │
│      ├── billing@exiuscart.com  (FREE alias)                            │
│      ├── support@exiuscart.com  (FREE alias)                            │
│      └── info@exiuscart.com     (FREE alias)                            │
│                                                                         │
│  AWS SES (System Emails) - FREE                                         │
│  ├── noreply@exiuscart.com                                              │
│  ├── notifications@exiuscart.com                                        │
│  └── invoices@exiuscart.com                                             │
│                                                                         │
│  AWS EC2 (Hosting) - FREE for 12 months                                 │
│  └── Single t2.micro instance hosting ALL apps:                         │
│      ├── exiuscart.com         (Landing Page)                           │
│      ├── app.exiuscart.com     (Shop Dashboard)                         │
│      ├── admin.exiuscart.com   (Admin Dashboard)                        │
│      └── api.exiuscart.com     (Backend API)                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Subdomains Structure

| Subdomain | Purpose | Hosting | Cost |
|-----------|---------|---------|------|
| exiuscart.com | Marketing/Landing page | EC2 (Nginx) | FREE |
| app.exiuscart.com | Shop owner dashboard | EC2 (Nginx) | FREE |
| admin.exiuscart.com | ExiusCart admin panel | EC2 (Nginx) | FREE |
| api.exiuscart.com | Backend API | EC2 (Nginx) | FREE |

### 7.3 Namecheap DNS Support

**Yes, Namecheap supports ALL DNS records needed:**

| Record Type | Supported | Purpose |
|-------------|-----------|---------|
| A Record | ✅ Yes | Point domain/subdomain to AWS EC2 IP |
| CNAME | ✅ Yes | Subdomains, email verification |
| MX | ✅ Yes | Microsoft 365 email routing |
| TXT | ✅ Yes | SPF, DKIM, domain verification |
| NS | ✅ Yes | Nameservers |
| AAAA | ✅ Yes | IPv6 (optional) |

---

## 8. DNS Configuration (Namecheap)

### 8.1 Required DNS Records

**All configured in Namecheap Dashboard → Domain List → Manage → Advanced DNS**

```
TYPE    HOST              VALUE                              TTL    PURPOSE
──────────────────────────────────────────────────────────────────────────────

# WEBSITE HOSTING (AWS EC2)
A       @                 [Your EC2 Elastic IP]              Auto   Main website
A       app               [Your EC2 Elastic IP]              Auto   Shop dashboard
A       admin             [Your EC2 Elastic IP]              Auto   Admin dashboard
A       api               [Your EC2 Elastic IP]              Auto   Backend API

# MICROSOFT 365 EMAIL (Get these from M365 setup wizard)
MX      @                 exiuscart-com.mail.protection...   Auto   Email routing
TXT     @                 v=spf1 include:spf.protection...   Auto   SPF record
CNAME   autodiscover      autodiscover.outlook.com           Auto   Outlook config
TXT     @                 MS=ms12345678                      Auto   Domain verify

# AWS SES (Get these from SES console after verifying domain)
TXT     _amazonses        [SES verification token]           Auto   SES verify
CNAME   xxxx._domainkey   xxxx.dkim.amazonses.com           Auto   DKIM 1
CNAME   yyyy._domainkey   yyyy.dkim.amazonses.com           Auto   DKIM 2
CNAME   zzzz._domainkey   zzzz.dkim.amazonses.com           Auto   DKIM 3
```

### 8.2 SSL Certificates (FREE via AWS ACM)

```
AWS Certificate Manager (ACM):
├── Request certificate for: *.exiuscart.com, exiuscart.com
├── Validation method: DNS (add CNAME record)
├── Auto-renewal: Yes (automatic, no action needed)
└── Cost: FREE forever

CNAME record for SSL validation (add to Namecheap):
TYPE    HOST                                VALUE
CNAME   _xxxx.exiuscart.com               _yyyy.acm-validations.aws
```

### 8.3 Step-by-Step DNS Setup

**Step 1: Point domain to EC2**
```
In Namecheap → Advanced DNS:
Add A Record: @ → [EC2 Elastic IP]
Add A Record: app → [EC2 Elastic IP]
Add A Record: admin → [EC2 Elastic IP]
Add A Record: api → [EC2 Elastic IP]
```

**Step 2: Configure Microsoft 365 email**
```
In Microsoft 365 Admin → Domains → Add domain:
1. Enter exiuscart.com
2. Copy MX, TXT, CNAME records
3. Add to Namecheap
4. Verify in M365
```

**Step 3: Configure AWS SES**
```
In AWS SES Console → Verified identities:
1. Add domain: exiuscart.com
2. Copy TXT and CNAME records
3. Add to Namecheap
4. Wait for verification (up to 72 hours)
```

**Step 4: SSL Certificate**
```
In AWS ACM → Request certificate:
1. Domain: *.exiuscart.com, exiuscart.com
2. DNS validation
3. Copy CNAME record
4. Add to Namecheap
5. Wait for validation (usually 30 mins)
```

---

## 9. Cost Estimation

### 9.1 Year 1 Costs (AWS Free Tier Active) - NO SMS

| Service | Free Tier | Monthly Cost | Yearly Cost |
|---------|-----------|--------------|-------------|
| Namecheap Domain | - | $0.83 | $10 |
| Microsoft 365 (1 user + aliases) | - | $6.00 | $72 |
| AWS EC2 (t2.micro) | 750 hrs/month | **FREE** | **FREE** |
| AWS RDS PostgreSQL | 750 hrs/month | **FREE** | **FREE** |
| AWS Cognito | 50K MAU | **FREE** | **FREE** |
| AWS Lambda | 1M requests | **FREE** | **FREE** |
| AWS API Gateway | 1M requests | **FREE** | **FREE** |
| AWS SES | 62K emails | **FREE** | **FREE** |
| AWS S3 | 5GB | **FREE** | **FREE** |
| AWS ACM (SSL) | Unlimited | **FREE** | **FREE** |
| SNS SMS | ❌ SKIPPED | $0 | $0 |
| **TOTAL YEAR 1** | | **$6.83/month** | **$82/year** |

### 9.2 Year 2+ Costs (After Free Tier Expires)

| Service | Monthly Cost | Notes |
|---------|--------------|-------|
| Namecheap Domain | $0.83 | Same |
| Microsoft 365 | $6.00 | Same |
| AWS EC2 (t2.micro) | $8-12 | Or upgrade to t3.micro |
| AWS RDS PostgreSQL | $15-20 | db.t3.micro |
| AWS Cognito | FREE | Still free under 50K |
| AWS Lambda | FREE | Still free under 1M |
| AWS SES | $1-2 | Pay per email |
| AWS S3 | $1-2 | Pay per GB |
| **TOTAL YEAR 2+** | **~$35-45/month** | |

### 9.3 Cost Comparison Summary

```
┌────────────────────────────────────────────────────────────┐
│              EXIUSCART COST SUMMARY                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  YEAR 1 (Free Tier):                                       │
│  ├── Domain + Email only                                   │
│  ├── NO SMS (saves $240/year)                              │
│  └── TOTAL: ~$82/year ($6.83/month)                        │
│                                                            │
│  YEAR 2+ (After Free Tier):                                │
│  ├── Domain + Email + AWS services                         │
│  ├── Still NO SMS (add when profitable)                    │
│  └── TOTAL: ~$420-540/year ($35-45/month)                  │
│                                                            │
│  BREAK-EVEN:                                               │
│  ├── Starter Plan: 99 AED/month (~$27)                     │
│  ├── Need only 2-3 paying customers to cover costs!        │
│  └── Everything after = PROFIT                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 9.4 When to Add SMS (Future)

Add SMS verification when:
- You have 50+ paying customers
- Revenue exceeds $500/month
- Customers request it

SMS costs: ~$20-50/month for 500-1000 SMS

---

## 10. Implementation Checklist

### Phase 1: Domain & Email Setup
- [ ] Purchase exiuscart.com on Namecheap (~$10/year)
- [ ] Set up Microsoft 365 Business Basic ($6/month)
- [ ] Create primary account: admin@exiuscart.com
- [ ] Create FREE aliases: hello@, sales@, billing@, support@, info@
- [ ] Configure DNS MX records in Namecheap for Microsoft 365
- [ ] Verify domain in Microsoft 365 Admin Center

### Phase 2: AWS Account Setup
- [ ] Create NEW AWS account (for fresh free tier)
- [ ] Enable MFA on root account
- [ ] Create IAM admin user
- [ ] Set region: me-south-1 (Bahrain) or eu-west-1 (Ireland)
- [ ] Set up billing alerts (to avoid surprise charges)

### Phase 3: AWS EC2 Setup (FREE for 12 months)
- [ ] Launch EC2 t2.micro instance (Amazon Linux 2)
- [ ] Allocate Elastic IP (FREE while attached to running instance)
- [ ] Configure security groups (ports 80, 443, 22)
- [ ] Install Nginx, Node.js, PM2
- [ ] Configure Nginx for multiple subdomains
- [ ] Add A records in Namecheap pointing to EC2 IP

### Phase 4: AWS RDS Setup (FREE for 12 months)
- [ ] Create RDS PostgreSQL db.t2.micro
- [ ] Configure security group for EC2 access only
- [ ] Create database and user for ExiusCart
- [ ] Test connection from EC2

### Phase 5: AWS SES Setup (FREE)
- [ ] Verify domain exiuscart.com in SES
- [ ] Add DNS records (TXT, DKIM) to Namecheap
- [ ] Wait for verification (up to 72 hours)
- [ ] Create email templates
- [ ] Request production access (move out of sandbox)
- [ ] Test sending emails

### Phase 6: AWS Cognito Setup (FREE)
- [ ] Create User Pool: exiuscart-users
- [ ] Configure password policy
- [ ] Set up EMAIL verification only (no phone/SMS)
- [ ] Add custom attributes: shopId, role, trialEndsAt
- [ ] Create App Client
- [ ] Configure Lambda triggers for custom logic

### Phase 7: SSL Certificate (FREE)
- [ ] Request certificate in AWS ACM
- [ ] Domains: *.exiuscart.com, exiuscart.com
- [ ] Add validation CNAME to Namecheap
- [ ] Wait for validation
- [ ] Configure Nginx to use certificate

### Phase 8: Authentication Pages
- [ ] Create login page
- [ ] Create registration page
- [ ] Implement email OTP verification (NO SMS)
- [ ] Create password reset flow (email only)
- [ ] Implement device tracking (2-device limit)
- [ ] Create staff invitation flow

### Phase 9: Trial & Subscription System
- [ ] Implement trial countdown (14 days)
- [ ] Set up automated trial reminder emails (Day 7, 12, 14)
- [ ] Create trial expired redirect to billing
- [ ] Integrate payment gateway (Stripe or Tap for UAE)
- [ ] Implement subscription status checks

### Phase 10: Testing & Launch
- [ ] Test all auth flows (register, login, reset password)
- [ ] Test email delivery (all templates)
- [ ] Test on mobile devices
- [ ] Security review
- [ ] Performance testing
- [ ] Go live! 🚀

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                 EXIUSCART QUICK REFERENCE                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  COSTS (Year 1):          $6.83/month ($82/year)            │
│                                                             │
│  DOMAIN:                  exiuscart.com (Namecheap)         │
│                                                             │
│  EMAIL (Human):           admin@exiuscart.com (M365)        │
│  - Aliases (FREE):        hello@, sales@, billing@          │
│                                                             │
│  EMAIL (System):          noreply@exiuscart.com (AWS SES)   │
│                                                             │
│  HOSTING:                 1 x EC2 t2.micro (FREE)           │
│  - exiuscart.com          Landing page                      │
│  - app.exiuscart.com      Shop dashboard                    │
│  - admin.exiuscart.com    Admin dashboard                   │
│  - api.exiuscart.com      Backend API                       │
│                                                             │
│  DATABASE:                RDS PostgreSQL (FREE)             │
│                                                             │
│  AUTH:                    Cognito (FREE) - EMAIL ONLY       │
│                                                             │
│  SMS:                     ❌ SKIPPED (saves $20/month)       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Appendix A: Cognito User Pool Configuration (Email Only)

```javascript
// Cognito User Pool Settings - EMAIL ONLY (No SMS)
{
  "PoolName": "exiuscart-users",
  "Policies": {
    "PasswordPolicy": {
      "MinimumLength": 8,
      "RequireUppercase": true,
      "RequireLowercase": true,
      "RequireNumbers": true,
      "RequireSymbols": false
    }
  },
  // EMAIL ONLY - No phone verification to save costs
  "AutoVerifiedAttributes": ["email"],  // Only email, NOT phone_number
  "UsernameAttributes": ["email"],
  "MfaConfiguration": "OFF",  // No MFA (would require SMS)

  // Custom attributes for ExiusCart
  "Schema": [
    { "Name": "shopId", "AttributeDataType": "String", "Mutable": true },
    { "Name": "role", "AttributeDataType": "String", "Mutable": true },
    { "Name": "trialEndsAt", "AttributeDataType": "String", "Mutable": true },
    { "Name": "subscriptionStatus", "AttributeDataType": "String", "Mutable": true },
    { "Name": "deviceCount", "AttributeDataType": "Number", "Mutable": true }
  ],

  // Email configuration - Use AWS SES
  "EmailConfiguration": {
    "EmailSendingAccount": "DEVELOPER",  // Use SES
    "SourceArn": "arn:aws:ses:region:account:identity/exiuscart.com",
    "From": "noreply@exiuscart.com"
  }
}
```

---

## Appendix B: Email Templates

### Welcome Email Template
```html
Subject: Welcome to ExiusCart! Your 14-Day Trial Starts Now

Hi {{ownerName}},

Welcome to ExiusCart! Your shop "{{shopName}}" is now ready.

Your 14-day free trial includes:
- Unlimited products
- POS system
- Inventory management
- Basic reports

Login here: https://app.exiuscart.com

Trial ends: {{trialEndDate}}

Questions? Reply to this email.

Best,
ExiusCart Team
```

### OTP Email Template (Registration)
```html
Subject: Your ExiusCart Verification Code

Hi,

Your verification code is: {{otpCode}}

This code expires in 10 minutes.

If you didn't request this, please ignore this email.

- ExiusCart Team
```

### Password Reset Email Template
```html
Subject: Reset Your ExiusCart Password

Hi {{userName}},

We received a request to reset your password.

Your reset code is: {{resetCode}}

This code expires in 15 minutes.

If you didn't request this, please ignore this email.

- ExiusCart Team
```

### Staff Invitation Email Template
```html
Subject: You've Been Invited to ExiusCart

Hi {{staffName}},

You've been invited to join {{shopName}} on ExiusCart.

Your login details:
- Email: {{staffEmail}}
- Temporary Password: {{tempPassword}}

Login here: https://app.exiuscart.com/login

You'll be asked to change your password on first login.

- ExiusCart Team
```

### Trial Reminder Email Template (Day 12)
```html
Subject: Your ExiusCart Trial Ends in 2 Days

Hi {{ownerName}},

Your free trial for {{shopName}} ends in 2 days.

Don't lose access to:
- Your product catalog
- Customer data
- Sales history
- POS system

Upgrade now: https://app.exiuscart.com/billing

Plans start at just 99 AED/month.

- ExiusCart Team
```

---

## Appendix C: Security Best Practices

1. **Password Requirements**
   - Minimum 8 characters
   - At least 1 uppercase, 1 lowercase, 1 number

2. **Session Management**
   - JWT token expiry: 1 hour
   - Refresh token expiry: 30 days
   - Force logout on password change

3. **Device Tracking**
   - Maximum 2 devices per user
   - Device fingerprinting for recognition
   - Allow users to view/remove devices

4. **Rate Limiting**
   - Login attempts: 5 per minute
   - OTP requests: 3 per 10 minutes
   - Password reset: 3 per hour

5. **Data Protection**
   - All data encrypted at rest (RDS, S3)
   - All traffic over HTTPS
   - Sensitive data never logged

---

**Document End**

*For questions or updates, contact the development team.*
