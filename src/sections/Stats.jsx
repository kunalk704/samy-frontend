import { useScrollReveal } from '../hooks/useScrollReveal'
import { stats } from '../data/stats'

function Stats() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="section-padding py-20 bg-brand-600">
      <div
        ref={ref}
        className={`container-wide transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-brand-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats