import { useScrollReveal } from '../hooks/useScrollReveal'
import { Users, ArrowUpRight } from 'lucide-react'
import Button from '../components/ui/Button'

function WeInfluenceMention() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="section-padding py-16 bg-white border-y border-dark-100">
      <div
        ref={ref}
        className={`container-wide transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
              <Users className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600 mb-1">
                Part of the Samy Ecosystem
              </p>
              <h3 className="text-xl font-semibold text-dark-900">
                WeInfluence Academy
              </h3>
              <p className="text-dark-500 mt-1">
                Training the next generation of creators and influencers for brand partnerships.
              </p>
            </div>
          </div>

          <Button variant="outline" size="sm" className="flex-shrink-0">
            Learn More
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WeInfluenceMention