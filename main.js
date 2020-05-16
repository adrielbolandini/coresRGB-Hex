const Rrange = document.querySelector('#Rrange');
const Rnumber = document.querySelector('#Rnumber');
const Grange = document.querySelector('#Grange');
const Gnumber = document.querySelector('#Gnumber');
const Brange = document.querySelector('#Brange');
const Bnumber = document.querySelector('#Bnumber');
const quadrado = document.querySelector('#cor');
const hexa = document.querySelector('#hex');

function passavalor(){
    Rnumber.value=Rrange.value;
    Gnumber.value=Grange.value;
    Bnumber.value=Brange.value;
    mudarcor();
}

function passarange(){
    Rrange.value=Rnumber.value;
    Grange.value=Gnumber.value;
    Brange.value=Bnumber.value;
    mudarcor();
}

function mudarcor(){

    function normalize(){
        if (Rnumber.value>255){
            Rnumber.value=255;
        }
        if(Gnumber.value>255){
            Gnumber.value=255;
        }
        if(Bnumber.value>255){
            Bnumber.value=255;
        }
    }

    let r = Rnumber.value||0;
    let g = Gnumber.value||0;
    let b = Bnumber.value||0;

    function colorir(){
        var cor =  'rgb('+r+',' +g+',' +b+')';
        quadrado.style.backgroundColor = cor;
    }
    function hex(){
        hexa.value= "#"+((1<<24)+((+r)<<16)+((+g)<<8)+(+b)).toString(16).slice(1);
    }

    normalize(),colorir(),hex();
}




Rrange.addEventListener('input', function(){passavalor()});
Grange.addEventListener('input', function(){passavalor()});
Brange.addEventListener('input', function(){passavalor()});
Rnumber.addEventListener('input', function(){passarange()});
Gnumber.addEventListener('input', function(){passarange()});
Bnumber.addEventListener('input', function(){passarange()});
mudarcor();