import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Head";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
