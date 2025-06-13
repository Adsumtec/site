import Image from "next/image";
import styles from '../index.module.css';
import Link from 'next/link';

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
      <div className={styles.header2}>
        <div className={styles.component2}>
          <Image
            width={1300}
            height={540.6}
            sizes="100vw"
            alt=""
            src="/Component-solucoes.svg"
          />                    
        </div>
        <div className={styles.solucoes}>CONHEÇA A ADSUMTEC</div>
        <div className={styles.soluesParaOSeuNegcioCoParent}>
          <div className={styles.titleSolucoes}>Quem somos</div>
        </div>
      </div>
      <div className={`${styles.sobreAAdsumtec} ${styles.sobreAAdsumtecCenter}`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className={styles.frameParent}>
            <div className={styles.sobreAAdsumtecParent}>
                <div className={styles.somosUmaConsultoria}>
                NOSSO PROPÓSITO</div>
                <div className={styles.sobreAAdsumtec1}>Te ajudamos a descobrir o poder dos dados, e juntos criamos caminhos sólidos para um futuro inovador e sustentável.</div>
            </div>
            </div>
      </div>
      <div className={styles.sobreAAdsumtec} style={{ position: 'relative', overflow: 'hidden'}}>
            <div className={styles.component4}>
              <Image
                className={styles.unionIcon2}
                width={455}
                height={300}
                sizes="100vw"
                alt=""
                src="/component-24.svg" 
              />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.sobreAAdsumtecParent}>
            <div className={styles.sobreAAdsumtec1}>Nosso Time</div>
            <div className={styles.somosUmaConsultoria}>
              Ajudmos empreendedores a usar dados para decisões inteligentes com nosssa equipe multidiciplinar e qualificada, em uma abordagem flexivel e moderna.
            </div>
          </div>
        </div>
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
              <div className={styles.descubraAsSolues}>Estamos contratando!</div>
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
