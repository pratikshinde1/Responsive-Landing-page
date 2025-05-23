 import React from "react";

export const TodoHero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simplify Your Life with Our Todo App
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Stay organized and boost your productivity with our intuitive todo
            website. Experience a modern approach to task management that fits
            your lifestyle.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 rounded-md bg-[#FE5A59] hover:bg-[#FE5A59]/90 text-white font-medium">
              Get Started
            </button>
            <button className="px-4 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FE5A59] rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Organize. Achieve. Relax.
            </h2>
            <p className="mb-6">
              Earn quicker daily clarity. Check your comfort, and allocate with
              more focus. Ensure true creative balance.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-md border border-white bg-transparent hover:bg-white/10 text-white font-medium">
                Get Started Today
              </button>
              <button className="px-4 py-2 rounded-md bg-transparent hover:bg-white/10 text-white font-medium">
                Discover Features
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative p-6">
              <h3 className="text-xl font-semibold mb-2">
                Your Tasks. Our Tools.
              </h3>
              <div className="flex items-center mt-4 gap-2">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="public\images\full-length-portrait-happy-cheerful-man.jpg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                      fill="#555"
                    />
                     
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Franklin Hollerman</p>
                  <p className="text-sm text-gray-500">
                    Productivity Influencer
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <button className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                  <span className="sr-only">Play</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mx-auto mt-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <img src="public\images\icons8-google.svg" alt="Google" className="h-8 w-auto" />
          <img src="public\images\icons8-facebook-f.svg" alt="Facebook" className="h-8 w-auto" />
          <img src="public\images\icons8-youtube.svg" alt="YouTube" className="h-8 w-auto" />
          <img src="public\images\icons8-pinterest.svg" alt="Pinterest" className="h-8 w-auto" />
          <img src="public\images\icons8-twitter.svg" alt="Twitch" className="h-8 w-auto" />
        </div>
      </div>
    </section>
  );
};

