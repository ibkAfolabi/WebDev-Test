
   let scores = [90,89,78,67];
   
   document.write("<h1>Scores</h1>")
   document.write(scores);
   document.write("<br/>");

   let total = 0;
	for(let i=0; i<scores.length; i++) {
		total += scores[i];
	}
	let average = total / scores.length;

    document.write("total = " + total + "<br/>");
	document.write("average = "+average+"<br/>");
	


