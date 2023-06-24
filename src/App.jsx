import Testimonials from "./components/Testimonials/Testimonials";
import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import Hero from "./components/Hero/Hero";
import Map from "./components/Map/Map";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <Map />
      </main>
    </>
  );
}
