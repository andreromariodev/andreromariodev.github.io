import { Container } from "./style";

const index = (props) => {
  return <Container className="container">{props.children}</Container>;
};

export default index;
