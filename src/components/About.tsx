import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white-smoke">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-squid-ink mb-8">
          Sobre a Adsumtec
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6">
              A Adsumtec é uma empresa especializada em soluções de dados. Nossa abordagem 
              estratégica permite que empresas potencializem seus resultados através de análises 
              precisas e insights valiosos para tomada de decisão.
            </p>
            
            <p className="text-gray-700 mb-6">
              Nossa equipe de especialistas trabalha com as mais avançadas tecnologias do mercado, 
              garantindo soluções eficientes e personalizadas para cada cliente.
            </p>
            
            <Link 
              href="/quem-somos" 
              className="inline-flex items-center text-royal-azure hover:text-deep-electric-blue transition-colors"
            >
              Saiba mais sobre nós
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="relative">
            <Image 
              src="/images/businesswoman.jpg" 
              alt="Equipe Adsumtec" 
              width={500} 
              height={400}
              className="rounded-lg shadow-lg"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-royal-azure">+60</p>
                  <p className="text-sm text-gray-600">Clientes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-royal-azure">+150</p>
                  <p className="text-sm text-gray-600">Projetos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-royal-azure">+475</p>
                  <p className="text-sm text-gray-600">Dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
