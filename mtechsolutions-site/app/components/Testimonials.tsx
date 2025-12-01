export default function Testimonials() {
  const testimonials = [
    {
      quote: "Stephen's architectural vision and technical leadership were instrumental in transforming our digital infrastructure. His ability to design solutions that last decades, not just years, set a new standard for our organisation.",
      author: "Senior Stakeholder",
      role: "An Garda Síochána",
      project: "Enterprise Mobility Infrastructure"
    },
    {
      quote: "The eVetting system Stephen architected reduced our processing time from 13 weeks to under 5 days. This wasn't just a technical achievement - it fundamentally improved how we serve citizens and support national security.",
      author: "Programme Director",
      role: "An Garda Síochána",
      project: "eVetting Modernisation"
    },
    {
      quote: "Stephen's expertise in API strategy and DevSecOps established a foundation that enabled rapid innovation while maintaining security. His mentorship elevated our entire development team's capabilities.",
      author: "Development Team Lead",
      role: "An Garda Síochána",
      project: "API-First Digital Foundation"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from stakeholders and colleagues on projects delivered over 18+ years
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <svg
                  className="h-10 w-10 text-primary-600 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-primary-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-xs text-primary-600 mt-2 font-medium">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Note: Specific names withheld for privacy. References available upon request for serious enquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
