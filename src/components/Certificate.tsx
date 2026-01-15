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
      <section id="certificate" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Официальная <span className="gradient-text">регистрация</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Waves Logix Ltd. is officially incorporated and regulated
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              className="liquid-glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  {certificateInfo.type}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Company Name</p>
                    <p className="text-lg font-semibold text-gray-900">Waves Logix Ltd.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Country</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Company Number</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.companyNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Date of Incorporation</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.incorporationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Governing Law</p>
                    <p className="text-lg font-semibold text-gray-900">{certificateInfo.law}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center border-2 border-purple-200">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📜</div>
                      <p className="text-gray-600 font-semibold">Certificate of Incorporation</p>
                      <p className="text-sm text-gray-500 mt-2">Click to view details</p>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-sm text-gray-600">
                    Certificate image will be displayed here
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged certificate */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="relative w-full h-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">📜</div>
                <p className="text-2xl font-bold text-gray-900 mb-2">Certificate of Incorporation</p>
                <p className="text-gray-600">Waves Logix Ltd.</p>
                <p className="text-sm text-gray-500 mt-4">Certificate image will be displayed here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

