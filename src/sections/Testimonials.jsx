import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/patterns/SectionHeader'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Samy transformed our Amazon presence completely. Revenue increased 4x within 6 months of working with them.",
    author: "Rahul Sharma",
    role: "Founder, Happilo",
    initials: "RS",
  },
  {
    id: 2,
    quote: "The product photography and A+ content they created elevated our brand perception instantly. Highly professional team.",
    author: "Priya Malhotra",
    role: "CEO, Native Essence",
    initials: "PM",
  },
  {
    id: 3,
    quote: "From website development to marketplace management, they handle everything. Our one-stop ecommerce partner.",
    author: "Vikram Singh",
    role: "Director, Riverwell Co",
    initials: "VS",
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="section-padding py-24 bg-dark-50">
      <div className="container-wide">
        <SectionHeader
          badge="Testimonials"
          title="What our clients say"
          align="center"
        />

        <div
          ref={ref}
          className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-dark-100">
            <Quote className="w-10 h-10 text-brand-200 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-dark-700 leading-relaxed mb-8">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                <span className="text-brand-700 font-semibold">{testimonial.initials}</span>
              </div>
              <div>
                <div className="font-semibold text-dark-900">{testimonial.author}</div>
                <div className="text-dark-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-dark-200 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-dark-400 text-sm">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded-lg border border-dark-200 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials