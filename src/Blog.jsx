import QuickInfosHeader from "./QuickInfosHeader";
import Nav from "./Nav";
import Article from "./Article";
import styles from "./blog.module.css";
import { apiMibiProducts } from "./API/apiMibiProducts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { array } from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Blog() {
  const [articleLoader, setArticleLoader] = useState("false");
  const [articleData, setArticleData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // let pageNumber = 1;
  useEffect(
    function () {
      apiMibiProducts(
        "blogs",
        setArticleLoader,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        pageNumber
      ).then((data) => setArticleData(data));
      window.scrollTo({ top: 0, left: 0 });
    },
    [pageNumber]
  );

  const totalArticles = 4;
  const articlePerPage = 3;
  const totalPages = Math.ceil(totalArticles / articlePerPage);

  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"absolute"} tp={"30px"} bc={"white"} />
      <div style={{ paddingTop: "160px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "200",
            marginTop: "0px",
          }}
        >
          Blogs
        </h2>

        {articleLoader ? (
          <div
            style={{
              height: "20vh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faSpinner}
              style={{ fontSize: "30px" }}
              spin
            />
          </div>
        ) : (
          articleData?.map((data) => (
            <Link
              to={`/blogs/${data.id}`}
              key={data.title}
              style={{ textDecoration: "none" }}
            >
              <Article data={data} />
            </Link>
          ))
        )}
        {/* <div className={styles.pagination}>
         
          {Array.from({ length: totalPages }, (_, i) => (
            <p
              className={`${i + 1 === pageNumber ? styles.active : ""}`}
              key={i}
              onClick={() => setPageNumber(i + 1)}
            >
              {i + 1}
            </p>
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
