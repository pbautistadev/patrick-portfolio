import React from "react";
const footerLinks = [
  { id: 1, name: "Sobre Mí", path: "/" },
  { id: 2, name: "Habilidades", path: "#" },
  { id: 3, name: "Experiencia", path: "#" },
  { id: 4, name: "Formacion", path: "#" },
];

const footerContactLinks = [
  {
    id: 1,
    name: "Correo Electrónico",
    desc: "patrickbautista30@gmail.com",
    svg: [
      "M83.1 126.1c-21.8 2.6-40 11.5-55.6 27.3-12.9 13-21.1 28-25 45.6C.3 209-.8 252.6.9 262.5c1.6 8.8 5.7 17.8 11 23.7 10.6 11.9 102.7 81.2 269.4 202.7 41.7 30.4 86.1 63 98.5 72.5 47.1 35.9 72.5 51.4 97.2 59.4 35.5 11.5 67.7-1.8 143.2-59.4 12.4-9.5 56.8-42.1 98.5-72.5C890 364 977.3 298.4 988.2 286.1c5.2-5.8 9.4-14.9 10.9-23.6 1.7-9.9.6-53.5-1.6-63.5-4-17.9-12.2-32.8-25.5-46-13.1-13.2-27.4-21.2-46-25.6-7.2-1.8-25.8-1.9-421.5-2-228.8-.1-417.3.2-421.4.7z",
      "M4.2 373.8c-2.1 2-3.2 4.1-3.7 7.3-.3 2.4-.4 96.2-.3 208.4C.6 781.7.7 793.9 2.4 801c4.4 18.5 12.4 32.9 25.6 46 13.5 13.6 28.2 21.6 47 25.7 8.2 1.7 25.2 1.8 425 1.8s416.8-.1 425-1.8c18.8-4.1 33.5-12.1 47-25.7 13.2-13.1 21.2-27.5 25.6-46 1.7-7.1 1.8-19.4 2.2-213 .2-148.1 0-206.6-.8-209.3-1.3-4.6-5.9-7.7-11.2-7.7-3.3 0-8 3.2-43.8 30.2-48.4 36.6-103.6 77.3-196 144.6-38.2 27.9-80.3 58.9-93.5 68.9-37.9 28.9-58.5 42.5-82.7 54.3-45.4 22.2-83 24.5-126.4 7.5-26-10.1-51.4-25.4-86.4-51.9-34.1-25.8-41.3-31.1-99-73.1-105.9-77.1-184.3-135-228.8-168.9C17.1 371.9 15.6 371 11.6 371c-3.4 0-5 .6-7.4 2.8z",
    ],
  },
  {
    id: 2,
    name: "WhatsApp",
    desc: "(+39) 3514136725",
    svg: [
      "M740.3 1.5c-13.4 3-25.9 12.8-32.1 25.1-6.5 13-95.3 221.7-96.8 227.6-2.1 8-1.4 20.2 1.5 27.7 4.5 11.9 5.5 12.8 68.6 64.4 33 26.9 60.8 49.7 61.8 50.7 1.7 1.6 1.6 2.2-4.1 14.1-14.4 30.6-41.3 74.6-65 106.8-35.2 47.7-80.7 95.7-125.7 132.6-40.5 33.2-85.6 62.5-132.5 86-17 8.5-17.4 8.6-18.9 6.7-18.1-23.1-98.3-120.1-101.4-122.6-2.4-1.9-7.4-5-11.3-6.8-5.9-2.8-8.2-3.3-16.6-3.6-7.3-.3-10.9 0-15 1.3-7.2 2.4-223 94.9-229.2 98.3C8.2 718.2-2.1 739.2.9 756.3c.6 3.4 11.7 52.1 24.6 108.2 26.1 113.3 25.7 112 35.9 121.8 6.7 6.4 17.1 11.4 26.6 12.8 18.3 2.6 97.9-2.8 142-9.7 93.6-14.5 178.1-40.9 261.5-81.8 63-30.8 114.8-63.9 172.5-110.1 51.9-41.6 101.7-92.2 143.5-146 39.7-51 68.9-97.4 97.9-155.5 42.8-85.8 70.8-175.7 85-273 6.4-43.3 11.1-117.7 8.7-135-1.4-9.5-6.4-19.8-12.9-26.6-9.8-10.3-8.1-9.8-124-36.4C804.9 11.8 755.4.8 752.2.5c-3.1-.3-8.5.2-11.9 1z",
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-secondary flex flex-col items-center justify-center py-6">
      <div className="w-4/5 flex flex-row md:flex-row items-left justify-left md:gap-40 gap-4">
        <div className="md:w-1/3 w-full flex flex-col items-left justify-left">
          <div className="flex items-center justify-left">
            <svg
              className="w-[33px] fill-current text-primary ml-3"
              version="1.0"
              viewBox="0 0 1000 1000"
            >
              <path d="M554.8 101c-4.1 1.2-9.4 4.7-11.1 7.3-1.3 2.1-213.1 729.5-215.9 741.8-.9 3.9-.8 5.5.5 9.1 2 5.1 5.8 9.5 9.5 10.9 1.5.6 25.2 7.6 52.6 15.6 48.5 14.2 50.1 14.6 54.4 13.4 6.1-1.6 9.5-4.2 12.1-9.3 2.1-4.2 214.6-734.8 215.7-741.9 1-6.3-4.4-15.7-10.4-18-5.5-2.1-101.7-29.9-103.1-29.8-.9 0-2.8.4-4.3.9zM751.8 270.9c-1.4.5-4 1.7-5.7 2.7-4.3 2.5-73.2 76.8-74.8 80.6-2 4.7-1.6 11.8 1 16.1 1.3 2.2 27.8 26.2 66.7 60.5 83.1 72.9 78 68.4 78 69.2 0 .4-32.3 29.1-71.9 63.8-48.9 43-72.4 64.3-73.5 66.6-.9 1.9-1.6 5.9-1.6 8.9 0 7 0 7 30 39.2 13.4 14.3 28.4 30.4 33.4 35.8 5 5.4 11.1 11 13.5 12.5 5.9 3.4 12.3 3.5 17.9.1 5.6-3.3 231.6-215.2 233.1-218.5.6-1.5 1.4-4.5 1.7-6.8 1.2-8.8 3.9-6.1-118.6-121-62.4-58.6-114.8-107.2-116.5-108-4.1-2-9.5-2.7-12.7-1.7zM234.8 273.3c-2 1.2-41.8 38-88.4 81.7-46.7 43.7-98 91.8-114.1 106.9-27.7 25.9-29.4 27.8-31 32.7-1.9 6.3-1 10.9 3.4 16.7 1.6 1.9 50.3 48 108.3 102.4 130.1 121.9 119.3 111.9 122.9 113.7 4.5 2.4 12.8 2 17.4-.7 4.8-2.7 72.2-74.8 74.8-79.9 2.3-4.6 2.5-11.8.2-16.5-1.8-3.8-2.9-4.9-90.6-81.7-30.1-26.4-54.7-48.3-54.7-48.6 0-.3 24.6-22.2 54.7-48.6 87.7-76.8 88.8-77.9 90.6-81.7 1-1.9 1.7-5.9 1.7-9 0-4.3-.5-6.2-2.8-9.3-5.5-7.6-70.1-75.9-73.9-78.1-5.2-3.1-13.5-3.1-18.5 0z" />
            </svg>
            <div className="ml-2 w-20 flex flex-col justify-center">
              <h1 className="text-[20px] text-white font-bold overflow-hidden text-ellipsis leading-6">
                Patrick Bautista
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-textfooter mt-2">
              Analista Programador especializado en desarrollo Backend & Móvil,
              ofreciendo soluciones eficientes para desafíos complejos.
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-1/3 flex flex-col items-left justify-left gap-4">
          <h1 className="t-[18px] font-bold text-white">Enlaces Rápidos</h1>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id} className="mb-3">
                <a
                  href={link.path}
                  className=" hover:text-textfooter text-[16px] text-textfooter mt-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex flex-col items-left justify-left gap-4">
          <h1 className="t-[18px] font-bold text-white">Contacto</h1>
          {footerContactLinks.map((link) => (
            <div key={link.id} className="flex flex-row gap-2">
              <svg
                className="w-[20px] fill-current text-primary"
                version="1.0"
                viewBox="0 0 1000 1000"
              >
                {link.svg.map((path, index) => (
                  <path key={index} d={path} />
                ))}
              </svg>
              <p className="text-[16px] text-textfooter">{link.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 h-2 bg-textgray my-4"></div>
      <div>
        <p className="text-copyright text-[16px]">
          © 2023 Patrick Junior Bautista Toledo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
