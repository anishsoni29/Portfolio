import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anish Soni",
  initials: "AS",
  url: "https://anishsoni.in",
  location: "Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Tech innovator, finance enthusiast, a seasoned backpacker and storyteller turning ideas into impact.",
  summary:
    "I started in sports, playing cricket competitively, before shifting to tech inspired by creators like MKBHD. Pursuing engineering, I discovered my love for building and problem-solving, working with a dozen startups in college. A state Mathematical Genius awardee, I’m passionate about travel, innovation, and entrepreneurship, with finance as a solid fallback.",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Firebase",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "AWS",
    "MATLAB",
    "C++",
    "Figma",
    "Notion"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume_anish_soni.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "sonianish441@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anishsoni29",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anishsoni/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anishhsoni",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sonianish441@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CoReCo Technologies Private Limited",
      href: "https://corecotechnologies.com/",
      badges: [],
      location: "Pune, India",
      title: "Software Engineer Intern",
      logoUrl: "/coreco.png",
      start: "February 2025",
      end: "ongoing",
      description:
        "Developing an Audible-like platform, building a responsive frontend and designing scalable APIs to support 100K+ users and millions of audio streams, ensuring high performance and seamless user experience.",
    },
    {
      company: "Defence Research & Development Organisation",
      href: "https://www.drdo.gov.in/drdo/labs-and-establishments/institute-systems-studies-analyses-issa",
      badges: [],
      location: "Delhi, India",
      title: "Software Engineer Intern",
      logoUrl: "/drdo.webp",
      start: "January 2025",
      end: "ongoing",
      description:
        "Developing and implementing quantitative models for military operations research using MATLAB and Python, focusing on optimization, simulation, and decision analysis.",
    },
     {
      company: "Medihut",
      href: "https://medihut.in/",
      badges: [],
      location: "India",
      title: "Co-Founder and Tech lead",
      logoUrl: "/medihut.png",
      start: "February 2025",
      end: "July 2025",
      description:
        "Driving the design and development of a digital-first medicine delivery ecosystem for underserved regions in Bihar. Building an end-to-end platform inspired by Blinkit, to ensure timely and affordable access to healthcare essentials."
    },
    {
      company: "The Mainstreet Marketplace",
      href: "https://marketplace.mainstreet.co.in/",
      badges: [],
      location: "Mumbai, India",
      title: "Project Manager",
      logoUrl: "/mnst.jpg",
      start: "December 2024",
      end: "January 2025",
      description:
        "Spearheaded the development of a custom CRM system, integrating automation and analytics to streamline content workflows, reduce post-production time by 30%, and enhance operational efficiency by 40%.",
    },
    {
      company: "Device Doctor",
      href: "https://devicedoctorindia.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/device_doctor.svg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Developed a scalable university portal using React, Node.js, and AWS with Docker, integrating a CI/CD pipeline via Jenkins for seamless deployment.",
    },
    {
      company: "InfiniTechLtd",
      badges: [],
      href: "https://www.linkedin.com/company/infinitechltd/posts/?feedView=all",
      location: "Mauritius, Africa",
      title: "Software Engineer",
      logoUrl: "/infini.svg",
      start: "May 2024",
      end: "July 2024",
      description:
        "Developed an API for automatic payment fetching with Ruby on Rails and integrated it into the mobile app. Optimized application performance, reducing processing time by 15%. Deployed a React-based company website on a private cloud using Docker.",
    },
    {
      company: "Buildspace",
      href: "https://buildspace.so",
      badges: [],
      location: "Remote",
      title: "Apprentice",
      logoUrl: "/buildspace.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "As an apprentice at Buildspace, I worked on real-world projects, diving deep into product design, which helped me discover my passion for it.",
    },
    {
      company: "Roll The Mic",
      href: "https://www.linkedin.com/company/roll-the-mic/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/rtm.jpeg",
      start: "December 2022",
      end: "February 2023",
      description:
        "Started as a personal project to learn from diverse connections, I hosted conversations with people from varied backgrounds, eventually sharing them on platforms like Spotify, Apple Music, Overcast, and Google Podcasts.",
    },
    {
      company: "Zizzy",
      href: "https://zizzy.in/",
      badges: [],
      location: "Remote",
      title: "Business Developer",
      logoUrl: "/zizzy.png",
      start: "September 2022",
      end: "October 2022",
      description:
        "Led a project to overhaul the website, developed content strategies, managed the database and team, and secured new clients.",
    },
  ],
  education: [

    {
      school: "Delhi Public School",
      href: "https://dpsjodhpur.org",
      degree: "Senior High School - PCM",
      logoUrl: "/dps.webp",
      start: "2018",
      end: "2020",
    },
    {
      school: "Rajasthan Technical University",
      href: "https://www.rtu.ac.in/index/",
      degree: "Bachelor's Degree of Technology in Computer Science (B.Tech)",
      logoUrl: "/rtu.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "National Institute of Electronics & Information Technology (NIELIT) ",
      href: "https://nielit.gov.in/",
      degree: "Training in Data Science & Machine Learning",
      logoUrl: "/nielit_logo.jpg",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Thrifty",
      href: "https://thrifty.buzz",
      dates: "July 2024 - September 2024",
      active: true,
      description:
        "Developed a specialized marketplace platform for university students using Next.js and Node.js. Inspired by the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I integrated a bot to generate personalized user profiles. Implemented responsive UI components using Acertinity UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Acertinity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://thrifty.buzz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-1ae671ab440b48c5a714d86c9002d0bf.r2.dev/thrifty.mov",
    },
    {
      title: "Lumen",
      href: "https://speech-interface.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a memory-driven AI assistant with Gemini 1.5 Pro, using NLP and speech recognition to answer queries. Integrated a Raspberry Pi 4 with a webcam and microphone for real-time processing of visual and auditory data.",
      technologies: [
        "React",
        "Javascript",
        "Firebase",
        "TailwindCSS",
        "Python",
        "Google Cloud"
      ],
      links: [
        {
          type: "Website",
          href: "https://speech-interface.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anishsoni29/lumen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Macromate",
      href: "https://github.com/anishsoni29/macromate",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Javascript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Razorpay",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anishsoni29/macromate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Blissful Moments",
      href: "https://blissful-moments.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Built a candle-selling platform using React, Node.js, and MongoDB, focusing on user experience and sales. Utilized React hooks for state management and Redux to streamline user interactions.",
      technologies: [
        "React.js",
        "Javascript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://blissful-moments.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anishsoni29/blissful_moments",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-1ae671ab440b48c5a714d86c9002d0bf.r2.dev/blissful.mov",

    },
  ],
  hackathons: [
    {
      title: "0-100 Full Stack Web Development Course",
      dates: "October 1, 2024",
      location: "100xDevs",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "/100x.jpeg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anishsoni29/MERN-COHORT",
        },
        {
          title: "Certification",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/anishsoni/overlay/1726499725394/single-media-viewer/?profileId=ACoAABtYr_0BRDUI4s4FdDjDMfc8y_6F1FixspQ",
        },
      ],
    },
    {
      title: "IIT-J Hackathon 2022",
      dates: "September 15th - 17th, 2022",
      location: "Indian Institute of Technology, Jodhpur",
      description:
        "Runner up for the pre-final round where we developed an AI Pulmonary Assistant.",
      image:
        "/iitj.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anishsoni29/Pulmones",
        },
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://pulmones-client.vercel.app/",
        },
        {
          title: "Certification",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/anishsoni/details/certifications/",
        },
      ],
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      dates: "August 05, 2023",
      location: "National Institute of Electronics & Information Technology (NIELIT)",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "/nielit_logo.jpg",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anishsoni29/major-projects",
        },
        {
          title: "Certification",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/anishsoni/details/certifications/1635542958390/single-media-viewer/?profileId=ACoAABtYr_0BRDUI4s4FdDjDMfc8y_6F1FixspQ",
        },
      ],
    },
    {
      title: "PCAP: Programming Essentials in Python",
      dates: "September 9, 2023",
      location: "OpenEDG Python Institute",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "/pcap.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anishsoni29/Python_Projects",
        },
        {
          title: "Certification",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://sepolia.etherscan.io/tx/0x8a678ca08eabd120ba82228bf015018c792cb31895b9361e68a1a205a5baa075",
        },
      ],
    },
    {
      title: "AR VR Game Development using Unity",
      dates: "July 15, 2023",
      location: "Ministry of Electronics and Information Technology",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "/ministryTech.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anishsoni29/earthwatch",
        },
      ],
    },
  ],
} as const;
