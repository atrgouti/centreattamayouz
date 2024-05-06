import styles from "./article.module.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Article({ data }) {
  function truncatedDescription(description, maxLength) {
    if (description.length < maxLength) {
      return <p>{description}</p>;
    }

    const truncatedText = description.substring(0, maxLength) + "...";
    return <p>{truncatedText}</p>;
  }

  return (
    <div className={styles.article}>
      <img src={data.image} className={styles.cover} alt="" />
      <div className={styles.title} style={{ paddingTop: "10px" }}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.articleInfos} style={{ padding: "10px 0px" }}>
        <p>{data.created_at.slice(0, 10)}</p>
      </div>
      <div className={styles.description}>
        {truncatedDescription(data.description, 400)}
      </div>
      <button className={styles.readMore}>READ MORE</button>
    </div>
  );
}

export default Article;
