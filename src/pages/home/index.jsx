import Layout from "../../layout";
import { Counter } from "../../store/Counter";
import Questions from "./components/questions";

function Home() {
  return (
    <Layout>
      {/* <Banner />
      <About />
      <Topcourses />
      <Courses />
      <Stories /> */}
      <Counter />
      <Questions />
    </Layout>
  );
}

export default Home;
