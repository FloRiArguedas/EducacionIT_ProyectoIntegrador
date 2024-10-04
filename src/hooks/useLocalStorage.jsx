import { useState } from "react";

export const useLocalStorage = (clave, ValorInicial = []) => {

  const getValorAlmacenado = () => {

    try {
        const getValorAlmacenado = window.localStorage.getItem(clave)
        return getValorAlmacenado ? JSON.parse(getValorAlmacenado) : ValorInicial

    } catch (error) {

        console.log (`Error al obtener ${clave} del localStorage ${error}`)
        return ValorInicial
    }

  }

  const [ValorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

  const guardarValor = (valorNuevo) => {

    try {
        
        const nuevoValorAlmacenado = [...ValorAlmacenado, valorNuevo]
        setValorAlmacenado(nuevoValorAlmacenado)
        window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
    } catch (error) {
        console.log (`Error al guardar ${clave} del localStorage ${error}`)
    }
    
  }
  const EliminarValor = (id) => {

    try {

        const nuevoValorAlmacenado = [...ValorAlmacenado]
        const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
        nuevoValorAlmacenado.splice(indice, 1)
        console.log(nuevoValorAlmacenado)
        setValorAlmacenado(nuevoValorAlmacenado)
        window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        
    } catch (error) {
        console.log(`Error al eliminar ${clave} del producto con el ${id} del localStorage ${error}`)
    }

  }
  const LimpiarValores = () => {
    window.localStorage.clear()
    window.localStorage.setItem(clave, JSON.stringify(ValorInicial))
    setValorAlmacenado(ValorInicial)
  }

  return [ guardarValor, EliminarValor, LimpiarValores, ValorAlmacenado]
};
