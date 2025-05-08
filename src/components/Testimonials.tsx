import React from 'react';

const testimonials = [
  {
    quote: "A parceria com a Adsumtec transformou completamente nossa visão sobre dados. Conseguimos identificar oportunidades que antes eram invisíveis.",
    author: "Ana Maria Silva",
    company: "Tech Solutions"
  },
  {
    quote: "Os dashboards desenvolvidos pela equipe da Adsumtec são extremamente intuitivos e nos ajudaram a tomar decisões mais assertivas.",
    author: "Ricardo Oliveira",
    company: "Nexus Empresarial"
  },
  {
    quote: "Desde que implementamos as soluções da Adsumtec, nossa eficiência aumentou em 30%. O retorno sobre o investimento foi impressionante.",
    author: "Mariana Santos",
    company: "Grupo Inovação"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-squid-ink mb-12 text-center">
          O que falam sobre nós
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 bg-orange-peel text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-medium text-squid-ink">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
