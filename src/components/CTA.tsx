import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-hero-pattern bg-cover bg-no-repeat rounded-3xl overflow-hidden">
      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Descubra as soluções perfeitas para o seu negócio.
        </h2>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-full flex overflow-hidden p-1 shadow-lg">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="flex-grow px-4 py-3 focus:outline-none text-squid-ink"
            />
            <button className="bg-orange-peel text-squid-ink font-medium px-6 py-3 rounded-full">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
