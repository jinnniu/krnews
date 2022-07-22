import { useRouter } from "next/router";
import { useEffect } from "react";
import ModalContainer from "../../components/ModalContainer";

export default function ArticlesId() {
  const router = useRouter();
  console.log({
    query: router.query,
    router: router,
  });

  const query = router.query;
  const titleArticle = query.title;
  const urlArticle = query.url;

  // if (Array.isArray(router.query.params)) {
  //   const urlarr = router.query.params;
  //   const articlesurl = urlarr?.slice(1, 10).join("/");
  //   console.log(articlesurl);
  // }

  return (
    <>
      <ModalContainer titleArticle={titleArticle} urlArticle={urlArticle} />
    </>
  );
}
