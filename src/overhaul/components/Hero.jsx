import React from 'react'

const Hero = () => {
  return (
    <section className="text-center">
      <div className="text-sm uppercase tracking-wider text-teal-300 font-semibold mb-4">TECHNICAL FOUNDER-OPERATOR</div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
        I turn complex technology into systems, products, and companies that move.
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        I bring platform engineering depth, product judgment, technical GTM, and founder operating
        experience to early-stage companies where technical capability must become commercial momentum.
      </p>

      <p className="mt-4 text-sm text-gray-400">Platform Engineering · Distributed Systems · Product Strategy · Technical GTM · Founder Operations</p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#work"
          className="px-6 py-3 bg-teal-400 hover:bg-teal-300 rounded-md text-black font-semibold"
        >
          Explore selected work
        </a>
        <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-md text-gray-200">
          Start a conversation
        </a>
      </div>
    </section>
  )
}

export default Hero
