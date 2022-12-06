import { useState } from 'react'
import Navbar from '../Components/Header/Components/Navbar'
import Header from '../Components/Header/Header'
import AboutMe from '../Components/AboutMe/AboutMe'
import MyProjects from '../Components/MyProjects/MyProjects'
import Contact from '../Components/Contact/Contact'
import ContactFloters from '../Components/ContactFloters'
import MatrixBg from '../Components/Background/MatrixBg/MatrixBg'
export default function Home() {
  const [current, setCurrent] = useState('header')
  const [currentAbout, setCurrentAbout] = useState('about')
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (current === 'header') {
        setCurrent('aboutMe')
      }
      if (current === 'aboutMe') {
        setCurrent('myProjects')
      }
      if (current === 'myProjects') {
        setCurrent('contact')
      }
      if (current === 'contact') {
        setCurrent('header')
      }
    }
    if (e.key === 'ArrowUp') {
      if (current === 'contact') {
        setCurrent('myProjects')
      }
      if (current === 'myProjects') {
        setCurrent('aboutMe')
      }
      if (current === 'aboutMe') {
        setCurrent('header')
      }
    }
    if (current === 'aboutMe') {
      if (e.key === 'ArrowRight') {
        if (currentAbout === 'about') {
          setCurrentAbout('mySkills')
        }
      }
      if (e.key === 'ArrowLeft') {
        if (currentAbout === 'mySkills') {
          setCurrentAbout('about')
        }
      }
    }
  }
  return (
    <div className="overflow-hidden w-screen h-screen relative bg-black" tabIndex={0} onKeyDown={(e) => handleKeyDown(e)} >
      <MatrixBg />
      <div className="w-full h-[80px]">
        <Navbar setCurrent={setCurrent} current={current} />
      </div>
      {/* Header */}
      {
        current === 'header' &&
        <div className="w-screen h-[calc(100%_-_1rem)] ">
          <Header />
        </div>
      }
      {/* About Me */}
      {
        current === 'aboutMe' &&
        <div className="w-screen h-[calc(100%_-_1rem)] ">
          <AboutMe currentAbout={currentAbout} setCurrentAbout={setCurrentAbout} />
        </div>
      }
      {/* Projects */}
      {
        current === 'myProjects' &&
        <div className="w-screen h-[calc(100%_-_1rem)] ">
          <MyProjects />
        </div>
      }
      {/* Contact */}
      {
        current === 'contact' &&
        <div className="w-screen h-[calc(100%_-_1rem)] ">
          <Contact />
        </div>
      }
      {/* Browing status dots floaters */}
      <div className='w-[24px] absolute top-1/2 left-[6px] flex justify-center items-center flex-col z-50'>
        <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer" onClick={() => setCurrent('header')}>
          <img src={current === 'header' ? '/images/circle-full.png' : '/images/circle-empty.png'} alt='circle' className="w-[16px] h-[16px]" />
        </div>
        <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer" onClick={() => setCurrent('aboutMe')}>
          <img src={current === 'aboutMe' ? '/images/circle-full.png' : '/images/circle-empty.png'} alt='circle' className="w-[16px] h-[16px]" />
        </div>
        <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer" onClick={() => setCurrent('myProjects')}>
          <img src={current === 'myProjects' ? '/images/circle-full.png' : '/images/circle-empty.png'} alt='circle' className="w-[16px] h-[16px]" />
        </div>
        <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer" onClick={() => setCurrent('contact')}>
          <img src={current === 'contact' ? '/images/circle-full.png' : '/images/circle-empty.png'} alt='circle' className="w-[16px] h-[16px]" />
        </div>
      </div>
      <ContactFloters />
    </div >
  )
}
