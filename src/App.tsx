import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pb-8 pr-4">
        <div className="w-12/12 h-2 bg-gray-400 dark:bg-gray-200"></div>
      </div>
      <Hero />
    </>
  );
}

export default App;
