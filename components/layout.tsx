import Head from "next/head";
import NavBar from "./navbar";
import { NextPage } from "next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Layout: NextPage = ({}) => {
  return (
    <Wrapper>
      <Head>
        <title>KR News</title>
      </Head>
      <NavBar />
      <div></div>
    </Wrapper>
  );
};

export default Layout;
