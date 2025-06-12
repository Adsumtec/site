"use client"

import { useState } from "react"
import { Cloud, Database, BarChart3, Palette, Shield, Lock, Brain } from "lucide-react"
import styles from "../app/index.module.css"

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
    <div>
      {/* Tabs */}
      <div className={styles.solucoesTabs}>
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${styles.solucoesTabButton} ${index === activeTab ? styles.solucoesTabButtonActive : ""}`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div
        className={styles.solucoesContainer}
        style={{
          minHeight: 420, // altura mínima para manter o conteúdo alinhado
          maxWidth: 1200,
          margin: "0 auto",
          marginBottom: 48,
        }}
      >
        {/* Left */}
        <div className={styles.solucoesLeft}>
          <div className={styles.solucoesIconCircle}>
            <IconComponent size={28} color="#fff" />
          </div>
          <div className={styles.solucoesTitle}>
            {currentTab.title.split(" ").map((word, i) => (
              <span key={i}>
                {word}
                {i < currentTab.title.split(" ").length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={styles.solucoesRight}>
          <div className={styles.solucoesSection}>
            <div className={styles.solucoesSectionTitle}>O que é?</div>
            <div className={styles.solucoesSectionText}>{currentTab.sections.whatIs}</div>
          </div>
          <div className={styles.solucoesSection}>
            <div className={styles.solucoesSectionTitle}>Para o que serve?</div>
            <div className={styles.solucoesSectionText}>{currentTab.sections.purpose}</div>
          </div>
          <div>
            <div className={styles.solucoesSectionTitle}>Benefícios</div>
            <div className={styles.solucoesBenefits}>
              {currentTab.sections.benefits.map((benefit, idx) => (
                <div key={idx} className={styles.solucoesBenefitItem}>
                  <span className={styles.solucoesBenefitCheck}>✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
