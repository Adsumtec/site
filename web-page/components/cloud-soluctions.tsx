"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Cloud, Database, BarChart3, Palette, Shield, Lock, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = [
    {
      name: "Cloud Solutions",
      icon: Cloud,
      title: "Cloud Solutions",
      sections: {
        whatIs:
          "Uma das soluções para isso é trabalhar com o armazenamento em nuvem, que permite hospedar arquivos digitalmente.",
        purpose: "Facilitar a gestão de dados é uma missão importantíssima para uma empresa.",
        benefits: [
          "Redução de custos com instalações físicas;",
          "Otimização do tempo para armazenar ou encontrar um arquivo;",
          "Centralização dos dados.",
        ],
      },
    },
    {
      name: "Data Ops",
      icon: Database,
      title: "Data Ops",
      sections: {
        whatIs:
          "DataOps é uma metodologia colaborativa focada em melhorar a comunicação, integração e automação de fluxos de dados.",
        purpose:
          "Acelerar a entrega de insights de dados de alta qualidade através de processos automatizados e colaborativos.",
        benefits: [
          "Melhoria na qualidade dos dados;",
          "Redução do tempo de entrega de análises;",
          "Maior colaboração entre equipes.",
        ],
      },
    },
    {
      name: "Power BI",
      icon: BarChart3,
      title: "Power BI",
      sections: {
        whatIs:
          "Power BI é uma ferramenta de business intelligence que permite visualizar dados e compartilhar insights em toda a organização.",
        purpose: "Transformar dados em insights visuais interativos para tomada de decisões mais informadas.",
        benefits: [
          "Dashboards interativos e em tempo real;",
          "Integração com múltiplas fontes de dados;",
          "Facilidade de uso para usuários não técnicos.",
        ],
      },
    },
    {
      name: "UX/UI Dados",
      icon: Palette,
      title: "UX/UI Dados",
      sections: {
        whatIs:
          "Design de experiência do usuário focado em apresentação e interação com dados de forma intuitiva e eficiente.",
        purpose: "Criar interfaces que facilitem a compreensão e análise de dados complexos pelos usuários finais.",
        benefits: [
          "Melhor experiência do usuário com dados;",
          "Visualizações mais intuitivas e acessíveis;",
          "Redução da curva de aprendizado.",
        ],
      },
    },
    {
      name: "Governança",
      icon: Shield,
      title: "Governança",
      sections: {
        whatIs:
          "Conjunto de políticas, processos e controles para garantir o uso adequado e seguro dos dados organizacionais.",
        purpose: "Estabelecer diretrizes claras para gestão, qualidade e conformidade dos dados empresariais.",
        benefits: [
          "Maior conformidade regulatória;",
          "Melhoria na qualidade dos dados;",
          "Redução de riscos operacionais.",
        ],
      },
    },
    {
      name: "Segurança da Informação",
      icon: Lock,
      title: "Segurança da Informação",
      sections: {
        whatIs:
          "Práticas e tecnologias para proteger informações digitais contra acessos não autorizados, alterações ou destruição.",
        purpose: "Garantir a confidencialidade, integridade e disponibilidade das informações organizacionais.",
        benefits: [
          "Proteção contra ameaças cibernéticas;",
          "Conformidade com regulamentações;",
          "Preservação da reputação empresarial.",
        ],
      },
    },
    {
      name: "Inteligência Artificial",
      icon: Brain,
      title: "Inteligência Artificial",
      sections: {
        whatIs:
          "Tecnologias que simulam a inteligência humana para automatizar processos e gerar insights avançados a partir de dados.",
        purpose: "Automatizar tarefas complexas e descobrir padrões ocultos nos dados para otimizar operações.",
        benefits: [
          "Automação de processos complexos;",
          "Descoberta de insights avançados;",
          "Melhoria na eficiência operacional.",
        ],
      },
    },
  ]

  const currentTab = tabsData[activeTab]
  const IconComponent = currentTab.icon

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 p-8 pb-16 justify-center">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-200 whitespace-nowrap ${
              index === activeTab
                ? "bg-slate-800 text-white shadow-lg"
                : "bg-white text-slate-700 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-light text-slate-800 leading-tight">
              {currentTab.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index < currentTab.title.split(" ").length - 1 && <br />}
                </span>
              ))}
            </h1>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-16">
            {/* O que é? */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-slate-800">O que é?</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">{currentTab.sections.whatIs}</p>
            </div>

            {/* Para o que serve? */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-slate-800">Para o que serve?</h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">{currentTab.sections.purpose}</p>
            </div>

            {/* Benefícios */}
            <div className="space-y-8">
              <h2 className="text-3xl font-medium text-slate-800">Benefícios</h2>
              <div className="space-y-4">
                {currentTab.sections.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-slate-800 text-xl font-medium mt-1">✓</span>
                    <p className="text-slate-600 text-xl font-light leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4 mt-20">
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all"
            onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : tabsData.length - 1)}
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-14 h-14 rounded-full border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all"
            onClick={() => setActiveTab(activeTab < tabsData.length - 1 ? activeTab + 1 : 0)}
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}
