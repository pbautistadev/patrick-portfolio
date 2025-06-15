const experienceInfo = [
  {
    id: 1,
    name: "Analista Programador",
    company: "Materia Gris SAC",
    date: "01/08/2023 – 31/10/2024",
    city: "Lima, Perú",
    description:
      "Liderazgo en análisis y desarrollo de sistemas backend (C#, PostgreSQL/SQL Server) con arquitectura limpia y optimización. \n Participación en desarrollo de aplicaciones móviles con Flutter, creando interfaces de usuario robustas. \n Experiencia en configuración Docker y creación de AWS Step Functions/Lambdas para despliegue continuo. \n Integración de tecnologías como Push Notifications con Firebase.",
  },
  {
    id: 2,
    name: "Analista Programador",
    company: "Amazontic S.A.C.",
    date: "01/10/2021 – 30/06/2023",
    city: "Lima, Perú",
    description:
      "Implementación de nuevas funcionalidades en aplicaciones móviles y participación en el ciclo de desarrollo. \n Gestión y resolución eficiente de bugs, colaborando con programadores.  \n Experiencia en consultas SQL, ejecución de procedimientos almacenados y desarrollo de scripts para exportación de datos. \n Realización de pruebas manuales exhaustivas y generación de documentación técnica.",
  },
];

function Experience() {
  return (
    <div className=" flex flex-col items-center bg-gradient-to-r from-gray-50 from-99% to-transparent to-99% pt-15 pb-15">
      <h1 className="text-[30px] text-secondary font-bold">
        Experiencia Laboral
      </h1>
      <div className="md:w-[calc(55%+4rem)] w-[calc(100%-2rem)] box-border  flex flex-col items-center justify-center gap-8 my-8   ">
        {experienceInfo.map((link) => (
          <div key={link.id} className="bg-white p-8 flex flex-col gap-5">
            <div className="w-full flex flex-row justify-between">
              <div>
                <p className="text-[24px] text-primary font-bold">
                  {link.name}
                </p>
                <p className="text-secondary text-[20px] font-bold">
                  {link.company}
                </p>
              </div>
              <div className="w-full text-description text-[16px] justify-items-end">
                <time>{link.date}</time>
                <p>{link.city}</p>
              </div>
            </div>
            <div className="w-full sm:px-10 justify-center">
              <p className="text-description text-[16px] leading-8 ">
                {link.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
