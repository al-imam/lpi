export default {
  routes: [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Contact Us",
      path: "/contact",
    },
    {
      text: "About",
      path: "/about",
    },
  ],
  dropdown: [
    {
      text: "Departments",
      path: "/departments",
      routes: [
        {
          path: "/departments/computer-technology",
          text: "Computer Technology",
        },
        {
          path: "/departments/electrical-technology",
          text: "Electrical Technology",
        },
        {
          path: "/departments/civil-technology",
          text: "Civil Technology",
        },
        {
          path: "/departments/electronics-technology",
          text: "Electronics Technology",
        },
        {
          path: "/departments/architecture-technology",
          text: "Architecture Technology",
        },
      ],
    },
    {
      text: "Syllabus",
      path: "#",
      routes: [
        {
          path: "/syllabus/computer",
          text: "Computer Syllabus",
        },
        {
          path: "/syllabus/electrical",
          text: "Electrical Syllabus",
        },
        {
          path: "/syllabus/civil",
          text: "Civil Syllabus",
        },
        {
          path: "/syllabus/electronics",
          text: "Electronics Syllabus",
        },
        {
          path: "/syllabus/architecture",
          text: "Architecture Syllabus",
        },
      ],
    },
    {
      text: "Facilities",
      path: "#",
      routes: [
        {
          path: "/facilities/modern-lab",
          text: "Modern Lab",
        },
        {
          path: "/facilities/open-library",
          text: "Open Library",
        },
      ],
    },
  ],
};
