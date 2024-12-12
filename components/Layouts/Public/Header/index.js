import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import { enUS, ptBR } from "../../../../translations";
import Container from "../../../Container";

import Brazil from "../../../../assets/svg/Brazil.svg";
import Usa from "../../../../assets/svg/Usa.svg";
import Trigram from "../../../../assets/svg/Trigram.svg";
import Close from "../../../../assets/svg/Close.svg";

import {
  Desktop,
  LangSwitcher,
  MobileToggle,
  Header,
  Menu,
  MenuItem,
} from "./style";

const HeaderComponent = (props) => {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "pt" ? ptBR : enUS;
  const t = ptBR;

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLanguageToggle = (lang) => {
    switch (locale) {
      case "en":
        router.push(`/`, "/", { locale: "pt" });
        break;

      case "pt":
        router.push(`/`, "/", { locale: "en" });
        break;
    }
  };

  useEffect(() => {}, [mobileMenu]);

  return (
    <Header>
      <Container>
        <MobileToggle>
          <span>Menu</span>

          <div className="mobileAside">
            {/* <LangSwitcher className="showMobile">
              {locale === "en" ? (
                <button
                  title="Brazilian Portuguese Version"
                  onClick={() => handleLanguageToggle()}
                >
                  <Brazil />
                </button>
              ) : (
                <button
                  title="Versão em Inglês"
                  onClick={() => handleLanguageToggle()}
                >
                  <Usa />
                </button>
              )}
            </LangSwitcher> */}

            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              {mobileMenu ? <Close /> : <Trigram />}
            </button>
          </div>
        </MobileToggle>

        <Desktop>
          <nav>
            <Menu className={mobileMenu ? "-active" : ""}>
              <MenuItem>
                <a aria-label={t.about} title={t.about} onClick={() => setMobileMenu(!mobileMenu)} href="#about">
                  {t.about}
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  aria-label={t.professional_experience} title={t.professional_experience}
                  onClick={() => setMobileMenu(!mobileMenu)}
                  href="#professional-experience"
                >
                  {t.professional_experience}
                </a>
              </MenuItem>
              <MenuItem>
                <a aria-label={t.academic} title={t.academic}
                  onClick={() => setMobileMenu(!mobileMenu)} href="#academic">
                  {t.academic}
                </a>
              </MenuItem>
              <MenuItem>
                <a aria-label={t.stacks} title={t.stacks}
                  onClick={() => setMobileMenu(!mobileMenu)} href="#mainstacks">
                  {t.stacks}
                </a>
              </MenuItem>
              <MenuItem>
                <a aria-label={t.portfolio} title={t.portfolio}
                  onClick={() => setMobileMenu(!mobileMenu)} href="#portfolio">
                  {t.portfolio}
                </a>
              </MenuItem>
              <MenuItem>
                <a aria-label={t.my_cv} title={t.my_cv} href="/curriculo-VITAE.pdf" target="_blank" download>{t.my_cv}</a>
              </MenuItem>
              <MenuItem>
                <a aria-label={t.contact} title={t.contact} href="mailto:andreromario@live.com">{t.contact}</a>
              </MenuItem>
            </Menu>
          </nav>

          {/* <LangSwitcher className="hideMobile">
            {locale === "en" ? (
              <button
                title="Brazilian Portuguese Version"
                onClick={() => handleLanguageToggle()}
              >
                <Brazil />
              </button>
            ) : (
              <button
                title="Versão em Inglês"
                onClick={() => handleLanguageToggle()}
              >
                <Usa />
              </button>
            )}
          </LangSwitcher> */}
        </Desktop>
      </Container>
    </Header>
  );
};

export default dynamic(() => Promise.resolve(HeaderComponent), {
  ssr: false,
});
