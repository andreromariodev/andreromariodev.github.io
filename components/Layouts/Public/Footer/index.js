// import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import { enUS, ptBR } from "../../../../translations";

import Container from "../../../Container";

import { Footer, LinkWhatsapp } from "./style";

import Nextjs from "../../../../assets/svg/Nextjs.svg";
import Whatsapp from "../../../../assets/svg/Whatsapp.svg";

const FooterComponent = (props) => {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "pt" ? ptBR : enUS;
  const t = enUS;

  let year = new Date().getFullYear();

  return (
    <>
      <Footer>
        <Container>
          <p>
            {t.development}: <Nextjs title="Next.js" /> - {year}
          </p>
        </Container>
      </Footer>

      <LinkWhatsapp href="https://wa.me/5511985204317" target="_blank" title={t.send_me_whatsapp}>
        <Whatsapp />
      </LinkWhatsapp>
    </>
  );
};

export default dynamic(() => Promise.resolve(FooterComponent), {
  ssr: false,
});
