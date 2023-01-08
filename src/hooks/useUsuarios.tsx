import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { Usuario, ReqResListado } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);
  
      useEffect(() => {
          //Llamado al API
          cargarUsuarios();
      }, [])
  
  
      /* Paginacion sencilla */
      const cargarUsuarios = async() => {
  
        const resp = await reqResApi.get<ReqResListado>('/users', { 
          params: {
            page: paginaRef.current
          }
        })
  
        if( resp.data.data.length > 0) {
          setUsuarios(resp.data.data);  
        } else {
            paginaRef.current --;
            alert('No hay mas registros');
        }

        return(resp)
      }
      /* const renderIteam = ( usuario: Usuario) => { */
  
      
      /* <tr key={ usuario.id}>
      <td>{usuario.avatar}</td>
      <td>{usuario.first_name} { usuario.last_name}</td>
      <td>{usuario.email}</td>
      </tr> */
      const renderIteam = ( {id, first_name, last_name, email, avatar}: Usuario) => {
        return (
  
          <tr key={ id.toString()}>
            <td>
              <img src={ avatar} alt={first_name} 
                  style={{
                    width: 40,
                    borderRadius: 100
                  }} />
            </td>
            <td>{first_name} { last_name}</td>
            <td>{email}</td>
          </tr>
          
        )
      }

      const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
      }

      const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        } else {
            alert('No hay registros anteriores')
        }
      }
      
      return {
        usuarios,
        renderIteam,
        paginaAnterior,
        paginaSiguiente,
      }
}
