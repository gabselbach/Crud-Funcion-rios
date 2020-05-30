import React from 'react';

//import './style.css';

function FunItem({fun}){
    return(

        <li className="fun-item">
        <header>
          <div className="fun-info">
            <strong>{fun.nome}</strong>
          </div>
        </header>
        <p>{fun.telefone}</p>
        <p>{fun.endereco}</p>
        <p>{fun.cidade}</p>
        <p>{fun.estado}</p>
      </li>
    );
}

export default FunItem;