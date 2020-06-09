$(document).ready(() => {
   
   const illnessArr = 
      [{
         name: "Acid Reflux",
         illness: "ar",
         link: "https://www.drugs.com/condition/gastroesophageal-reflux-disease.html",
         class: "ar-drugs",
      },{
         name: "Asthma",
         illness: "a",
         link: "https://www.drugs.com/asthma.html"
      },{
         name: "Bladder",
         illness: "b",
         link: ""
      },{
         name: "Diabetes (Oral)",
         illness: "dor",
         link: "https://www.drugs.com/diabetes.html"
      },{
         name: "Diabetes (insulin)",
         illness: "din",
         link: "https://www.drugs.com/diabetes.html"
      },{
         name: "Anxiety / Depression",
         illness: "ad",
         link: "https://www.drugs.com/symptom/anxiety-1.html"
      },{
         name: "High Blood Pressure",
         illness: "hbp",
         link: "https://www.drugs.com/answers/support-group/high-blood-pressure/"
      },{
         name: "Low Blood Pressure",
         illness: "lbp",
         link: "https://www.drugs.com/mcd/low-blood-pressure-hypotension"
      },{
         name: "High Cholesterol",
         illness: "hc",
         link: "https://www.drugs.com/health-guide/high-cholesterol-hypercholesterolemia.html"
      },{
         name: "Heart",
         illness: "ht",
         link: ""
      },{
         name: "Pain",
         illness: "p",
         link: "https://www.drugs.com/pain.html"
      },{
         name: "Sleep Apnea",
         illness: "sa",
         link: "https://www.drugs.com/health-guide/sleep-apnea.html"
      },{
         name: "Thyroid",
         illness: "t",
         link: ""
      },{
         name: "Water Pill",
         illness: "wp",
         link: ""
      },{
         name: "Prostate",
         illness: "pr",
         link: ""
         }]
   
      for (let i = 0; i < illnessArr.length; i++) {
         const illnessBoxes = `
         <section class="${illnessArr[i].illness}">
         <a href="${illnessArr[i].link}"><h3>${illnessArr[i].name}</h3></a>
         </section>
         `;
         $("main").append(illnessBoxes)
      }
   

});