import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "@components/Footer/Footer";
import Head from "@components/Head/Head";
import Loader from "@components/Loader/Loader";
import Architectural from "@department/Architectural/Architectural";
import Civil from "@department/Civil/Civil";
import Computer from "@department/Computer/Computer";
import Departments from "@department/Departments";
import Electrical from "@department/Electrical/Electrical";
import Electronics from "@department/Electronics/Electronics";
import Contact from "@pages/Contact/Contact";
import Lab from "@pages/Facility/Lab/Lab";
import Open from "@pages/Facility/Open/Open";
import Home from "@pages/Home/Home";
import Syllabus from "@pages/Syllabus/Syllabus";
import ScrollToTop from "@util/ScrollToTop";
import data from "@app/data";
import Links from "@components/Links/Links";
import Section from "@components/Section/Section";

const About = lazy(() => import("@pages/About/About"));

function App() {
  return (
    <BrowserRouter>
      <Head />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/computer-technology" element={<Computer />} />
        <Route path="/departments/civil-technology" element={<Civil />} />
        <Route
          path="/departments/electrical-technology"
          element={<Electrical />}
        />
        <Route
          path="/departments/architecture-technology"
          element={<Architectural />}
        />
        <Route
          path="/departments/electronics-technology"
          element={<Electronics />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/syllabus/computer"
          element={<Syllabus department="computer" />}
        />
        <Route
          path="/syllabus/civil"
          element={<Syllabus department="civil" />}
        />
        <Route
          path="/syllabus/electrical"
          element={<Syllabus department="electrical" />}
        />
        <Route
          path="/syllabus/architecture"
          element={<Syllabus department="architecture" />}
        />
        <Route
          path="/syllabus/electronics"
          element={<Syllabus department="electronics" />}
        />
        <Route path="/facilities/modern-lab" element={<Lab />} />
        <Route path="/facilities/open-library" element={<Open />} />
        <Route path="/news" element={<h1>news</h1>} />
        <Route path="/notice" element={<h1>notice</h1>} />
      </Routes>
      <Section>
        <Links data={data} font="english" />
      </Section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
