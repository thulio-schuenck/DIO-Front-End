function gets() {
    // Simule a entrada
    return 'Heroi';
}

function getsXP() {
    // Simule a entrada de experiência
    return '100000';
}

let nome = gets();
let quantidadeXP = parseFloat(getsXP());
let nivel = [];


if (quantidadeXP < 1000) {
    nivel.push("Ferro");
} else if(quantidadeXP <= 2000) {
    nivel.push("Bronze");
} else if(quantidadeXP <= 5000) {
    nivel.push("Prata");
}else if(quantidadeXP <= 7000) {
    nivel.push("Ouro");
}else if(quantidadeXP <= 8000) {
    nivel.push("Platina");
}else if(quantidadeXP <= 9000) {
    nivel.push("Ascendente");
}else if(quantidadeXP <= 10000) {
    nivel.push("Imortal");
}else { 
    nivel.push("Radiante");
}
console.log("O Herói " + nome + " está no nível " + nivel.join(', '));
