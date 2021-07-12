import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSideBar(propriedades) {
  return(
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="Foto de Perfil do Usuário" style={{ borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'erikhlp';
  const pessoasFavoritas = [
    'kelvinbiffi', 
    'delgadou', 
    'GabrielNanoBoost', 
    'khamulbr', 
    'peas',
    'felipefialho'
  ]

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
            Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>
      
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da Comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.map((item) => {
          return (
            <li>
              <a href={`/users/{$item}.png`} key={item}>
                <img src={`https://github.com/${item}.png`} alt={`${item}`} />
                <span>{item}</span>
              </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>

      <Box>
        Comunidades
      </Box>
    </div>
    </MainGrid>
    </>
  )
}
