import styled from "styled-components";

const Loading = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  p {
    color: black;
  }
`;

interface ILoader {
  text: string;
}

export default function Loader({ text }: ILoader) {
  return (
    <>
      <Loading>
        <p>{text}</p>
      </Loading>
    </>
  );
}
