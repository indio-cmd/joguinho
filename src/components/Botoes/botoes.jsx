//import '/style.css'

function Botoes(atacar, defender, curar){
    return(
        <div>

<button onClick={atacar}> atacar </button>

<button onClick={defender}> defender </button>
        
<button onClick={curar}> curar </button>

        </div>
    )
}
export default Botoes