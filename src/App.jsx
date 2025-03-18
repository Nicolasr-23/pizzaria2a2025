import {useState} from 'react'

function App () {

  const [nome, setNome] = useState('Ronaldo');

  return (
    <div>
      <h3> Pizzaria 2A</h3>
      <input classname= "Nome"
        name="nome"
        placeholder="Digite Seu Nome..."
        onChange={(e) => setNome(e.target.value)}
      type="text"/>
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

export default App