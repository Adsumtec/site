import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="
        w-full
        relative
        overflow-hidden
        rounded-3xl
        bg-[length:400%_400%]
        transition-all

        min-h-[300px]
        sm:min-h-[300px]
        md:min-h-[300px]
        lg:min-h-[600px]
        xl:min-h-[500px]
        2xl:min-h-[625px]

        max-w-full
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1536px]
        mx-auto
      "
      style={{
        backgroundImage: "url('/images/Header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Bolhas neon */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[320px] h-[320px] rounded-full bg-[#1E90FF] opacity-80 blur-[100px] animate-orbit-left neon-glow-blue" />
          <div className="absolute w-[320px] h-[320px] rounded-full bg-[#FF9800] opacity-80 blur-[100px] animate-orbit-right neon-glow-orange" />
        </div>
      </div>

      <style>{`
        @keyframes orbit-left {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes orbit-right {
          0% { transform: rotate(0deg) translateX(-100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(-100px) rotate(-360deg); }
        }
        .animate-orbit-left {
          animation: orbit-left 18s linear infinite;
          transform-origin: center center;
        }
        .animate-orbit-right {
          animation: orbit-right 22s linear infinite;
          transform-origin: center center;
        }

        .neon-glow-blue {
          box-shadow:
            0 0 40px rgba(30, 144, 255, 0.9),
            0 0 80px rgba(30, 144, 255, 0.6),
            0 0 120px rgba(30, 144, 255, 0.4);
        }

        .neon-glow-orange {
          box-shadow:
            0 0 40px rgba(255, 152, 0, 0.9),
            0 0 80px rgba(255, 152, 0, 0.6),
            0 0 120px rgba(255, 152, 0, 0.4);
        }
      `}</style>

      {/* Conteúdo principal */}
      <div className="container relative z-10 mx-auto px-4 md:px-18 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white text-sm md:text-base uppercase tracking-wider mb-4">
            UM NOVO OLHAR PARA OS DADOS DA SUA EMPRESA
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
            Soluções para o seu negócio com uso inteligente de dados.
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
            Obtenha resultados concretos através de uma abordagem assertiva de resolução de problemas.
          </p>
        </div>
      </div>

      {/* Botão fixado no fundo */}
      <div
        className="absolute z-30 w-full flex justify-center"
        style={{ bottom: '5px' }}
      >
        <div className="relative flex items-center left-[-450px]" style={{ height: '54px' }}>
          {/* Círculo com seta */}
          <div
            className="absolute left-[-60px] w-[50px] h-[50px] rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#FF9900', zIndex: 40 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(45deg)' }}
            >
              <path
                d="M19 7L17.59 8.41L14.5 5.33V16H12.5V5.33L9.41 8.41L8 7L13.5 1.5L19 7Z"
                fill="#070D16"
              />
            </svg>
          </div>

          {/* Conector */}
          <div
            className="absolute left-[-14px] top-[23px] w-[14px] h-[8px]"
            style={{ backgroundColor: '#FF9900', zIndex: 30 }}
          />

          {/* Botão principal */}
          <Link
            href="/contato"
            className="flex items-center justify-center rounded-full transition-all"
            style={{
              backgroundColor: '#FF9900',
              width: '220px',
              height: '42px',
              fontFamily: 'Urbanist',
              fontWeight: 600,
              fontSize: '14px',
              color: '#0E0E0E',
              lineHeight: '18px',
              letterSpacing: '0.1px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Transforme dados em poder
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
