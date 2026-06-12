"use client";

import { motion } from "framer-motion";
import { Users, Receipt, Handshake, Headphones, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "До 50% от сделки",
    description: "Одно из самых высоких вознаграждений на рынке консалтинга ОАЭ.",
  },
  {
    icon: Users,
    title: "Персональный код",
    description: "Клиент закрепляется за вами с помощью уникального реферального кода.",
  },
  {
    icon: Receipt,
    title: "Прозрачность",
    description: "Invoice по каждой сделке. Полная отчётность на всех этапах.",
  },
  {
    icon: Headphones,
    title: "Личный куратор",
    description: "Материалы, презентации и персональный менеджер для каждого партнёра.",
  },
  {
    icon: Handshake,
    title: "Взаимный обмен",
    description: "Возможность обмена клиентами на индивидуальных условиях.",
  },
];

export default function Referral() {
  return (
    <section id="referral" className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-white mb-3 drop-shadow-md">
            Партнёрская программа
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance text-shadow-lg">
            Станьте партнёром Realeast
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-white text-shadow">
            Приглашаем вас принять участие в реферальной программе — получайте
            вознаграждение за рекомендации наших консалтинговых услуг по открытию бизнеса в ОАЭ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold text-white drop-shadow-sm mb-6">
                Как это работает?
              </h3>
              <ol className="space-y-4">
                {[
                  "Вы рекомендуете нашу компанию потенциальным клиентам — предпринимателям, инвесторам, владельцам бизнеса.",
                  "Мы связываемся с клиентом, уточняем запрос и сопровождаем его до результата.",
                  "Вы получаете фиксированное вознаграждение после оказания первой оплаченной услуги.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white text-sm font-bold drop-shadow-sm">
                      {i + 1}
                    </span>
                    <p className="text-white leading-relaxed pt-1 drop-shadow-sm">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-4 rounded-xl bg-white/10">
                <p className="text-white text-sm drop-shadow-sm">
                  В случае, если клиент ограничивается только консультацией, бонус не начисляется.
                  Выплаты возможны банковским переводом или наличными.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-4 rounded-2xl glass-card p-5"
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-white/10 p-2.5">
                  <adv.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-white drop-shadow-sm mb-0.5">
                    {adv.title}
                  </h4>
                  <p className="text-sm text-white drop-shadow-sm">{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
