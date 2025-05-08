import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      className="w-full relative" 
      style={{ 
        backgroundImage: "url('/images/header-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '40px', 
        borderRadius: '24px'
      }}
    >
      {/* Overlay escuro com recorte curvo na parte inferior para acompanhar o botão */}
      <div className="absolute inset-0" style={{ borderRadius: '24px' }}>
        <div 
          className="absolute inset-0 bg-squid-ink bg-opacity-70"
          style={{ borderRadius: '24px' }}
        ></div>
      </div>
      
      {/* Recorte na parte inferior para criar o efeito de curva que acompanha o botão */}
      <div 
        className="absolute bg-white" 
        style={{
          width: '448px',
          height: '100px',
          bottom: '-40px',
          left: '0',
          borderRadius: '0 38px 0 0',
          zIndex: 1
        }}
      ></div>
      
      {/* Curva sutil na parte inferior direita */}
      <div 
        className="absolute bg-white" 
        style={{
          width: '120px',
          height: '40px',
          bottom: '-40px',
          right: '0',
          borderTopLeftRadius: '100px',
          zIndex: 1
        }}
      ></div>
      
      {/* Removido o elemento que estava interferindo com o botão */}
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
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
      
      {/* Botão com círculo amarelo e seta - posicionado na parte inferior do hero */}
      <div 
        className="absolute z-30"
        style={{ bottom: '-2px', left: '60px' }}
      >
        {/* Círculo amarelo com seta */}
        <div 
          className="absolute w-[54px] h-[54px] rounded-full bg-orange-peel flex items-center justify-center"
          style={{ left: '-60px', top: '0px', backgroundColor: '#FF9900', zIndex: 40 }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'matrix(0, 1, 1, 0, 0, 0)' }}
          >
            <path 
              d="M19 7L17.59 8.41L14.5 5.33V16H12.5V5.33L9.41 8.41L8 7L13.5 1.5L19 7Z" 
              fill="#070D16"
            />
          </svg>
        </div>
        
        {/* Linha amarela conectando o círculo ao botão */}
        <div 
          className="absolute bg-orange-peel"
          style={{ width: '13.15px', height: '8px', left: '-8px', top: '25px', backgroundColor: '#FF9900' }}
        ></div>
        
        {/* Botão principal */}
        <Link 
          href="/contato"
          className="flex items-center justify-center bg-orange-peel text-rich-black font-medium py-[10px] px-10 rounded-full hover:bg-opacity-90 transition-all"
          style={{ 
            backgroundColor: '#FF9900',
            width: '380px', 
            height: '54px',
            fontFamily: 'Urbanist',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '20px',
            letterSpacing: '0.1px'
          }}
        >
          Transforme dados em poder
        </Link>
      </div>
    </section>
  );
};

export default Hero;