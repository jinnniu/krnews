import randomColor from "randomcolor";
import styled from "styled-components";

let colors = randomColor({ luminosity: "light", hue: "blue" });

// const randomColors = "#" + Math.floor(Math.random() * 16777215).toString(16);

const Content = styled.div`
  p &:nth-child(n) {
    color: ${colors};
  }
`;

export default function About() {
  return (
    <Content>
      <p>About</p>
      <p>info</p>
    </Content>
  );
}
