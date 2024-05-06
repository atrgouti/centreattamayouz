import Nav from "./Nav";
import QuickInfosHeader from "./QuickInfosHeader";
import OurCourses from "./OurCourses";
import Footer from "./Footer";
function Courses() {
  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"relative"} tp={"30px"} bc={"white"} />
      <OurCourses />
      <Footer />
    </div>
  );
}

export default Courses;
