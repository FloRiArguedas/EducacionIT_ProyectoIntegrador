import { useEffect } from "react"


const useTitulo = (textoTitulo = 'Sin título') => {
     useEffect (() =>{
        document.title = `3D4U - ${textoTitulo}`
     }, [])
}

export default useTitulo