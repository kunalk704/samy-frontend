import { useScrollReveal } from '../hooks/useScrollReveal'
import Button from '../components/ui/Button'
import { ArrowRight, MessageCircle } from 'lucide-react'

function CTABanner() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section id="cta" className="section-padding py-20">
      <div className="container-wide">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-16 md:px-16 md:py-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-700 rounded-full opacity-30 blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
              Ready to Scale Your Business?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
              Get a free consultation and discover how we can grow your revenue across every marketplace.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-brand-50 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-300 text-white hover:bg-brand-500 hover:border-brand-400 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>

            <p className="mt-6 text-sm text-brand-200">
              No commitment required • Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner