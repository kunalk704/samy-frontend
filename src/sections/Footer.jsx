function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-16">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Samy</h3>
              <p className="text-dark-300 leading-relaxed max-w-sm">
                India's leading ecommerce growth partner. We help brands scale across every marketplace.
              </p>
            </div>
            
            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-dark-200">Services</h4>
              <ul className="space-y-2 text-dark-400">
                <li><a href="#services" className="hover:text-white transition-colors">Amazon Management</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Influencer Marketing</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-dark-200">Contact</h4>
              <ul className="space-y-2 text-dark-400">
                <li>hello@samyecom.in</li>
                <li>Chandigarh, India</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dark-800 text-center text-dark-500 text-sm">
            © 2024 Samy Ecosystem. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer