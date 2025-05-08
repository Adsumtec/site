import React from 'react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Data Analytics',
    icon: '📊',
    description: 'Transforme dados brutos em insights valiosos para tomada de decisão'
  },
  {
    title: 'Cloud Solutions',
    icon: '☁️',
    description: 'Infraestrutura escalável e segura para suas aplicações'
  },
  {
    title: 'DevOps',
    icon: '⚙️',
    description: 'Automatize processos e aumente a eficiência do desenvolvimento'
  },
  {
    title: 'Power BI',
    icon: '📈',
    description: 'Dashboards interativos e relatórios personalizados'
  },
  {
    title: 'Integração',
    icon: '🔄',
    description: 'Conecte diferentes sistemas e fontes de dados'
  },
  {
    title: 'Governança',
    icon: '🛡️',
    description: 'Políticas e processos para garantir a qualidade dos dados'
  }
];

const Solutions = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-squid-ink mb-8">
          As soluções em dados para o seu negócio
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h3 className="text-lg font-medium text-squid-ink mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
              <Link 
                href="/solucoes" 
                className="text-royal-azure hover:text-deep-electric-blue transition-colors text-sm font-medium flex items-center"
              >
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
