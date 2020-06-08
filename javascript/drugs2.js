class Drugs {
   constructor(name, illness, link) {
      this.name = name;
      this.illness = illness;
      this.link = link;
   }
}

class Alphabet {
   constructor(name, initials) {
      this.name = name;
      this.class = initials;
   }
}

// const alphaA = new Alphabet("A", "initials");
// const alphaB = new Alphabet("B", "initials");
// const alphaC = new Alphabet("C", "initials");
// const alphaD = new Alphabet("D", "initials");
// const alphaE = new Alphabet("E", "initials");
// const alphaF = new Alphabet("F", "initials");
// const alphaG = new Alphabet("G", "initials");
// const alphaH = new Alphabet("H", "initials");
// const alphaI = new Alphabet("I", "initials");
// const alphaJ = new Alphabet("J", "initials");
// const alphaK = new Alphabet("K", "initials");
// const alphaL = new Alphabet("L", "initials");
// const alphaM = new Alphabet("M", "initials");
// const alphaN = new Alphabet("N", "initials");
// const alphaO = new Alphabet("O", "initials");
// const alphaP = new Alphabet("P", "initials");
// const alphaQ = new Alphabet("Q", "initials");
// const alphaR = new Alphabet("R", "initials");
// const alphaS = new Alphabet("S", "initials");
// const alphaT = new Alphabet("T", "initials");
// const alphaU = new Alphabet("U", "initials");
// const alphaV = new Alphabet("V", "initials");
// const alphaX = new Alphabet("X", "initials");
// const alphaW = new Alphabet("W", "initials");
// const alphaY = new Alphabet("Y", "initials");
// const alphaZ = new Alphabet("Z", "initials");

// const alphaArray = [];

// alphaArray.push(alphaA, alphaB, alphaC, alphaD, alphaE, alphaF, alphaG, alphaH, alphaI, alphaJ, alphaK, alphaL, alphaM, alphaN,
//    alphaO, alphaP, alphaQ, alphaR, alphaS, alphaT, alphaU, alphaV, alphaW, alphaX, alphaY, alphaZ)
   
const alphaArray = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("").map(alpha => new Alphabet(alpha, initials));


const ar = "Acid Reflux";
const a = "Asthma";
const b = "Bladder";
const dor = "Diabetes (Oral)";
const din = "Diabetes (Insulin)";
const ad = "Anxiety / Depression";
const hpb = "High Blood Pressure";
const lbp = "Low Blood Pressure";
const hc = "High Cholesterol";
const ht = "Heart";
const p = "Pain";
const sa = "Sleep Apnea";
const t = "Thyroid";
const wp = "Water Pill";
const pr = "Prostate";

// Acid Reflux
const cimetidine = new Drugs("Cimetidine", ar, "https://www.drugs.com/cdi/cimetidine-tablets.html");
const esomeprazole = new Drugs("Esomeprazole", ar, "https://www.drugs.com/cdi/esomeprazole-injection.html");
const famotidine = new Drugs("Famotidine", ar, "https://www.drugs.com/famotidine.html");
const nexium = new Drugs("Nexium", ar, "https://www.drugs.com/nexium.html");
const nizatidine = new Drugs("Nizatidine", ar, "https://www.drugs.com/cdi/nizatidine-capsules-and-tablets.html");
const omeprazole = new Drugs("Omeprazole", ar, "https://www.drugs.com/omeprazole.html");
const pantoprazole = new Drugs("Pantoprazole", ar, "https://www.drugs.com/pantoprazole.html");
const prilosec = new Drugs("Prilosec", ar, "https://www.drugs.com/prilosec.html");
const ranitidine = new Drugs("Ranitidine", ar, "https://www.drugs.com/ranitidine.html");
const sucralfate = new Drugs("Sucralfate", ar, "https://www.drugs.com/cdi/sucralfate-oral-suspension.html");
const zantac = new Drugs("Zantac", ar, "https://www.drugs.com/zantac.html");

// High Blood Pressure
const amlodipine = new Drugs("Amlodipine", hpb, "https://www.drugs.com/amlodipine.html");
const atenolol = new Drugs("Atenolol", hpb, "https://www.drugs.com/atenolol.html");
const carvedilol = new Drugs("Carvedilol", hpb, "https://www.drugs.com/carvedilol.html");
const clonidine = new Drugs("Clonidine", hpb, "https://www.drugs.com/clonidine.html");
const enalapril = new Drugs("Enalapril", hpb, "https://www.drugs.com/enalapril.html");
const hydralazine = new Drugs("Hydralazine", hpb, "https://www.drugs.com/mtm/hydralazine.html");
const hydrochlorothiazide = new Drugs("Hydrochlorothiazide", hpb, "https://www.drugs.com/hydrochlorothiazide.html");
const lisinopril = new Drugs("Lisinopril", hpb, "https://www.drugs.com/lisinopril.html");
const lopressor = new Drugs("Lopressor", hpb, "https://www.drugs.com/cdi/lopressor-hct.html");
const losartan = new Drugs("Losartan", hpb, "https://www.drugs.com/losartan.html");
const metolazone = new Drugs("Metolazone", hpb, "https://www.drugs.com/mtm/metolazone.html");
const metoprolol = new Drugs("Metoprolol", hpb, "https://www.drugs.com/metoprolol.html");
const nifedipine = new Drugs("Nifedipine", hpb, "https://www.drugs.com/nifedipine.html");
const olmesartan = new Drugs("Olmesartan", hpb, "https://www.drugs.com/cdi/olmesartan.html");
const toprol = new Drugs("Toprol", hpb, "https://www.drugs.com/toprol.html");
const valsartan = new Drugs("Valsartan", hpb, "https://www.drugs.com/cdi/valsartan-and-hydrochlorothiazide.html");
const vasodilan = new Drugs("Vasodilan", hpb, "https://www.drugs.com/mtm/vasodilan.html");

const drugsArr = [];

drugsArr.push(cimetidine, esomeprazole, famotidine, nexium, nizatidine, omeprazole, pantoprazole, prilosec, ranitidine, sucralfate, zantac,
   amlodipine, atenolol, carvedilol, clonidine, enalapril, hydralazine, hydrochlorothiazide, lisinopril, lopressor, losartan,
   metolazone, metoprolol, nifedipine, olmesartan, toprol, valsartan, vasodilan, ...alphaArray);

console.log(drugsArr);

drugsArr.sort((a, b) => { 
   if (a.name < b.name) { return -1;}
   if (a.name > b.name) { return 1; }
   return 0;
})




console.log(drugsArr);

function name(params) {
   
}
drugsArr.filter(drug => drug.illness === ar)