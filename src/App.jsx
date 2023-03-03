import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@context/AuthContext";
import Public from "@routes/Public";
import data from "@app/data";
import ScrollToTop from "@util/ScrollToTop";

const Architectural = lazy(() =>
  import("@department/Architectural/Architectural")
);
const Civil = lazy(() => import("@department/Civil/Civil"));
const Computer = lazy(() => import("@department/Computer/Computer"));
const Departments = lazy(() => import("@department/Departments"));
const Electrical = lazy(() => import("@department/Electrical/Electrical"));
const Electronics = lazy(() => import("@department/Electronics/Electronics"));
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
            element={
              <Suspense fallback={<Loader />}>
                <Computer />
              </Suspense>
            }
          />
          <Route
            path="/departments/civil-technology"
            element={
              <Suspense fallback={<Loader />}>
                <Civil />
              </Suspense>
            }
          />
          <Route
            path="/departments/electrical-technology"
            element={
              <Suspense fallback={<Loader />}>
                <Electrical />
              </Suspense>
            }
          />
          <Route
            path="/departments/architecture-technology"
            element={
              <Suspense fallback={<Loader />}>
                <Architectural />
              </Suspense>
            }
          />
          <Route
            path="/departments/electronics-technology"
            element={
              <Suspense fallback={<Loader />}>
                <Electronics />
              </Suspense>
            }
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
          <Route
            path="/news"
            element={
              <NewsOrNotice location="News And Event" collectionRef="news" />
            }
          />
          <Route
            path="/notice"
            element={<NewsOrNotice location="Notice" collectionRef="notice" />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/login"
            element={
              <Public path="/admin">
                <Login />
              </Public>
            }
          />
        </Routes>
        <Section>
          <Links
            array={data}
            heading="Related links"
            font="english"
            fallback="No links available"
          />
        </Section>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
