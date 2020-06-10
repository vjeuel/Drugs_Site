$(document).ready(() => {
   
   const illnessArr = 
   [{
      name: "High Blood Pressure",
      illness: "hbp",
      link: "https://www.drugs.com/answers/support-group/high-blood-pressure/"
   },{
      name: "Pain",
      illness: "p",
      link: "https://www.drugs.com/pain.html"
   },{
      name: "High Cholesterol",
      illness: "hc",
      link: "https://www.drugs.com/health-guide/high-cholesterol-hypercholesterolemia.html"
   },{
      name: "Acid Reflux",
      illness: "ar",
      link: "https://www.drugs.com/condition/gastroesophageal-reflux-disease.html"
   },{
      class: "ar-drugs",
      name: "Bladder",
      illness: "b",
      link: ""
   },{
      name: "Asthma",
      illness: "a",
      link: "https://www.drugs.com/asthma.html"
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
      name: "Low Blood Pressure",
      illness: "lbp",
      link: "https://www.drugs.com/mcd/low-blood-pressure-hypotension"
   },{
      name: "Heart",
      illness: "ht",
      link: ""
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
         <div class="${illnessArr[i].illness} drug-box">
         <a href="${illnessArr[i].link}" class="illness-title"><h3>${illnessArr[i].name}</h3></a>
         </div>
         `;
         $("#macy-container").append(illnessBoxes)
      }
   

});