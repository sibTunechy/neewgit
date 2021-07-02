//colors array
let colors = ['blue', 'green', 'black' ,'red','purple','orange'];

//grt button
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random()* colors.length )]
    //get container 
    let container = document.getElementById('container');

    container.style.background = randomColor;
})