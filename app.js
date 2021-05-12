const {sumar, restar, multiplicar, dividir} = require ('./caculadora');

switch (process.argv[2]) {
    case "sumar":
        sumar(process.argv[3], procces.argv[4])
        break;
    case "restar":
        restar (process.argv[3],process.argv[4])
        break;

    default:
        break;
}