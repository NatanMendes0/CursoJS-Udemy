//variaveis com let
let nome;
nome = "João";

console.log(nome + 'nasceu em 1984');
console.log('Em 2000' + nome + 'conheceu Maria');
console.log('Maria teve 1 filho com ' + nome + 'em 2015');
console.log('O filho de' + nome + 'se chama Eduardo');

nome = 'Pedro';

console.log(nome + 'nasceu em 1984');
console.log('Em 2000' + nome + 'conheceu Maria');
console.log('Maria teve 1 filho com ' + nome + 'em 2015');
console.log('O filho de' + nome + 'se chama Eduardo');

//não podemos redeclarar uma variavel com let ou outras palavras reservadas
//variaveis precisam ter nomes significativos

let nomeCompleto = 'João da Silva';

console.log('O nome completo é ' + nomeCompleto);

/*
    nomes de variaveis não podem começar com numero, o programa não entende
    EX: let 1nome = 'João';
*/

//não pode ter espaço ou traços, utilizamos camelCase
let primeiroNome = 'João';
console.log(primeiroNome);

//case sensitive
let nome1 = 'João';
let Nome1 = 'Maria';
console.log(nome1);
console.log(Nome1);

//evitar usar VAR, usar LET