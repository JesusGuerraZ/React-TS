interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
        pais: string;
        casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'jesus',
        edad: 35,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }
    
  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}
