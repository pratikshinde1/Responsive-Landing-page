import React from "react";

export const TodoTestimonials = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
          Customer Testimonials
        </h2>
        <p className="text-center mb-10 text-gray-500">
          This tool has transformed my productivity and organization!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative rounded-lg border-2 border-[#FE5A59] p-8">
            <div className="max-w-[80%]">
              <blockquote className="mb-8">
                <p className="text-xl font-medium">
                  "Using this website has made my tasks so much easier! I can't
                  imagine my day without it."
                </p>
              </blockquote>
              <footer className="flex items-center">
                <div className="mr-4 h-2 w-2 bg-[#FE5A59]"></div>
                <div>
                  <div className="font-semibold">Sherri Collins</div>
                  <div className="text-sm text-gray-500">
                    Project Manager, TechCorp
                  </div>
                </div>
              </footer>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  className="h-8 w-8 rounded-full border border-[#FE5A59] flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  className="h-8 w-8 rounded-full bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.1356 3.84188L9.56501 7.49991L6.1356 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img 
              src="public\images\real.jpg"
              alt="Testimonial"
              className="object-cover  "
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};
