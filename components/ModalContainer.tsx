import Link from "next/link";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import styled from "styled-components";
import PromiseContainer from "./PromiseContainer";

interface INews {
  titleArticle: any;
  urlArticle: any;
}

const ModalDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  width: 80%;
  height: 80%;
  top: 0;
  margin: auto 0;
  bottom: 0;
  align-items: center;
  border: solid 3px #000000;
  p {
    color: #000000;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ExtraInfo = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  left: 0;
  padding-left: 1rem;
`;

const OriginalLink = styled.div`
  width: auto;
  height: auto;
  background-color: #000000;
  text-align: center;
  a {
    color: #ffff;
  }
`;

const GoingBefore = styled.a`
  width: 1rem;
  height: 1rem;
  text-align: center;
`;

export default function ModalContainer({ titleArticle, urlArticle }: INews) {
  const [promise, setPromise] = useState(true);
  const onSetPromise = () => setPromise(false);
  return (
    <ModalDiv>
      {promise ? (
        <>
          <PromiseContainer onSetPromise={onSetPromise} />
        </>
      ) : (
        <>
          <ModalHeader>
            <p>{titleArticle}</p>
            <ExtraInfo>
              <Link href="/">
                <GoingBefore>X</GoingBefore>
              </Link>
              <OriginalLink>
                <a href={urlArticle} target="_blank" rel="noreferrer">
                  orin
                </a>
              </OriginalLink>
            </ExtraInfo>
          </ModalHeader>
          {urlArticle.includes("https://www.youtube.com/") ? (
            <iframe src={urlArticle.replace("watch?v=", "embed/")} />
          ) : (
            <iframe src={urlArticle} />
          )}
        </>
      )}
    </ModalDiv>
  );
}

// export const modalStyles = {
//   overlay: { background: "rgba(0,0,0,0.3)" },
//   modal: {
//     width: "100%",
//   },
// };
