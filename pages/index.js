import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import fahad from '../public/avatars.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import {useState} from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div>
      <Head>
        <title>Fahad Sheikh Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1  className="text-xl font-burtons">DevelopedByFahad</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointe text-2xl"> </BsFillMoonStarsFill>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/fahad-sheikh-a61a18273/">LinkedIn</a></li>

            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Fahad Sheikh</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and designer</h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-m mx-auto">I'm Fahad Sheikh, a Computer Science student with a UX Design focus. Skilled in Java, Python, and Swift, I specialize in both iOS and web development. My portfolio features user-centric applications and web solutions, highlighting my passion for merging technical development with UX principles.</p>

          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube/>

          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96" >
            <Image src={fahad}  className="rounded-full" layout = "fill" objectFit="cover" />
          </div>

        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">  Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800" >Currently I am pursing an education in the 
            <span className="text-teal-500"> User Experience</span> and <span className="text-teal-500">Software Development fields</span>
            </p> 
            <p className="text-md py-2 leading-8 text-gray-800">  I'm currently in search of co-op opportunities for the upcoming summer while actively working on several side projects. As a Computer Science student with a focus on UX Design, I'm excited to apply my skills and contribute to innovative teams.</p> 
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xxl my-10">
              <Image src={design}  width = {100} height= {100} />
              <h3 className= "text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">

                Creating elegant designs suited for youre needs based on design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">InDesign</p>
            </div>


            <div className="text-center shadow-lg p-10 rounded-xxl my-10">
              <Image src={code}  width = {100} height= {100} />
              <h3 className= "text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">

              I have a strong proficiency in programming and have been programming for the last 4 years</p>
              <h4 className="py-4 text-teal-600">languages I use</h4>
              <p className="text-gray-800 py-1">Swift</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>

          
            <div className="text-center shadow-lg p-10 rounded-xxl my-10">
              <Image src={consulting}  width = {100} height= {100} />
              <h3 className= "text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">

              I have a background in user experience (UX) design, emphasizing user-centric solutions
              </p>
              <h4 className="py-4 text-teal-600">UX tools I use</h4>
              <p className="text-gray-800 py-1">Wireframing and Prototyping</p>
              <p className="text-gray-800 py-1">Usability Testing</p>
              <p className="text-gray-800 py-1">User-Centred Design</p>
            </div>

          </div>
        </section>
        <section>
          <div>
          <h3 className="text-3xl py-1"> Current projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800" >Currently I am pursing an education in the 
            <span className="text-teal-500"> User Experience</span> and <span className="text-teal-500">Software Development fields</span>
            </p> 
            <p className="text-md py-2 leading-8 text-gray-800">  I'm currently in search of co-op opportunities for the upcoming summer while actively working on several side projects. As a UX and CS student with a focus on UX Design, I'm excited to apply my skills and contribute to innovative teams.</p> 
          </div>

  <div className="container mx-auto px-4">

            
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="flex-1">
      <Image src={web1} className="rounded-lg object-cover w-full h-auto" />
      <p className="mt-6 text-lg text-gray-700">
        <strong>To-Do List App in Swift:</strong> This application is a highly functional to-do list, meticulously developed in Swift. It features seamless integration with Firebase, providing robust backend support for real-time data synchronization and efficient task management. The app's design is centered around user experience, offering a clean and intuitive interface for effortless daily task organization.
      </p>
    </div>
    <div className="flex-1">
      <Image src={web2} className="rounded-lg object-cover w-full h-auto" />
      <p className="mt-6 text-lg text-gray-700">
        <strong>AI Image Generator:</strong> A pioneering image generation tool developed in Swift, leveraging advanced AI algorithms to produce unique and captivating visuals. The app stands out for its user-friendly interface, allowing users to create extraordinary images effortlessly. It highlights the intersection of creativity and artificial intelligence in graphic design.
      </p>
    </div>
    <div className="flex-1">
      <Image src={web3} className="rounded-lg object-cover w-full h-auto" />
      <p className="mt-6 text-lg text-gray-700">
        <strong>FNAF Game Web Recreation:</strong> This project is a comprehensive full-stack recreation of the renowned Five Nights at Freddy's game, specifically tailored for web platforms. It demonstrates a sophisticated use of web technologies to replicate the game's immersive experience, blending the original's captivating narrative with modern web development techniques for a seamless user experience.
      </p>
    </div>
  </div>
</div>


        </section>

      </main>
    </div>
  );
}