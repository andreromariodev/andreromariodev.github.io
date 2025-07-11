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
      url: "https://bit.ly/3BxIdfk",
      title: "Alper Seguros",
      src: "./img/alper-seguros.png",
      description: `
        <p>
          Projeto desenvolvido ao longo do ano de 2023 e 2024 para a Alper Seguros. Basicamente consiste em um SAP para gerenciamento de cotações de seguros entre o cliente e a área de backoffice.
        </p>
        <p>
          Esse projeto foi desenvolvido com o uso de <strong>React</strong>(<strong>Next.js</strong>) e <strong>Tailwind.CSS</strong>.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e todo um suporte ao cliente junto a equipe de desenvolvimento. Além da integração com os endpoints disponibilizados pela API da Alper para a gestão dos contratos.
        </p>
      `
    },
    {
      url: "https://bit.ly/4gknZFg",
      title: "Minha Vero - Aplicativo",
      src: "./img/app-minha-vero.png",
      description: `
        <p>
          Projeto desenvolvido ao longo do aaaaaano de 2022 para a Vero. É um aplicativo desenvolvido para suporte de clientes da Vero que usufruem do serviço de internet da operadora.
        </p>
        <p>
          Esse projeto foi desenvolvido com o uso de <strong>React Native</strong> e <strong>Styled Components</strong>.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e todo um suporte ao cliente junto a equipe de desenvolvimento. Além da integração com os endpoints disponibilizados pela API do proxy interno da Vero.
        </p>
      `
    },
    {
      url: "https://bit.ly/3ZXcYDK",
      title: "Minha Vero - Versão Web",
      src: "./img/minha-vero.png",
      description: `
        <p>
          Projeto desenvolvido ao longo do ano de 2022 para a Vero. É uma SAP desenvolvida para suporte de clientes da Vero que usufruem do serviço de internet da operadora similar ao aplicativo para Smartphones e Tablets.
        </p>
        <p>
          Esse projeto foi desenvolvido com o uso de <strong>Vue</strong>(<strong>Nuxt.js</strong>).
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e todo um suporte ao cliente junto a equipe de desenvolvimento. Além da integração com os endpoints disponibilizados pela API do proxy interno da Vero.
        </p>
      `
    },
    {
      url: "http://bit.ly/3BoFLaV",
      title: "Imperial Cleaning(Seattle - WA)",
      src: "./img/imperial-cleaning-seattle.png",
      description: `
        <p>
          Projeto desenvolvido ao longo do ano de 2023 para a Imperial Cleaning. Basicamente consiste em um site para agendamento de serviços de limpeza essa empresa localizada em Seattle Washington.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e deploy da aplicação no servidor do cliente.
        </p>
      `
    },
    {
      url: "https://bit.ly/3cE0Gam",
      title: "Buffet Badallus Club",
      src: "./img/buffetbadallusclub.png",
      description: `
        <p>
          Portal para o cliente Buffet Badallus desenvolvido em 2021 através de parceria com a agência Mangu.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e deploy da aplicação no servidor do cliente.
        </p>
      `
    },
    {
      url: "https://bit.ly/2U35oZ1",
      title: "DGR Comunicação Visual",
      src: "./img/dgrcomunicacaovisual.png",
      description: `
        <p>
          Site institucional e criativo feito em 2020 para o cliente DGR através de parceria com a agência Mangu.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Figma e deploy da aplicação no servidor do cliente.
        </p>
      `
    },
    {
      url: "https://bit.ly/3cDyt3H",
      title: "Neves Bomfim",
      src: "./img/nevesbomfim.png",
      description: `
        <p>
          Portal desenvolvido em 2019 para o cliente Neves Bomfim trabalhando para Visie, um projeto que consiste em um portal para apresentação de imóveis para aluguel e venda.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Photoshop e utilizei tecologias como Vue.js e Gulp.js no decorrer do desenvolvimento
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
          Projeto desenvolvido para uma empresa de engenharia ambiental que tem o foco de apresentar qualidades e melhorias para o ramo de madeira e árvores.
          Nesse projeto eu atuei desenvolvendo o layout para a plataforma WordPress, realizei o deploy da aplicação no servidor do cliente assim como também estive à disposição para atendimento pós entrega para fins de prestar todo o suporte necessário ao cliente.
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
          Um dos primeiros projetos que atuei assim que passei a trabalhar com a Visie. O site da Vero foi um projeto que a previsão para desenvolvimento desse portal era de aproximadamente 1 mês, porém por questões internas foi preciso ser feito em um período menor, em tempo recorde de 4 dias através de um WarRoom com 6 desenvolvedores e o gestor do projeto nos coordenando.
          Apesar do prazo apertado conseguimos realizar a entrega do produto com muita maestria e qualidade na entrega.
        </p>
        <p>
          Pude atuar com o desenvolvimento e implementação do layout desenhado no Illustrator pelo responsável pelo design.
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
                  src="./img/fefde456-8a01-48da-9de5-a8138c6502eb.jpeg"
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
                {t.company}: Visie <br />
              </h3>
              <p>{t.office}: <strong>{t.job1_office}</strong> | {t.period}: 2019 - 2025 (5 anos e 6 meses)</p>
              <div dangerouslySetInnerHTML={{ __html: t.job1_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Inside Mídia - Agência de Marketing Digital <br />
              </h3>
              <p>{t.office}: <strong>{t.job2_office}</strong> | {t.period}: 2017 - 2019 (2 anos e 2 meses)</p>
              <div dangerouslySetInnerHTML={{ __html: t.job2_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Soulmkt Desenvolvimento de Sistemas <br />
              </h3>
              <p>{t.office}: <strong>{t.job3_office}</strong> | {t.period}: 2014 - 2016 (1 ano e 7 meses)</p>
              <div dangerouslySetInnerHTML={{ __html: t.job3_description }}></div>
            </Experience>
            <Experience className="job_description">
              <h3>
                {t.company}: Convertty Soluções Digitais <br />
              </h3>
              <p>{t.office}: <strong>{t.job4_office}</strong> | {t.period}: 2012 - 2013 (1 ano e 4 meses)</p>
              <div dangerouslySetInnerHTML={{ __html: t.job4_description }}></div>
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
              JavaScript
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
