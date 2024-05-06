import QuickInfosHeader from "./QuickInfosHeader";
import Nav from "./Nav";
import styles from "./readarticle.module.css";
import ss from "/ausbildungg.jpg";
import selectblog from "./API/selectblog";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function ReadArticle() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(function () {
    async function getmydata() {
      const red = await selectblog(id);
      setData(red[0]);
    }
    getmydata();
  }, []);

  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"absolute"} tp={"30px"} bc={"white"} />
      <div className={styles.area}>
        <img src={ss} style={{ width: "100%", marginTop: "150px" }} alt="" />
        <h1 style={{ textAlign: "center", padding: "20px" }}>
          Ausbildung in germany
        </h1>
        <div className={styles.description}>
          <Markdown>{data.description}</Markdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReadArticle;
