'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';
import CTAButton from './CTAButton';

const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/waveslogix';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Here you can add API call to submit the form
    console.log('Form data:', data);
    // For now, just show alert
    alert('Thank you for your message! We will contact you soon.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative isolate overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            className="liquid-glass rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">{t('formTitle')}</h3>
              <p className="text-gray-600">{t('formSubtitle')}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('nameLabel')} *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition bg-white/80"
                  placeholder={t('namePlaceholder')}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('emailLabel')} *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition bg-white/80"
                  placeholder={t('emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('phoneLabel')} *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition bg-white/80"
                  placeholder={t('phonePlaceholder')}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('messageLabel')}
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none bg-white/80"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full purple-gradient text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? t('submitting') : t('submitButton')}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="liquid-glass rounded-3xl p-10 text-center h-full flex flex-col justify-center">
              <div className="w-20 h-20 purple-gradient rounded-2xl flex items-center justify-center text-white text-4xl mb-6 mx-auto shadow-lg">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.202 2.227-1.108 7.816-1.562 10.387-.24 1.344-.89 1.79-1.463 1.837-1.24.059-2.18-.82-3.38-1.608-1.497-1.002-2.345-1.556-3.8-2.49-1.682-1.01-.592-1.565.367-2.424.25-.228 4.506-4.13 4.59-4.48.01-.04.02-.19-.075-.27-.095-.08-.236-.05-.339-.03-.146.024-2.47 1.57-6.976 4.61-.66.45-1.258.67-1.794.66-.618-.01-1.806-.348-2.69-.636-1.08-.35-1.936-.54-1.86-1.14.035-.29.52-1.18 1.44-2.01 1.01-1.05 2.15-2.1 3.05-2.82 1.35-1.11 2.93-1.68 2.93-1.85 0-.22-.17-.17-.37-.1-.2.07-1.15.07-1.66.07-.6 0-1.07-.02-1.36-.07-.35-.05-.63-.15-.63-.35 0-.2.3-.4.78-.57 3.02-1.32 5.03-2.14 6.35-2.58 2.93-1.01 5.3-.62 6.44.95.74 1.01.52 2.47-.5 4.28z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{t('directContact')}</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('directContactDescription')}
              </p>
              <CTAButton href={TELEGRAM_URL} variant="primary" className="w-full text-lg py-5">
                Open Telegram
              </CTAButton>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">{tCommon('companyName')}</p>
                <p className="text-sm text-gray-500">Saint Lucia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
