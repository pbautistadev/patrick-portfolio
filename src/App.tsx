import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-2 bg-gradient-to-r from-gray-200 from-99% to-transparent to-99%"></div>
      <Hero />
      <Footer />
    </>
  );
}

export default App;
