import React from 'react';

import Main from '../template/Main';

function Home() {
  return (
    <Main 
      icon="home" 
      title="Início" 
      subtitle="Segundo Projeto do capítulo de React."
    >
        <p className="mb-0">
            Sistema para exemplificar a construção de um cadastro desenvolvido em React!
        </p>
    </Main>
  )
}

export default Home;