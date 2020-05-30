import React from 'react'
import api from './services/api';
const FuncionarioTables = props => (
  
  <table>
    <thead>
      <tr>
        <th>nome</th>
        <th>Telefone</th>
        <th>Endereco</th>
      </tr>
    </thead>
    <tbody>
      {props.funcionarios.length > 0 ? (
        props.funcionarios.map(fun => (  
          <tr key={fun._id}>
            <td>{fun.nome}</td>
            <td>{fun.telefone}</td>
            <td>{fun.endereco}</td>
            <td>
            <button onClick={() => {props.editRow(fun)}}className="button muted-button">Edit</button>
              <button onClick={() => props.deletefun2(fun._id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No funcionario</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default FuncionarioTables