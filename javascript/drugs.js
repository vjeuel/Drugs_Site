$(document).ready(() => {

   const alphaArr = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("").map(alpha => new Alphabet(alpha, initials));

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

   const drugsArr =
      [{
         name: "Cimetidine",
         illness: "ar",
         link: "https://www.drugs.com/cdi/cimetidine-tablets.html"
      },{
         name: "Esomeprazole",
         illness: "ar",
         link: "https://www.drugs.com/cdi/esomeprazole-injection.html"
      },{
         name: "Famotidine",
         illness: "ar",
         link: "https://www.drugs.com/famotidine.html"
      },{
         name: "Nexium",
         illness: "ar",
         link: "https://www.drugs.com/nexium.html"
      },{
         name: "Nizatidine",
         illness: "ar",
         link: "https://www.drugs.com/cdi/nizatidine-capsules-and-tablets.html"
      },{
         name: "Omeprazole",
         illness: "ar",
         link: "https://www.drugs.com/omeprazole.html"
      },{
         name: "Pantoprazole",
         illness: "ar",
         link: "https://www.drugs.com/pantoprazole.html"
      },{
         name: "Prilosec",
         illness: "ar",
         link: "https://www.drugs.com/prilosec.html"
      },{
         name: "Ranitidine",
         illness: "ar",
         link: "https://www.drugs.com/ranitidine.html"
      },{
         name: "Sucralfate",
         illness: "ar",
         link: "https://www.drugs.com/cdi/sucralfate-oral-suspension.html"
      },{
         name: "Zantac",
         illness: "ar",
         link: "https://www.drugs.com/zantac.html"
      },{
         name: "Amlodipine",
         illness: "hpb",
         link: "https://www.drugs.com/amlodipine.html"
      },{
         name: "Atenolol",
         illness: "hpb",
         link: "https://www.drugs.com/atenolol.html"
      },{
         name: "Carvedilol",
         illness: "hpb",
         link: "https://www.drugs.com/carvedilol.html"
      },{
         name: "Clonidine",
         illness: "hpb",
         link: "https://www.drugs.com/clonidine.html"
      },{
         name: "Enalapril",
         illness: "hpb",
         link: "https://www.drugs.com/enalapril.html"
      },{
         name: "Hydralazine",
         illness: "hpb",
         link: "https://www.drugs.com/mtm/hydralazine.html"
      },{
         name: "Hydrochlorothiazide",
         illness: "hpb",
         link: "https://www.drugs.com/hydrochlorothiazide.html"
      },{
         name: "Lisinopril",
         illness: "hpb",
         link: "https://www.drugs.com/lisinopril.html"
      },{
         name: "Lopressor",
         illness: "hpb",
         link: "https://www.drugs.com/cdi/lopressor-hct.html"
      },{
         name: "Losartan",
         illness: "hpb",
         link: "https://www.drugs.com/losartan.html"
      },{
         name: "Metolazone",
         illness: "hpb",
         link: "https://www.drugs.com/mtm/metolazone.html"
      },{
         name: "Metoprolol",
         illness: "hpb",
         link: "https://www.drugs.com/metoprolol.html"
      },{
         name: "Nifedipine",
         illness: "hpb",
         link: "https://www.drugs.com/nifedipine.html"
      },{
         name: "Olmesartan",
         illness: "hpb",
         link: "https://www.drugs.com/cdi/olmesartan.html"
      },{
         name: "Toprol",
         illness: "hpb",
         link: "https://www.drugs.com/toprol.html"
      },{
         name: "Valsartan",
         illness: "hpb",
         link: "https://www.drugs.com/cdi/valsartan-and-hydrochlorothiazide.html"
      },{
         name: "Vasodilan",
         illness: "hpb",
         link: "https://www.drugs.com/mtm/vasodilan.html"
      },{
         name: "Montelukast",
         illness: "a",
         link: "https://www.drugs.com/mtm/montelukast.html"
      },{
         name: "Singulair",
         illness: "a",
         link: "https://www.drugs.com/singulair.html"
      },{
         name: "Terbutaline",
         illness: "a",
         link: "https://www.drugs.com/international/terbutaline.html"
      },{
         name: "Detrol LA",
         illness: "b",
         link: "https://www.drugs.com/cdi/detrol-la.html"
      },{
         name: "Darifenacin",
         illness: "b",
         link: "https://www.drugs.com/mtm/darifenacin.html"
      },{
         name: "Detrol",
         illness: "b",
         link: "https://www.drugs.com/detrol.html"
      },{
         name: "Enablex",
         illness: "b",
         link: "https://www.drugs.com/enablex.html"
      },{
         name: "Fesoterodine",
         illness: "b",
         link: "https://www.drugs.com/cdi/fesoterodine.html"
      },{
         name: "Flavoxate",
         illness: "b",
         link: "https://www.drugs.com/cdi/flavoxate.html"
      },{
         name: "Oxybutynin",
         illness: "b",
         link: "https://www.drugs.com/oxybutynin.html"
      },{
         name: "Solifenacin",
         illness: "b",
         link: "https://www.drugs.com/cdi/solifenacin.html"
      },{
         name: "Tolterodine",
         illness: "b",
         link: "https://www.drugs.com/cdi/tolterodine-tablets.html"
      },{
         name: "Toviaz",
         illness: "b",
         link: "https://www.drugs.com/toviaz.html"
      },{
         name: "VESIcare",
         illness: "b",
         link: "https://www.drugs.com/cdi/vesicare.html"
      },{
         name: "Glimepiride",
         illness: "dor",
         link: "https://www.drugs.com/cdi/glimepiride.html"
      },{
         name: "Glipizide",
         illness: "dor",
         link: "https://www.drugs.com/glipizide.html"
      },{
         name: "Januvia",
         illness: "dor",
         link: "https://www.drugs.com/januvia.html"
      },{
         name: "Metformin",
         illness: "dor",
         link: "https://www.drugs.com/metformin.html"
      },{
         name: "Trulicity",
         illness: "dor",
         link: "https://www.drugs.com/cdi/trulicity.html"
      },{
         name: "Humalog",
         illness: "din",
         link: "https://www.drugs.com/humalog.html"
      },{
         name: "Lantus",
         illness: "din",
         link: "https://www.drugs.com/lantus.html"
      },{
         name: "Levemir",
         illness: "din",
         link: "https://www.drugs.com/levemir.html"
      },{
         name: "NovoLog",
         illness: "din",
         link: "https://www.drugs.com/novolog.html"
      },{
         name: "Tresiba",
         illness: "din",
         link: "https://www.drugs.com/tresiba.html"
      },{
         name: "Abilify",
         illness: "ad",
         link: "https://www.drugs.com/abilify.html"
      },{
         name: "Amitriptyline ",
         illness: "ad",
         link: "https://www.drugs.com/amitriptyline.html"
      },{
         name: "Chlordiazepoxide",
         illness: "ad",
         link: "https://www.drugs.com/cdi/chlordiazepoxide.html"
      },{
         name: "Quetiapine",
         illness: "ad",
         link: "https://www.drugs.com/mtm/quetiapine.html"
      },{
         name: "Entresto",
         illness: "lbp",
         link: "https://www.drugs.com/entresto.html"
      },{
         name: "Atorvastatin",
         illness: "hc",
         link: "https://www.drugs.com/atorvastatin.html"
      },{
         name: "Colesevelam",
         illness: "hc",
         link: "https://www.drugs.com/mtm/colesevelam.html"
      },{
         name: "Crestor",
         illness: "hc",
         link: "https://www.drugs.com/crestor.html"
      },{
         name: "Ezetimibe",
         illness: "hc",
         link: "https://www.drugs.com/ezetimibe.html"
      },{
         name: "Fenofibrate",
         illness: "hc",
         link: "https://www.drugs.com/fenofibrate.html"
      },{
         name: "Fluvastatin",
         illness: "hc",
         link: "https://www.drugs.com/mtm/fluvastatin.html"
      },{
         name: "Lipitor",
         illness: "hc",
         link: "https://www.drugs.com/lipitor.html"
      },{
         name: "Livalo",
         illness: "hc",
         link: "https://www.drugs.com/livalo.html"
      },{
         name: "Lovastatin",
         illness: "hc",
         link: "https://www.drugs.com/mtm/lovastatin.html"
      },{
         name: "Pitavastatin",
         illness: "hc",
         link: "https://www.drugs.com/mtm/pitavastatin.html"
      },{
         name: "Pravachol",
         illness: "hc",
         link: "https://www.drugs.com/pravachol.html"
      },{
         name: "Pravastatin",
         illness: "hc",
         link: "https://www.drugs.com/pravastatin.html"
      },{
         name: "Rosuvastatin",
         illness: "hc",
         link: "https://www.drugs.com/cdi/rosuvastatin.html"
      },{
         name: "Simvastatin",
         illness: "hc",
         link: "https://www.drugs.com/simvastatin.html"
      },{
         name: "Vytorin 10-10",
         illness: "hc",
         link: "https://www.drugs.com/dosage/vytorin.html"
      },{
         name: "Vytorin 10-20",
         illness: "hc",
         link: "https://www.drugs.com/dosage/vytorin.html"
      },{
         name: "Vytorin 10-40",
         illness: "hc",
         link: "https://www.drugs.com/dosage/vytorin.html"
      },{
         name: "Vytorin 10-80",
         illness: "hc",
         link: "https://www.drugs.com/dosage/vytorin.html"
      },{
         name: "Zocor",
         illness: "hc",
         link: "https://www.drugs.com/zocor.html"
      },{
         name: "Clopidogrel",
         illness: "ht",
         link: "https://www.drugs.com/cdi/clopidogrel.html"
      },{
         name: "Cambia",
         illness: "p",
         link: "https://www.drugs.com/cambia.html"
      },{
         name: "Diclofenac",
         illness: "p",
         link: "https://www.drugs.com/diclofenac.html"
      },{
         name: "Dyloject",
         illness: "p",
         link: "https://www.drugs.com/cdi/dyloject.html"
      },{
         name: "Flector",
         illness: "p",
         link: "https://www.drugs.com/cdi/flector.html"
      },{
         name: "Gabapentin",
         illness: "p",
         link: "https://www.drugs.com/gabapentin.html"
      },{
         name: "Hydrocodone",
         illness: "p",
         link: "https://www.drugs.com/hydrocodone.html"
      },{
         name: "Inflammacin",
         illness: "p",
         link: "https://www.drugs.com/pro/inflammacin.html"
      },{
         name: "Lyrica",
         illness: "p",
         link: "https://www.drugs.com/lyrica.html"
      },{
         name: "Morphine",
         illness: "p",
         link: "https://www.drugs.com/morphine.html"
      },{
         name: "Oxycodone",
         illness: "p",
         link: "https://www.drugs.com/oxycodone.html"
      },{
         name: "Pregabalin",
         illness: "p",
         link: "https://www.drugs.com/mtm/pregabalin.html"
      },{
         name: "Solaraze",
         illness: "p",
         link: "https://www.drugs.com/cdi/solaraze.html"
      },{
         name: "Voltaren",
         illness: "p",
         link: "https://www.drugs.com/voltaren.html"
      },{
         name: "Voltaren-XR",
         illness: "p",
         link: "https://www.drugs.com/cdi/voltaren-xr.html"
      },{
         name: "Xrylix",
         illness: "p",
         link: "https://www.drugs.com/cdi/xrylix.html"
      },{
         name: "Zipsor",
         illness: "p",
         link: "https://www.drugs.com/zipsor.html"
      },{
         name: "Zorvolex",
         illness: "p",
         link: "https://www.drugs.com/mtm/zorvolex.html"
      },{
         name: "Flurazepam",
         illness: "sa",
         link: "https://www.drugs.com/cdi/flurazepam.html"
      },{
         name: "Trazodone",
         illness: "sa",
         link: "https://www.drugs.com/trazodone.html"
      },{
         name: "Levothyroxine",
         illness: "t",
         link: "https://www.drugs.com/levothyroxine.html"
      },{
         name: "Methimazole",
         illness: "t",
         link: "https://www.drugs.com/cdi/methimazole.html"
      },{
         name: "Hydrochlorothiazide",
         illness: "wp",
         link: "https://www.drugs.com/hydrochlorothiazide.html"
      },{
         name: "Finasteride",
         illness: "pr",
         link: "https://www.drugs.com/mtm/finasteride.html"
      }];
});
