export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">Stephen Mahon</h3>
            <p className="text-gray-400 mb-4">
              Principal Software Architect | MTechSolutions
            </p>
            <p className="text-gray-400 text-sm">
              Delivering award-winning architecture and technology solutions for government and enterprise
              organisations in Ireland.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition">Enterprise Architecture</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition">Application Modernisation</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition">API Strategy</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition">Technical Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:stephen@mtechsolutions.ie"
                  className="hover:text-primary-400 transition"
                >
                  stephen@mtechsolutions.ie
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mtechsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition inline-flex items-center"
                >
                  LinkedIn
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} MTechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
