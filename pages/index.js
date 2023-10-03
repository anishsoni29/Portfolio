import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import anish from "../public/anish.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anish Soni's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:pfd-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Developed by Anish</h1>
            <ul className="flex items-center">
              <li className="dark:text-slate-50">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-[#AEC3AE] to-[#FAF1E4] text-white px-4 py-2 rounded-md ml-8"
                  href="/resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:text-white">
            <h2 className="text-5xl py-2 text-[#b7b499] font-medium md:text-6xl dark:text-[#CCC8AA]">
              Anish Soni
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Engineer | Designer | Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              A computer geek who is experimenting with Advanced Computing,
              Artificial intelligence, Machine learning, and Design.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 dark:text-gray-400">
            <a
              href="https://github.com/anishsoni29"
              div
              className="cursor-pointer text-black dark:text-white hover:scale-110 transition-transform"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anishsoni/"
              div
              className="cursor-pointer text-blue-600 hover:scale-110 transition-transform"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://twitter.com/anishsoni29"
              div
              className="cursor-pointer text-blue-400 hover:scale-110 transition-transform"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-text-[#CCC8AA] rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-white hover:scale-110 transition-transform">
            <Image src={anish} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl text-[#b7b499] mb-3 py-1 dark:text-[#CCC8AA]">
              Services
            </h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
              Working on <span className="text-[#b7b499]">Open Source </span>{" "}
              since the beginning of the adventure, and I'm currently extending
              my expertise in{" "}
              <span className="text-[#b7b499]">Artificial Intelligence</span>{" "}
              because, well, why not?
            </p>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
              I have also worked on{" "}
              <span className="text-[#b7b499]">Data Analysis</span> and{" "}
              <span className="text-[#b7b499]"> Map Designs</span> and have
              built some cool projects.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">Creating elegant designs.</p>
                <h4 className="py-4 text-[#b7b499]">Design Tools I use:</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Photoshop</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <Image src={code} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
                <p className="py-2">Producing refined code on a daily basis.</p>
                <h4 className="py-4 text-[#b7b499]">Domains:</h4>
                <p className="text-gray-800 py-1">Data Science</p>
                <p className="text-gray-800 py-1">Machine Learning</p>
                <p className="text-gray-800 py-1">Artificial Intelligence</p>
                <p className="text-gray-800 py-1">Statistics</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <Image src={consulting} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Brain - Storming
                </h3>
                <p className="py-2">Extra-curricular Interests!</p>
                <h4 className="py-4 text-[#b7b499]">Favourites:</h4>
                <p className="text-gray-800 py-1">Finance & Economics</p>
                <p className="text-gray-800 py-1">Fitness</p>
                <p className="text-gray-800 py-1">Ergonomics and Design</p>
                <p className="text-gray-800 py-1">
                  Bussiness & Political Case Studies
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl text-[#b7b499] py-1 my-2 dark:text-[#CCC8AA]">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              On my Github, you may find a variety of projects I developed to
              answer problems I experienced locally, including artificial
              intelligence-driven attendance systems, Python-based algorithmic
              trading, risk assessments, and numerous Figma designs.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <a class="hover:underline">Anish Soni</a>
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/anishsoni/"
                  class="hover:text-blue-500 mr-3"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/anishsoni29"
                  class="hover:text-green-300 mr-3"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/depolarised_/"
                  class="hover:text-pink-400 mr-3"
                >
                  Photography
                </a>
              </li>
              <li class="ml-2">
                <a
                  href="https://twitter.com/anishsoni29"
                  class="hover:text-blue-300 mr-3"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
