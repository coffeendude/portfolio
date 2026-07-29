import React from 'react'

const StageSystems = () => {
  return (
    <section className="mt-12 bg-gray-900">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-serif font-bold text-white">From stage to systems</h3>
          <p className="mt-4 text-gray-300 max-w-xl">
            The stage taught me that every complex outcome is both a system and a story. I combine
            narrative clarity with technical scaffolding so teams build predictable momentum.
          </p>
          <ul className="mt-6 space-y-2 text-gray-300">
            <li>Bridge storytelling and architectural design</li>
            <li>Define operating rhythms that scale</li>
            <li>Prioritize measurable outcomes over activity</li>
          </ul>
        </div>

        <div className="order-1 md:order-2">
          <div
            className="h-64 bg-gray-700 rounded-lg flex items-center justify-center"
            data-dev-placeholder="true"
            aria-hidden="true"
          >
            <span className="text-gray-400">Stage image / portrait placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StageSystems
