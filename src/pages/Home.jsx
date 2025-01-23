import About from "../components/home/About";
import Choose from "../components/home/Choose";
import Client from "../components/home/Client";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Inquire from "../components/home/Inquire";
import Service from "../components/home/Service";

const Home = () => {
  return (
    <div id="home">
        <section id="hero" className="grid grid-cols-2 max-lg:grid-cols-1">
            <Hero />
        </section>
        <section id="about" className="grid grid-cols-2 max-lg:grid-cols-1">
            <About />
        </section>
        <section id="choose" className="grid grid-cols-2 max-lg:grid-cols-1">
            <Choose />
        </section>
        <section id="contact" className="grid grid-cols-2 max-lg:grid-cols-1">
            <Contact />
        </section>
        <section id="service" className="grid">
            <Service />
        </section>
        <section id="inquire" className="flex text-white">
            <Inquire />
        </section>
        <section id="client" className="flex">
            <Client />
        </section>
    </div>
  );
};

export default Home;
