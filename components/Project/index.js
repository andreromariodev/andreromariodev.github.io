import { Project, Title } from "./style";

import Link from "next/link";

const index = (props) => {
  const src = props.project.src;
  const url = props.project.url;
  const title = props.project.title;

  return (
    <Link href={url} title={title} target="_blank" rel="noopener noreferrer">
      <Project>
        <Title>{title}</Title>
        <figure>
          <img loading="lazy" alt={`Foto do ${title}`} src={src} />
        </figure>
      </Project>
    </Link>
  );
};

export default index;
