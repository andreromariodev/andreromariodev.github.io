import { Project, Title, Button } from "./style";

import Link from "next/link";

const index = (props) => {
  const src = props.project.src;
  const url = props.project.url;
  const title = props.project.title;
  const description = props.project.description;

  return (
    <Project>
      <figure>
        <img loading="lazy" alt={`Foto do ${title}`} src={src} />
      </figure>
      <div>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>

        <Link href={url} title={title} target="_blank" rel="noopener noreferrer">
          <Button>Acessar</Button>
        </Link>
      </div>
    </Project>
  );
};

export default index;
