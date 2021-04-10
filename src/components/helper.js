//Obtenemos la dif de años

export function yearDiference(year) {
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca

export function calculateMarca(marca) {
    let increment;

    switch (marca) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        case 'americano':
            increment = 1.15;
            break;
        default:
            break;
    }
    return increment;
}


//Calcula el tipo de seguro 

export function getPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

export function firstCapitalLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}