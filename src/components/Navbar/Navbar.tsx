import React from "react";
import CV from "../../assets/pdf/patrickbautista_es.pdf";

const navbarLinks = [
  { id: 1, name: "Sobre Mí", path: "#about" },
  { id: 2, name: "Habilidades", path: "#abilities" },
  { id: 3, name: "Experiencia", path: "#experience" },
  { id: 4, name: "Formacion", path: "#formation" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-6 bg-white">
        <div className="flex items-center">
          <svg
            className="w-[33px] fill-current text-primary ml-3"
            version="1.0"
            viewBox="0 0 1000 1000"
          >
            <path d="M554.8 101c-4.1 1.2-9.4 4.7-11.1 7.3-1.3 2.1-213.1 729.5-215.9 741.8-.9 3.9-.8 5.5.5 9.1 2 5.1 5.8 9.5 9.5 10.9 1.5.6 25.2 7.6 52.6 15.6 48.5 14.2 50.1 14.6 54.4 13.4 6.1-1.6 9.5-4.2 12.1-9.3 2.1-4.2 214.6-734.8 215.7-741.9 1-6.3-4.4-15.7-10.4-18-5.5-2.1-101.7-29.9-103.1-29.8-.9 0-2.8.4-4.3.9zM751.8 270.9c-1.4.5-4 1.7-5.7 2.7-4.3 2.5-73.2 76.8-74.8 80.6-2 4.7-1.6 11.8 1 16.1 1.3 2.2 27.8 26.2 66.7 60.5 83.1 72.9 78 68.4 78 69.2 0 .4-32.3 29.1-71.9 63.8-48.9 43-72.4 64.3-73.5 66.6-.9 1.9-1.6 5.9-1.6 8.9 0 7 0 7 30 39.2 13.4 14.3 28.4 30.4 33.4 35.8 5 5.4 11.1 11 13.5 12.5 5.9 3.4 12.3 3.5 17.9.1 5.6-3.3 231.6-215.2 233.1-218.5.6-1.5 1.4-4.5 1.7-6.8 1.2-8.8 3.9-6.1-118.6-121-62.4-58.6-114.8-107.2-116.5-108-4.1-2-9.5-2.7-12.7-1.7zM234.8 273.3c-2 1.2-41.8 38-88.4 81.7-46.7 43.7-98 91.8-114.1 106.9-27.7 25.9-29.4 27.8-31 32.7-1.9 6.3-1 10.9 3.4 16.7 1.6 1.9 50.3 48 108.3 102.4 130.1 121.9 119.3 111.9 122.9 113.7 4.5 2.4 12.8 2 17.4-.7 4.8-2.7 72.2-74.8 74.8-79.9 2.3-4.6 2.5-11.8.2-16.5-1.8-3.8-2.9-4.9-90.6-81.7-30.1-26.4-54.7-48.3-54.7-48.6 0-.3 24.6-22.2 54.7-48.6 87.7-76.8 88.8-77.9 90.6-81.7 1-1.9 1.7-5.9 1.7-9 0-4.3-.5-6.2-2.8-9.3-5.5-7.6-70.1-75.9-73.9-78.1-5.2-3.1-13.5-3.1-18.5 0z" />
          </svg>
          <div className="ml-2 w-20 flex flex-col justify-center">
            <h1 className="text-[20px] text-secondary font-bold overflow-hidden text-ellipsis leading-6">
              Patrick Bautista
            </h1>
          </div>
        </div>
        <div>
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.id} className="inline-block mx-6">
                <a
                  href={link.path}
                  className="hover:text-primary text-[16px] font-bold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-8">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download="cv_patrickbautista.pdf"
          >
            <button
              type="button"
              className="bg-primary text-white px-6 py-2 rounded-lg active:bg-sky-600 transition duration-300"
            >
              Descargar CV
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
