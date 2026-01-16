'use client';

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

// Icon components
const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconChart = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const IconLightning = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconUsers = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 011-2m0 0a6 6 0 011.414 3.414M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-7 4a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Professional Brokerage Account Management",
    subtitle: "Support for Capital Over $300,000",
    description: "Waves Logix is your trusted partner in managing large brokerage accounts across the Forex, gold, and oil markets. We offer exclusive advisory support for clients with capital starting from $300,000 and above.",
    icon: <IconShield />,
    transparency: {
      title: "Transparency and Full Control Over Your Funds",
      points: [
        "We do not receive or hold your funds — your capital remains fully under your control",
        "Account management by you, your authorized representative, or us under power of attorney",
        "All operations only with your explicit consent — transparency, security, and trust"
      ]
    },
    benefits: [
      { icon: <IconChart />, text: "Personalized Investment Consulting tailored to your goals and risk profile" },
      { icon: <IconLightning />, text: "Daily Market Monitoring and Analysis with fresh reports and technical analysis" },
      { icon: <IconChart />, text: "Clear and Justified Trade Signals with transparent entry and exit points" },
      { icon: <IconShield />, text: "Professional Risk Management advice on stop-loss limits and diversification" },
      { icon: <IconUsers />, text: "24/7 Support and Feedback with consultations and training" }
    ],
    note: "Please note: we do not provide analysis or recommendations on stock markets.",
    payment: {
      title: "Flexible Payment — You Pay Only for Results",
      description: "Our service fees are charged exclusively based on the profits generated on your brokerage account. We are invested in your success and build partnerships on trust and transparency."
    },
    howItWorks: [
      "We sign a formal agreement for advisory and analytical support",
      "Account management with your active participation and control",
      "All operations carried out only with your consent and oversight",
      "We do not have access to your funds without your direct authorization"
    ],
    whyChoose: [
      "Extensive experience managing large capital on Forex, gold, and oil markets",
      "Personalized, confidential, and professional approach to each client",
      "Full legal transparency and compliance with international standards",
      "Working exclusively with verified and trusted clients"
    ],
    cta: "Ready for Professional Support? Contact us now"
  },
  {
    id: 2,
    title: "Premium Forex Analysis",
    subtitle: "For Independent Traders & Brokers",
    description: "Professional Forex market analysis for independent traders and brokerage companies. Premium analytics based on Elliot wave theory. Scientific approach to forecasting market movements.",
    icon: <IconChart />,
    benefits: [
      { icon: <IconLightning />, text: "Access to professional analytics based on Elliot wave theory" },
      { icon: <IconChart />, text: "Scientific approach to market analysis with regular updates" },
      { icon: <IconChart />, text: "Daily/weekly Forex market analysis and trading signals" },
      { icon: <IconShield />, text: "Technical and fundamental analysis of major currency pairs" },
      { icon: <IconUsers />, text: "Forecasts, entry/exit recommendations, and trend analysis" }
    ],
    targetAudience: [
      "Independent traders seeking quality analysis",
      "Brokerage companies needing expert analytics",
      "Traders with smaller capital wanting informed decisions"
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
      "Receive regular updates and reports",
      "Access through platform or direct delivery",
      "Get feedback and ask questions"
    ],
    whyChoose: [
      "Professional level analysis from experts",
      "Time savings on independent analysis",
      "Access to scientific forecasting methods",
      "Regular updates and current information",
      "Support in making trading decisions"
    ],
    cta: "Get Premium Analysis"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions for traders and investors
          </p>
        </motion.div>

        <div className="space-y-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Service Header - Compact */}
              <div className="liquid-glass rounded-2xl p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 purple-gradient rounded-xl flex items-center justify-center text-white shadow-md">
                    <div className="w-6 h-6">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-purple-600 font-semibold mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features - Compact Grid */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  Key Features
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="liquid-glass rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                    >
                      <div className="w-10 h-10 purple-gradient rounded-lg flex items-center justify-center text-white mb-3">
                        <div className="w-5 h-5">{benefit.icon}</div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{benefit.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Important Info - Combined Section */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Transparency/Pricing */}
                {(service.transparency || service.payment || service.pricing) && (
                  <div className="liquid-glass rounded-xl p-6">
                    {service.transparency && (
                      <>
                        <h4 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2">
                          <IconShield className="w-5 h-5 text-purple-600" />
                          {service.transparency.title}
                        </h4>
                        <div className="space-y-3">
                          {service.transparency.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <IconCheck className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    {service.payment && (
                      <>
                        <h4 className="text-lg font-bold mb-3 text-gray-900 mt-6">
                          {service.payment.title}
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {service.payment.description}
                        </p>
                      </>
                    )}
                    {service.pricing && (
                      <>
                        <h4 className="text-lg font-bold mb-3 text-gray-900">
                          {service.pricing.title}
                        </h4>
                        <div className="space-y-2">
                          {service.pricing.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <IconCheck className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* How It Works */}
                {service.howItWorks && (
                  <div className="liquid-glass rounded-xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-gray-900">How It Works</h4>
                    <div className="space-y-3">
                      {service.howItWorks.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 purple-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {i + 1}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed pt-0.5">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Why Choose - Compact */}
              {service.whyChoose && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Why Choose Waves Logix</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.whyChoose.map((reason, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                        <IconCheck className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 leading-relaxed">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {service.note && (
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
                  <p className="text-sm text-gray-700 italic">{service.note}</p>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <CTAButton href={TELEGRAM_URL} variant="primary" className="text-base px-8 py-4">
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
