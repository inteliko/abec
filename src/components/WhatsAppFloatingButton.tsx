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
        bg-white rounded-full flex items-center justify-center
        shadow-md hover:shadow-lg transition-transform duration-150
        hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-6 h-6 text-[#25D366]"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339 55.2 285.6 32 229.4 32 103
92.3 0 201 0 336.8 0 391.5 11.4 444.9 32.7 496L1
511.2c11.8-33.1 34.7-76.2 63.9-111.8 22.2-27.2 20.7-44.5
3.8-57.1-29.9-22.3-57.1-50-57.1-84.1 0-79.4 72.9-152.9
163.1-152.9 43.4 0 84.1 16.8 114.6 47.4 30.5 30.7 47.4
71.5 47.4 113.9 0 90.7-60.3 153.7-105 203.5-25.3 28
-45.5 50.4-45.5 78.7 0 21.6 8.3 40.9 23.2 54.9 14.3
13.5 32 21.1 50.3 21.1 26.7 0 54.2-10.3 77.6-28.3 27.3
-20.9 48.6-51.3 63.6-88.4 14.6-35.2 22.3-72.6 22.3-110.2
0-104-31.9-178.4-89-236.8z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;
