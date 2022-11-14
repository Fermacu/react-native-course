import React from "react";

export const ObjetosLiterales = () => {
  const persona = {
    nombre: "Fernando",
    edad: 21,
    direccion: {
      pais: "Costa Rica",
      casaNo: 6,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
