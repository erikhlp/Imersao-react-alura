import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSideBar(propriedades) {
  return(
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="Foto de Perfil do Usuário" style={{ borderRadius: '8px'}}/>
      <hr />

      <a href={`https://github.com/${propriedades.githubUser}`} className="boxLink">
        @{propriedades.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'erikhlp';
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const pessoasFavoritas = [
    'kelvinbiffi', 
    'delgadou', 
    'GabrielNanoBoost', 
    'khamulbr', 
    'peas',
    'felipefialho',
    'ajdamiao'
  ];

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser}/>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem Vindo(a), {githubUser}
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={function handleCriaComunidade(e) {
            e.preventDefault();
            const dadosForm = new FormData(e.target);

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosForm.get('title'),
              image: dadosForm.get('image'),
            }

            // Standard image for communities 300x300
            if (comunidade.image === "") { 
              comunidade.image = 'https://place-hold.it/300x300'
            }

            console.log(comunidade);

            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas);
          }}>
            <div>
              <input 
                type="text" 
                name='title'
                placeholder="Qual vai ser o nome da sua comunidade?"
                aria-label="Qual vai ser o nome da sua comunidade?"
              />
            </div>
            <div>
              <input 
                type="text" 
                name='image'
                placeholder="Coloque uma URL para usarmos de capa"
                aria-label="Coloque uma URL para usarmos de capa"
              />
            </div>

            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades ({comunidades.length})
        </h2>
        <ul>
          {comunidades.slice(0, 6).map((item) => {
          return (
            <li key={item.id}>
              <a href={`/users/{$item.title}`} key={item.title}>
                <img src={item.image}/>
                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da Comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.slice(0, 6).map((item) => {
          return (
            <li key={item}>
              <a href={`https://github.com/${item}`}>
                <img src={`https://github.com/${item}.png`} alt={`${item}`} />
                <span>{item}</span>
              </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
      
    </div>
    </MainGrid>
    </>
  )
}
