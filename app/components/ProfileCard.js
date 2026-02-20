"use client";

import QRCode from "react-qr-code";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      id="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[380px] bg-gradient-to-br from-black via-zinc-900 to-black
 text-white rounded-3xl p-8 shadow-2xl"
    >
      <div className="flex flex-col items-center text-center ">
        <img
          src="/images/Fola-dev.jpg"
          alt="Folarin Obajenihi"
          className="w-24 h-24 rounded-full mb-4 border-4 border-zinc-800 object-cover"
        />

        <h2 className="text-xl font-semibold">Folarin Obajenihi</h2>

        <p className="text-sm text-zinc-400 mt-2 mb-6 tracking-wide">
          React & Next.js Developer | Scalable Dashboards & Optimized UIs
        </p>

        <div className="bg-zinc-100 p-4 rounded-2xl">
          <QRCode
            value="https://folarin-obajenihi.vercel.app/"
            size={160}
          />
        </div>
        <p className="text-sm text-zinc-400 mt-2 mb-6">Scan to view projects & contact</p>
      </div>
    </motion.div>
  );
}
