
export const TiposBasicos = () => {

const nombre: string = 'Jesus';
const number: number = 123;
const estaActivo: boolean = true;

const comida: string[] = ['sushi', 'pizza', 'carne']
  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}, {number}, {(estaActivo) ? 'activo' : 'no activo'}
        <br />
        {comida.join(', ')}
    </>
  )
}
