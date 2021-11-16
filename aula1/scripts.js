var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


// a cor padrão que o javascript preenche é preto, então irei mudar para outra cor usando fillStyle
// vale lembrar que o fillStyle tem que vir antes do preenchemento, pois primeiro ele pega a tinta para depois pintar como a vida real
pincel.fillStyle = 'white';

// aqui estou preenchendo uma area do tamanho selecionado, porém la no html o canvas está com um max width e height
// RECT vem de retângulo, mas podemos usar outras formar geometricas
//              x  y width height
pincel.fillRect(0, 0, 600, 400);

// como quero usar outra cor, uso fillStyle novamente
pincel.fillStyle = 'blue';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = 'red';
pincel.fillRect(400, 0, 200, 400);

// aqui eu vou desenhar um triangulo na bandeira, usando as cordenadas seguindo o tamanho da tela
pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

// agora vou desenhar um circulo na bandeira a
pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14)
pincel.fill();
