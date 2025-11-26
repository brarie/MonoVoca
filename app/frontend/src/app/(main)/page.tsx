'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Main Title - Match Header Style */}
        <h1
          className="text-[min(100px,10vw)] font-black italic text-white"
          style={{ fontFamily: 'var(--font-exo-2)' }}
        >
          MonoVoca
        </h1>

        {/* Subtitle */}
        <p className="text-[min(20px,2.5vw)] text-gray-300 mb-6 font-medium">
          단어 암기를 효율적으로
        </p>

        {/* CTA Button */}
        <Button
          asChild
          className="text-sm rounded-full font-bold text-white bg-black border-[1.5px] border-white drop-shadow-[0_0_8px_white] hover:bg-neutral-800"
        >
          <Link href="/login">시작하기</Link>
        </Button>
      </motion.div>
    </main>
  );
}
