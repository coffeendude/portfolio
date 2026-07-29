import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import portrait from '../assets/creator.png'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const EMAILJS_AVAILABLE =
      import.meta.env.VITE_SERVICE && import.meta.env.VITE_TEMPLATE && import.meta.env.VITE_PUBLIC_KEY

    if (!EMAILJS_AVAILABLE) {
      setLoading(false)
      // Fallback to mailto when EmailJS keys are not configured (keeps operation safe/non-destructive)
      const subject = `Website contact: ${form.name || 'Anonymous'}`
      const body = `From: ${form.name || ''} <${form.email || ''}>\n\n${form.message || ''}`
      window.location.href = `mailto:andrewbrought@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        {
          from_name: form.name,
          to_name: 'Andrew Brought',
          from_email: form.email,
          to_email: 'andrewbrought@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false)
        alert(`Thanks for stopping by, ${form.name}. Andrew will get back to you soon.`)
        setForm({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
        alert('Hmm... Something went wrong. Please try again or email andrewbrought@gmail.com')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-gray-900 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let’s build something consequential.</h3>

        <p className="mt-4 text-gray-300 max-w-2xl">
          I’m available for leadership roles, advising startups, technical GTM, partnerships,
          and speaking engagements. Use the form below or email me to get in touch.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:andrewbrought@gmail.com"
            className="px-4 py-2 bg-teal-400 text-black rounded-md font-semibold"
          >
            Email
          </a>
          <a
            href="#book"
            className="px-4 py-2 border border-gray-700 text-gray-200 rounded-md"
          >
            Book a meeting
          </a>
          <a
            href="#speak"
            className="px-4 py-2 border border-gray-700 text-gray-200 rounded-md"
          >
            Invite to speak
          </a>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-xl">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-gray-800 px-4 py-3 rounded-md text-white outline-none"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            type="email"
            className="bg-gray-800 px-4 py-3 rounded-md text-white outline-none"
          />
          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can I help?"
            className="bg-gray-800 px-4 py-3 rounded-md text-white outline-none"
          />

          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-teal-400 text-black rounded-md font-semibold"
            >
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[480px] h-[280px] flex items-center justify-center"
      >
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center text-center">
          <img src={portrait} alt="Andrew Brought" className="w-40 h-40 rounded-full object-cover" />
          <h4 className="mt-4 text-xl font-semibold">Andrew Brought</h4>
          <p className="mt-2 text-gray-300 text-sm max-w-xs">
            Technical founder-operator. I help teams ship reliable systems, translate
            strategy into execution, and connect product to revenue.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/" className="text-gray-400">GitHub</a>
            <a href="#" className="text-gray-400">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')