export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Looking for an experienced architect to guide your next initiative?
            I'm available for consulting engagements through MTechSolutions. Let's discuss how I can help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email</h3>
                <a
                  href="mailto:stephen@mtechsolutions.ie"
                  className="text-primary-600 hover:text-primary-700 text-lg"
                >
                  stephen@mtechsolutions.ie
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/stephenmahon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-lg inline-flex items-center"
                >
                  Connect on LinkedIn
                  <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ideal Projects</h3>
              <ul className="space-y-3">
                {[
                  "Enterprise architecture for government or large organisations",
                  "Legacy system modernisation and cloud migration",
                  "API strategy and digital transformation initiatives",
                  "Mobile solution architecture and implementation",
                  "Technical leadership and team building",
                  "Short-term architecture consulting engagements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Working through MTechSolutions,</span> I'm available for short-term consulting
                engagements, architecture reviews, technical advisory, and strategic planning
                initiatives. Based in Ireland with flexibility for remote work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
