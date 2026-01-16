'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificateInfo = {
    type: "Certificate of Incorporation",
    country: "Saint Lucia",
    companyNumber: "2025-00384",
    incorporationDate: "23 May 2025",
    law: "International Business Companies Act, Cap 12.14: Section 6"
  };

  return (
    <>
      <section id="certificate" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Официальная <span className="gradient-text">регистрация</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Waves Logix Ltd. is officially incorporated and regulated
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="liquid-glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="mb-8">
                  <div className="w-16 h-16 purple-gradient rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                    📜
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    {certificateInfo.type}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-white/70 rounded-xl">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Company Name</p>
                    <p className="text-xl font-bold text-gray-900">Waves Logix Ltd.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/70 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Country</p>
                      <p className="text-lg font-bold text-gray-900">{certificateInfo.country}</p>
                    </div>
                    <div className="p-4 bg-white/70 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Company Number</p>
                      <p className="text-lg font-bold text-gray-900">{certificateInfo.companyNumber}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/70 rounded-xl">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Date of Incorporation</p>
                    <p className="text-xl font-bold text-gray-900">{certificateInfo.incorporationDate}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">Governing Law</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.law}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="cursor-pointer group"
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 p-8 flex items-center justify-center border-2 border-purple-200 group-hover:border-purple-400 transition-colors">
                    <div className="text-center">
                      <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform">📜</div>
                      <p className="text-gray-700 font-bold text-xl mb-2">Certificate of Incorporation</p>
                      <p className="text-sm text-gray-500">Click to view details</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </motion.div>
                <p className="text-center mt-4 text-sm text-gray-600 font-medium">
                  Certificate image will be displayed here
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged certificate */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl p-6 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
            <div className="relative w-full h-full aspect-[4/3] bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 flex items-center justify-center p-8 rounded-xl">
              <div className="text-center">
                <div className="text-9xl mb-6">📜</div>
                <p className="text-3xl font-bold text-gray-900 mb-2">Certificate of Incorporation</p>
                <p className="text-xl text-gray-600 mb-4">Waves Logix Ltd.</p>
                <p className="text-sm text-gray-500">Certificate image will be displayed here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
