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
  const t = enUS;

  const [projects, setProjects] = useState([
    {
      url: "https://bit.ly/3cE0Gam",
      title: "Buffet Badallus Club",
      src: "./img/buffetbadallusclub.png",
    },
    {
      url: "https://bit.ly/2U35oZ1",
      title: "DGR Comunicação Visual",
      src: "./img/dgrcomunicacaovisual.png",
    },
    {
      url: "https://bit.ly/3cDyt3H",
      title: "Neves Bomfim",
      src: "./img/nevesbomfim.png",
    },
    {
      url: "https://bit.ly/3gg0xvY",
      title: "Primepass",
      src: "./img/primepass.png",
    },
    {
      url: "https://valoramadeira.com/",
      title: "Valora Madeira",
      src: "https://valoramadeira.com/wp-content/uploads/2021/08/fundo.jpg",
    },
    {
      url: "https://bit.ly/3xd5aNd",
      title: "STI Máquinas",
      src: "./img/stimaquinas.png",
    },
    {
      url: "https://bit.ly/35cSLwz",
      title: "Nova Ceasa ABC",
      src: "./img/novaceasaabc.png",
    },
    {
      url: "https://bit.ly/3zmMkoy",
      title: "TecPat",
      src: "./img/tecpat.png",
    },
    {
      url: "https://bit.ly/3zuIiLd",
      title: "Vero Internet",
      src: "./img/verointernet.png",
    },
    {
      url: "https://bit.ly/3wq7EIc",
      title: "Heat Tech",
      src: "./img/heattech.png",
    },
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
                  src="./img/andreromario.jpg"
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

              <p>{t.english_level}</p>
            </div>

            <div className="side_b">
              <h1>{t.page_title}</h1>
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
            <Experience>
              <h3>
                {t.company}: Visie <br />
              </h3>
              <p>
                {t.office}: <strong>{t.job1_office}</strong> <br />
                {t.main_responsibilities}: {t.job1_description} <br />
                {t.period}: 2019-{t.at_the_moment}
              </p>
            </Experience>
            <Experience>
              <h3>
                {t.company}: Inside Mídia - Agência de Marketing Digital <br />
              </h3>
              <p>
                {t.office}: <strong>{t.job2_office}</strong> <br />
                {t.main_responsibilities}: {t.job2_description} <br />
                {t.period}: 2017-2019
              </p>
            </Experience>
            <Experience>
              <h3>
                {t.company}: Soulmkt Desenvolvimento de Sistemas <br />
              </h3>
              <p>
                {t.office}: <strong>{t.job3_office}</strong> <br />
                {t.main_responsibilities}: {t.job3_description} <br />
                {t.period}: 2014-2016
              </p>
            </Experience>
            <Experience>
              <h3>
                {t.company}: Convertty Soluções Digitais <br />
              </h3>

              <p>
                {t.office}: <strong>{t.job4_office}</strong> <br />
                {t.main_responsibilities}: {t.job4_description} <br />
                {t.period}: 2012-2013
              </p>
              <p></p>
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
                {t.period}: 2021 – 2022
              </p>
            </Experience>
            <Experience>
              <h3>{t.certificate2}</h3>
              <p>
                {t.institute}: Centro Universitário ENIAC <br />
                {t.period}: 2014 – 2016
              </p>
            </Experience>
            <Experience>
              <h3>{t.certificate3}</h3>
              <p>
                {t.institute}: ETEC Tiquatira <br />
                {t.period}: 2011 – 2012
              </p>
            </Experience>
          </Academic>
        </Container>
      </section>

      <section className="section" id="mainstacks">
        <Container>
          <h2>{t.stacks}:</h2>
          <Stacks>
            <li title="JavaScript">
              <Javascript />
              JavaScript
            </li>
            <li title="HTML">
              <Html />
              HTML
            </li>
            <li title="CSS">
              <Css />
              CSS
            </li>
            <li title="NodeJS">
              <Nodejs />
              NodeJS
            </li>
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
            <li title="PHP">
              <Php />
              PHP
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
