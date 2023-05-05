import React from "react";

const PersonalInfo = () => {
  return (
    <div className="card .bg-secondary.bg-gradient item">
      <div className="card-body">
        <img src="/perfil.png" alt="foto perfil" width={300} height={300} style={{ float: "left", marginRight: "20px" }} />
        <h5 className="card-title"> Allison Victor Vasquez</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Estudiante de ingenieria en sistemas UNA 
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary"> Edad: 21</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Vivo en Ciudad Neily Costa Rica 
        </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
         Mi repositorio Github
        </h6>
        <a href="#" className="card-link">
          https://github.com/AllisonVictor12
          
        </a>
        <h6 className="card-subtitle mb-2 text-body-secondary">
         Mi perfil linkedin
        </h6>
        <a href="#" className="card-link">
          https://www.linkedin.com/mwlite/in/allison-victor-b9b713274
        </a>
      </div>
    </div>
  );
};

export default PersonalInfo;