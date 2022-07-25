import { useRouter } from "next/router";
import ModalContainer from "../../components/ModalContainer";

export default function ArticlesId() {
  const router = useRouter();
  // console.log({
  //   query: router.query,
  //   router: router,
  // });

  const query = router.query;
  const titleArticle = query.title;
  const urlArticle = query.url;

  return (
    <>
      <ModalContainer titleArticle={titleArticle} urlArticle={urlArticle} />
    </>
  );
}
