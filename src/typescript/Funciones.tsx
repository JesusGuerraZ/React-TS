import React from 'react'

const sumar = (a: number,b: number): number => {
    return a+b;
}

export const Funciones = () => {
  return (
    <>
        <h3>Funciones</h3>
        <span>
            El resultado es: {sumar(1, 4)}
        </span>
    </>
  )
}
