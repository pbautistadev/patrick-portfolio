import React from "react";

const Projects = () => {
  return (
    <div className=" flex flex-col items-center w-full bg-gradient-to-r from-gray-50 from-99% to-transparent to-99% pt-15 pb-15">
      <h1 className="text-[30px] text-secondary font-bold">Mis Proyectos</h1>
      <div className="w-2/3 bg-white flex flex-col items-center justify-center gap-4 my-8 py-8">
        <svg
          className="w-[20px] fill-current text-primary"
          version="1.0"
          viewBox="0 0 999 999"
        >
          <path d="M272 .6c-87.2 5.3-153.5 81.9-145.9 168.8 1.2 13.6 3.3 23.8 7.9 37.5 14.6 43.4 49 78.7 92.7 95.2l8.3 3.2v389.5l-5.2 1.8c-15.1 4.9-34.7 16.1-48.8 27.9-46 38.6-65.5 99.9-50.5 158.8 13.8 53.7 57.6 97.4 111.5 111.2 20 5.1 46.6 6.1 66.9 2.5 55.9-10.1 101.5-49.4 119.9-103.5 6-17.6 7.6-27.9 7.6-49 0-22.1-1.4-31.6-7.4-49.6-13.6-41-43.3-74.5-81.5-92-5.2-2.4-9.5-4.8-9.5-5.2 0-1.9 7.4-10.8 13-15.7 14.5-12.5 37.6-20.9 75.5-27.4 15.3-2.6 23.5-3.5 70.5-8.1 55.5-5.4 85.1-9.7 111-16.2 28.2-6.9 52.8-16.8 73.4-29.5 43.7-26.8 72.1-69.2 82-122.7 2.5-13.4 4.6-31.9 4.6-40.8 0-4.6.4-8.3.9-8.3.6 0 6.3-2.4 12.9-5.3 45.6-20.4 78.6-61 89.3-109.9 5.9-27.2 3.9-58.5-5.6-84.8-17.6-49.3-58.6-86.4-109-98.8-13.7-3.4-22.5-4.5-37.5-4.5-15.4 0-23.7 1-39 4.9-50.7 12.6-91.6 50.6-108.8 100.9-6 17.5-7.6 27.9-7.7 49 0 22.3 1.6 32.7 7.7 50.4 14 41 42.2 72.6 81.1 91.1 6.7 3.2 14.6 6.5 17.6 7.5l5.3 1.7-.6 8.2c-4.9 59.3-29.1 86.4-90.6 101.1-22.8 5.4-36 7.2-113.5 15-49.3 5-68 7.9-94.7 14.6-12.3 3.1-32.5 9.9-42 14.3L328 587V305.3l8.3-3.3c23.8-9.3 46.4-24.9 61.7-42.5 14.1-16.2 24.5-34.5 31-54.5 6.3-19.1 7.5-26.8 7.5-49-.1-21.6-1.6-31.8-7.7-49.5-13.3-39.1-41-71-77.5-89.4C327.5 5.2 298-.9 272 .6zM292.4 127c14.1 5.3 22.5 20.4 19.5 35-1.5 7.2-3.2 10.6-8.3 15.8-9.7 10.2-24 12.5-37.3 6.1-12.7-6.1-19.2-22.9-14.7-37.9 2.2-7.6 10.8-16.4 18.4-19 7.3-2.5 15.6-2.5 22.4 0zm436.7 124.6c4.2 1.3 6.7 2.9 11.5 7.8 4.9 4.8 6.5 7.3 7.8 11.5 3.4 11.5 1 22.9-6.4 31.4-9.1 10.3-25.4 13.2-38 6.7-4.2-2.2-11.2-9.3-13.3-13.5-6.1-12.3-3.1-28.6 7-37.5 8.5-7.4 19.9-9.8 31.4-6.4zM287.2 813.1c7.2 1.5 11.5 3.9 16.4 9.1 5.1 5.2 6.8 8.6 8.3 15.8 2.1 10.2-1.6 21.7-9.3 28.8-8.1 7.5-20.2 10-31.7 6.6-7.7-2.3-17-11.6-19.3-19.3-5.6-19 4.9-37.4 23.5-41 6.2-1.2 6.2-1.2 12.1 0z" />
        </svg>
        <h2 className="text-[24px] font-bold">¡Próximamente!</h2>
        <p className="w-1/2 text-[18px] text-center text-textgray">
          Estoy trabajando en proyectos emocionantes que mostrarán mis
          habilidades y pasión por el desarrollo de software. ¡Vuelve pronto
          para verlos!
        </p>
        <button
          type="button"
          className="text-[16px] bg-primary text-white px-6 py-2 rounded-lg active:bg-sky-600 transition duration-300"
          onClick={() =>
            alert(
              "¡Gracias por tu interés! Te notificaré cuando los proyectos estén disponibles."
            )
          }
        >
          Notificarme cuando estén disponibles
        </button>
      </div>
    </div>
  );
};

export default Projects;
