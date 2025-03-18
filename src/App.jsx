import {useState} from 'react'

function App () {

  const [nome, setNome] = useState('Ronaldo');

  const Formulário = () => {
    return (
      <>
      <h4>Formulário de Inscrição</h4>
      <input classname= "Nome"
      name="nome"
      placeholder="Digite Seu Nome..."
      onChange={(e) => setNome(e.target.value)}
      type="text"/>
    <button onClick={()=>{alert(nome)}}>
      CLIQUE AQUI
    </button>
      </>
    )
  }
  return (
    <div>
      <h3> Pizzaria 2A</h3>
      <Formulário/>
    </div>
  )
}

export default App