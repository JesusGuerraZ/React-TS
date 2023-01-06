import React, { useEffect } from 'react'

export const Usuarios = () => {

    useEffect(() => {
        //Llamado al API
        
    }, [])
    
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
     </table>
    </>
  )
}
