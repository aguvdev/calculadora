const {sumar, restar, multiplicar, dividir} = require ('./caculadora');

switch (process.argv[2]) {
    case "sumar":
        sumar(process.argv[3])
        break;

    default:
        break;
}