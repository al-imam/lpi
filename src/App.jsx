import Head from "./components/Head";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
