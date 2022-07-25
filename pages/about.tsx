import styled from "styled-components";

// const randomColors = "#" + Math.floor(Math.random() * 16777215).toString(16);

const Content = styled.div``;

export default function About() {
  return (
    <Content>
      <p>About</p>
      <p>
        당신은 가끔 또는 자주 자신이 원하는 정보만을 습득하곤 하나요? 기존에
        관심있게 보았던 정보를 기반으로 알고리즘은 그와 연관된 정보만을 보여주고
        그 외의 것들은 보지 못하게 됩니다.
      </p>
      <p>info</p>
    </Content>
  );
}
