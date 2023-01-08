import { useUsuarios } from "../hooks/useUsuarios"

export const Usuarios = () => {

  const {usuarios, renderIteam, paginaAnterior, paginaSiguiente} = useUsuarios()
  return (
    <>
     <h3>Usuarios</h3>
     <table className="table">
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
          { 
            usuarios.map( renderIteam )
          }
        </tbody>
     </table>
    

     <button className='btn btn-danger' onClick={ paginaAnterior }>
          Anteriores 
    </button>
    &nbsp;
    <button className='btn btn-primary' onClick={ paginaSiguiente }>
          siguiente
    </button>
    </>
  )
}