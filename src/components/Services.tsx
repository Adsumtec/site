import React from 'react';
import Image from 'next/image';
import SalesDashboardChart from './SalesDashboardChart';
import Link from 'next/link';

const services = [
  {
    title: 'Data Analytics',
    icon: '📊',
    description: 'Identifique oportunidades e otimize processos.'
  },
  {
    title: 'Cloud Solutions',
    icon: '☁️',
    description: 'Adapte-se rapidamente ao mercado, economizando recursos.'
  },
  {
    title: 'DataOps',
    icon: '🔄',
    description: 'Aumente a eficiência operacional da sua equipe.'
  },
  {
    title: 'Power BI',
    icon: '📈',
    description: 'Informações valiosas que facilitam suas decisões.'
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Grid com imagem e texto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SalesDashboardChart />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-squid-ink mb-4">
              Usamos as principais tecnologias do mercado
            </h2>
            <p className="text-gray-700 mb-6">
              Otimize a gestão da sua empresa com as melhores ferramentas, garantindo eficiência e resultados inovadores.
            </p>
            <div>
              <Link 
                href="/solucoes" 
                className="bg-rich-black text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors font-medium"
                style={{
                  backgroundColor: '#070D16',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '9999px'
                }}
              >
                Conheça nossas soluções
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bloco dos serviços com fundo unificado */}
      <div className="bg-gray-100 rounded-xl py-20 px-4 md:px-8 shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-squid-ink">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
