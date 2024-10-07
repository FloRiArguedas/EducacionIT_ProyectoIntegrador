import { Link } from "react-router-dom"

const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="search-bar__logo-container">
            <img
            className="search-bar__logo3d4u"
            src="/img/Logo3D4UOriginal.webp"
            alt="Logo 3D4U Orginal Morado con Amarillo"
            />
        </div>
        <form action="#" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">
            Buscar Figuras
            </label>
            <input type="search" className="search-bar__form-search" id="busqueda" />
            <input type="submit" className="search-bar__form-submit" value="Buscar" />
        </form>
        <div className="search-bar__carrito-container"><Link className="search-bar__carrito-container__carritolink" to="carrito"><i className="fa-solid fa-cart-shopping"></i></Link></div>
        {/* <i className="fa-solid fa-cart-shopping"></i> IMAGEN CARRITO */}
        <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread"></span>
            <span className="menu-toogle__meat"></span>
            <span className="menu-toogle__bottom-bread"></span>
            </label>
        </div>
        </div>
  )
}

export default SearchBar