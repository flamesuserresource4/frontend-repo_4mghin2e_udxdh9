import React from 'react';
import { Wallet, QrCode, Users, ShieldCheck, Zap, Link, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10">
    <div className="mb-3 inline-flex rounded-lg bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 p-2 ring-1 ring-white/10">
      <Icon className="text-emerald-300" size={18} />
    </div>
    <h4 className="text-white font-semibold mb-1">{title}</h4>
    <p className="text-white/70 text-sm">{desc}</p>
  </div>
);

const Step = ({ idx, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 grid h-8 w-8 flex-none place-items-center rounded-lg bg-gradient-to-tr from-purple-500/30 to-emerald-500/30 text-white font-bold ring-1 ring-white/10">{idx}</div>
    <div>
      <h5 className="text-white font-semibold">{title}</h5>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  </div>
);

export default function Highlights() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-extrabold text-white">How It Works</h2>
          <p className="mt-2 max-w-xl text-white/70">Tap → scan → pay. As familiar as UPI, built for Web3.</p>
          <div className="mt-6 space-y-5">
            <Step idx={1} title="Choose a Sol‑UPI ID" desc="Pick a human‑readable handle like @neha.soul" />
            <Step idx={2} title="Link wallet" desc="Connect Phantom or your favorite Solana wallet" />
            <Step idx={3} title="Pay/receive instantly" desc="Send crypto via QR, link, or handle — instant and cheap" />
            <Step idx={4} title="Optional identity layer" desc="Add a soul‑bound profile for trust and reputation" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h2 className="text-3xl font-extrabold text-white">Why Sol UPI</h2>
          <p className="mt-2 max-w-xl text-white/70">Solana-grade performance with a friendly, secure UX.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Feature icon={Users} title="Cross-wallet identity" desc="One handle across apps and wallets" />
            <Feature icon={QrCode} title="QR & link payments" desc="UPI-style scan or click to pay" />
            <Feature icon={Wallet} title="Human-readable IDs" desc="Names, not keys. Safer and simpler" />
            <Feature icon={Zap} title="Instant & cheap" desc="Solana finality with ultra-low fees" />
            <Feature icon={ShieldCheck} title="Web3 security" desc="Non-custodial with on-chain proof" />
            <Feature icon={Link} title="Social + commerce" desc="Handles for creators, games, merchants" />
          </div>
        </motion.div>
      </div>

      <div className="mt-14 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-purple-500/10 p-6 ring-1 ring-white/10">
        <h3 className="text-white font-semibold mb-4">Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-white/60">
              <tr>
                <th className="py-2 pr-4">Feature</th>
                <th className="py-2 pr-4">Sol UPI</th>
                <th className="py-2 pr-4">Wallet Addresses</th>
                <th className="py-2 pr-4">CEX Transfers</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              {[
                { f: 'Human-readable IDs', sol: '✅', wa: '❌', cex: '❌' },
                { f: 'Instant payments', sol: '✅', wa: '⚠️', cex: '⚠️' },
                { f: 'Decentralized identity', sol: '✅', wa: '❌', cex: '❌' },
                { f: 'QR / link payments', sol: '✅', wa: '❌', cex: '❌' },
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="py-3 pr-4">{row.f}</td>
                  <td className="py-3 pr-4"><span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-300" /> {row.sol}</span></td>
                  <td className="py-3 pr-4">{row.wa}</td>
                  <td className="py-3 pr-4">{row.cex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
