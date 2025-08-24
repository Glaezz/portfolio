import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fieza Rausyan Al Ghifari",
  initials: "FR",
  url: "https://fieza.my.id",
  location: "Surabaya, Indonesia",
  locationLink: "https://www.google.com/maps/place/surabaya",
  description:
    "Computer science student and Software engineer. I love building things and helping people. Skilled in fullstack development and interested in the world of AI and Web3.",
  summary:
    "I'am a student at SMK Negeri 2 Surabaya majoring in Software Engineering and have just been accepted into a State University through the National Selection Based on Achievement (SNBP) at the Electronic Engineering Polytechnic Institute of Surabaya in the Informatics Engineering program. I have internship experience as a Game Programmer, DevOps, and competition experience in the field of Web Development. I also have aspirations to work in Software Engineering, particularly in the fields of Backend Development and Machine Learning Engineering.",
  avatarUrl: "/fieza.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fiezarausyan@gmail.com",
    tel: "+6285295006927",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Glaezz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/FiezaGhifari/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nodev",
      href: "https://no-dev.netlify.app/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/companies/nodev.jpg",
      start: "Feb 2025",
      end: "Present",
      description:
        "",
    },
    {
      company: "SMK Negeri 2 Surabaya",
      href: "https://smkn2sby.sch.id/",
      badges: [],
      location: "Remote",
      title: "Student Mentor",
      logoUrl: "/companies/smekda.jpg",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Appointed by the school to be a mentor/coach for junior students in preparation for the Lomba Kompetensi Siswa (LKS) in Surabaya City in the field of Web Technologies. Provided technical guidance, competition strategies, and support during the competition process. Successfully led the team to achieve 3rd place in the competition. This achievement is part of my active contribution as a mentor in the school's IT Club, focusing on developing the potential and skills of the next generation.",
    },
    {
      company: "Gantara Studio",
      href: "https://gantarastudio.com",
      badges: ["Internship"],
      location: "Remote",
      title: "Game Developer",
      logoUrl: "/companies/airmedia.webp",
      start: "June 2024",
      end: "Dec 2024",
      description:
        "During my internship, I was involved in the development of AAA games using Unreal Engine and Unity, including the implementation of OOP and clean architecture, as well as performance optimization and gameplay AI. On the DevOps side, I built a solution for version control system using SVN to support team collaboration in a local network and large-scale projects, as well as handling the build and deployment processes for the games.",
    },
  ],
  education: [
    {
      school: "Electronics Engineering Polytechnic Institute of Surabaya (EEPIS)",
      href: "https://pens.ac.id/",
      degree: "Applied Bachelor's Degree, Informatics Engineering",
      logoUrl: "/schools/pens.jpg",
      start: "2025",
      end: "Present",
      description:
        "",
    },
    {
      school: "SMK Negeri 2 Surabaya",
      href: "https://smkn2sby.sch.id/",
      degree: "Vocational High School, Software Engineering",
      logoUrl: "/schools/smekda.jpg",
      start: "2022",
      end: "2025",
      description:
        "",
    },

  ],
  projects: [
    {
      title: "Okeconnect-php",
      href: "github.com/glaezz/okeconnect-php",
      dates: "Apr 2025 - June 2025",
      active: true,
      description:
        "Okeconnect-php is Unofficial php library for Okeconnect API. It is a simple and easy to use library for Okeconnect API.",
      technologies: [
        "laravel",
        "php"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/glaezz/okeconnect-php",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Digital-in",
      href: "https://digital.fieza.my.id",
      dates: "Nov 2024 - Feb 2025",
      active: true,
      description:
        "Digital-in is a platform allows user to buy digital products such as e wallet topup, game vouchers, and more. Built with decoupled architecture using Laravel and React.js.",
      technologies: [
        "React.js",
        "Laravel",
        "MySql",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://digital.fieza.my.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ConV",
      href: "",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "ConV is a platform that allows user to mass convert from text (.txt) to contact (.vcf) files. It is built using Laravel.",
      technologies: [
        "Laravel",
        "MySql",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "3rd Place | Information Technology - OlimpIT ARA 6.0 2025",
      dates: "January 13th, 2025",
      location: "Surabaya, Indonesia",
      description:
        "Secured third place in the Information Technology competition at OlimpIT ARA 6.0, which tests skills in cybersecurity, networking, and the Internet of Things.",
      image:
        "/competition/OlimpIT.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Finalist | Web Technologies - Indonesia Skills 2024",
      dates: "November 15th, 2024",
      location: "Surabaya, Indonesia",
      description:
        "Developed a web application with complex database and features and game on web based.",
      image:
        "/competition/inaskill.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "2nd Place | Web Technologies - LKS Kota Surabaya",
      dates: "January 15th, 2024",
      location: "Surabaya, Indonesia",
      description:
        "Developed a web application about local tourism in Surabaya, Indonesia. The application allows users to explore various historical sites, view details, and get directions.",
      image:
        "/competition/lks.png", 
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    
  ],
} as const;
