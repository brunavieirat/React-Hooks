import React, { useEffect, useState } from 'react';
import './Home.css';
import * as apiUsers from '../../apis/users'
import Table from '../../components/Table/Table'
import Ordenar from '../../components/Ordernar/Ordenar'

function Home() {
  const [length, setLength] = useState(0);
  const [users, setUsers] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const paginacao = 5;
  const head = [
    "Id",
    "Nome",
    "Sobrenome",
    "E-mail",
    "Ações"
  ]

  const lista_ordenar = [
    {
      name: 'Nome',
      value: 'name'
    },
    {
      name: 'E-mail',
      value: 'email'
    }
  ]

  useEffect(() => {
    apiUsers.getUsers()
      .then(response => {
        setLength(response.data.length)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.erro)
        }
      })
  }, []);

  return (
    <div className="container">
      <Ordenar lista={lista_ordenar} filtrar={setFiltro}></Ordenar>
      <Table cabecalho={head} length={length} users={users} setUsers={setUsers} paginacao={paginacao} filtro={filtro}/>
    </div>
  );
}

export default Home;
