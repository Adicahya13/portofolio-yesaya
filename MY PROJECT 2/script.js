const elRoot = document.getElementById('root')
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((res) => {
        console.log(res);
        let temp = ""
        res.results.map((item) => {
            const link = `${item.url}`
            const idPokemon = link.split("/")
            console.log(idPokemon);
            temp = temp + 
            `<div class='card'>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon[6]}.png" /img>
                <h3>${item.name}</h3>
                <p>${item.url}</p>
            </div>`
            })
        elRoot.innerHTML = temp
    })
    .catch((err)=>{
        console.log(err);
    })