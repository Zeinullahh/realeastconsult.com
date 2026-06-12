"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#why-uae", label: "Почему ОАЭ" },
  { href: "#referral", label: "Партнёрам" },
  { href: "#contact", label: "Контакты" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-dark/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Realeast Consulting"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/30"
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-light shadow-[0_0_8px_rgba(212,184,150,0.9)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-white">
                  Realeast
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white -mt-0.5">
                  Consulting
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide uppercase text-white transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+971581051108"
                className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-gold"
              >
                <Phone className="w-4 h-4" />
                <span>+971 58 105 1108</span>
              </a>
              <a
                href="https://wa.me/971528383246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Консультация
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 px-6 md:hidden"
            style={{
              background: "linear-gradient(180deg, rgba(30,24,18,0.96) 0%, rgba(61,46,33,0.95) 100%)",
              backdropFilter: "blur(24px)",
            }}
          >
            <nav className="relative z-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-serif text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="tel:+971581051108"
                  className="flex items-center gap-3 text-white"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+971 58 105 1108</span>
                </a>
                <a
                  href="https://wa.me/971528383246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-base font-medium text-white transition-all hover:bg-gold-dark"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
