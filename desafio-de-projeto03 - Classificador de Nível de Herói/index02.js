let nome = prompt("Digite o nome do herói:");
let quantidadeXP = parseFloat(prompt("Digite a quantidade de XP:"));
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

console.log("O Herói " + nome + " está no nível " + nivel);