// Entrada de dados
let heroi = "Heimmel";
let xp = 20000;

//Teste de função
Patente(xp);
//Saída de dados
console.log("O Herói de nome " + heroi + " está no nível de " + nivel);

//Função de Nível
function Patente(xp) {
    let n = xp;
    //Estrutura de decisão
    if (n < 1000) {
        return nivel = "Ferro";
    } else if (n >= 1000 && xp <= 2000) {
        return nivel = "Bronze";
    } else if (n >= 2001 && xp <= 5000) {
        return nivel = "Prata";
    } else if (n >= 5001 && xp <= 7000) {
        return nivel = "Ouro";
    } else if (n >= 7001 && xp <= 8000) {
        return nivel = "Platina";
    } else if (n >= 8001 && xp <= 9000) {
        return nivel = "Ascendente";
    } else if (n >= 9001 && xp <= 10000) {
        return nivel = "Imortal";
    } else if (n >= 10001) {
        return nivel = "Radiante";
    }
}