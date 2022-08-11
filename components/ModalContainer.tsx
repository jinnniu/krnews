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
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  z-index: 100;
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
  background-color: #f2f2f2;
  border-radius: 20px 20px 0px 0px;
`;

const ExtraInfo = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  left: 0;
  padding-left: 1.5rem;
`;

const OriginalLink = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #85acf6;
  text-align: center;
  a {
    color: #ffff;
  }
`;

const GoingBefore = styled.a`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #ffa0a0;
`;

export default function ModalContainer({ titleArticle, urlArticle }: INews) {
  const [promise, setPromise] = useState(true);
  const onSetPromise = () => setPromise(false);
  const [modal, setModal] = useState(true);
  const onSetModal = () => setModal(false);
  return (
    <>
      {modal ? (
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
                    <GoingBefore onClick={onSetModal} />
                  </Link>
                  <Link href={urlArticle}>
                    <OriginalLink
                      onClick={() => {
                        setPromise(false);
                      }}
                    />
                  </Link>
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
      ) : null}
    </>
  );
}

// export const modalStyles = {
//   overlay: { background: "rgba(0,0,0,0.3)" },
//   modal: {
//     width: "100%",
//   },
// };
