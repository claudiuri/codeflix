import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro do Video</h1>
      <form action="">
        <label>Nome da categoria</label>
        <input type="text"/>
      </form>
      
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;