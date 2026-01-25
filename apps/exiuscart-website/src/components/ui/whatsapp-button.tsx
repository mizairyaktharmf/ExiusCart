'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '971562393573';
  const defaultMessage = encodeURIComponent('Hi, I\'m interested in ExiusCart. Can you help me?');

  const quickMessages = [
    { label: 'Pricing Info', message: 'Hi, I\'d like to know more about ExiusCart pricing plans.' },
    { label: 'Book a Demo', message: 'Hi, I\'d like to schedule a demo of ExiusCart.' },
    { label: 'Technical Support', message: 'Hi, I need technical support with ExiusCart.' },
    { label: 'General Question', message: 'Hi, I have a question about ExiusCart.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">ExiusCart Support</p>
                  <p className="text-white/80 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-gray-700 text-sm">
                Hi there! How can we help you today? Click one of the options below or start a chat.
              </p>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              {quickMessages.map((item, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-2.5 bg-gray-50 hover:bg-[#25D366]/10 rounded-lg text-gray-700 text-sm font-medium transition border border-gray-200 hover:border-[#25D366]/30"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Start Chat Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 rounded-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chat
            </a>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 border-t">
            <p className="text-gray-400 text-xs text-center">
              Powered by WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-[#25D366] hover:bg-[#20BD5A] hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
          </>
        )}

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
          1
        </span>
      )}
    </div>
  );
}
