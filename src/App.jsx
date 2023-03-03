import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@context/AuthContext";
import Public from "@routes/Public";
import data from "@app/data";
import ScrollToTop from "@util/ScrollToTop";

import Architectural from "@department/Architectural/Architectural";
import Civil from "@department/Civil/Civil";
import Computer from "@department/Computer/Computer";
import Departments from "@department/Departments";
import Electrical from "@department/Electrical/Electrical";
import Electronics from "@department/Electronics/Electronics";

const Loader = lazy(() => import("@components/Loader/Loader"));
const Footer = lazy(() => import("@components/Footer/Footer"));
const Head = lazy(() => import("@components/Head/Head"));
const Contact = lazy(() => import("@pages/Contact/Contact"));
const Syllabus = lazy(() => import("@pages/Syllabus/Syllabus"));
const Links = lazy(() => import("@components/Links/Links"));
const Section = lazy(() => import("@components/Section/Section"));
const NewsOrNotice = lazy(() => import("@pages/NewsOrNotice/NewsOrNotice"));
const Login = lazy(() => import("@pages/Login/Login"));
const Admin = lazy(() => import("@pages/Admin/Admin"));
const About = lazy(() => import("@pages/About/About"));
const Home = lazy(() => import("@pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Head />
        <ScrollToTop />
        <Routes>
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/departments"
            element={
              <Suspense fallback={<Loader />}>
                <Departments />
              </Suspense>
            }
          />
          <Route
            path="/departments/computer-technology"
            element={<Computer />}
          />
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
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/syllabus/computer"
            element={
              <Suspense fallback={<Loader />}>
                <Syllabus department="computer" />
              </Suspense>
            }
          />
          <Route
            path="/syllabus/civil"
            element={
              <Suspense fallback={<Loader />}>
                <Syllabus department="civil" />
              </Suspense>
            }
          />
          <Route
            path="/syllabus/electrical"
            element={
              <Suspense fallback={<Loader />}>
                <Syllabus department="electrical" />
              </Suspense>
            }
          />
          <Route
            path="/syllabus/architecture"
            element={
              <Suspense fallback={<Loader />}>
                <Syllabus department="architecture" />
              </Suspense>
            }
          />
          <Route
            path="/syllabus/electronics"
            element={
              <Suspense fallback={<Loader />}>
                <Syllabus department="electronics" />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<Loader />}>
                <NewsOrNotice location="News And Event" collectionRef="news" />
              </Suspense>
            }
          />
          <Route
            path="/notice"
            element={
              <Suspense fallback={<Loader />}>
                <NewsOrNotice location="Notice" collectionRef="notice" />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/admin/login"
            element={
              <Public path="/admin">
                <Suspense fallback={<Loader />}>
                  <Login />
                </Suspense>
              </Public>
            }
          />
        </Routes>
        <Section>
          <Suspense fallback={<Loader />}>
            <Links
              array={data}
              heading="Related links"
              font="english"
              fallback="No links available"
            />
          </Suspense>
        </Section>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
