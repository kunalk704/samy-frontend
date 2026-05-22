import Button from '../components/ui/Button'
import { ArrowRight, Play } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-50/50 via-white to-white pointer-events-none" />
      
      <div className="relative section-padding pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="container-wide text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-medium text-brand-700">
              India's Leading Ecommerce Growth Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Scale Your Business Across{' '}
            <span className="text-brand-600">Every Marketplace</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-dark-500 max-w-2xl mx-auto leading-relaxed">
            Amazon, Flipkart, Shopify, and beyond — plus the digital marketing, 
            content, and strategy to turn traffic into revenue.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-dark-100">
            <p className="text-sm text-dark-400 mb-4">
              Trusted by 110+ brands across India
            </p>
            <div className="flex items-center justify-center gap-6 text-dark-300 font-semibold">
              <span>Amazon</span>
              <span className="text-dark-200">•</span>
              <span>Flipkart</span>
              <span className="text-dark-200">•</span>
              <span>Shopify</span>
              <span className="text-dark-200">•</span>
              <span>Nykaa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero