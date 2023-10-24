// import moment from "moment";
// const now = moment(); // Criar um objeto Moment representando a data e hora atual

// function sayMyName(name){
//     console.log(name);
//     console.log(now.format('YYYY-MM-DD HH:mm:ss')); // Exibir a data e hora formatadas
// }

// sayMyName('Rafael Lindemann')


import moment from 'moment';

const now = moment(); // Criar um objeto Moment representando a data e hora atual
function sayMyName(name) {
    console.log(name);
    // Usando o Moment.js
    console.log(now.format('YYYY-MM-DD HH:mm:ss')); // Exibir a data e hora formatadas
}

sayMyName('Rafael Lindemann');
