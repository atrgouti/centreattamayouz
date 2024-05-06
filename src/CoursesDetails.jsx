import Nav from "./Nav";
import QuickInfosHeader from "./QuickInfosHeader";
import germanflag from "/german.jpg";
import styles from "./coursesdetails.module.css";
import Footer from "./Footer";
import selectcourses from "./API/selectcourses";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CoursesDetails() {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(function () {
    async function getmydata() {
      const red = await selectcourses(name);
      setData(red[0]);
    }
    getmydata();
  }, []);

  console.log(data);
  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"absolute"} tp={"30px"} bc={"white"} />
      <img
        src={data.image}
        style={{ width: "100%", marginTop: "150px" }}
        alt=""
      />
      <h1 style={{ textAlign: "center", margin: "20px" }}>{data.name}</h1>
      <div className={styles.coursedetails}>
        <div className={styles.description}>
          <h2 className={styles.title}>Course Overview:</h2>
          <p>
            This German course is designed to take students from intermediate
            (B1) to upper-intermediate (B2) proficiency levels in the German
            language. The curriculum emphasizes practical communication skills,
            grammar mastery, and cultural insights.
          </p>
          <h2 className={styles.title}>Course Structure:</h2>
          <ul>
            <li>
              <b>Duration:</b> The B1 level course spans 6 months, with classes
              held three times a week. The B2 level course extends over 9
              months, maintaining the same schedule.
            </li>
            <li>
              <b>Class Schedule:</b> Classes are conducted on Mondays,
              Wednesdays, and Thursdays, providing students with consistent
              learning opportunities.
            </li>
            <li>
              <b>Session Length:</b> Each session lasts 2 hours, allowing for
              focused instruction and interactive learning activities.
            </li>
          </ul>
          <h2 className={styles.title}>Instructor Profile:</h2>
          <p>
            Khalid Boudnot, our experienced German language instructor, brings a
            wealth of teaching expertise and cultural knowledge to the
            classroom. Khalid is dedicated to guiding students towards language
            proficiency and fostering a supportive learning environment.
          </p>
          <h2 className={styles.title}>Instructor Profile:</h2>
          <p>
            The monthly fee for this German course is 500 DH. Payment can be
            made monthly, and discounts may be available for upfront payment for
            the entire course duration.
          </p>
        </div>
        <div className={styles.detel}>
          <h1 style={{ textAlign: "center", padding: "15px" }}>
            Course Details
          </h1>
          <ul>
            <li>
              <b>Level:</b> {data.levels}
            </li>
            <li>
              <b>FEE:</b> {data.price} DH per month
            </li>
            <li>
              <b>Teacher:</b> Khalid Boudnot
            </li>
            <li>
              <b>Schedule:</b> 3 times per week (Monday, Wednesday, Thursday)
            </li>
            <li>
              <b>Duration:</b> 2 hours per session
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CoursesDetails;
