
let button = document.querySelector("#searchButton");
let pokemonName = document.querySelector("#pokemonName");
let inputBar = document.querySelector("#inputBar");
let hp = document.querySelector(`#hp`);

button.addEventListener('click', async () => {
        let name = inputBar.value
        console.log(name)
        let response = await axios.get (`https://pokeapi.co/api/v2/pokemon/${name}`)
        let pokeData = response.data
        console.log(pokeData)
        let pokemonImage = document.querySelector("#pokemonImage")
        let imageUrl = pokeData.sprites.front_default
        pokeImage.setAttribute(`src`, imageUrl)
        pokemonName.innerText = name
        hp.innerHTML = ''
        pokeData.stats.forEach(stat => {
            const statElement = document.createElement('div')
            statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`
            hp.appendChild(statElement)
        })
        let hpValue = pokeData.stats.find(stat => stat.stat.name === 'hp').base_stat;
        pokemonHP.innerText = `HP: ${hpValue}`
    })

// got help from tanner for stats


// functionality goals 
    //  pull pokemon name from data array -> 
        // h2 id = pokemonName
        // textInput needs to change based on what pokemon is pulled
    // get value of text input in searchbar 
    // use inputed value to filter API 
    // pull pokemon pic into console 

// design goals 
    // add header/context in body 


    // https://www.w3schools.com/jsref/met_document_createelement.asp