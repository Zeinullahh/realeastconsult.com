"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-16 sm:py-20 lg:py-24 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-white mb-3 drop-shadow-md">
              Свяжитесь с нами
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance text-shadow-lg">
              Готовы начать?
            </h2>
            <p className="mt-6 text-lg text-white leading-relaxed text-shadow">
              Запишитесь на консультацию и узнайте, как передать рутину профессионалам,
              чтобы ваш бизнес в ОАЭ работал без сбоев. Разберём вашу ситуацию и рассчитаем выгоду.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/971528383246"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass-card p-5"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-white drop-shadow-sm">WhatsApp</p>
                  <p className="text-lg font-medium text-white drop-shadow-sm group-hover:text-white transition-colors">
                    +971 52 838 3246
                  </p>
                </div>
              </a>

              <a
                href="tel:+971581051108"
                className="group flex items-center gap-4 rounded-2xl glass-card p-5"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white drop-shadow-sm">Телефон</p>
                  <p className="text-lg font-medium text-white drop-shadow-sm group-hover:text-white transition-colors">
                    +971 58 105 1108
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@realeastconsult.com"
                className="group flex items-center gap-4 rounded-2xl glass-card p-5"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white drop-shadow-sm">Email</p>
                  <p className="text-lg font-medium text-white drop-shadow-sm group-hover:text-white transition-colors">
                    info@realeastconsult.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl glass-card p-5">
                <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white drop-shadow-sm">Локация</p>
                  <p className="text-lg font-medium text-white drop-shadow-sm">
                    Дубай, ОАЭ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl glass-card p-8 sm:p-10 overflow-hidden"
          >
            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold text-white drop-shadow-sm mb-2">
                Выберите удобный способ связи
              </h3>
              <p className="text-white mb-8 drop-shadow-sm">
                Напишите нам напрямую — мы ответим в ближайшее время и ответим на все вопросы.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/971528383246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl glass-inner p-5"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                    <MessageCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white drop-shadow-sm">Написать в</p>
                    <p className="text-lg font-semibold text-white drop-shadow-sm group-hover:text-green-400 transition-colors">
                      WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/realeast.consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl glass-inner p-5"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-400"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white drop-shadow-sm">Написать в</p>
                    <p className="text-lg font-semibold text-white drop-shadow-sm group-hover:text-pink-400 transition-colors">
                      Instagram
                    </p>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="tel:+971581051108"
                    className="flex items-center gap-3 rounded-xl glass-inner p-4"
                  >
                    <Phone className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-xs text-white drop-shadow-sm">Телефон</p>
                      <p className="text-sm font-medium text-white drop-shadow-sm">+971 58 105 1108</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@realeastconsult.com"
                    className="flex items-center gap-3 rounded-xl glass-inner p-4"
                  >
                    <Mail className="w-5 h-5 text-white" />
                    <div>
                      <p className="text-xs text-white drop-shadow-sm">Email</p>
                      <p className="text-sm font-medium text-white drop-shadow-sm">info@realeastconsult.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
