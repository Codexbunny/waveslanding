'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

const services = [
  {
    id: 1,
    title: "Professional Brokerage Account Management Support for Capital Over $300,000",
    subtitle: "Waves Logix is your trusted partner in managing large brokerage accounts across the Forex, gold, and oil markets. We offer exclusive advisory support for clients with capital starting from $300,000 and above.",
    transparency: {
      title: "Transparency and Full Control Over Your Funds",
      points: [
        "We do not receive or hold your funds — your capital remains fully under your control in your brokerage account",
        "Account management can be carried out by you personally, your authorized representative, or by us under your power of attorney — always with your direct involvement and oversight",
        "We do not execute any transactions or manage funds without your explicit consent — only transparency, security, and trust"
      ]
    },
    benefits: [
      "Personalized Investment Consulting — tailored to your goals and risk profile, selecting optimal strategies and instruments",
      "Daily Market Monitoring and Analysis — fresh reports, technical and fundamental analysis of key trends in Forex, gold, and oil markets",
      "Clear and Justified Trade Signals — transparent recommendations with entry and exit points to help you make confident decisions",
      "Professional Risk Management — advice on stop-loss limits, diversification, and capital control",
      "24/7 Support and Feedback — consultations in convenient formats, training, and assistance in market understanding"
    ],
    note: "Please note: we do not provide analysis or recommendations on stock markets.",
    payment: {
      title: "Flexible Payment — You Pay Only for Results",
      description: "Our service fees are charged exclusively based on the profits generated on your brokerage account. We are invested in your success and build partnerships on trust and transparency."
    },
    howItWorks: [
      "We sign a formal agreement for advisory and analytical support",
      "Account management is performed by you, your authorized person, or by us under your power of attorney — always with your active participation and control",
      "All operations are carried out only with your consent and oversight",
      "We do not have access to your funds without your direct authorization"
    ],
    whyChoose: [
      "Extensive experience and expertise managing large capital on Forex, gold, and oil markets",
      "Personalized, confidential, and professional approach to each client",
      "Full legal transparency and compliance with international standards",
      "Working exclusively with verified and trusted clients within a close circle"
    ],
    cta: "Ready for Professional Support? Contact us now to receive a personalized proposal and start our collaboration."
  },
  {
    id: 2,
    title: "Premium Forex Analysis for Independent Traders & Brokers Companies",
    subtitle: "Professional Forex market analysis for independent traders and brokerage companies. Premium analytics based on Elliot wave theory. Scientific approach to forecasting market movements.",
    benefits: [
      "Access to professional analytics based on Elliot wave theory",
      "Scientific approach to market analysis",
      "Regular updates and fresh data",
      "Daily/weekly Forex market analysis",
      "Trading signals based on Elliot wave theory",
      "Technical and fundamental analysis of major currency pairs",
      "Forecasts for key market movements",
      "Entry and exit point recommendations with justification",
      "Trend and pattern analysis",
      "Support and consultations"
    ],
    targetAudience: [
      "Independent traders seeking quality analysis and trading signals",
      "Brokerage companies needing expert analytics for their clients",
      "Traders with smaller capital who want to make informed decisions"
    ],
    pricing: {
      title: "Flexible Pricing Plans",
      points: [
        "Affordable pricing for independent traders",
        "Flexible tariff plans (monthly/annual subscription)",
        "Different access levels depending on needs",
        "Payment by subscription or for specific reports"
      ]
    },
    howItWorks: [
      "Subscribe to the service",
      "Receive regular updates and reports in convenient format",
      "Access through platform or direct delivery",
      "Get feedback and ask questions"
    ],
    whyChoose: [
      "Professional level analysis from experts",
      "Time savings on independent analysis",
      "Access to scientific forecasting methods (Elliot wave theory)",
      "Regular updates and current information",
      "Support in making trading decisions"
    ],
    cta: "Get Premium Analysis"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions for traders and investors
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="liquid-glass rounded-3xl p-8 md:p-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8">{service.subtitle}</p>

              {service.transparency && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    {service.transparency.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.transparency.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-purple-600 mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">What You Receive Working With Us</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                      <span className="text-purple-600 font-bold">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.note && (
                <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-gray-700 italic">{service.note}</p>
                </div>
              )}

              {service.payment && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    {service.payment.title}
                  </h4>
                  <p className="text-gray-700">{service.payment.description}</p>
                </div>
              )}

              {service.pricing && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    {service.pricing.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.pricing.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.howItWorks && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">How Our Cooperation Works</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    {service.howItWorks.map((step, i) => (
                      <li key={i} className="text-gray-700 pl-2">{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {service.whyChoose && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Why Choose Waves Logix</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.whyChoose.map((reason, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 text-center">
                <CTAButton href={TELEGRAM_URL} variant="primary">
                  {service.cta}
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

