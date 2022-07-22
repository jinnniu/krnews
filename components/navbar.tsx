import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin: 1.4rem;
  border-radius: 1rem;
  background-color: #fffefe;
  border: 0.15rem solid #000000;
  a {
    color: #000000;
    text-align: center;
  }
  .active {
    color: red;
  }
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <Footer as="nav">
      {/* <Link href="https://www.instagram.com/jinnni_u/">
        <a>Design &amp; Development by Jinnniu</a>
      </Link> */}
      {/* <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""}>Home</a>
      </Link> */}
      <Link href="/about">
        <a className={router.pathname == "/about" ? "active" : ""}>i</a>
      </Link>
    </Footer>
  );
}
