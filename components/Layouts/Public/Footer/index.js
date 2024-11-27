import { useRouter } from "next/router";

import dynamic from "next/dynamic";

import { enUS, ptBR } from "../../../../translations";

import Container from "../../../Container";

import { Footer } from "./style";

import Nextjs from "../../../../assets/svg/Nextjs.svg";

const index = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? enUS : ptBR;

  let year = new Date().getFullYear();

  return (
    <Footer>
      <Container>
        <p>
          {t.development}: <Nextjs title="Next.js" /> - {year}
        </p>
      </Container>
    </Footer>
  );
};

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
