function Demo() {
    return (
      <section className="bg-neutral text-gray-300">
        <div className="relative pt-6 md:pt-12 pb-24 md:pb-48 md:px-8">
          <div className="relative max-w-4xl mx-auto">
            <div className="max-lg:hidden absolute top-1/4 -left-4 -translate-x-full text-sm flex flex-col gap-1 items-center">
              <p className="text-base-content-primary">
                PregnantMeal in 3 minutes
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
                className="w-8 h-8 fill-gray-300 shrink"
              >
                <path
                  d="M17 17L6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-gray-300"
                />
                <path
                  d="M11 17.8685C11 17.8685 16.6335 18.3434 17.4885 17.4885C18.3434 16.6336 17.8684 11 17.8684 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-300"
                />
              </svg>
            </div>
  
            <div className="md:border md:p-2 md:rounded-2xl bg-base-200/70">
              <div className="relative w-full aspect-video overflow-hidden sm:rounded-xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/IKjZ3iLOztw?si=qVD5iAsc0RZQQJjs"
                  title="PregnantMeal Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Demo;
  