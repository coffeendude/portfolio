import React from 'react'
import backendImg from '../../assets/backend.png'
import dataImg from '../../assets/company/data.png'
import creatorImg from '../../assets/creator.png'
import projectsData from '../../content/selected_work.json'

const imageMap = {
  backend: backendImg,
  data: dataImg,
  creator: creatorImg,
}

const SelectedWork = () => {
  const projects = projectsData.filter((p) => p.published)

  if (!projects || projects.length === 0) {
    return (
      <div className="text-gray-400">No published case studies are available publicly. Contact for details.</div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((p) => (
        <article key={p.id} className="p-6 bg-gray-800 rounded-lg">
          {p.image && imageMap[p.image] && (
            <img src={imageMap[p.image]} alt={p.title} className="h-40 w-full object-cover rounded mb-4" />
          )}
          <h4 className="text-lg font-semibold">{p.title}</h4>
          <p className="text-sm text-gray-400">{p.role}{p.outcome ? ` — ${p.outcome}` : ''}</p>
        </article>
      ))}
    </div>
  )
}

export default SelectedWork
