import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import TopTrends from "./components/TopTrends";
import AmazingFeatures from "./components/AmazingFeatures";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <TopBanner />
      <TopTrends />
      <AmazingFeatures />
      <Footer />
    </>
  );
}

export default App;
