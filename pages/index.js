import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import { enUS, ptBR } from "../translations";

import Container from "../components/Container";
import Experience from "../components/Experience";
import Project from "../components/Project";

import Html from "../assets/svg/Html.svg";
import Css from "../assets/svg/Css.svg";
import Javascript from "../assets/svg/Javascript.svg";
import Reacticon from "../assets/svg/Reacticon.svg";
import Mobile from "../assets/svg/Mobile.svg";
import Nodejs from "../assets/svg/Nodejs.svg";
import Php from "../assets/svg/Php.svg";
import Sql from "../assets/svg/Sql.svg";
import Vuejs from "../assets/svg/Vuejs.svg";
import Wordpress from "../assets/svg/Wordpress.svg";
import Git from "../assets/svg/Git.svg";
import Github from "../assets/svg/Github.svg";
import Linkedin from "../assets/svg/Linkedin.svg";
import Email from "../assets/svg/Email.svg";

import {
  Picture,
  Academic,
  Stacks,
  ProfessionalExperiences,
  Projects,
} from "./style";

const HomePage = () => {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "pt" ? ptBR : enUS;
  const t = ptBR;

  const [projects, setProjects] = useState([
    {
      url: "https://sl1nk.com/3pvDn",
      title: "Portal da Defensoria Pública de MG",
      src: "./img/defensoria-mg.png",
      description: `
        <p>
          <strong>Portal Institucional - Redesign e Otimização</strong> - Desenvolvido ao longo do ano de 2025 é um projeto de modernização do portal oficial da Defensoria Pública de Minas Gerais, focado em nova identidade visual e performance otimizada.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Frontend moderno, Performance optimization, Design System implementation, SEO enhancement
        </p>
        <p>
          <strong>Responsabilidades:</strong> Colaboração no desenvolvimento da nova identidade visual digital, implementação de melhorias significativas no tempo de carregamento das páginas, otimização de performance e Core Web Vitals, refatoração de componentes para melhor usabilidade e acessibilidade.
        </p>
        <p>
          <strong>Resultado:</strong> Modernização completa da presença digital da instituição, com carregamento mais rápido, melhor experiência do usuário e design alinhado com a identidade institucional atualizada.
        </p>
      `
    },
    {
      url: "https://bit.ly/3BxIdfk",
      title: "Alper Seguros",
      src: "./img/alper-seguros.png",
      description: `
        <p>
          <strong>Sistema de Gestão de Cotações de Seguros</strong> - Solução completa desenvolvida durante 2023-2024 para automatizar o processo de cotação e gestão de contratos de seguros.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> React.js, Next.js, Tailwind CSS, API REST Integration
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento frontend responsivo, implementação de design system baseado em Figma, integração com APIs REST para gestão de contratos, otimização de performance e UX. Colaboração direta com equipe de produto e suporte técnico pós-implementação.
        </p>
        <p>
          <strong>Resultado:</strong> Streamline do processo de cotações, redução significativa no tempo de processamento e melhoria na experiência do usuário final.
        </p>
      `
    },
    {
      url: "https://bit.ly/4gknZFg",
      title: "Minha Vero - Aplicativo",
      src: "./img/app-minha-vero.png",
      description: `
        <p>
          <strong>Aplicativo Móvel de Autoatendimento</strong> - Solução mobile nativa desenvolvida em 2022 para clientes da operadora Vero Internet, oferecendo gestão completa de serviços.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> React Native, Styled Components, API Integration, Mobile Optimization
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento completo da aplicação mobile, implementação de design responsivo, integração com APIs internas da Vero, otimização de performance para dispositivos móveis, implementação de features de autoatendimento e gestão de conta.
        </p>
        <p>
          <strong>Resultado:</strong> Redução significativa na demanda do suporte ao cliente e melhoria na experiência do usuário através de autoatendimento eficiente.
        </p>
      `
    },
    {
      url: "https://bit.ly/3ZXcYDK",
      title: "Minha Vero - Versão Web",
      src: "./img/minha-vero.png",
      description: `
        <p>
          <strong>Portal Web de Autoatendimento</strong> - Single Page Application desenvolvida em 2022 como extensão web do app móvel, oferecendo experiência omnichannel para clientes Vero.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Vue.js, Nuxt.js, SSR, API Integration, Responsive Design
        </p>
        <p>
          <strong>Responsabilidades:</strong> Arquitetura e desenvolvimento da SPA, implementação de Server-Side Rendering para otimização SEO, desenvolvimento de componentes reutilizáveis, integração com proxy APIs da Vero, implementação de features de gestão de conta e autoatendimento.
        </p>
        <p>
          <strong>Resultado:</strong> Criação de ecossistema completo web + mobile, proporcionando consistência na experiência do usuário em múltiplas plataformas.
        </p>
      `
    },
    {
      url: "http://bit.ly/3BoFLaV",
      title: "Imperial Cleaning(Seattle - WA)",
      src: "./img/imperial-cleaning-seattle.png",
      description: `
        <p>
          <strong>Sistema de Agendamento Online</strong> - Plataforma web desenvolvida em 2023 para empresa de limpeza residencial/comercial em Seattle, WA, automatizando processo de agendamento e gestão de serviços.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Frontend moderno, Design System implementation, Deploy automation, Performance optimization
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento fullstack da plataforma, implementação de sistema de agendamento em tempo real, criação de interface administrativa, otimização para conversão, deploy e configuração de servidor, manutenção e suporte técnico.
        </p>
        <p>
          <strong>Resultado:</strong> Automatização completa do processo de agendamento, redução de friction no customer journey e aumento significativo na taxa de conversão.
        </p>
      `
    },
    {
      url: "https://bit.ly/3cE0Gam",
      title: "Buffet Badallus Club",
      src: "./img/buffetbadallusclub.png",
      description: `
        <p>
          <strong>Portal Institucional Premium</strong> - Website desenvolvido em 2021 para buffet de eventos de alto padrão, focado em conversão e apresentação de serviços premium.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Frontend moderno, Responsive Design, Performance optimization, SEO implementation
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento frontend completo, implementação de design premium baseado em especificações do Figma, otimização de performance e carregamento, configuração de SEO, deploy e configuração de servidor de produção.
        </p>
        <p>
          <strong>Parceria:</strong> Projeto desenvolvido em colaboração com agência Mangu, garantindo alinhamento estratégico entre desenvolvimento técnico e objetivos de marketing.
        </p>
      `
    },
    {
      url: "https://bit.ly/2U35oZ1",
      title: "DGR Comunicação Visual",
      src: "./img/dgrcomunicacaovisual.png",
      description: `
        <p>
          <strong>Website Institucional Criativo</strong> - Portal desenvolvido em 2020 com foco em storytelling visual e experiência imersiva para empresa de comunicação visual.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Frontend moderno, Animations, Interactive design, Creative coding, Performance optimization
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento de interface criativa e interativa, implementação de animações e transições personalizadas, otimização de assets visuais, criação de experiência de usuário diferenciada, deploy e configuração de produção.
        </p>
        <p>
          <strong>Resultado:</strong> Website que se destaca no mercado de comunicação visual, demonstrando capacidades criativas e técnicas avançadas da empresa cliente.
        </p>
      `
    },
    {
      url: "https://bit.ly/3cDyt3H",
      title: "Neves Bomfim",
      src: "./img/nevesbomfim.png",
      description: `
        <p>
          <strong>Portal Imobiliário</strong> - Plataforma desenvolvida em 2019 para gestão e apresentação de portfólio imobiliário, incluindo sistema de busca avançada e apresentação de propriedades.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Vue.js, Gulp.js, Responsive Design, Search optimization, Performance tuning
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento da plataforma completa, implementação de sistema de busca e filtros avançados, criação de interface responsiva para apresentação de imóveis, otimização de performance, integração com ferramentas de build automation (Gulp.js).
        </p>
        <p>
          <strong>Projeto Visie:</strong> Desenvolvido durante período na Visie, demonstrando capacidade de entrega em projetos de grande escala no setor imobiliário.
        </p>
      `
    },
    // {
    //   url: "https://bit.ly/3gg0xvY",
    //   title: "Primepass",
    //   src: "./img/primepass.png",
    // },
    {
      url: "https://valoramadeira.com/",
      title: "Valora Madeira",
      src: "./img/valoramadeira.png",
      description: `
        <p>
          <strong>Website Corporativo de Engenharia Ambiental</strong> - Portal institucional desenvolvido para empresa especializada em soluções sustentáveis e inovação no setor madeireiro.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> WordPress Custom Development, Theme customization, Performance optimization, SEO implementation
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento de tema WordPress customizado, implementação de funcionalidades específicas do setor, otimização para mecanismos de busca, deploy e configuração de servidor, suporte técnico contínuo pós-lançamento.
        </p>
        <p>
          <strong>Resultado:</strong> Website que posiciona a empresa como referência em sustentabilidade e inovação, com foco em conversão e geração de leads qualificados no setor B2B.
        </p>
      `
    },
    // {
    //   url: "https://bit.ly/3xd5aNd",
    //   title: "STI Máquinas",
    //   src: "./img/stimaquinas.png",
    // },
    // {
    //   url: "https://bit.ly/35cSLwz",
    //   title: "Nova Ceasa ABC",
    //   src: "./img/novaceasaabc.png",
    // },
    // {
    //   url: "https://bit.ly/3zmMkoy",
    //   title: "TecPat",
    //   src: "./img/tecpat.png",
    // },
    {
      url: "https://bit.ly/3zuIiLd",
      title: "Vero Internet",
      src: "./img/verointernet.png",
      description: `
        <p>
          <strong>Website Institucional - Desenvolvimento em WarRoom</strong> - Portal corporativo desenvolvido em regime intensivo de 4 dias através de metodologia WarRoom com equipe de 6 desenvolvedores.
        </p>
        <p>
          <strong>Stack Tecnológica:</strong> Frontend moderno, Responsive Design, Team collaboration, Agile development, Performance optimization
        </p>
        <p>
          <strong>Desafio Técnico:</strong> Projeto originalmente planejado para 1 mês, entregue em 4 dias através de coordenação eficiente de equipe e metodologias ágeis. Demonstra capacidade de trabalho sob pressão e entrega de qualidade em prazos críticos.
        </p>
        <p>
          <strong>Responsabilidades:</strong> Desenvolvimento colaborativo, implementação de design system, otimização de workflow de desenvolvimento, garantia de qualidade mesmo em prazo reduzido.
        </p>
        <p>
          <strong>Resultado:</strong> Entrega bem-sucedida em prazo crítico, mantendo alta qualidade e estabelecendo benchmark para projetos futuros da equipe.
        </p>
      `
    },
    // {
    //   url: "https://bit.ly/3wq7EIc",
    //   title: "Heat Tech",
    //   src: "./img/heattech.png",
    // },
  ]);
  // const [projects, setProjects] = useState([]);

  // async function getProjects() {
  //   const newProjects = await fetch("/api/projects").then((response) =>
  //     response.json()
  //   );
  //   setProjects(newProjects); // Atualiza o estado com os projetos
  // }

  useEffect(() => {
    // getProjects();
  }, []);

  return (
    <>
      <Head>
        <title>{t.title} | andreromariodev</title>
      </Head>

      <section className="section" id="about">
        <Container>
          <div className="about__info">
            <div className="side_a">
              <Picture>
                <img
                  src="./img/novo-linkedin.jpg"
                  alt="André Romário"
                  title="André Romário"
                />
              </Picture>
              
              <div className="social">
                <a
                  href="https://github.com/andreromariodev"
                  target="_blank"
                  title="GitHub"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/andre-romario-dev/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="mailto:andreromario@live.com"
                  target="_blank"
                  title={t.send_me_mail}
                >
                  <Email />
                </a>
              </div>
              <p>
                <a
                  href="mailto:andreromario@live.com"
                  title={t.send_me_mail}
                >
                  andreromario@live.com
                </a>
              </p>

              {/* <p>{t.english_level}</p> */}
            </div>

            <div className="side_b">
              <h1>{t.title}</h1>
              <p>{t.about_intro}</p>
              <div dangerouslySetInnerHTML={{ __html: t.about_description }}></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" id="professional-experience">
        <Container>
          <h2>{t.professional_experience}:</h2>

          <ProfessionalExperiences>
            <Experience className="job_description latest">
              <h3>
                {t.company}: Stefanini <br />
              </h3>
              <p>{t.office}: <strong>{t.job1_office}</strong> | {t.period}: Janeiro/2025 - {t.at_the_moment}</p>
              <div dangerouslySetInnerHTML={{ __html: t.job1_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Visie <br />
              </h3>
              <p>{t.office}: <strong>{t.job2_office}</strong> | {t.period}: Agosto/2019 - Janeiro/2025</p>
              <div dangerouslySetInnerHTML={{ __html: t.job2_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Inside Mídia - Agência de Marketing Digital <br />
              </h3>
              <p>{t.office}: <strong>{t.job3_office}</strong> | {t.period}: Março/2017 - Maio/2019</p>
              <div dangerouslySetInnerHTML={{ __html: t.job3_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Soulmkt Desenvolvimento de Sistemas <br />
              </h3>
              <p>{t.office}: <strong>{t.job4_office}</strong> | {t.period}: Agosto/2014 - Janeiro/2016</p>
              <div dangerouslySetInnerHTML={{ __html: t.job4_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Convertty Soluções Digitais <br />
              </h3>
              <p>{t.office}: <strong>{t.job5_office}</strong> | {t.period}: Agosto/2012 - Dezembro/2013</p>
              <div dangerouslySetInnerHTML={{ __html: t.job5_description }}></div>
            </Experience>
          </ProfessionalExperiences>
        </Container>
      </section>

      <section className="section" id="academic">
        <Container>
          <h2>{t.academic}:</h2>

          <Academic>
            <Experience>
              <h3>{t.certificate1}</h3>
              <p>
                {t.institute}: Faculdade Descomplica <br />
                {t.conclusion}: 2021
              </p>
            </Experience>
            <Experience>
              <h3>{t.certificate2}</h3>
              <p>
                {t.institute}: Centro Universitário ENIAC <br />
                {t.conclusion}: 2016
              </p>
            </Experience>
            <Experience>
              <h3>{t.certificate3}</h3>
              <p>
                {t.institute}: ETEC Tiquatira <br />
                {t.conclusion}: 2012
              </p>
            </Experience>
          </Academic>
        </Container>
      </section>

      <section className="section" id="mainstacks">
        <Container>
          <h2>{t.stacks}:</h2>
          <Stacks>
            <li title="React">
              <Reacticon />
              React
            </li>
            <li title="React Native">
              <Mobile />
              React Native
            </li>
            <li title="Vue">
              <Vuejs />
              Vue
            </li>
            <li title="JavaScript">
              <Javascript />
              TypeScript & JavaScript
            </li>
            <li title="HTML5">
              <Html />
              HTML5
            </li>
            <li title="CSS3">
              <Css />
              CSS3
            </li>
            <li title="NodeJS">
              <Nodejs />
              NodeJS
            </li>
            <li title="SQL">
              <Sql />
              SQL
            </li>
            <li title="WordPress">
              <Wordpress />
              WordPress
            </li>
            <li title="Git">
              <Git />
              Git
            </li>
          </Stacks>
        </Container>
      </section>

      <section className="section" id="portfolio">
        <Container>
          <h2>{t.portfolio}:</h2>

          <Projects>
            {projects.map((project, index) => {
              return <Project key={index} project={project} />;
            })}
          </Projects>
        </Container>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false,
});
