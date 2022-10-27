
let count = 1;
let prev = document.getElementById('prev');
let next = document.getElementById('next');


function render(){
    let pokemonDiv = document.getElementById('pokemon');
    pokemonDiv.innerHTML = `<img class="pokeimg"src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`;
};

prev.onclick = function(){
    if(count > 1){
        count = count -1;
        render();
    }
    
}

next.onclick= function(){
    if(count < 650){
        count = count +1;
        render();
    }
    
}

render();