"use client";

import { motion } from "framer-motion";
import { Building2, Contact2, Landmark, Laptop, FileCheck, XCircle } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Открытие бизнеса в ОАЭ",
    description:
      "Полное сопровождение регистрации компании: подбор юрисдикции, подготовка документов, взаимодействие с госорганами.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Contact2,
    title: "Визовые услуги",
    description:
      "Оформление резидентских виз, виз для инвесторов и инфлюенсеров. Помощь с Emirates ID и медицинским страхованием.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Landmark,
    title: "Free Zone",
    description:
      "Регистрация компании в свободной экономической зоне ОАЭ с 100% иностранным владением и налоговыми льготами.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: Laptop,
    title: "E-Trader License",
    description:
      "Самый простой способ легально вести онлайн-бизнес в ОАЭ. Быстрое оформление для резидентов и нерезидентов.",
    color: "bg-gold/10 text-gold-dark",
  },
  {
    icon: FileCheck,
    title: "Легализация документов",
    description:
      "Перевод, нотариальное заверение, апостиль и легализация документов для переезда и ведения бизнеса в ОАЭ.",
    color: "bg-teal/10 text-teal-dark",
  },
  {
    icon: XCircle,
    title: "Ликвидация компании",
    description:
      "Грамотное закрытие бизнеса в ОАЭ с минимизацией рисков. Разрешение споров, расчёты с кредиторами, отмена лицензий.",
    color: "bg-terracotta/10 text-terracotta-light",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-gold-dark mb-3">
            Наши услуги
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-dark text-balance">
            Всё для вашего бизнеса в ОАЭ
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-dark/60">
            Полный комплекс консалтинговых услуг — от регистрации компании до получения резидентской визы
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative rounded-2xl bg-white p-8 shadow-sm border border-gold/5 transition-all hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center rounded-xl p-3 mb-5 ${service.color}`}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-dark/60 leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
