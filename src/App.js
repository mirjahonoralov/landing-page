import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Learn from "./pages/Learn";
import Questions from "./pages/questions/Questions";
import Instructors from "./pages/instroctors/Instructors";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Learn />
      <Questions />
      <Instructors />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
