import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import fahad from '../public/avatars.png';
import design from '../public/design.png';
import git from '../public/git.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import { useState } from "react";

// ...previous imports...

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fahad Sheikh Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">DevelopedByFahad</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
              </li>

              <li>
              <a href="https://github.com/fahad9786" target="_blank" rel="noopener noreferrer">
                {/* Use the Image component to display your GitHub icon */}
                <Image src={git} alt="GitHub" width={30} height={30} className="cursor-pointer ml-4" />
              </a>
              </li>

              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/fahad-sheikh-a61a18273/">LinkedIn</a>
              </li>
            </ul>
          </nav>
          {/* ...rest of the section... */}
          <section>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Fahad Sheikh</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">Developer and designer</h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-m mx-auto dark:text-white">
              I&apos;m Fahad Sheikh, a UX student with a minor in computer science. Skilled in Java, Python, and Swift, I specialize in both iOS and web development. My portfolio features user-centric applications and web solutions, highlighting my passion for merging technical development with UX principles.
            </p>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={fahad} alt="Fahad Sheikh" className="rounded-full" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            Currently, I am pursuing an education in the <span className="text-teal-500">User Experience</span> and <span className="text-teal-500">Software Development fields</span>.
          </p> 
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I&apos;m currently in search of co-op opportunities for the upcoming summer while actively working on several side projects. As a Computer Science student with a focus on UX Design, I&apos;m excited to apply my skills and contribute to innovative teams.
          </p> 
        </div>

        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xxl my-10 dark:bg-white">
            <Image src={design} alt="Design Icon" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs based on design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">InDesign</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xxl my-10 dark:bg-white">
            <Image src={code} alt="Code Icon" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Robust Programming</h3>
            <p className="py-2">
              I have a strong proficiency in programming and have been programming for the last 4 years.
            </p>
            <h4 className="py-4 text-teal-600">Languages I use</h4>
            <p className="text-gray-800 py-1">Swift</p>
            <p className="text-gray-800 py-1">Java</p>
            <p className="text-gray-800 py-1">Python</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xxl my-10 dark:bg-white">
            <Image src={consulting} alt="Consulting Icon" width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">UX Consulting</h3>
            <p className="py-2">
              I have a background in user experience (UX) Design, emphasizing user-centric solutions.
            </p>
            <h4 className="py-4 text-teal-600">UX tools I use</h4>
            <p className="text-gray-800 py-1">Wireframing and Prototyping</p>
            <p className="text-gray-800 py-1">Usability Testing</p>
            <p className="text-gray-800 py-1">User-Centered Design</p>
          </div>
        </div>
      </section>


      <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Current Projects</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Currently, I am pursuing an education in the <span className="text-teal-500 dark:text-teal-200">User Experience</span> and <span className="text-teal-500">Software Development fields</span>. I&apos;m in search of co-op opportunities while working on side projects.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <Image src={web1} alt="To-Do List App in Swift" className="rounded-lg object-cover w-full h-auto" />
            <p className="mt-6 text-lg text-gray-700 dark:text-white">
              <strong>To-Do List App in Swift:</strong> A functional to-do list app with Firebase integration for real-time data synchronization. Designed for user experience, it offers a clean and intuitive interface.
            </p>
          </div>

          <div className="flex-1">
            <Image src={web2} alt="AI Image Generator" className="rounded-lg object-cover w-full h-auto" />
            <p className="mt-6 text-lg text-gray-700 dark:text-white">
              <strong>AI Image Generator:</strong> Developed in Swift, this tool uses AI algorithms for generating unique visuals. It features a user-friendly interface, blending creativity and AI in graphic design.
            </p>
          </div>

          <div className="flex-1">
            <Image src={web3} alt="FNAF Game Web Recreation" className="rounded-lg object-cover w-full h-auto" />
            <p className="mt-6 text-lg text-gray-700 dark:text-white">
              <strong>FNAF Game Web Recreation:</strong> A full-stack web adaptation of the Five Nights at Freddys game, showcasing sophisticated web technologies for an immersive user experience.
              </p>
            </div>
          </div>
        </div>
      </section>






        </section>


        



      </main>
    </div>
  );
}

