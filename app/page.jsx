"use client";
import {
  MailIcon,
  PhoneIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  DatabaseIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";
import { goToSection } from "./utils/navigation";

function Home() {
  const projects = [
    {
      name: "ParishTec",
      image: "/ParishTec.png",
      description:
        "ParishTec is a web platform developed using Next.js and Tailwind CSS. It aims to facilitate the reentry process for individuals transitioning back into society after incarceration. By offering features such as credit setup, budgeting tools, and job placement assistance, ParishTec addresses the financial challenges faced by returning citizens. This project is currently being build, however you can track the progress below.",
      gitLink: "https://parish-e054m41e4-fyreliks-projects.vercel.app",
    },
    {
      name: "Personal Website",
      image: "/personalWeb.png",
      description:
        "My personal website is a showcase of my skills, experiences, and projects. Built with Next.js and Tailwind CSS, it offers a sleek and modern design that reflects my professional identity. My personal website serves as a hub for connecting with potential employers, collaborators, and fellow developers. Click the link below to view my source code.",
      gitLink: "https://github.com/cwatson29/CandiceWatsonWeb",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 h-screen max-w-5xl w-full items-center justify-between">
        <div className="text-base text-center mb-10">
          Welcome to my Website!
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-50 w-50 object-cover md:h-full md:w-48"
                src="me.jpeg"
                alt="A picture of Candice Watson"
              ></img>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Candice Watson
              </div>
              <div className="mt-2 text-slate-500">
                As a driven and self-motivated senior at Marquette University,
                set to graduate in May with a strong academic background, I am
                eager to transition into the role of a software developer. With
                a proven track record of exceeding expectations, I thrive in
                challenging environments and I am passionate about
                problem-solving. My dedication, combined with a love for
                technology and innovation, fuels my ambition to contribute
                meaningfully to an organization.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="resume"
        className="bg-gradient-to-br from-sky-200 via-blue-100 to-sky-200 grid min-h-[140px] w-full rounded-lg p-6 z-10 h-auto w-screen "
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Resume</h2>
          <div className="grid grid-cols-2 gap-10 mt-5">
            {/* Left Section: Profile and Skills */}
            <div className="mb-12 w-3/5">
              <h3 className="text-2xl font-semibold mb-5">Profile</h3>
              <p className="text-gray-700 mb-4">
                Motivated Computer Science graduate seeking an opportunity to
                leverage my software development skills and make an impactful
                contribution to an organization.
              </p>
              <h4 className="text-xl font-semibold mb-2">Skills</h4>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Web and mobile application design</li>
                <li>Database development and design</li>
                <li>Scrum and project management</li>
              </ul>
            </div>

            {/* Right Section: Programming Languages */}
            <div className="mb-12 flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-2">
                Programming Languages
              </h4>
              <ul className="list-inside space-y-2">
                <li>
                  <span className="inline-block w-24">C#/.NET</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="inline-block w-24">HTML/CSS</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="inline-block w-24">JavaScript</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="inline-block w-24">SQL</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="inline-block w-24">React</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="inline-block w-24">Java</span>
                  <div className="w-64 h-4 bg-blue-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-1/3">
                  <p className="font-semibold text-gray-700">
                    June 2023 - Present
                  </p>
                  <p className="font-semibold text-blue-500">
                    CaraFlow, Milwaukee, WI
                  </p>
                </div>
                <div className="w-2/3">
                  <h4 className="text-xl font-semibold">
                    Software Development Intern
                  </h4>
                  <p className="text-gray-700">
                    Worked on a small team that completely refactored the
                    company’s Android application from Xamarin Android to .NET
                    using MS Visual Studio.
                  </p>
                  <p className="text-gray-700">
                    Developed new features and expanded the database for the
                    company’s web-based product based on the customers’ and
                    company’s needs by leveraging C#/ASP.NET and MS SQL.
                  </p>
                  {/* Add more description lines */}
                </div>
              </div>
              {/* Experience Item 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-1/3">
                  <p className="font-semibold text-gray-700">
                    Jan 2021 - June 2023
                  </p>
                  <p className="font-semibold text-blue-500">
                    Walgreens Pharmacy, Milwaukee, WI
                  </p>
                </div>
                <div className="w-2/3">
                  <h4 className="text-xl font-semibold">
                    Senior Pharmacy Technician
                  </h4>
                  <p className="text-gray-700">
                    Demonstrated expertise in supporting pharmacological
                    services by stocking, assembling, and distributing
                    medications.
                  </p>
                  <p className="text-gray-700">
                    Actively assisted healthcare providers and patients by
                    greeting them, answering questions and requests, and
                    referring inquiries to the pharmacist, resulting in
                    increased patient satisfaction scores by 15%.
                  </p>
                  {/* Add more description lines */}
                </div>
              </div>
              {/* Add more experience items */}
            </div>
          </div>
          {/* Background Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Background Education
            </h3>
            <div className="space-y-8">
              {/* Education Item 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-1/3">
                  <p className="font-semibold text-gray-700">August 2024</p>
                  <p className="font-semibold text-blue-500">
                    Marquette University, Milwaukee, WI
                  </p>
                </div>
                <div className="w-2/3">
                  <h4 className="text-xl font-semibold">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-gray-700">
                    Minor: Mathematics and Business Administration
                  </p>
                  <p className="text-gray-700">GPA: 3.795/4.00</p>
                  <p className="text-gray-700">
                    Pere Marquette Scholarship for Academic Excellence
                  </p>
                </div>
              </div>
              {/* Add more education items */}
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="min-h-[140px] w-full rounded-lg p-6 z-10 h-screen w-screen "
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.gitLink}
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-5">Older projects will be added soon.</p>
      </div>
      <div id="interests">
        <div className="text-base text-center my-8 hidden">WHO IS CANDICE?</div>
        <div className="grid grid-cols-3 gap-10 hidden">
          <div className="text-center ">
            Candice is Jamaican.
            <img
              className="h-auto max-w-36 rounded-lg mt-4 justify-self-center"
              src="margaritaville.jpg"
              alt="Candice drinking coconut on the beach."
            ></img>
          </div>
          <div className="text-center">
            Candice is Family.
            <img
              className="h-auto max-w-36 rounded-lg mt-4"
              src="famchris.jpg"
              alt="My family on christmas"
            ></img>
          </div>
          <div>
            Candice is a Student.
            <img
              className="h-auto max-w-36 rounded-lg mt-4"
              src="mu.jpg"
              alt="Candice in Marquette Sweatshirt"
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-36 rounded-lg"
              src="iamjam.png"
              alt="I am Jamaican."
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-36 rounded-lg"
              src="dadguitar.jpg"
              alt="My dad and I"
            ></img>
          </div>
          <div>
            <img
              className="h-auto max-w-36 rounded-lg"
              src="MU_seal.jpeg"
              alt="Marquette University seal"
            ></img>
          </div>
        </div>
      </div>
      <div id="contact"></div>
    </main>
  );
}
export default Home;
