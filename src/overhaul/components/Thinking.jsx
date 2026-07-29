import React from 'react'
import essaysData from '../../content/thinking.json'

const Thinking = () => {
  const essays = (essaysData || []).filter((e) => e.published)

  if (!essays || essays.length === 0) {
    return <div className="text-gray-400">Thinking content is in draft. Subscribe for updates.</div>
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {essays.map((e) => (
        <article key={e.id} className="p-6 bg-gray-800 rounded-lg">
          <h5 className="font-semibold text-teal-300">{e.title}</h5>
          <p className="text-gray-300 text-sm mt-2">{e.excerpt}</p>
          {e.slug ? (
            <a href={e.slug} className="mt-3 inline-block text-teal-300 font-medium">
              Read more →
            </a>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default Thinking
