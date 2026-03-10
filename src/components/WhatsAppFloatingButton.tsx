import React from "react";

const WhatsAppFloatingButton: React.FC = () => {
  const whatsappLink = "https://wa.me/8801730028095";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14
        bg-[#25D366] rounded-full flex items-center justify-center
        shadow-md hover:shadow-lg transition-transform duration-150
        hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="currentColor"
      >
        <path d="M12 0C5.371 0 0 5.371 0 12c0 2.122.55 4.123 1.514 5.865L0 24l6.597-1.737A11.951 11.951 0 0 0 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm5.383 16.953c-.222.622-1.361 1.206-1.887 1.298-.515.089-1.122.13-2.792-.71-1.66-.83-2.747-2.347-3.259-2.968-.512-.62-1.01-1.012-1.727-.996-.716.016-1.47.092-2.24.092-.77 0-1.515-.111-2.157-.386a.75.75 0 0 1-.414-.79c.123-.97.571-1.893 1.127-2.67.558-.782 3.13-3.076 3.546-3.253.42-.18.854-.247 1.279-.24.425.008.84.056 1.21.056.366 0 .737-.048 1.082-.091.347-.044.69-.133 1.02-.111.33.021.69.143.935.426.242.281.487.737.548 1.04.06.304.06.959-.078 1.167-.138.208-.586.384-1.048.637-.462.253-1.74.966-1.86 1.08-.118.113-.203.25-.114.464.09.211.607.841 1.299 1.376.69.533 1.485.825 2.217.957.73.13 1.156.095 1.588-.034.432-.132 1.38-.633 1.575-1.238.197-.604.197-1.119.138-1.234-.058-.117-.246-.165-.456-.253z"/>
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;
