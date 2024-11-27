import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import { enUS, ptBR } from "../../../../translations";
import Container from "../../../Container";

import Brazil from "../../../../assets/svg/Brazil.svg";
import Usa from "../../../../assets/svg/Usa.svg";
import Trigram from "../../../../assets/svg/Trigram.svg";

import {
  Desktop,
  LangSwitcher,
  MobileToggle,
  Header,
  Menu,
  MenuItem,
} from "./style";

const index = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "pt" ? ptBR : enUS;

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
            <LangSwitcher className="showMobile">
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
            </LangSwitcher>

            <button
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            >
              <Trigram />
            </button>
          </div>
        </MobileToggle>

        <Desktop>
          <Menu className={mobileMenu ? "-active" : ""}>
            <MenuItem>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="#about">
                {t.about}
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => setMobileMenu(!mobileMenu)}
                href="#professional-experience"
              >
                {t.professional_experience}
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="#academic">
                {t.academic}
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="#mainstacks">
                {t.stacks}
              </a>
            </MenuItem>
            <MenuItem>
              <a onClick={() => setMobileMenu(!mobileMenu)} href="#portfolio">
                {t.portfolio}
              </a>
            </MenuItem>
            <MenuItem>
              <a href="mailto:andreromario@live.com">{t.contact}</a>
            </MenuItem>
          </Menu>

          <LangSwitcher className="hideMobile">
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
          </LangSwitcher>
        </Desktop>
      </Container>
    </Header>
  );
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
