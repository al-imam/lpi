import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Head from "./components/Head/Head";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
