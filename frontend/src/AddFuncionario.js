import React, { useState } from 'react'
import api from './services/api';
const AddFuncionario = props => {
  const initialFormState2 = { nome: '', telefone: '',nascimento:'',RG:'',CPF:'',endereco:'',cidade:'',estado:'',CEP:'' }
  const [funcionarios, setFuncionarios] = useState(initialFormState2);
  async function loadFuncionarios(){
    const response = await api.get('/funcionarios');
    setFuncionarios(response.data);
   }

  const handleInputChange = event => {
    const { name, value } = event.target

    setFuncionarios({ ...funcionarios, [name]: value })
  }
  async function handleAddDev(){

    const response = await api.post('/funcionario',funcionarios);
  
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        handleAddDev()
        loadFuncionarios()
      }}
    >
  <label>Nome</label>
  <input type="text" name="nome" value={funcionarios.nome} onChange={handleInputChange} />
  <label>Nascimento</label>
  <input type="date" name="nascimento" value={funcionarios.nascimento} onChange={handleInputChange} />
  <label>Telefone</label>
  <input type="text" name="telefone" value={funcionarios.telefone} onChange={handleInputChange} />
  <label>RG</label>
  <input type="number" name="RG" value={funcionarios.RG} onChange={handleInputChange} />
  <label>CPF</label>
  <input type="number" name="CPF" value={funcionarios.CPF} onChange={handleInputChange} />
  <label>Endereco</label>
  <input type="text" name="endereco" value={funcionarios.endereco} onChange={handleInputChange} />
  <label>Cidade</label>
  <input type="text" name="cidade" value={funcionarios.cidade} onChange={handleInputChange} />
  <label>Estado</label>
  <input type="text" name="estado" value={funcionarios.estado} onChange={handleInputChange} />
  <label>Cep</label>
  <input type="text" name="CEP" value={funcionarios.CEP} onChange={handleInputChange} />


  <button>Cadastra Funcionário</button>
    </form>
  )
}

export default AddFuncionario