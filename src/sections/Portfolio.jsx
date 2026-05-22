import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeader from '../components/patterns/SectionHeader'
import { ArrowUpRight } from 'lucide-react'

// Portfolio data — replace with your real images later
const portfolioItems = [
  {
    id: 1,
    brand: 'Happilo',
    category: 'Amazon Management',
    description: 'Full account optimization and PPC strategy',
    image: '/images/portfolio/happilo.jpg',
    color: 'bg-green-50',
  },
  {
    id: 2,
    brand: 'Native Essence',
    category: 'Brand Launch',
    description: 'End-to-end brand creation and marketplace launch',
    image: '/images/portfolio/native-essence.jpg',
    color: 'bg-orange-50',
  },
  {
    id: 3,
    brand: 'St.bir Gabru',
    category: 'Product Photography',
    description: 'Studio shoots and A+ content design',
    image: '/images/portfolio/gabru.jpg',
    color: 'bg-gray-50',
  },
  {
    id: 4,
    brand: 'KLR Fit',
    category: 'Digital Marketing',
    description: 'Performance campaigns driving 3x ROAS',
    image: '/images/portfolio/klr-fit.jpg',
    color: 'bg-red-50',
  },
]

function Portfolio() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="portfolio" className="section-padding py-24 bg-white">
      <div className="container-wide">
        <SectionHeader
          badge="Our Work"
          title="Results that speak for themselves"
          description="From startup launches to scaling established brands — see how we've helped businesses grow."
        />

        <div
          ref={ref}
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-dark-100 hover:border-dark-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Image placeholder — replace with real images */}
              <div className={`h-64 ${item.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-dark-300">
                  {item.brand[0]}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-brand-600 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold text-dark-900 group-hover:text-brand-600 transition-colors">
                      {item.brand}
                    </h3>
                    <p className="mt-2 text-dark-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-dark-50 group-hover:bg-brand-50 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-dark-400 group-hover:text-brand-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio