const pdsbtn = document.getElementById('btn-pds');
const btnsim = document.getElementById('btn-sim');
const btnsintwo = document.getElementById('btn-sim2');
const btnsimthree = document.getElementById('btn-sim3');
const btnnao = document.getElementById('btn-nao');
const btnnaotwo = document.getElementById('btn-nao2');
const btnnaothree = document.getElementById('btn-nao3');
const btnfourth = document.getElementById('btn-fourth');


const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const main = document.getElementById('main');
const fourth = document.getElementById('fourth');
const framecasa = document.getElementById('framecasa')
const textocasa = document.getElementById('textocasa');


pdsbtn.onclick = function() {
    main.style.display = 'none';
    if (main.style.display === 'none'){
        first.style.display = 'block';
        second.style.display = 'none';
        third.style.display = 'none';
    }

}

btnsim.onclick = function(){
    first.style.display = 'none';
    if (first.style.display === 'none'){
        main.style.display = 'none';
        second.style.display = 'block';
        third.style.display = 'none';
    }
}

btnsintwo.onclick = () => {
    second.style.display = 'none';
    if(second.style.display === 'none'){
        main.style.display = 'none';
        first.style.display = 'none';
        third.style.display = 'block';
    }
}

btnnao.onclick = () => {
    first.style.display = 'none';
    if (first.style.display === 'none'){
        main.style.display = 'none';
        second.style.display = 'block';
        third.style.display = 'none';

    }
}

btnnaotwo.onclick = () => {
    second.style.display = 'none';
    if(second.style.display === 'none'){
        main.style.display = 'none';
        first.style.display = 'none';
        third.style.display = 'block';
    }
}

btnsimthree.onclick = () => {
    third.style.display = 'none';
    if(third.style.display === 'none'){
        main.style.display = 'none';
        first.style.display = 'none';
        second.style.display = 'none';
        fourth.style.display = 'block';
    }
}

btnnaothree.onclick = () => {
    third.style.display = 'none';
    if(third.style.display === 'none'){
        main.style.display = 'none';
        first.style.display = 'none';
        second.style.display = 'none';
        fourth.style.display = 'block';
    }
}

btnfourth.onclick = () => {
    fourth.style.display = 'none';
    if (fourth.style.display === 'none'){
        main.style.display = 'none';
        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'none';
        framecasa.style.display = 'block';
        textocasa.style.display = 'block';
    }
}