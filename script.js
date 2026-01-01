
const FAMILY = ["Stella", "France", "Evo", "Evie"];


for (const fam of FAMILY){
    console.log(fam);
}


function toUpper(string){
    return string.toUpperCase();
}

const upperFam = FAMILY.map(toUpper);


console.log(upperFam);

function lFam(fam){
    return fam.startsWith("E");
}

const filtered = FAMILY.filter(lFam);

console.log(filtered);

