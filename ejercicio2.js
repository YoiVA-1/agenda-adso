
const aprendiz = {
    nombreA : "Yoiner.", 
    numeroF : 3412768,
};
const notas = [2.3 , 1.5, 3.0]
const promedio = (notas[0] + notas[1] + notas[2]) / 3;

console.log(`======================= \n SISTEMA NOTAS SENA \n ====================== \n Aprendiz: ${aprendiz.nombreA} \n Ficha: ${aprendiz.numeroF} \n Notas: ${notas} \n ====================== \n Promedio: ${promedio.toFixed(2)} \n Estado: ${promedio >= 3 ? "Aprobado" : "No Aprobado"} `)