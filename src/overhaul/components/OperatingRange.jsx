import React from 'react'

const items = [
  {
    title: 'Build the foundation',
    desc: 'Reliable infrastructure, data platforms, observability, and production readiness.'
  },
  {
    title: 'Shape the product',
    desc: 'Customer discovery, product definition, roadmap judgment, and implementation strategy.'
  },
  {
    title: 'Create momentum',
    desc: 'Technical GTM, partnerships, revenue strategy, and founder-level execution.'
  }
]

const OperatingRange = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-teal-300">{it.title}</h3>
          <p className="mt-2 text-gray-300">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default OperatingRange
