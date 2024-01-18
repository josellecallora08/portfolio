import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import about from '/about-icon.svg'
import d_about from '/about-dark-icon.svg'
import self from '/self.svg'
import nodejs from '/node-js-icon.svg'
import react from '/react-icon.svg'
import mongodb from '/mongo-icon.svg'
import js from '/js-icon.svg'
import html from '/html-icon.svg'
import css from '/css-icon.svg'
import scss from '/scss-icon.svg'
import php from '/php-icon.svg'
import tailwind from '/tailwind-icon.svg'
import mysql from '/mysql-icon.svg'
import github from '/github-icon.svg'
import d_github from '/github-dark-icon.svg'
import notion from '/notion-icon.svg'
import vs from '/vs-code-icon.svg'
import git from '/git-icon.svg'
import d_git from '/git-dark-icon.svg'
import figma from '/figma-icon.svg'
import vc from '/version-control-icon.svg'
import uiux from '/ui-design-icon.svg'
import wireframe from '/wireframe-icon.svg'
import d_wireframe from '/wireframe-dark-icon.svg'
const About = ({aboutModal, setAboutModal,is_theme_dark}) => {

  const softskills = ["Communication","Collaboration","Adaptability","Attention To Details","Time Management","Problem Solving", "Critical Thinking", "Resiliency"]
  const hardskills = [
    {
      "name":"Version Control",
      "image" :vc,
      "d_image": vc
    },
    {
      "name":"User Interface Design",
      "image": uiux,
      "d_image": uiux
    },
    {
      "name":"Wireframing",
      "image":wireframe,
      "d_image": d_wireframe
    }
  ]
  const softwaretools = [
    {
      "name":"Visual Studio Codes",
      "image": vs,
      "d_image": vs
    },
    {
      "name":"Git",
      "image": git,
      "d_image": d_git
    },
    {
      "name":"GitHub",
      "image":github,
      "d_image":d_github
    },
    {
      "name":"Notion",
      "image": notion,
      "d_image": notion
    },
    {
      "name":"Figma",
      "image": figma,
      "d_image": figma
    }
  ]
  const programmingskills = [
  {
    "name":"CSS",
    "image":css
  },
  {
    "name":"ExpressJS",
    "image":js
  },
  {
    "name":"HTML5",
    "image":html
  },
  {
    "name":"JavaScript",
    "image":js
  },
  {
    "name":"MongoDB",
    "image":mongodb
  },
  {
    "name":"MySQL",
    "image":mysql
  },
  {
    "name":"NodeJS",
    "image":nodejs
  },
  {
    "name":"React",
    "image":react
  },
  {
    "name":"SCSS",
    "image":scss
  },
  {
    "name":"PHP - Procedural",
    "image":php
  },
  {
    "name":"TailwindCSS",
    "image":tailwind
  }
  ]
  
  return (
    <section id="about" className={`absolute ${aboutModal ? 'open' : 'hidden fade-out'} justify-center items-center w-full h-full`}>
      <div className={`relative w-full h-auto md:w-3/5 m-auto bg-slate-300 rounded-md md:bg-slate-200  dark:bg-black/80 shadow-xl overflow-hidden`}>
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
        <img src={is_theme_dark ? d_about : about} alt="" className='w-8 h-8 md:w-16 md:h-10'/>About
        </h2>
        <div className='w-4/5 h-full md:h-4/5 m-auto '>
          <figure className='w-full h-full'>
            <img src={self} className='w-full h-full mb-5 left-transition' alt="" />
            <figcaption className='text-xs md:text-base lg:text-md text-left md:leading-10 md:text-justify dark:text-slate-300 font-mono left-transition'>
            My dedication ensures exceptional results and project success. Interestingly, I initially aspired to become a Marine Engineer but found my true passion in Information Systems. Little did I know that this field would lead me to my dream profession, where I can combine my love for developing websites and coding. While coding can be challenging, I find joy in overcoming difficulties, and the satisfaction of solving problems and fixing bugs is truly rewarding.
            </figcaption>
          </figure>
        </div>
        <br/>
        <br/>
        <section className='flex flex-col gap-5 w-4/5 h-full md:h-auto m-auto text-xs md:text-base lg:text-md'>
          <article>
            <h2 className='tracking-widest font-bold font-mono dark:text-slate-200 uppercase'>Programming Skills</h2>
            <ul className='my-5 flex gap-3 flex-wrap cursor-default'>
              { programmingskills.map((index,key) => (
              <li key={key} className='right-transition'>
                <p className='flex items-center gap-2 p-2 border border-slate-400 w-fit rounded-md shadow-md hover:bg-slate-300/20 dark:text-slate-200 font-mono'>
                  <img src={index.image} className="w-5 h-5" alt="" />{index.name}
                </p>
              </li>))}
            </ul>
          </article>
          <article>
            <h2 className='tracking-widest font-bold font-mono dark:text-slate-200 uppercase'>Software Development Tools</h2>
            <ul className='my-5 flex gap-3 flex-wrap cursor-default'>
              { softwaretools.map((index,key) => (
              <li key={key} className='right-transition'>
                <p className='flex items-center gap-2 p-2 border border-slate-400 w-fit rounded-md shadow-md hover:bg-slate-300/20 dark:text-slate-200 font-mono'>
                  <img src={is_theme_dark ? index.d_image : index.image} className="w-5 h-5" alt="" />{index.name}
                </p>
              </li>))}
            </ul>
          </article>
          <article>
            <h2 className='tracking-widest font-bold font-mono dark:text-slate-200 uppercase'>hard Skills</h2>
            <ul className='my-5 flex gap-3 flex-wrap cursor-default'>
              { hardskills.map((index,key) => (
              <li key={key} className='right-transition'>
                <p className='flex items-center gap-2 p-2 border border-slate-400 w-fit rounded-md shadow-md hover:bg-slate-300/20 dark:text-slate-200 font-mono'>
                  <img src={is_theme_dark ? index.d_image : index.image} className="w-5 h-5" alt="" />{index.name}
                </p>
              </li>))}
            </ul>
          </article>
          <article>
            <h2 className='tracking-widest font-bold font-mono dark:text-slate-200'>SOFT SKILLS</h2>
            <ul className='my-5 flex gap-3 flex-wrap cursor-default'>
              {softskills.map((value,key) => (
                <li key={key} className='right-transition'>
                <p className='flex items-center gap-2 p-2 border border-slate-400 w-fit rounded-md shadow-md hover:bg-slate-300/20 dark:text-slate-200 font-mono'>{value}
                </p>
                </li>))}
            </ul>
          </article>
        </section>
        <CloseButton
        setCloseModal = {setAboutModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default About