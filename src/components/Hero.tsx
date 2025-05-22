import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
<section 
  className="w-full relative overflow-hidden bg-cover bg-center bg-no-repeat rounded-3xl"
    style={{ 
      backgroundImage: "url('/images/header-background.png')",
      minHeight: '500px' // você pode ajustar conforme o layout
    }}
  >
  {/* Conteúdo principal */}
  <div className="container relative z-10 mx-auto px-4 md:px-18 py-16 md:py-24">
    <div className="max-w-2xl">
      <p className="text-white text-sm md:text-base uppercase tracking-wider mb-4">
        UM NOVO OLHAR PARA OS DADOS DA SUA EMPRESA
      </p>
      
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
        Soluções para o seu negócio com uso inteligente de dados.
      </h1>
      
      <p className="text-white text-lg md:text-xl mb-8">
        Obtenha resultados concretos através de uma abordagem assertiva de resolução de problemas.
      </p>
    </div>
  </div>

  {/* Botão fixado no fundo */}
  <div 
    className="absolute z-30 w-full flex justify-center"
    style={{ bottom: '5px' }}
  >
    {/* Wrapper do botão */}
    <div className="relative flex items-center left-[-450]" style={{ height: '54px' }}>
      
      {/* Círculo */}
      <div 
        className="absolute left-[-60px] w-[50px] h-[50px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#FF9900', zIndex: 40 }}
      >
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(45deg)' }}
        >
          <path d="M19 7L17.59 8.41L14.5 5.33V16H12.5V5.33L9.41 8.41L8 7L13.5 1.5L19 7Z" fill="#070D16" />
        </svg>
      </div>

      {/* Linha de conexão */}
      <div 
        className="absolute left-[-14px] top-[23px] w-[14px] h-[8px]"
        style={{ backgroundColor: '#FF9900', zIndex: 30 }}
      ></div>

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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
