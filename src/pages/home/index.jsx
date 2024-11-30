import Banner from "./components/Banner";
import About from "./components/about";
import Topcourses from "./components/Topcourses";
import Courses from "./components/courses";
import Stories from "./components/stories";
import Questions from "./components/questions";
import Layout from "../../layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Topcourses />
      <Courses />
      <Stories />
      <Questions />
    </Layout>
  );
}

export default Home;
