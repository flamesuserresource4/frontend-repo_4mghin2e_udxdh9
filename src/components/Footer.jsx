import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-16">
      <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-emerald-300 bg-clip-text text-transparent">Sol UPI</div>
            <p className="mt-2 text-sm text-white/70">UPI for Web3, powered by Solana. Human‑readable, instant, secure.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Docs</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">SDK</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Sol UPI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10"><Twitter size={16} /></a>
            <a aria-label="Discord" href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10"><MessageCircle size={16} /></a>
            <a aria-label="GitHub" href="#" className="rounded-full bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10"><Github size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
