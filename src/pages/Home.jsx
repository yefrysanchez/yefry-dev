import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";


const Home = () => {
  return (
    <div className="text-slate-100">
      <Header />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
