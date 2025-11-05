import React from 'react';
import { Shield, ShieldCheck, User, Star, Wallet, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
    {children}
  </span>
);

const LogoPill = ({ name }) => (
  <div className="rounded-xl bg-white/5 px-4 py-2 text-white/80 ring-1 ring-white/10">{name}</div>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-6 ring-1 ring-white/10">
    <div className="mb-3 flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
    <p className="text-white/90">“{quote}”</p>
    <div className="mt-3 text-sm text-white/60">— {author}, {role}</div>
  </div>
);

export default function SocialProof() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-extrabold text-white">Security & Trust</h2>
          <p className="mt-2 max-w-xl text-white/70">Premium UX with Web3-grade security.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <ShieldCheck className="text-emerald-300" />
              <h4 className="mt-2 text-white font-semibold">Non‑custodial</h4>
              <p className="text-white/70 text-sm">Funds stay in your wallet, always under your control</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <Shield className="text-emerald-300" />
              <h4 className="mt-2 text-white font-semibold">On‑chain proof</h4>
              <p className="text-white/70 text-sm">Verifiable transactions and finality on Solana</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <User className="text-emerald-300" />
              <h4 className="mt-2 text-white font-semibold">Soul‑bound identity</h4>
              <p className="text-white/70 text-sm">Optionally bind handles to reputation & badges</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <QrCode className="text-emerald-300" />
              <h4 className="mt-2 text-white font-semibold">Privacy‑preserving</h4>
              <p className="text-white/70 text-sm">Selective disclosure for payments and identity</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-semibold mb-3">Integrations</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {['Phantom', 'Solana Pay', 'Jupiter', 'Squads', 'BonkPay'].map((n) => (
                <LogoPill key={n} name={n} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h2 className="text-3xl font-extrabold text-white">Loved by the ecosystem</h2>
          <p className="mt-2 max-w-xl text-white/70">Simple for users, powerful for builders.</p>
          <div className="mt-6 grid grid-cols-1 gap-4">
            <Testimonial quote="Paying with a handle instead of a key is a game‑changer for onboarding." author="Aria" role="Merchant" />
            <Testimonial quote="The SDK made it trivial to add QR payments in our dApp." author="Kade" role="dApp Developer" />
            <Testimonial quote="Gasless micro‑payments let our game economy actually work." author="Nova" role="Game Studio" />
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-purple-500/10 p-5 ring-1 ring-white/10">
            <h3 className="text-white font-semibold mb-2">Roadmap</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge>Username identity</Badge>
              <Badge>Merchant QR payments</Badge>
              <Badge>Social identity badges</Badge>
              <Badge>dApp SDK</Badge>
              <Badge>NFT‑based KYC & badges</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
