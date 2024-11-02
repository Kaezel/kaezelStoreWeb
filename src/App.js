import { useEffect } from "react";
import "./App.css";
import { Pages } from "./components/pages/Pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router basename="/kaezelStoreWeb">
      <Pages />
    </Router>
  );
}

export default App;
