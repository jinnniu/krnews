import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavBar from "../components/navbar";
import Loader from "../components/Loader";
import useSWR from "swr";
import "react-responsive-modal/styles.css";
import ModalContainer from "../components/ModalContainer";
// import { Modal } from "react-responsive-modal";

const Container = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.1rem;
  padding: 3rem;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  a {
    font-size: 1.3rem;
  }
`;

const WindowBar = styled.div`
  position: absolute;
  background-color: #f2f2f2;
  width: 100%;
  height: 30px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 5px;
  top: 0;
  div {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    &:nth-child(1) {
      background-color: #ffa0a0;
    }
    &:nth-child(2) {
      background-color: #ffe2a0;
    }
    &:nth-child(3) {
      background-color: #9ce58c;
    }
  }
`;

//animation
const ItemVariants = {
  normal: {
    // scale: 1,
    filter: "blur(0px)",
  },
  hover: {
    // scale: 1.3,
    filter: "blur(7px)",
    transition: { delay: 0.1, type: "spring" },
  },
};

const NewsItem = styled(motion.div)``;
const NewsTitle = styled(motion.a)``;

interface Newsinterface {
  totalResults: number;
  articles: NewsDetailInterface[];
}
interface NewsDetailInterface {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string | number;
}

const Home: NextPage = () => {
  const [entertainment, setEntertainment] = useState<Newsinterface>();
  const [business, setBusiness] = useState<Newsinterface>();
  const [health, setHealth] = useState<Newsinterface>();
  const [science, setScience] = useState<Newsinterface>();
  const [sports, setSports] = useState<Newsinterface>();
  const [technology, setTechnology] = useState<Newsinterface>();
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [data, setData] = useState({ titleArti: "", urlArti: "" });
  // console.log(data);
  useEffect(() => {
    (async () => {
      const entertainment = await (await fetch(`/api/entertainment`)).json();
      const business = await (await fetch(`/api/business`)).json();
      const health = await (await fetch(`/api/health`)).json();
      const science = await (await fetch(`/api/science`)).json();
      const sports = await (await fetch(`/api/sports`)).json();
      const technology = await (await fetch(`/api/technology`)).json();
      setBusiness(business);
      setEntertainment(entertainment);
      setHealth(health);
      setScience(science);
      setSports(sports);
      setTechnology(technology);
      setLoading(false);
    })();

    // SetInterval
    const interval = setInterval(() => {}, 10);
    return () => clearInterval(interval);
  }, [position]);

  // const [selectedArticle, setSelectedArticle] = useState(false);
  // const onClickArticle = (e: any) => {
  //   const article = e.target.getAttribute("data-article");
  //   console.log(article);
  //   setSelectedArticle(true);
  // };

  // // Modals
  // const [open, setOpen] = useState(false);
  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => {
  //   router.push("/");
  //   setOpen(false);
  // };

  // make the page for Error situation
  const { error } = useSWR(entertainment, setEntertainment);
  if (error)
    return (
      <Loader text="Sorry, the web is closed because of too many requests<br/>Please visit us a few hours later" />
    );

  return (
    <>
      {loading ? (
        <>
          <Loader text="Loading..." />
        </>
      ) : (
        <>
          <NavBar />
          <Container>
            <WindowBar>
              <div></div>
              <div></div>
              <div></div>
            </WindowBar>

            {entertainment?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}
            {business?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}
            {health?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}
            {science?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}
            {sports?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}
            {technology?.articles.map((news) => (
              <>
                <NewsItem
                  key={news.publishedAt}
                  whileHover="hover"
                  initial="normal"
                  variants={ItemVariants}
                  onClick={() => {
                    setData({ titleArti: news.title, urlArti: news.url });
                  }}
                >
                  <Link
                    href={`/?articles=${news.publishedAt}?title=${news.title}`}
                    as={`/articles/${news.publishedAt}`}
                  >
                    <NewsTitle
                      style={{
                        color: `hsla(${Math.random() * 360}, 85%, 50%, 1)`,
                        // fontSize: `${Math.random() * 50 + 1}rem`,
                      }}
                    >
                      {news.title.slice(1, 2) !== " "
                        ? news.title.slice(1, 2)
                        : news.title.slice(3, 4)}
                    </NewsTitle>
                  </Link>
                </NewsItem>
                {news.url === data.urlArti ? (
                  <ModalContainer
                    titleArticle={data.titleArti}
                    urlArticle={data.urlArti}
                  />
                ) : null}
              </>
            ))}

            {/* <Modal
              open={open}
              onClose={onCloseModal}
              center
              styles={modalStyles}
            >
              <ModalContainer
                titleArticle={data.titleArti}
                urlArticle={data.urlArti}
              />
            </Modal> */}
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
