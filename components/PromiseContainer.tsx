import styled from "styled-components";

const PContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding: 0;
    margin: 0;
  }
  button {
    margin: 2rem;
    width: 3rem;
    border: none;
  }
`;

interface IPromise {
  onSetPromise: any;
}

export default function PromiseContainer({ onSetPromise }: IPromise) {
  return (
    <PContainer>
      <p>
        당신은 자신이 선택한 온라인 정보에 대해 책임을 지고 완독할 것을
        약속합니까?
      </p>
      <p>
        Do you take responsibility for completing the online information you
        choose?
      </p>
      <button onClick={() => onSetPromise()}>Yes</button>
    </PContainer>
  );
}
