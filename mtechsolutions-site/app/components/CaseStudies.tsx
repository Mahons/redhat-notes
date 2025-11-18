export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Court Services Integration",
      client: "An Garda Síochána & Courts Service",
      challenge: "Manual, error-prone data transfer between organisations causing delays and inefficiencies",
      solution: "Led development of automated integration solution ensuring seamless, timely data exchange between critical justice systems",
      results: [
        "17+ years of continuous operation with zero major incidents",
        "Award-winning solution recognised for innovation and reliability",
        "Eliminated manual data transfer processes",
        "Improved data accuracy and timeliness",
        "Model for long-term sustainable architecture"
      ],
      tags: ["System Integration", "Enterprise Architecture", "Inter-Agency Collaboration"],
      badge: "Award Winner"
    },
    {
      title: "eVetting Modernization",
      client: "An Garda Síochána",
      challenge: "Paper-based vetting process taking 13+ weeks, creating bottlenecks in providing national disclosures to citizens",
      solution: "Led architecture for complete digital transformation, designing a scalable electronic vetting platform with automated workflows and integration capabilities",
      results: [
        "Processing time reduced from 13+ weeks to under 5 days for 90%+ of applicants",
        "Award-winning solution recognised for innovation and impact",
        "Dramatically improved operational efficiency and citizen service delivery"
      ],
      tags: ["Application Modernisation", "Process Automation", "Enterprise Architecture"],
      badge: "Award Winner"
    },
    {
      title: "Enterprise Mobility Infrastructure",
      client: "An Garda Síochána",
      challenge: "No mobile capability for field operations, requiring manual processes and delayed information access",
      solution: "Principal Architect for groundbreaking mobility initiative. Designed backend architecture, built and mentored teams of Android developers, UX designers, and support specialists",
      results: [
        "First-ever mobile devices deployed across the organisation",
        "Robust and scalable mobility infrastructure still in use today",
        "Enabled real-time access to critical information for the frontline",
        "Set foundation for ongoing digital transformation"
      ],
      tags: ["Mobile Architecture", "Team Leadership", "Cloud Infrastructure"],
      badge: "Transformative"
    },
    {
      title: "API-First Digital Foundation",
      client: "An Garda Síochána",
      challenge: "Siloed systems, limited integration capabilities, inability to support modern digital services",
      solution: "Championed and implemented API-first strategy. Established dedicated API team, defined standards and governance, built organisation-wide API infrastructure",
      results: [
        "APIs now serve as backbone of digital infrastructure",
        "Enabled rapid development of new services and integrations",
        "Positioned organisation for future technology evolution",
        "Created reusable, interoperable architecture"
      ],
      tags: ["API Strategy", "Digital Transformation", "Team Building"],
      badge: "Strategic"
    },
    {
      title: "MIBI Uninsured Drivers Integration",
      client: "An Garda Síochána & Motor Insurance Bureau of Ireland",
      challenge: "No automated access to uninsured vehicle information, requiring manual checks and creating delays during traffic enforcement operations",
      solution: "Designed and implemented integration with MIBI to receive daily feeds of all uninsured drivers in Ireland. Built API layer to expose this data to mobile applications, enabling real-time lookups by frontline officers",
      results: [
        "Real-time access to uninsured vehicle database for frontline officers",
        "Daily automated feed processing ensuring up-to-date information",
        "Seamless integration with Vehicle and Driver mobile applications",
        "Improved road safety enforcement capabilities",
        "Model for inter-agency data sharing and API integration"
      ],
      tags: ["API Integration", "Data Integration", "Mobile Enablement", "Inter-Agency Collaboration"],
      badge: "Operational Impact"
    },
    {
      title: "Open Source Security & Governance",
      client: "An Garda Síochána",
      challenge: "Uncontrolled use of open source packages risking introduction of security vulnerabilities and malicious code into critical systems",
      solution: "Introduced Nexus Lifecycle for comprehensive open source governance. Implemented automated scanning of all projects for vulnerabilities. Deployed Nexus Firewall to proxy external package repositories, automatically quarantining known malicious packages before they enter the organisation",
      results: [
        "Proactive prevention of vulnerabilities at source through repository firewall",
        "Automated scanning ensuring no vulnerable packages in production",
        "Eliminated risk of malicious package infiltration",
        "Organisation-wide visibility of open source security posture",
        "Established security-first culture for dependency management"
      ],
      tags: ["Security", "DevSecOps", "Risk Management", "Governance"],
      badge: "Critical Security"
    },
    {
      title: "DevOps & Platform Modernization",
      client: "An Garda Síochána",
      challenge: "Manual deployment processes, inconsistent environments, lack of automation across diverse infrastructure including VMs, containers, and mobile platforms",
      solution: "Introduced Red Hat OpenShift as container-based platform. Deployed Azure DevOps on-premise with comprehensive visibility across all environments. Established automated CI/CD pipelines for deployments to OpenShift, VMs, and Google's Enterprise Play Store",
      results: [
        "Automated deployment pipelines ensuring consistency across all platforms",
        "Introduced modern container orchestration with Red Hat OpenShift",
        "Unified DevOps platform with visibility across entire infrastructure",
        "Reduced deployment time and errors through automation",
        "Enabled rapid, reliable releases across diverse technology stack"
      ],
      tags: ["DevOps", "OpenShift", "CI/CD", "Platform Engineering"],
      badge: "Transformative"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selected award-winning solutions that demonstrate the breadth and impact of my work transforming Irish government operations
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="lg:grid lg:grid-cols-3">
                <div className="p-8 lg:col-span-1 bg-gradient-to-br from-primary-50 to-white border-r border-gray-100">
                  <div className="mb-4">
                    {study.badge && (
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-3">
                        {study.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-primary-700 font-medium">{study.client}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-primary-200 text-primary-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
