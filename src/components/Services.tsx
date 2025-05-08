import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Data Analytics',
    icon: '📊',
    description: 'Análise de dados para insights estratégicos'
  },
  {
    title: 'Data Solutions',
    icon: '🔍',
    description: 'Soluções personalizadas para gestão de dados'
  },
  {
    title: 'DevOps',
    icon: '⚙️',
    description: 'Integração e entrega contínua'
  },
  {
    title: 'Power BI',
    icon: '📈',
    description: 'Dashboards interativos e relatórios dinâmicos'
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/businesswoman.jpg" 
              alt="Dashboard de vendas" 
              width={500} 
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h3 className="text-squid-ink text-xl font-medium">Dashboard de vendas</h3>
              <p className="text-gray-500 text-sm">+15% em 2024</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-squid-ink mb-8">
              Usamos as principais tecnologias do mercado
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-medium text-squid-ink mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
