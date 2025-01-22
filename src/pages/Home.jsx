import About from "../components/home/About";
import Choose from "../components/home/Choose";
import Client from "../components/home/Client";
import Contact from "../components/home/Contact";
import Inquire from "../components/home/Inquire";
import Intro from "../components/home/Intro";
import Service from "../components/home/Service";

const Home = () => {
  return (
    <div id="home">
        <section id="intro" className="grid grid-cols-2">
            <Intro />
        </section>
        <section id="about" className="grid grid-cols-2">
            <About />
        </section>
        <section id="choose" className="grid grid-cols-2">
            <Choose />
        </section>
        <section id="contact" className="grid grid-cols-2">
            <Contact />
        </section>
        <section id="service" className="grid">
            <Service />
        </section>
        <section id="inquire" className="flex">
            <Inquire />
        </section>
        <section id="client" className="flex">
            <Client />
        </section>
    </div>
  );
};

export default Home;
