import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, QrCode, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, variant = 'primary' }) => {
  const base = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition disabled:opacity-60';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-emerald-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:brightness-110'
      : 'bg-white/5 text-white/90 ring-1 ring-white/10 hover:bg-white/10';
  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

const QRMock = () => {
  return (
    <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
      <div className="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className={`${(i + Math.floor(i / 5)) % 3 === 0 ? 'bg-white' : 'bg-white/20'} rounded-[2px]`}></div>
        ))}
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-400/20 text-emerald-200 text-xs font-medium px-2 py-1 rounded-full ring-1 ring-emerald-300/30">Scan to Pay</div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(16,185,129,0.25),transparent),radial-gradient(900px_500px_at_20%_10%,rgba(168,85,247,0.25),transparent)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 lg:pt-36">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
              <Rocket size={14} className="text-emerald-300" /> Powered by Solana — ultra-fast, ultra-cheap
            </span>
            <h1 className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-extrabold text-white">
              Web3 Payments, <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-emerald-300 bg-clip-text text-transparent">UPI-Simple</span>.
            </h1>
            <p className="max-w-xl text-base/relaxed text-white/70">
              Send and receive crypto using names — not wallet addresses. QR codes, links, and handle IDs that just work across wallets and apps. Gasless micro-payments where possible, with instant finality.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <CTAButton>
                Join Waitlist <ArrowRight size={16} />
              </CTAButton>
              <CTAButton variant="secondary">
                Try Demo
              </CTAButton>
              <CTAButton variant="secondary">
                Claim Your Sol‑UPI ID
              </CTAButton>
            </div>

            <div className="mt-6 flex items-center gap-4 text-white/60">
              <div className="flex -space-x-3">
                {['A', 'B', 'C'].map((l, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-purple-500 ring-2 ring-black/60 grid place-items-center text-xs font-bold">
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-sm">Trusted by builders and merchants across the Solana ecosystem</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative flex items-center gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <QrCode size={16} className="text-emerald-300" /> UPI-style link
                  </div>
                  <div className="rounded-lg bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 px-3 py-2 text-white">
                    solupi://pay/@neha.soul?amt=25
                  </div>
                </div>
                <QRMock />
              </div>

              <div className="hidden md:block h-40 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              <div className="rounded-2xl bg-black/60 p-4 ring-1 ring-white/10 w-56">
                <div className="text-white/70 text-sm mb-2">Wallet confirmation</div>
                <div className="rounded-xl bg-white/5 p-3 text-white/90">
                  <div className="flex items-center justify-between text-sm">
                    <span>Pay</span>
                    <span className="font-semibold">25 USDC</span>
                  </div>
                  <div className="mt-2 text-xs text-white/60">To @neha.soul • Instant finality</div>
                  <button className="mt-3 w-full rounded-lg bg-emerald-500/20 py-2 text-emerald-200 ring-1 ring-emerald-400/30 hover:bg-emerald-500/30">Approve</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
