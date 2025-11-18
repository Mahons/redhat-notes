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
            <Link
              href="#contact"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="#case-studies"
              className="flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition"
            >
              View My Work
            </Link>
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
