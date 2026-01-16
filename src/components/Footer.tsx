'use client';

import Logo from './Logo';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 purple-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Logo width={200} height={60} className="mb-6 filter brightness-0 invert" />
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Development of trading strategies based on Elliot wave theory - scientific approach to the market, the right course in the ocean of the Forex market.
            </p>
            <CTAButton href={TELEGRAM_URL} variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50 border-0">
              Join Telegram Channel
            </CTAButton>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#certificate" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Certificate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-150 transition-transform"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.202 2.227-1.108 7.816-1.562 10.387-.24 1.344-.89 1.79-1.463 1.837-1.24.059-2.18-.82-3.38-1.608-1.497-1.002-2.345-1.556-3.8-2.49-1.682-1.01-.592-1.565.367-2.424.25-.228 4.506-4.13 4.59-4.48.01-.04.02-.19-.075-.27-.095-.08-.236-.05-.339-.03-.146.024-2.47 1.57-6.976 4.61-.66.45-1.258.67-1.794.66-.618-.01-1.806-.348-2.69-.636-1.08-.35-1.936-.54-1.86-1.14.035-.29.52-1.18 1.44-2.01 1.01-1.05 2.15-2.1 3.05-2.82 1.35-1.11 2.93-1.68 2.93-1.85 0-.22-.17-.17-.37-.1-.2.07-1.15.07-1.66.07-.6 0-1.07-.02-1.36-.07-.35-.05-.63-.15-.63-.35 0-.2.3-.4.78-.57 3.02-1.32 5.03-2.14 6.35-2.58 2.93-1.01 5.3-.62 6.44.95.74 1.01.52 2.47-.5 4.28z"/>
                  </svg>
                  Telegram Channel
                </a>
              </li>
              <li className="text-sm">
                Waves Logix Ltd.
              </li>
              <li className="text-sm">
                Saint Lucia
              </li>
              <li className="text-sm">
                Company No: 2025-00384
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} Waves Logix Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Certificate of Incorporation: 23 May 2025 | International Business Companies Act, Cap 12.14: Section 6
          </p>
        </div>
      </div>
    </footer>
  );
}
