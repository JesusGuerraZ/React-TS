import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: 'test@example.com',
        password: '123456789'
    });

  return (
    <>
        <h3>Formularios</h3>
        <input 
            type="email" 
            name="" 
            id="" 
            className="form-control" 
            placeholder='Email' 
            value={ email }
            onChange={ ( { target } ) => onChange(target.value , 'email')}
        />
        <input 
            type="text" 
            name="" 
            id="" 
            className="form-control mt-2 mb-2" 
            placeholder='Password'
            value={ password}
            onChange={ ( { target } ) => onChange(target.value , 'password')}
        />

        <code>
            <pre>
                { JSON.stringify( formulario, null, 2)}
            </pre>
        </code>
        
    </>
  )
}
