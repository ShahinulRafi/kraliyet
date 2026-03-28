import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Why Choose Our Caps
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:mt-6">
            Simple. Clean. Reliable caps delivered without drama.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 mt-10 text-center sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Feature 1 */}
          <div className="p-6">
            <div className="text-4xl">🧢</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Premium Quality
            </h3>
            <p className="mt-2 text-gray-600">
              Durable materials and clean stitching. No cheap, flimsy caps.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Fast Response
            </h3>
            <p className="mt-2 text-gray-600">
              Orders confirmed quickly. No waiting around wondering if we exist.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6">
            <div className="text-4xl">✔️</div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Reliable Service
            </h3>
            <p className="mt-2 text-gray-600">
              What you see is what you get. No surprises, no nonsense.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
