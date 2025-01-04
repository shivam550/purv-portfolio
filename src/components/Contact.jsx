import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#000000e6] py-12 px-6">
    <div className="max-w-4xl mx-auto text-center">
    <h2 className='text-4xl mb-8 text-emerald-400 font-semibold underline underline-offset-8'>Contact Me</h2>
      <p className="text-white mb-4">
        Whether you have a project idea, need assistance, or just want to say hello, I’m here to help. Feel free to get in touch!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 ">
          <h3 className="text-xl font-semibold text-[#000000e6] mb-2">Email Me</h3>
          <p className="text-gray-600">
            <a
              href="mailto:Purvprabhakar23@gmail.com"
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              Purvprabhakar23@gmail.com
            </a>
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 ">
          <h3 className="text-xl font-semibold text-[#000000e6] mb-2">Call Me</h3>
          <p className="text-gray-600">
            <a
              href="tel:+91-9116411118"
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              +91-9116411118
            </a>
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 ">
          <h3 className="text-xl font-semibold text-[#000000e6] mb-2">Follow Me</h3>
          <p className="text-emerald-400 space-x-4">
            <a
              href="https://in.linkedin.com/in/purv-prabhakar-6a840023b?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline cursor-pointer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact