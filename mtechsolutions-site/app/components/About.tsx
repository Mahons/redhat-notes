export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                I'm a Principal Software Architect with 25+ years experience, with the last 
                18+ years at An Garda Síochána, where I've delivered transformative technology 
                solutions for Ireland's national police service and justice sector.
              </p>
              <p>
                My journey from Senior Developer to Principal Architect has been marked
                by award-winning projects that have fundamentally improved how government
                serves citizens - from reducing vetting times by 95% to building Ireland's
                first law enforcement mobility infrastructure.
              </p>
              <p>
                I specialise in turning complex technical challenges into elegant,
                sustainable solutions. Whether it's modernizing legacy systems,
                establishing API-first architectures, or building high-performing
                development teams, I bring proven expertise in delivering results
                that last decades, not just months.
              </p>
              <p>
                <strong>I'm now available for consulting engagements through MTechSolutions</strong> -
                bringing this depth of experience to help your organisation succeed.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">My Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Enterprise Architecture",
                  "Application Modernization",
                  "API Strategy",
                  "Mobile Solutions",
                  "Cloud Architecture",
                  "Team Leadership",
                  "SDLC Optimisation",
                  "System Integration"
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/company/mtechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">18+ Years</div>
                  <div className="text-gray-700">Trusted by An Garda Síochána to deliver critical solutions</div>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                  <div className="text-gray-700">Reduction in processing time (13+ weeks to 5 days)</div>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">17+ Years</div>
                  <div className="text-gray-700">Production uptime for court integration</div>
                </div>
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Multiple</div>
                  <div className="text-gray-700">Award-winning projects delivered</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Certifications</h4>
                <p className="text-gray-600">
                  Currently pursuing Red Hat certifications to deepen expertise in 
                  enterprise Linux systems and cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
