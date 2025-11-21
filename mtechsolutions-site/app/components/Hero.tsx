import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="leading-tight">
            <span className="block text-gray-900 font-extrabold">Bespoke Software Solutions</span>
            <span className="block text-primary-600 font-extrabold">That Deliver Results</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 sm:text-2xl max-w-5xl mx-auto font-medium">
            I'm Stephen Mahon, a Principal Software Architect with 25+ years delivering award-winning solutions
            for Irish government and enterprise. I help organisations succeed through proven architecture expertise
            that transforms operations and drives measurable results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Consultation
            </a>
            <Link
              href="#case-studies"
              className="flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition"
            >
              View My Work
            </Link>
          </div>

          {/* Scheduling Notice */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <strong className="text-gray-900">Available for new engagements</strong>
              </span>
              {' '}— 30-minute discovery calls, no obligation
            </p>
          </div>

          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">25+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">30+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">17+</div>
              <div className="text-sm text-gray-600 mt-1">Years Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
