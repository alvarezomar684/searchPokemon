
import './App.css';
import {useEffect, useState} from 'react';
import Pokemon from './Pokemon';
import {SearchBox} from './SearchBox';

function App() {

  const [data,setData] = useState(null)
  const [searchPokemon, setSearchPokemon] = useState("")
  const [title, setTitle] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  useEffect (()=>{
    if(searchPokemon){
      ;(async()=>{        
        let url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(searchPokemon)}`
        const response = await fetch(url).then(res => res.json())      
        setData(response)
        
      })()
    }
  },[searchPokemon])

  useEffect (()=>{
    if(data){      
      setTitle(data.name)
      setImgUrl(data.sprites.front_default)
    }
  },[data,title,imgUrl])


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SearchBox onSearch={setSearchPokemon} />
          <Pokemon title={title} imgUrl={imgUrl} />
        </div>
      </header>
    </div>
  );
}

export default App;

