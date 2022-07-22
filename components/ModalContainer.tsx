import Link from "next/link";
import "react-responsive-modal/styles.css";
import styled from "styled-components";

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
  align-items: center;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const OriginalLink = styled.a``;

const GoingBefore = styled.a`
  width: 1rem;
  height: 1rem;
  text-align: center;
  position: relative;
`;

export default function ModalContainer({ titleArticle, urlArticle }: INews) {
  return (
    <ModalDiv>
      <ModalHeader>
        <p>{titleArticle}</p>
        <OriginalLink href={urlArticle}>Orin</OriginalLink>
        <Link href="/">
          <GoingBefore>X</GoingBefore>
        </Link>
      </ModalHeader>
      {urlArticle.includes("https://www.youtube.com/") ? (
        <iframe src={urlArticle.replace("watch?v=", "embed/")} />
      ) : (
        <iframe src={urlArticle} />
      )}
      {/* <a href={urlArticle}>{urlArticle}</a> */}
    </ModalDiv>
  );
}

// export const modalStyles = {
//   overlay: { background: "rgba(0,0,0,0.3)" },
//   modal: {
//     width: "100%",
//   },
// };
