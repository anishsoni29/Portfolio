import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import anish from "../public/anish.jpg";
import mac_img from "../public/mac.png";
import python_img from "../public/python.png";
import design_img from "../public/react.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anish Soni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./coding.png" />
      </Head>

      <main className="bg-zinc-950 h-full px-10 md:px-20 lg:pfd-40 text-white">
        <section className="min-h-screen pb-20">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Anish</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-green-600 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume_anish_soni.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 text-white">
            <h2 className="text-5xl py-2 text-[#b7b499] font-medium md:text-6xl dark:text-[#CCC8AA]">
              Anish Soni
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-white">
              Engineer | Designer | Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-400 md:text-xl max-w-xl mx-auto">
              Exploring the Alchemy of Technology where Advanced Computing,
              Artificial Intelligence, and Machine Learning Collide!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
            <a
              href="https://github.com/anishsoni29"
              target="_blank"
              div
              className="cursor-pointer text-white hover:scale-110 transition-transform"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anishsoni/"
              target="_blank"
              div
              className="cursor-pointer text-blue-600 hover:scale-110 transition-transform"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://twitter.com/anishsoni29"
              target="_blank"
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
            <a href="https://github.com/anishsoni29?tab=repositories">
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-10"
              >
                Projects
              </button>
            </a>

            <p className="text-md py-2 leading-8 text-white">
              🛠️ <span className="text-blue-400 ">Open Source </span> since the
              beginning of the adventure, and I'm currently extending my
              expertise in{" "}
              <span className="text-blue-400">Artificial Intelligence</span>{" "}
              because, well, why not?
            </p>
            <p className="text-md py-2 leading-8 text-white">
              🤖 I have also worked on{" "}
              <span className="text-blue-400">Generative AI</span> and{" "}
              <span className="text-blue-400"> Sound Engineering </span> and
              have built some astounding projects.
            </p>
            <p className="text-md py-2 leading-8 text-white ">
              🚀 Join me as I navigate through a tapestry of projects, each a
              testament to the fusion of art and science in the digital age.
              <br />
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="bg-gray-800 opacity-70 text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <div className="image-container">
                  <Image src={design_img} width={100} height={100} />
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2 text-white">
                  Beautiful Designs
                </h3>
                <p className="py-2">Creating elegant designs.</p>
                <h4 className="py-4 text-green-600">Design Tools I use:</h4>
                <p className="text-gray-500 py-1">Figma</p>
                <p className="text-gray-500 py-1">Canva</p>
                <p className="text-gray-500 py-1">Illustrator</p>
                <p className="text-gray-500 py-1">Photoshop</p>
              </div>
            </div>
            <div className="bg-gray-800 opacity-70 text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <Image src={python_img} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
                <p className="py-2">Producing refined code on a daily basis.</p>
                <h4 className="py-4 text-green-600">Domains:</h4>
                <p className="text-gray-500 py-1">Javascript</p>
                <p className="text-gray-500 py-1">Data Science</p>
                <p className="text-gray-500 py-1">Machine Learning</p>
                <p className="text-gray-500 py-1">Artificial Intelligence</p>
              </div>
            </div>
            <div className="bg-gray-800 opacity-70 text-center shadow-lg p-10 rounded-xl my-10 flex-1 hover:scale-110 transition-transform">
              <div className="flex flex-col items-center">
                <Image src={mac_img} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Brain - Storming
                </h3>
                <p className="py-2">Extra-curricular Interests!</p>
                <h4 className="py-4 text-green-600">Favourites:</h4>
                <p className="text-gray-500 py-1">Sports</p>
                <p className="text-gray-500 py-1">Finance & Economics</p>
                <p className="text-gray-500 py-1">Ergonomics and Design</p>
                <p className="text-gray-500 py-1">
                  Bussiness & Political Case Studies
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <a href="https://www.anishsoni.in/resume_anish_soni.pdf">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-10"
              >
                Portfolio
              </button>
            </a>

            <div className="text-md pb-4 pt-4 leading-8 text-gray-200">
              <div className="text-green-400">console.log</div>
              Thanks for diving into my digital world !; <br />
              Keep coding, keep creating, and let's innovate together !; <br />
            </div>
          </div>
        </section>
        <div class="container mx-auto">
          <footer class="bg-transparent hidden md:block ">
            <div class="w-full p-8 mx-auto">
              <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center">
                  <a class="hover:text-white" href="/">
                    © Anish Soni 2024
                  </a>
                  <a
                    class="ml-4 hover:text-white"
                    href="https://www.linkedin.com/in/anishsoni/details/certifications/"
                  >
                    Certifications
                  </a>
                </span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                  <a
                    href="https://twitter.com/anishsoni29"
                    class="text-gray-500 hover:text-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1762 3.75H19.9363L13.9063 10.6419L21.0001 20.0203H15.4457L11.0952 14.3324L6.11735 20.0203H3.35557L9.8053 12.6486L3.00012 3.75H8.69558L12.628 8.949L17.1762 3.75ZM16.2075 18.3683H17.7369L7.86454 5.31529H6.22332L16.2075 18.3683Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/nMkXkdm8"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.317 4.51641C18.7873 3.81453 17.147 3.29742 15.4319 3.00124C15.4007 2.99553 15.3695 3.00981 15.3534 3.03838C15.1424 3.4136 14.9087 3.90309 14.7451 4.28784C12.9004 4.01167 11.0652 4.01167 9.25832 4.28784C9.09465 3.89454 8.85248 3.4136 8.64057 3.03838C8.62449 3.01076 8.59328 2.99648 8.56205 3.00124C6.84791 3.29647 5.20756 3.81358 3.67693 4.51641C3.66368 4.52213 3.65233 4.53166 3.64479 4.54403C0.533392 9.19239 -0.31895 13.7265 0.0991801 18.2044C0.101072 18.2263 0.11337 18.2473 0.130398 18.2606C2.18321 19.7681 4.17171 20.6833 6.12328 21.2899C6.15451 21.2995 6.18761 21.2881 6.20748 21.2623C6.66913 20.6319 7.08064 19.9672 7.43348 19.2681C7.4543 19.2272 7.43442 19.1786 7.39186 19.1624C6.73913 18.9148 6.1176 18.6129 5.51973 18.2701C5.47244 18.2425 5.46865 18.1748 5.51216 18.1425C5.63797 18.0482 5.76382 17.9501 5.88396 17.851C5.90569 17.833 5.93598 17.8291 5.96153 17.8406C9.88928 19.6338 14.1415 19.6338 18.023 17.8406C18.0485 17.8282 18.0788 17.832 18.1015 17.8501C18.2216 17.9491 18.3475 18.0482 18.4742 18.1425C18.5177 18.1748 18.5149 18.2425 18.4676 18.2701C17.8697 18.6196 17.2482 18.9148 16.5945 19.1615C16.552 19.1777 16.533 19.2272 16.5538 19.2681C16.9143 19.9662 17.3258 20.6309 17.7789 21.2614C17.7978 21.2881 17.8319 21.2995 17.8631 21.2899C19.8241 20.6833 21.8126 19.7681 23.8654 18.2606C23.8834 18.2473 23.8948 18.2272 23.8967 18.2053C24.3971 13.0284 23.0585 8.53148 20.3482 4.54498C20.3416 4.53166 20.3303 4.52213 20.317 4.51641ZM8.02002 15.4778C6.8375 15.4778 5.86313 14.3922 5.86313 13.0589C5.86313 11.7256 6.8186 10.64 8.02002 10.64C9.23087 10.64 10.1958 11.7351 10.1769 13.0589C10.1769 14.3922 9.22141 15.4778 8.02002 15.4778ZM15.9947 15.4778C14.8123 15.4778 13.8379 14.3922 13.8379 13.0589C13.8379 11.7256 14.7933 10.64 15.9947 10.64C17.2056 10.64 18.1705 11.7351 18.1516 13.0589C18.1516 14.3922 17.2056 15.4778 15.9947 15.4778Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/anishsoni29"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_315_64)">
                        <g clip-path="url(#clip1_315_64)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41722 17.8401 3.62473 17.4811 3.62473 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33926 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81322 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9744 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_315_64">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                        <clipPath id="clip1_315_64">
                          <rect width="24" height="23.5102" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anishsoni/"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.6055 19.6058H16.404V14.5922C16.404 13.3982 16.3836 11.8598 14.7396 11.8598C13.0716 11.8598 12.8184 13.163 12.8184 14.5082V19.6058H9.61675V9.2978H12.6876V10.7066H12.7319C13.1592 9.8966 14.2043 9.04219 15.7632 9.04219C19.0068 9.04219 19.6068 11.1758 19.6068 13.9526V19.6058H19.6055ZM6.00595 7.89019C5.76201 7.89043 5.52041 7.84262 5.29494 7.74948C5.06948 7.65635 4.86456 7.51972 4.6919 7.34739C4.51924 7.17506 4.38221 6.97042 4.28864 6.74513C4.19507 6.51985 4.14679 6.27834 4.14655 6.0344C4.14631 5.79045 4.19413 5.54885 4.28726 5.32339C4.3804 5.09792 4.51703 4.89301 4.68936 4.72035C4.86168 4.54768 5.06633 4.41066 5.29162 4.31709C5.5169 4.22351 5.75841 4.17523 6.00235 4.175C6.49502 4.17452 6.96769 4.36977 7.3164 4.7178C7.6651 5.06583 7.86127 5.53813 7.86175 6.03079C7.86223 6.52346 7.66698 6.99614 7.31895 7.34484C6.97092 7.69355 6.49862 7.88972 6.00595 7.89019ZM4.40155 19.6058H7.60795V9.2978H4.40035V19.6058H4.40155ZM21.2015 1.2002H2.79355C1.91395 1.2002 1.19995 1.8974 1.19995 2.7578V21.2414C1.19995 22.1018 1.91395 22.8002 2.79355 22.8002H21.2015C22.0823 22.8002 22.7999 22.1018 22.7999 21.2414V2.7578C22.7999 1.8974 22.0823 1.2002 21.2015 1.2002Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <footer class="bg-transparent border-t border-gray-800 block md:hidden">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="items-center justify-between">
                <ul class="text-sm text-gray-500 text-center">
                  <li class="mb-5">
                    <a
                      class="hover:text-white"
                      href="https://www.linkedin.com/in/anishsoni/details/certifications/"
                    >
                      Certifications
                    </a>
                  </li>
                  <li class="mb-5">
                    <a class="hover:text-white" href="/">
                      © Anish Soni 2024
                    </a>
                  </li>
                </ul>
                <div class="flex mt-4 justify-center sm:mt-0">
                  <a
                    href="https://twitter.com/anishsoni29"
                    class="text-gray-500 hover:text-white"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1762 3.75H19.9363L13.9063 10.6419L21.0001 20.0203H15.4457L11.0952 14.3324L6.11735 20.0203H3.35557L9.8053 12.6486L3.00012 3.75H8.69558L12.628 8.949L17.1762 3.75ZM16.2075 18.3683H17.7369L7.86454 5.31529H6.22332L16.2075 18.3683Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/nMkXkdm8"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.317 4.51641C18.7873 3.81453 17.147 3.29742 15.4319 3.00124C15.4007 2.99553 15.3695 3.00981 15.3534 3.03838C15.1424 3.4136 14.9087 3.90309 14.7451 4.28784C12.9004 4.01167 11.0652 4.01167 9.25832 4.28784C9.09465 3.89454 8.85248 3.4136 8.64057 3.03838C8.62449 3.01076 8.59328 2.99648 8.56205 3.00124C6.84791 3.29647 5.20756 3.81358 3.67693 4.51641C3.66368 4.52213 3.65233 4.53166 3.64479 4.54403C0.533392 9.19239 -0.31895 13.7265 0.0991801 18.2044C0.101072 18.2263 0.11337 18.2473 0.130398 18.2606C2.18321 19.7681 4.17171 20.6833 6.12328 21.2899C6.15451 21.2995 6.18761 21.2881 6.20748 21.2623C6.66913 20.6319 7.08064 19.9672 7.43348 19.2681C7.4543 19.2272 7.43442 19.1786 7.39186 19.1624C6.73913 18.9148 6.1176 18.6129 5.51973 18.2701C5.47244 18.2425 5.46865 18.1748 5.51216 18.1425C5.63797 18.0482 5.76382 17.9501 5.88396 17.851C5.90569 17.833 5.93598 17.8291 5.96153 17.8406C9.88928 19.6338 14.1415 19.6338 18.023 17.8406C18.0485 17.8282 18.0788 17.832 18.1015 17.8501C18.2216 17.9491 18.3475 18.0482 18.4742 18.1425C18.5177 18.1748 18.5149 18.2425 18.4676 18.2701C17.8697 18.6196 17.2482 18.9148 16.5945 19.1615C16.552 19.1777 16.533 19.2272 16.5538 19.2681C16.9143 19.9662 17.3258 20.6309 17.7789 21.2614C17.7978 21.2881 17.8319 21.2995 17.8631 21.2899C19.8241 20.6833 21.8126 19.7681 23.8654 18.2606C23.8834 18.2473 23.8948 18.2272 23.8967 18.2053C24.3971 13.0284 23.0585 8.53148 20.3482 4.54498C20.3416 4.53166 20.3303 4.52213 20.317 4.51641ZM8.02002 15.4778C6.8375 15.4778 5.86313 14.3922 5.86313 13.0589C5.86313 11.7256 6.8186 10.64 8.02002 10.64C9.23087 10.64 10.1958 11.7351 10.1769 13.0589C10.1769 14.3922 9.22141 15.4778 8.02002 15.4778ZM15.9947 15.4778C14.8123 15.4778 13.8379 14.3922 13.8379 13.0589C13.8379 11.7256 14.7933 10.64 15.9947 10.64C17.2056 10.64 18.1705 11.7351 18.1516 13.0589C18.1516 14.3922 17.2056 15.4778 15.9947 15.4778Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/anishsoni29"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_315_64)">
                        <g clip-path="url(#clip1_315_64)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9642 0C5.34833 0 0 5.38776 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6296 8.97331 21.6718 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41722 17.8401 3.62473 17.4811 3.62473 17.4811C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33926 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81322 9.01984 5.56604 8.1818C5.44727 7.88253 5.03118 6.64506 5.68506 4.98882C5.68506 4.98882 6.69527 4.66947 8.97306 6.22604C9.94827 5.9622 10.954 5.82799 11.9642 5.82686C12.9744 5.82686 14.0042 5.96669 14.9552 6.22604C17.2332 4.66947 18.2434 4.98882 18.2434 4.98882C18.8973 6.64506 18.481 7.88253 18.3622 8.1818C19.1349 9.01984 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38776 18.5603 0 11.9642 0Z"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_315_64">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                        <clipPath id="clip1_315_64">
                          <rect width="24" height="23.5102" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anishsoni/"
                    class="text-gray-500 hover:text-white ms-5"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.6055 19.6058H16.404V14.5922C16.404 13.3982 16.3836 11.8598 14.7396 11.8598C13.0716 11.8598 12.8184 13.163 12.8184 14.5082V19.6058H9.61675V9.2978H12.6876V10.7066H12.7319C13.1592 9.8966 14.2043 9.04219 15.7632 9.04219C19.0068 9.04219 19.6068 11.1758 19.6068 13.9526V19.6058H19.6055ZM6.00595 7.89019C5.76201 7.89043 5.52041 7.84262 5.29494 7.74948C5.06948 7.65635 4.86456 7.51972 4.6919 7.34739C4.51924 7.17506 4.38221 6.97042 4.28864 6.74513C4.19507 6.51985 4.14679 6.27834 4.14655 6.0344C4.14631 5.79045 4.19413 5.54885 4.28726 5.32339C4.3804 5.09792 4.51703 4.89301 4.68936 4.72035C4.86168 4.54768 5.06633 4.41066 5.29162 4.31709C5.5169 4.22351 5.75841 4.17523 6.00235 4.175C6.49502 4.17452 6.96769 4.36977 7.3164 4.7178C7.6651 5.06583 7.86127 5.53813 7.86175 6.03079C7.86223 6.52346 7.66698 6.99614 7.31895 7.34484C6.97092 7.69355 6.49862 7.88972 6.00595 7.89019ZM4.40155 19.6058H7.60795V9.2978H4.40035V19.6058H4.40155ZM21.2015 1.2002H2.79355C1.91395 1.2002 1.19995 1.8974 1.19995 2.7578V21.2414C1.19995 22.1018 1.91395 22.8002 2.79355 22.8002H21.2015C22.0823 22.8002 22.7999 22.1018 22.7999 21.2414V2.7578C22.7999 1.8974 22.0823 1.2002 21.2015 1.2002Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}