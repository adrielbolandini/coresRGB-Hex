const Rrange = document.querySelector('#Rrange');
const Rnumber = document.querySelector('#Rnumber');
const Grange = document.querySelector('#Grange');
const Gnumber = document.querySelector('#Gnumber');
const Brange = document.querySelector('#Brange');
const Bnumber = document.querySelector('#Bnumber');
const quadrado = document.querySelector('#cor');
const hexa = document.querySelector('#hex');

// iniciando input text com valor do range
Rnumber.value = Rrange.value;
Gnumber.value = Grange.value;
Bnumber.value = Brange.value;

function passavalor() {
  Rnumber.value = Rrange.value;
  Gnumber.value = Grange.value;
  Bnumber.value = Brange.value;
  mudarcor();
}

function passarange() {
  Rrange.value = Rnumber.value;
  Grange.value = Gnumber.value;
  Brange.value = Bnumber.value;
  mudarcor();
}

function mudarcor() {
  //tratando os valores negativos, além dos maiores de 255
  function normalize() {
    Rnumber.value =
      Rnumber.value > 255 ? 255 : Rnumber.value < 0 ? 0 : Rnumber.value;
    Gnumber.value =
      Gnumber.value > 255 ? 255 : Gnumber.value < 0 ? 0 : Gnumber.value;
    Bnumber.value =
      Bnumber.value > 255 ? 255 : Bnumber.value < 0 ? 0 : Bnumber.value;
  }

  let r = Rnumber.value || 0;
  let g = Gnumber.value || 0;
  let b = Bnumber.value || 0;

  function colorir() {
    // template literals (funcionou no meu chrome)
    var cor = `rgb(${r},${g},${b})`;
    quadrado.style.backgroundColor = cor;
  }
  function hex() {
    hexa.value =
      '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1);
  }

  normalize(), colorir(), hex();
}

Rrange.addEventListener('input', function () {
  passavalor();
});
Grange.addEventListener('input', function () {
  passavalor();
});
Brange.addEventListener('input', function () {
  passavalor();
});
Rnumber.addEventListener('input', function () {
  passarange();
});
Gnumber.addEventListener('input', function () {
  passarange();
});
Bnumber.addEventListener('input', function () {
  passarange();
});
mudarcor();
