import Image from "next/image";
import styles from '../index.module.css';
import Link from 'next/link';
import Component from "@/components/cloud-soluctions";

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
        <div className={styles.solucoes}>SOLUÇÔES</div>
        <div className={styles.soluesParaOSeuNegcioCoParent}>
          <div className={styles.titleSolucoes}>As soluções em dados para o seu negócio.</div>
        </div>
      </div>
      <div className={styles.sobreAAdsumtec} style={{ position: 'relative', overflow: 'hidden', top: '50px' }}>
            <div className={styles.frameParent}>
            <div className={styles.sobreAAdsumtecParent}>
                <div className={styles.sobreAAdsumtec1}>O que é Data Analytics ?</div>
                <div className={styles.somosUmaConsultoria}>
                Uso assertivo de informações para análises valiosas e tomada de decisões estratégicas.</div>
            </div>
            </div>
            <div className={styles.component4}>
            <Image
                className={styles.unionIcon2}
                width={455}
                height={300}
                sizes="100vw"
                alt=""
                src="/component-21.svg"
            />
            </div>
      </div>
      <div className={styles.servicosParceiros}>
        <div className={styles.servicoItem}>
          <Image className={styles.servicoIcon} width={500} height={500} sizes="100vw" alt="" src="/microsoft.svg" />
        </div>
        <div className={styles.servicoItem}>
          <Image className={styles.servicoIcon} width={500} height={500} sizes="100vw" alt="" src="/vmware.svg" />
        </div>
        <div className={styles.servicoItem}>
          <Image className={styles.servicoIcon} width={500} height={500} sizes="100vw" alt="" src="/googleCloud.svg" />
        </div>
        <div className={styles.servicoItem}>
          <Image className={styles.servicoIcon} width={500} height={500} sizes="100vw" alt="" src="/solarWinds.svg" />
        </div>
        <div className={styles.servicoItem}>
          <Image className={styles.servicoIcon} width={500} height={500} sizes="100vw" alt="" src="/amazonWeb.svg" />
        </div>
      </div>
      <div className={styles.sobreAAdsumtec} style={{ position: 'relative', overflow: 'hidden', top: '-50px' }}>
            <div className={styles.component4}>
              <Image
                className={styles.unionIcon2}
                width={455}
                height={300}
                sizes="100vw"
                alt=""
                src="/component-23.svg"
              />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.sobreAAdsumtecParent}>
            <div className={styles.sobreAAdsumtec1}>Para que serve</div>
            <div className={styles.somosUmaConsultoria}>
              Converta grandes volumes de dados em informações para descobrir oportunidades que ajudam a otimizar suas operações.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sobreAAdsumtec}>
            <div className={styles.frameParent}>
            <div className={styles.sobreAAdsumtecParent}>
                <div className={styles.sobreAAdsumtec1}>Benefícios</div>
                <div className={styles.somosUmaConsultoria}>
                ✓ Decisões mais rápidas e inteligentes<br/> 
                ✓ Gestão de estoque e logística aprimorados <br/>
                ✓ Personalização de ofertas e atendimento ao cliente
                </div>
            </div>
      </div>
            <div className={styles.component4}>
            <Image
                className={styles.unionIcon2}
                width={455}
                height={300}
                sizes="100vw"
                alt=""
                src="/component-22.svg"
            />
            </div>
      </div>
      <div className={styles.bigNumbers1} style={{ position: 'relative', overflow: 'hidden', top: '50px'}}>
        <div style={{ 
          position: 'relative', 
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
          <div className={styles.groupParent} style={{ width: '600px',   justifyContent: "center", textAlign: 'center', top: '150px', left: '350px'}}>
              <span className={styles.span} style={{ width: '150px', textAlign: 'center', fontSize: '60px'}}>Mais de 60 petabytes de dados transferidos</span>
              <div className={styles.clientesAtendidos} style={{ width: '600px',   justifyContent: "center", textAlign: 'center', top: '160px'}}>Isso equivale a 60.000 terabytes ou 12 bilhões de músicas em MP3</div>
          </div>
          <div className={styles.umPoucoDo} style={{ width: '180px' }}>Use o poder dos Dados ao seu favor!</div>
          <Image className={styles.bigNumbersInner} width={44} height={44} sizes="100vw" alt="" src="/Frame 4584.svg" />
      </div>
      <div className={styles.solues} style={{ position: 'relative', overflow: 'hidden', top: '100px', bottom: '100px'}}>
        <Component />
      </div>
      <div className={styles.formulrio} style={{ position: 'relative', overflow: 'hidden', top: '100px', bottom: '100px'}}>
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
