function math(){
    let mathTotalMarks = Number(document.getElementById("Total Number Of Math").value);
   let mathObtainedMarks = Number(document.getElementById("Obtained Number Of Math").value);
   document.getElementById("mathTotal").innerText = mathTotalMarks;
   document.getElementById("mathObtain").innerText = mathObtainedMarks;

   let chemTotalMarks = Number(document.getElementById("Total Number Of Chemistry").value);
   let chemObtainedMarks = Number(document.getElementById("Obtained Number Of Chemistry").value);
   document.getElementById("chemTotal").innerText = chemTotalMarks;
   document.getElementById("chemObtain").innerText = chemObtainedMarks;

   let sciTotalMarks = Number(document.getElementById("Total Number Of Science").value);
   let sciObtainedMarks = Number(document.getElementById("Obtained Number Of Science").value);
   document.getElementById("sciTotal").innerText = sciTotalMarks;
   document.getElementById("sciObtain").innerText = sciObtainedMarks;


   let phyTotalMarks = Number(document.getElementById("Total Number Of Physics").value);
   let phyObtainedMarks = Number(document.getElementById("Obtained Number Of Physics").value);
   document.getElementById("phyTotal").innerText = phyTotalMarks;
   document.getElementById("phyObtain").innerText = phyObtainedMarks;


   let compTotalMarks = Number(document.getElementById("Total Number Of Computer").value);
   let compObtainedMarks = Number(document.getElementById("Obtained Number Of Computer").value);
   document.getElementById("compTotal").innerText = compTotalMarks;
   document.getElementById("compObtain").innerText = compObtainedMarks;

   
   let totalMarks = mathTotalMarks + chemTotalMarks + sciTotalMarks + phyTotalMarks + compTotalMarks;
   document.getElementById("totalMarks").innerText = totalMarks;


   let obtainedMarks = mathObtainedMarks + chemObtainedMarks + sciObtainedMarks + phyObtainedMarks + compObtainedMarks;
   document.getElementById("obtainedMarks").innerText = obtainedMarks;

   let percentage = (obtainedMarks / totalMarks) * 100;
   document.getElementById("perc").innerText = percentage + "%";

   let grade ;
   if(percentage >= 90)
   {
    grade = "A1";
   }

   else if(percentage >= 80)
   {
    grade = "A";
   }

   else if(percentage >= 70)
   {
    grade = "B";
   }

   else if (percentage >= 60)
   {
    grade = "C";
   }

   else if(percentage >=50)
   {
    grade = "D";
   }

   else if(percentage >= 40)
   {
    grade = "E";
   }

   else{
    grade = "F"
   }

   document.getElementById("grade").innerText = grade;

       
}