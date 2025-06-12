import Image from "next/image";
import styles from './index.module.css';
import Link from 'next/link';
import DashboardSection from "../components/Dashboard"


export const metadata = {
  title: 'Adsumtec - Consultoria em Dados',
  description: 'Transforme dados em poder com a Adsumtec, sua consultoria de negócios especializada em soluções Data Driven.',
};

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.menu}>
          <div className={styles.logoAdsumtec011Parent}>
            <div className={styles.logoAdsumtec011}>
              <Image
                className={styles.groupIcon}
                width={180} // ajuste para a largura real da logomarca
                height={48} // ajuste para a altura real da logomarca
                sizes="(max-width: 600px) 120px, 180px"
                alt="Logomarca Adsumtec"
                src="/_adsumtec_logo-principal.png.png"
                style={{ width: "auto", height: "48px" }} // garante proporção correta
              />
            </div>
            <div className={styles.homeParent}>
              <Link href="/" className={styles.solues}>Home</Link>
              <Link href="/solucoes" className={styles.solues}>Soluções</Link>
              <Link href="/quem-somos" className={styles.solues}>Quem somos</Link>
              <Link href="/contato" className={styles.solues}>Contato</Link>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.stateLayer}>
              <div className={styles.solues}>Entre em contato</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header1}>
        <div className={styles.component2}>
          <Image
            className={styles.heroBackground}
            width={1300}
            height={540.6}
            sizes="100vw"
            alt=""
            src="/Component 2.svg"
          />                    
          {/* Remova ou comente qualquer elemento de fundo extra */}
          {/* <div className={styles.component2Child} /> */}
          {/* <div className={styles.component2Item} /> */}
        </div>
        <div className={styles.umNovoOlhar}>um novo olhar para os dados da sua empresa</div>
        <div className={styles.soluesParaOSeuNegcioCoParent}>
          <div className={styles.soluesParaO}>Soluções para o seu negócio com uso inteligente de dados.</div>
          <div className={styles.obtenhaResultadosConcretos}>Obtenha resultados concretos através de uma abordagem assertiva de resolução de problemas.</div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button1}>
            <div className={styles.stateLayer1}>
              <div className={styles.solues}>Transforme dados em poder</div>
            </div>
          </div>
          <Image className={styles.groupChild} width={54} height={53.1} sizes="100vw" alt="" src="/Group 4600.svg" />
          <Image className={styles.groupItem} width={13.2} height={138.3} sizes="100vw" alt="" src="/Vector 1.svg" />
        </div>
      </div>
      <div className={styles.bloco1Tecnologias}>
        <div className={styles.bloco1TecnologiasInner}>
            <DashboardSection />
        </div>
        <div className={styles.usamosAsPrincipaisTecnologiParent}>
          <div className={styles.usamosAsPrincipaisContainer}>
            <p className={styles.usamosAsPrincipais}>Usamos as principais</p>
            <p className={styles.usamosAsPrincipais}>tecnologias do mercado</p>
          </div>
          <div className={styles.otimizeAGestoContainer}>
            <p className={styles.usamosAsPrincipais}>Otimize a gestão da sua empresa com as melhores ferramentas, garantindo eficiência</p>
            <p className={styles.usamosAsPrincipais}>e resultados inovadores.</p>
          </div>
          <div className={styles.button2}>
            <div className={styles.stateLayer2}>
              <div className={styles.solues}>Conheça nossas soluções</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bloco2Servios}>
        <div className={styles.dataAnalyticsParent}>
          <div className={styles.dataAnalytics}>Data Analytics</div>
          <div className={styles.identifiqueOportunidadesE}>Identifique oportunidades e otimize processos.</div>
          <Image className={styles.icon} width={36} height={36} sizes="100vw" alt="" src="/icon.svg" />
        </div>
        <div className={styles.cloudSolutionsParent}>
          <div className={styles.cloudSolutions}>Cloud Solutions</div>
          <div className={styles.identifiqueOportunidadesE}>Adapte-se rapidamente ao mercado, economizando recursos.</div>
          <Image className={styles.icon2} width={36} height={36} sizes="100vw" alt="" src="/icon2.svg" />
        </div>
        <div className={styles.cloudSolutionsParent}>
          <div className={styles.cloudSolutions}>DataOps</div>
          <div className={styles.identifiqueOportunidadesE}>Aumente a eficiência operacional da sua equipe.</div>
          <Image className={styles.icon2} width={36} height={36} sizes="100vw" alt="" src="/icon3.svg" />
        </div>
        <div className={styles.powerBiParent}>
          <div className={styles.cloudSolutions}>Power BI</div>
          <div className={styles.identifiqueOportunidadesE}>Informações valiosas que facilitam suas decisões.</div>
          <Image className={styles.icon2} width={36} height={36} sizes="100vw" alt="" src="/icon4.svg" />
        </div>
      </div>
      <div className={styles.sobreAAdsumtec}>
        <div className={styles.frameParent}>
          <div className={styles.sobreAAdsumtecParent}>
            <div className={styles.sobreAAdsumtec1}>Sobre a Adsumtec</div>
            <div className={styles.somosUmaConsultoria}>
              Somos uma consultoria de negócios que utiliza estratégias Data Driven para aprimorar performance, reduzir custos e fortalecer a competitividade dos nossos clientes.
            </div>
          </div>
          <button className={styles.button3}>
            <span className={styles.solues}>Quem somos</span>
          </button>
        </div>
        <div className={styles.component4}>
          <Image
            className={styles.unionIcon2}
            width={455}
            height={300}
            sizes="100vw"
            alt=""
            src="/Component 4.svg"
          />
          <div className={styles.addParent}>
            <Image className={styles.addIcon} width={18} height={18} sizes="100vw" alt="" src="add.svg" />
            <div className={styles.solues}>Saiba mais</div>
          </div>
        </div>
      </div>
      <div className={styles.bigNumbers} style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0,
          overflow: 'hidden'
        }}>
          <Image
            className={styles.heroBackground}
            width={1300}
            height={540.6}
            sizes="100vw"
            alt=""
            src="/BigNumbersBg.svg"
          />
        </div>
          <div className={styles.groupParent}>
            <div className={styles.menuParent}>
              <div className={styles.menu1}>
                <div className={styles.logos}>
                  <span>+</span>
                  <span className={styles.span}>60</span>
                </div>
              </div>
              <div className={styles.petabytesTransferidos}>petabytes transferidos</div>
            </div>
            <div className={styles.menuGroup}>
              <div className={styles.menu2}>
                <div className={styles.logos}>
                  <span>+</span>
                  <span className={styles.span}>150</span>
                </div>
              </div>
              <div className={styles.clientesAtendidos}>clientes atendidos</div>
            </div>
            <div className={styles.menuContainer}>
              <div className={styles.menu3}>
                <div className={styles.logos}>
                  <span>+</span>
                  <span className={styles.span}>475</span>
                </div>
              </div>
              <div className={styles.projetosRealizados}>projetos realizados</div>
            </div>
          </div>
          <div className={styles.umPoucoDo}>Um pouco do que já entregamos</div>
          <Image className={styles.bigNumbersInner} width={44} height={44} sizes="100vw" alt="" src="/Frame 4584.svg" />
      </div>
      <div className={styles.oQueFalamSobreNs}>
        <div className={styles.oQueFalamSobreNsParent}>
          <div className={styles.usamosAsPrincipaisContainer}>O que falam sobre nós</div>
          <div className={styles.otimizeAGestoContainer}>Feedbacks que refletem nosso compromisso em fornecer soluções de dados inovadoras e eficazes.</div>
        </div>
        <div className={styles.modalFeedbackDeskWrapper}>
          <div className={styles.modalFeedbackDesk}>
            <Image className={styles.unionIcon5} width={621} height={271.8} sizes="100vw" alt="" src="union1.svg" />
            <div className={styles.ametMinimMollitNonDeseruntParent}>
              <div className={styles.ametMinimMollit}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</div>
              <div className={styles.elisaGrantParent}>
                <b className={styles.elisaGrant}>Elisa Grant</b>
                <div className={styles.legacySolutionsEngineer}>Legacy Solutions Engineer</div>
              </div>
            </div>
            <div className={styles.modalFeedbackDeskChild} />
            <Image className={styles.starIcon} width={47.6} height={47.6} sizes="100vw" alt="" src="star.svg" />
          </div>
        </div>
      </div>
      <div className={styles.solues1}>
        <Image className={styles.unionIcon6} width={1296} height={684} sizes="100vw" alt="" src="union.svg" />
        <div className={styles.button4}>
          <div className={styles.stateLayer}>
            <div className={styles.solues}>Conheça nossas soluções</div>
          </div>
        </div>
        <b className={styles.asSoluesEmContainer}>
          <p className={styles.usamosAsPrincipais}>As soluções em dados</p>
          <p className={styles.usamosAsPrincipais}>para o seu negócio</p>
        </b>
        <div className={styles.serviosInteligentesQue}>Serviços inteligentes que promovem resultados de qualidade e transformam a gestão da sua empresa.</div>
        <Image className={styles.soluesChild} width={51} height={51} sizes="100vw" alt="" src="/Frame 45841.svg" />
        <div className={styles.feitoSobMedida}>Feito sob medida para o seu sucesso.</div>
        <div className={styles.frameGroup}>
          <div className={styles.dataAnalyticsParent}>
            <div className={styles.dataAnalytics}>Data Analytics</div>
            <div className={styles.identifiqueOportunidadesE}>Análise de dados para decisões eficientes.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="linked_services.svg" />
          </div>
          <div className={styles.cloudSolutionsParent}>
            <div className={styles.cloudSolutions}>Cloud Solutions</div>
            <div className={styles.identifiqueOportunidadesE}>Implemente alternativas de nuvem seguras e escaláveis para seu negócio.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="cloud.svg" />
          </div>
          <div className={styles.cloudSolutionsParent}>
            <div className={styles.cloudSolutions}>DataOps</div>
            <div className={styles.identifiqueOportunidadesE}>Agilize processos e melhore a qualidade dos seus dados.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="backup.svg" />
          </div>
          <div className={styles.powerBiParent}>
            <div className={styles.cloudSolutions}>Power BI</div>
            <div className={styles.identifiqueOportunidadesE}>Obtenha insights poderosos para suas estratégicas.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="alt_route.svg" />
          </div>
          <div className={styles.powerBiParent}>
            <div className={styles.cloudSolutions}>UX/UI dados</div>
            <div className={styles.identifiqueOportunidadesE}>Crie experiências intuitivas e envolventes para o usuário.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="drag_pan.svg" />
          </div>
          <div className={styles.governanaParent}>
            <div className={styles.cloudSolutions}>Governança</div>
            <div className={styles.diretrizesParaUma}>Diretrizes para uma gestão transparente e responsável.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="admin_panel_settings.svg" />
          </div>
          <div className={styles.seguranaDaInformaoParent}>
            <div className={styles.cloudSolutions}>
              <p className={styles.usamosAsPrincipais}>Segurança</p>
              <p className={styles.usamosAsPrincipais}>da informação</p>
            </div>
            <div className={styles.protejaSuasInformaes}>Proteja suas informações com soluções robustas de segurança.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="lock.svg" />
          </div>
          <div className={styles.seguranaDaInformaoParent}>
            <div className={styles.cloudSolutions}>
              <p className={styles.usamosAsPrincipais}>{`Inteligência `}</p>
              <p className={styles.usamosAsPrincipais}>Artificial</p>
            </div>
            <div className={styles.automatizeProcessosComplexos}>Automatize processos complexos para maior eficiência.</div>
            <div className={styles.frameChild} />
            <Image className={styles.linkedServicesIcon} width={24} height={24} sizes="100vw" alt="" src="bolt.svg" />
          </div>
        </div>
      </div>
      <div className={styles.formulrio}>
        <div className={styles.formulrioChild} />
        <div className={styles.formulrioItem} />
        <div className={styles.frameContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupInner} />
              <div className={styles.primaryBtn}>
                <div className={styles.solues}>Fale conosco</div>
                <Image className={styles.groupIcon2} width={10.6} height={13.5} sizes="100vw" alt="" src="/Group.svg" />
              </div>
              <div className={styles.deixeSeuMelhor}>Deixe seu melhor e-mail aqui</div>
            </div>
            <div className={styles.descubraAsSoluesPerfeitasParent}>
              <div className={styles.descubraAsSolues}>Descubra as soluções perfeitas para o seu negócio.</div>
              <div className={styles.entreEmContato}>Entre em contato com a gente, é só deixar o e-mail abaixo.</div>
            </div>
          </div>
          <div className={styles.novasEstratgiasAo}>Novas estratégias ao seu alcance</div>
        </div>
      </div>
      <Image className={styles.horizontalfullWidthIcon} width={1287} height={41} sizes="100vw" alt="" src="horizontal-full-width.svg" />
      <div className={styles.div6} />
      <div className={styles.bottom}>
        <div className={styles.logoHorizontalEscuro3Parent}>
            <div className={styles.logoAdsumtec011}>
              <Image
                className={styles.groupIcon}
                width={180} // ajuste para a largura real da logomarca
                height={48} // ajuste para a altura real da logomarca
                sizes="(max-width: 600px) 120px, 180px"
                alt="Logomarca Adsumtec"
                src="/_adsumtec_logo-principal.png.png"
                style={{ width: "auto", height: "48px" }} // garante proporção correta
              />
            </div>
          <div className={styles.alcanandoOSucessoComDadosWrapper}>
            <div className={styles.alcanandoOSucesso}>Alcançando o sucesso com dados.</div>
          </div>
          <div className={styles.linkedinParent}>
            <Image className={styles.linkedinIcon} width={24.8} height={24.8} sizes="100vw" alt="" src="/LinkedIn.svg" />
            <Image className={styles.linkedinIcon} width={24.8} height={24.8} sizes="100vw" alt="" src="/Instagram.svg" />
            <Image className={styles.linkedinIcon} width={24.8} height={24.8} sizes="100vw" alt="" src="/Twitter.svg" />
          </div>
        </div>
        <div className={styles.aAdsumtecParent}>
          <b className={styles.aAdsumtec}>A Adsumtec</b>
          <div className={styles.faleConosco}>Home</div>
          <div className={styles.faleConosco}>Quem somos</div>
          <div className={styles.faleConosco}>Fale Conosco</div>
        </div>
        <div className={styles.nossosServiosParent}>
          <b className={styles.aAdsumtec}>Nossos serviços</b>
          <div className={styles.faleConosco}>Data Analytics</div>
          <div className={styles.faleConosco}>Cloud Solutions</div>
          <div className={styles.faleConosco}>DataOps</div>
          <div className={styles.faleConosco}>Business Intelligence</div>
          <div className={styles.faleConosco}>Governance</div>
          <div className={styles.faleConosco}>Segurança da Informação</div>
          <div className={styles.faleConosco}>UX/UI Dados</div>
          <div className={styles.faleConosco}>Inteligência Artificial</div>
        </div>
        <div className={styles.aAdsumtecParent}>
          <b className={styles.aAdsumtec}>Informações</b>
          <div className={styles.faleConosco}>Atendimento á nível Nacional</div>
          <div className={styles.faleConosco}>Telefone: 41 3308-7110</div>
          <div className={styles.faleConosco}>E-mail: contato@adsumtec.com.br</div>
          <div className={styles.faleConosco}>Termos e condições</div>
        </div>
      </div>
    </div>
  );
}
