import Testimonials from "./components/Testimonials/Testimonials";
import Principles from "./components/Principles/Principles";
import Results from "./components/Results/Results";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Form from "./components/Form/Form";
import Map from "./components/Map/Map";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Stats /> */}
        {/* <Testimonials /> */}
        <Map />
        {/* <Team /> */}
        <Principles />
        <Results />
        <Form />
      </main>
      <Footer />
    </>
  );
}
