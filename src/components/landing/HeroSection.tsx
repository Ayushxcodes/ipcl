"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Outer Card (HEIGHT REDUCED) */}
      <div className="relative z-10 w-[72%] max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl py-16 md:py-20 px-10">
        {/* Top Logo */}
        <div className="flex justify-between items-center text-sm text-white/70 mb-16">
          <div className="font-semibold tracking-wide">IPCL®</div>
        </div>

        {/* Main Content */}
        <div className="text-center relative">
          {/* Title */}
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight mb-4">
            IPCL<span className="text-4xl align-super">®</span>
          </h1>

          {/* Subtitle */}
          <p className="text-3xl md:text-5xl font-light mb-12">Studio</p>

          {/* Services List */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right text-white/80 text-sm leading-7 hidden md:block">
            <p>Branding and Identity</p>
            <p>Social Media Marketing</p>
            <p>Web Design & Development</p>
            <p>SEO Optimization</p>
          </div>

          {/* Animated “+” markers */}
          <div className="flex justify-center gap-12 text-2xl text-white/60 mt-12">
            <span className="animate-plus">+</span>
            <span className="animate-plus delay-150">+</span>
            <span className="animate-plus delay-300">+</span>
            <span className="animate-plus delay-500">+</span>
          </div>

          {/* Bottom Description */}
          <p className="max-w-md mx-auto text-white/70 text-xs leading-relaxed mt-14">
            We are a new-age policy, campaign, and strategy practice that blends
            human understanding with data intelligence to design change that
            matters.
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-xs mt-6">© 2025 IPCL Studio</p>

          {/* Team Card */}
          
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes plusFloat {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.6;
          }
        }

        .animate-plus {
          animation: plusFloat 2.4s ease-in-out infinite;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
