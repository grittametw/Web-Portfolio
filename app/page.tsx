'use client'

import { useState, useEffect } from 'react'
import { Oswald } from 'next/font/google'
import {
  EnvironmentOutlined, MailOutlined, PhoneOutlined,
  GithubOutlined, CopyrightOutlined, RightOutlined
} from '@ant-design/icons';
import './styles.css'

const oswald = Oswald({
  subsets: ['latin'],
})

export default function Home() {
  const [isTop, setIsTop] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')
  const [animationKey, setAnimationKey] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const skillsData = [
    { name: 'HTML5', category: 'Frontend', color: '#e34f26', icon: 'HTML5.svg' },
    { name: 'CSS3', category: 'Frontend', color: '#264de4', icon: 'CSS3.svg' },
    { name: 'JavaScript', category: 'Frontend', color: '#f0db4f', icon: 'JavaScript.svg' },
    { name: 'TypeScript', category: 'Frontend', color: '#3178c6', icon: 'TypeScript.svg' },
    { name: 'React', category: 'Frontend', color: '#61dafb', icon: 'React.svg' },
    { name: 'Next.js', category: 'Frontend', color: '#fff', icon: 'Next.svg' },
    { name: 'Bootstrap', category: 'Frontend', color: '#8412fb', icon: 'Bootstrap.svg' },
    { name: 'MUI', category: 'Frontend', color: '#00b0ff', icon: 'Material-Ui.svg' },
    { name: 'Node.js', category: 'Backend', color: '#8cc84b', icon: 'Node.js.svg' },
    { name: 'Express.js', category: 'Backend', color: '#fff', icon: 'Express.js.svg' },
    { name: 'MySQL', category: 'Database', color: '#2596be', icon: 'MySQL.svg' },
    { name: 'PostgreSQL', category: 'Database', color: '#417198', icon: 'PostgreSQL.svg' },
    { name: 'VS Code', category: 'Tools', color: '#21a1f1', icon: 'Visual_Studio_Code.svg' },
    { name: 'Github', category: 'Tools', color: '#fff', icon: 'Github.svg' },
    { name: 'Figma', category: 'Tools', color: '#a158ff', icon: 'Figma.svg' },
  ]

  const projectsData = [
    {
      name: 'E-Commerce Platform',
      description: 'An e-commerce platform with shopping cart, payment system, favorites list, and admin dashboard features.',
      image: 'e-commerce.webp',
      skills: ['Next.js', 'Bootstrap', 'MUI', 'Node.js', 'PostgreSQL'],
      linkDemo: 'https://web-library-grittametwilai.vercel.app/',
      linkGithub: 'https://github.com/grittametw/Web-Library',
    },
    {
      name: 'Amazon-Clone Landing Page',
      description: 'An Amazon-clone landing page featuring a header, bottomPanel, menu, content area, and footer.',
      image: 'amazon-clone.jpg',
      skills: ['React', 'Bootstrap', 'MUI', 'Node.js'],
      linkDemo: 'https://web-amazon-clone.vercel.app/',
      linkGithub: 'https://github.com/grittametw/Web-Amazon-Clone',
    },
  ]

  const contactData = [
    {
      icon: <EnvironmentOutlined />,
      method: 'Address',
      detail: 'Plum Condo Chokchai 4, Lat Phrao Subdistrict, Lat Phrao District, Bangkok 10230',
    },
    {
      icon: <MailOutlined />,
      method: 'Email',
      detail: 'w.grittamet@gmail.com',
    },
    {
      icon: <PhoneOutlined />,
      method: 'Phone',
      detail: '+66 986152663',
    },
    {
      icon: <GithubOutlined />,
      method: 'Github',
      detail: 'https://github.com/grittametw',
      link: 'https://github.com/grittametw',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools']

  const filteredSkills = activeFilter === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeFilter)

  return (
    <main lang="en" className={`${oswald.className} min-h-screen w-full bg-[#191922] text-white overflow-x-hidden`}>
      <div className="flex flex-col items-center">
        <nav className={`menu fixed top-0 z-50 w-full flex justify-center shadow-md py-8 md:px-8 transition-all duration-300 
          ${isTop
            ? 'bg-[#191922] bg-opacity-100'
            : 'bg-opacity-70 backdrop-blur-md'
          }`
        }>
          <div className="w-full max-w-[1200px] flex justify-between items-center">
            <div className="text-2xl font-bold">Grittamet Wilai</div>

            <ul className="menu-section hidden md:flex gap-8">
              <li><a href="#about-section" className="transition hover:text-purple-400 hover:border-b border-purple-400">About Me</a></li>
              <li><a href="#skills-section" className="transition hover:text-fuchsia-500 hover:border-b border-fuchsia-500">Skills</a></li>
              <li><a href="#projects-section" className="transition hover:text-pink-500 hover:border-b border-pink-500">Projects</a></li>
              <li><a href="#experiences-section" className="transition hover:text-rose-400 hover:border-b border-rose-400">Experiences</a></li>
              <li><a href="#contact-section" className="transition hover:text-red-500 hover:border-b border-red-500">Contact</a></li>
            </ul>

            {/* Hamburger Button (Mobile) */}
            <button
              className="md:hidden flex flex-col gap-1 cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`fixed top-[96px] z-40 w-full md:hidden border-t border-gray-700
          ${isTop
              ? 'bg-[#191922] bg-opacity-100'
              : 'bg-opacity-70 backdrop-blur-md'
            }`}>
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#about-section"
                  className="transition hover:text-purple-400 hover:border-b border-purple-400"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#skills-section"
                  className="transition hover:text-fuchsia-500 hover:border-b border-fuchsia-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#projects-section"
                  className="transition hover:text-pink-500 hover:border-b border-pink-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#experiences-section"
                  className="transition hover:text-rose-400 hover:border-b border-rose-400"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  onClick={() => setMenuOpen(false)}
                  href="#contact-section"
                  className="transition hover:text-red-500 hover:border-b border-red-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        <section id="about-section" className="about-section w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center py-48">
          <div className="hero-content space-y-8 max-w-2xl">
            <div className="animate-dimlight text-6xl font-bold">Grittamet Wilai</div>

            <p className="text-xl text-gray-300 leading-relaxed w-150">
              Recent graduate with a Bachelor's degree in Computer and Robotics Engineering,
              passionate about software development. Eager to apply my skills in programming,
              problem-solving, and teamwork while continuously learning new technologies.
            </p>

            <a
              href="Grittamet_Wilai_Resume.pdf"
              className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] hover:shadow-xl hover:shadow-pink-500/50"
              download="Grittamet Wilai_Resume.pdf"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              >
              </span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
              >
                Download Resume
              </span>
            </a>
          </div>

          <div className="hero-image transition hover:scale-105">
            <img
              src="g.png"
              alt="Profile Picture"
              className="image h-full"
            />
          </div>
        </section>

        <section id="skills-section" className="skills-section w-full max-w-[1200px] py-32">
          <div className="skills-content">
            <div className="text-3xl font-bold mb-8">Skills</div>

            <div className="flex flex-wrap gap-4 mb-8">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter)
                    setAnimationKey(prev => prev + 1)
                  }}
                  className={`rounded py-2 px-6 transition cursor-pointer ${activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'
                    : 'bg-[#373735] text-[#999] hover:bg-[#575755] hover:text-white'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <ul key={animationKey} className="flex flex-wrap gap-4">
              {filteredSkills.map((skill, index) => (
                <li
                  key={skill.name}
                  className="animate-slideinright flex items-center w-36 bg-[#373735] rounded py-3 px-5 gap-3 hover:bg-[#474745] transition transform hover:scale-105"
                  style={{
                    color: skill.color,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-6 h-6 ${skill.name === 'Express.js' ? 'bg-white rounded-full' : ''} ${skill.name === 'MySQL' ? 'bg-white' : ''}`}
                  />
                  <span className="font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="marquee-container overflow-hidden bg-[#373735] shadow-sm p-4 mt-40">
            <div className="marquee-track animate-marquee flex w-max">
              {[...skillsData, ...skillsData].map((skill, index) => (
                <img
                  key={`${skill.name}-${index}`}
                  src={skill.icon}
                  alt={skill.name}
                  className={`marquee-content w-10 h-10 mx-6 hover:cursor-pointer
                    ${skill.name === 'Express.js' ? 'bg-white rounded-full' : ''}
                    ${skill.name === 'MySQL' ? 'bg-white' : ''}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects-section" className="projects-section w-full max-w-[1200px] py-32">
          <div className="text-3xl font-bold mb-8">Projects</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.name}
                className="project-card bg-[#373735] rounded-lg hover:bg-[#474745] transition transform hover:-translate-y-1"
              >
                <img src={project.image} alt={project.name} className="w-full h-56 rounded-t-lg" />

                <div className="flex flex-col justify-between p-8 gap-4 h-76">
                  <div className="flex flex-col gap-4">
                    <div className="text-xl font-semibold">{project.name}</div>

                    <p className="text-gray-300">{project.description}</p>

                    {project.skills && project.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <li
                            key={skill}
                            className="bg-[#575755] text-white rounded-full px-4 py-2 text-sm"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded py-2 px-6 border border-white transition cursor-pointer hover:bg-white hover:text-black"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded py-2 px-6 border border-white transition cursor-pointer hover:bg-white hover:text-black"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experiences-section" className="experiences-section w-full max-w-[1200px] py-32">
          <div className="text-3xl font-bold mb-8">Experiences</div>

          <div className="project-card flex bg-[#373735] rounded-lg w-full p-8 gap-8 relative overflow-hidden">
            <div className="flex flex-col gap-4 w-1/2">
              <div className="text-xl font-semibold">Senior Project</div>

              <div className="text-lg">Intelligent Makeup Machine with Face Analysis via Computer Vision Based</div>

              <ul className="flex flex-col gap-2">
                <li className="flex gap-2">
                  &#8226;<p>Developed UI and REST APIs using JavaScript and Node.js for displaying the analyzed color results and control operations.</p>
                </li>
                <li className="flex gap-2">
                  &#8226;<p>Designed mechanical components with SolidWorks.</p>
                </li>
                <li className="flex gap-2">
                  &#8226;<p>Coordinated with team and demonstrated the project at Open House BU 2023.</p>
                </li>
              </ul>
            </div>

            <div className="border border-gray-600"></div>

            <div className="flex flex-col gap-4 w-1/2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="text-xl font-semibold">Internship</div>
                <div className="text-gray-300">( June - July 2024 )</div>
              </div>

              <div className="text-lg">NOTERO CO., LTD &#8680; Software Development team</div>

              <ul className="flex flex-col gap-2">
                <li className="flex gap-2">
                  &#8226;<p>Collaborated with a Full Stack Developer to enhance a web application’s translation system.</p>
                </li>
                <li className="flex gap-2">
                  &#8226;<p>Added MP3 support and developed a coupon redemption feature using TypeScript and Next.js.</p>
                </li>
                <li className="flex gap-2">
                  &#8226;<p>Designed and implemented build verification tool with new UI and REST API integration.</p>
                </li>
                <li className="flex gap-2">
                  &#8226;<p>Assisted in debugging and improving front-end performance.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact-section" className="contact-section w-full max-w-[1200px] py-32 pb-76">
          <div className="text-3xl font-bold mb-8">Contact</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactData.map((contact) => (
              <div
                key={contact.method}
                className="contact-card flex flex-col justify-between p-8 gap-8 bg-[#373735] rounded-lg hover:bg-[#474745] transition transform hover:-translate-y-1"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    <div>{contact.icon}</div>
                    <div>{contact.method}</div>
                  </div>
                  <div className="text-lg text-gray-300">{contact.detail}</div>
                </div>
                {contact.link &&
                  <div className="flex justify-end">
                    <a href={contact.link} className="border-2 border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                      <RightOutlined style={{ fontSize: 32 }} />
                    </a>
                  </div>
                }
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p className="m-4 text-center text-gray-300"><CopyrightOutlined /> 2026 Grittamet Wilai. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main >
  )
}