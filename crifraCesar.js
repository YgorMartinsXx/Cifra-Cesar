const inputElement = document.querySelector('.input');
const body = document.querySelector('.body');
const arrayNovo = [];

inputElement.addEventListener('change', () => {
  const str2 = inputElement.value;
  const arrayLetras = str2.split('');

  arrayLetras.forEach((letra) => {
    let letraCriptografada = letra.charCodeAt();
    switch (letraCriptografada) {
      case 122:
        arrayNovo.push(String.fromCharCode(letraCriptografada - 23));
        break;
      case 121:
        arrayNovo.push(String.fromCharCode(letraCriptografada - 23));
        break;
      case 120:
        arrayNovo.push(String.fromCharCode(letraCriptografada - 23));
        break;
      case 32:
        arrayNovo.push(String.fromCharCode(letraCriptografada));
        break;
      default:
        letraCriptografada += 3;
        arrayNovo.push(String.fromCharCode(letraCriptografada));
        break;
    }
  });
  console.log(arrayNovo.join(', '));

  const h1 = document.createElement('h1');
  h1.innerText = arrayNovo.join('');
  body.appendChild(h1);
});