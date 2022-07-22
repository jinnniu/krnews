import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavBar from "../components/navbar";
import Loader from "../components/Loader";
import useSWR from "swr";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalContainer from "../components/ModalContainer";
// import ModalContainer, { modalStyles } from "../components/ModalContainer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  gap: 3rem;
  a {
    font-size: 1.5rem;
  }
`;

//animation
const ItemVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    transition: { delay: 0.1, type: "spring" },
  },
};

const NewsItem = styled(motion.div)`
  /* position: sticky;
  &:nth-child(2n) {
    bottom: 0;
  }
  &:nth-child(2n + 1) {
    top: 0;
  } */
`;

const NewsTitle = styled(motion.a)`
  /* position: absolute; */
`;

// const Articles = styled(motion.div)`
//   position: absolute;
//   width: 100%;
// `;

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
  const router = useRouter();
  // const { params } = router.query;
  // console.log({ params });
  const [entertainment, setEntertainment] = useState<Newsinterface>();
  const [business, setBusiness] = useState<Newsinterface>();
  const [health, setHealth] = useState<Newsinterface>();
  const [science, setScience] = useState<Newsinterface>();
  const [sports, setSports] = useState<Newsinterface>();
  const [technology, setTechnology] = useState<Newsinterface>();
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState({ titleArti: "", urlArti: "" });
  console.log(data);
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

  // const onArticles = () => {
  //   setIsActive((current) => !current);
  // };

  // const (event)=> {setData({titleArti: news.title, urlArti: news.url})} = (event: any) => {
  //   setData({ title: event.target.value, url: event.target.value });
  // };
  // console.log(data);

  // Modals
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    router.push("/");
    setOpen(false);
  };

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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
                    // href={{
                    //   pathname: `/?articles=${news.publishedAt}`,
                    //   query: data,
                    // }}
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
