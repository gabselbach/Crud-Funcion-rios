import React, { useState, useEffect, Component } from 'react';
import FuncionarioTable from './FuncionarioTables';
import AddFuncionario from './AddFuncionario';
import EditFuncionario from './EditFuncionario';
import api from './services/api';
//import FunItem from './componentes/FunItem';

function App() {
  const initialFormState = { id: null, name: '', username: '' }
  const initialFormState2 = { id: null, nome: '', telefone: '', endereco: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [funcionarios, setFuncionarios] = useState(initialFormState2);
  const [editing, setEditing] = useState(false)
  async function loadFuncionarios() {
    const response = await api.get('/funcionarios');
    setFuncionarios(response.data);
  }
  useEffect(() => {
    loadFuncionarios();
  }, []);
  const addFunc = func => {
    func.id = func.length + 1
    setFuncionarios([...funcionarios, func])
  }
  async function deletefun2(id) {
    const ident = id;
    if (window.confirm(`Are you sure you want to delete `)) {
      await api.delete("funcionario/" + ident);
      loadFuncionarios();
    }
  }
  const deleteFun = id => {
    deletefun2(id);

    //setUsers(users.filter(user => user.id !== id));

  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)
  return (
    <div className="container">
      <FuncionarioTable funcionarios={funcionarios} editRow={editRow} deletefun2={deletefun2} />
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditFuncionario
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddFuncionario addFunc={addFunc} />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}
export default App