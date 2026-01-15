'use client';

import Logo from './Logo';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo width={180} height={50} className="mb-4 filter brightness-0 invert" />
            <p className="text-gray-400 mb-4 max-w-md">
              Development of trading strategies based on Elliot wave theory - scientific approach to the market, the right course in the ocean of the Forex market.
            </p>
            <CTAButton href={TELEGRAM_URL} variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
              Join Telegram
            </CTAButton>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#certificate" className="text-gray-400 hover:text-white transition-colors">
                  Certificate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram Channel
                </a>
              </li>
              <li className="text-sm">
                Waves Logix Ltd.
              </li>
              <li className="text-sm">
                Saint Lucia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Waves Logix Ltd. All rights reserved.</p>
          <p className="mt-2">Company Number: 2025-00384</p>
        </div>
      </div>
    </footer>
  );
}

