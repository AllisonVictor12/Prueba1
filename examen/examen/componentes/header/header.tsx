import React, { useEffect } from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logoex.png" alt="Img Perfil" width="200" height="200" />
        </a>
        <a className="navbar-brand fw-bold fs-3 mr-auto" href="#">
          <em>Mi Repositorio</em>
        </a>
        
      </div>
    </nav>
  );
};

export default Header;