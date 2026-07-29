import React from 'react'
import OverhaulHero from './components/Hero'
import OperatingRange from './components/OperatingRange'
import SelectedWork from './components/SelectedWork'
import Thinking from './components/Thinking'
import StageSystems from './components/StageSystems'
import Contact from '../components/Contact'
import logo from '../assets/logo.svg'

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Andrew Brought" className="h-8" />
            <span className="text-teal-300 font-semibold">Andrew Brought</span>
          </div>
          <div className="space-x-4">
            <a href="#work" className="text-sm text-gray-300">Work</a>
            <a href="#thinking" className="text-sm text-gray-300">Thinking</a>
            <a href="#contact" className="text-sm text-teal-300">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <OverhaulHero />

        <section className="mt-12">
          <OperatingRange />
        </section>

        <section id="work" className="mt-12">
          <SelectedWork />
        </section>

        <section id="thinking" className="mt-12">
          <Thinking />
        </section>

        <section id="stage" className="mt-12">
          <StageSystems />
        </section>
      </main>

      <footer className="bg-gray-800 py-12" id="contact">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </footer>
    </div>
  )
}

export default HomeSkeleton
