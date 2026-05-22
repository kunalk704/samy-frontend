import Hero from '../sections/Hero'
import SectionHeader from '../components/patterns/SectionHeader'
import ServiceCard from '../components/patterns/ServiceCard'
import LogoCloud from '../components/patterns/LogoCloud'
import { services } from '../data/services'
import { platforms } from '../data/platforms'

function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="section-padding py-24 bg-dark-50">
        <div className="container-wide">
          <SectionHeader
            badge="Our Services"
            title="Everything you need to grow online"
            subtitle="End-to-end ecommerce solutions"
            description="From marketplace management to digital marketing, we handle every aspect of your online business growth."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding py-24 bg-white">
        <div className="container-wide">
          <LogoCloud
            title="Platforms We Work On"
            logos={platforms.map(p => ({ alt: p.name, src: p.src }))}
          />
        </div>
      </section>
    </div>
  )
}

export default Home