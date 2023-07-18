import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// zC0QVoVr4HXSt5W7Q
// template_bo5cmea
// service_1qd8jg3

import.meta.env.VITE_TEMPLATE

import.meta.env.VITE_PUBLIC_KEY


const Contact = () => {
  const formRef= useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      {import.meta.env.VITE_SERVICE},
      VITE_TEMPLATE,
      {
        from_name: form.name,
        to_name: 'Andrew Brought',
        from_email: form.email,
        to_email: 'andrewbrought@gmail.com',
        message: form.message,
      },
      VITE_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      alert('Thanks for stopping by. I will get back to you as soon as possible!');

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }), (error) => {
      setLoading(false);

      console.warn(error);

      alert('Hmm...Something went wrong. Please try again!')
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-mediummb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary0 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-mediummb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary0 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-mediummb-4">Your Message</span>
            <textarea
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary0 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            tyoe="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")