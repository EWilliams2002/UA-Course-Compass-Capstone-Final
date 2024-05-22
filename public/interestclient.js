
let dataEmphasis = document.getElementById("1A");
let immersiveEmphasis = document.getElementById("1B");
document.getElementById("submitButton1").onclick = function showFormSelected(){
	let dataForm = document.getElementById("dataform")
    let immersiveForm = document.getElementById("immersiveform")
	if(dataEmphasis.checked){
		dataForm.style.display = "block";
        immersiveForm.style.display = "none";
	}
	else if(immersiveEmphasis.checked){
		immersiveForm.style.display = "block";
        dataForm.style.display = "none";
	}
}

document.getElementById("submitButton2").onclick = function getDataCourses(){
	//Call seperate function here to update form frontend with results.
	let insterestDataString = "";
	let interestArtString = "";
	let interestSocietyString = "";
	//Question 3
	if(document.getElementById("D3A").checked){
		insterestDataString += document.getElementById("D3A").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3B").checked){
		insterestDataString += document.getElementById("D3B").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3C").checked){
		insterestDataString += document.getElementById("D3C").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3D").checked){
		insterestDataString += document.getElementById("D3D").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3E").checked){
		insterestDataString += document.getElementById("D3E").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3F").checked){
		insterestDataString += document.getElementById("D3F").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3G").checked){
		insterestDataString += document.getElementById("D3G").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3H").checked){
		insterestDataString += document.getElementById("D3H").value;
		insterestDataString += " ";
	}
	if(document.getElementById("D3I").checked){
		insterestDataString += document.getElementById("D3I").value;
	}

	//Question 9 Arts
	if(document.getElementById("D9A").checked){
		interestArtString += document.getElementById("D9A").value;
		interestArtString += " ";
	}
	if(document.getElementById("D9B").checked){
		interestArtString += document.getElementById("D9B").value;
		interestArtString += " ";
	}
	if(document.getElementById("D9C").checked){
		interestArtString += document.getElementById("D9C").value;
		interestArtString += " ";
	}
	if(document.getElementById("D9D").checked){
		interestArtString += document.getElementById("D9D").value;
		interestArtString += " ";
	}
	if(document.getElementById("D9E").checked){
		interestArtString += document.getElementById("D9E").value;
		interestArtString += " ";
	}
	if(document.getElementById("D9F").checked){
		interestArtString += document.getElementById("D9F").value;
	}

	//Question 10 Society
	if(document.getElementById("D10A").checked){
		interestSocietyString += document.getElementById("D10A").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10B").checked){
		interestSocietyString += document.getElementById("D10B").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10C").checked){
		interestSocietyString += document.getElementById("D10C").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10D").checked){
		interestSocietyString += document.getElementById("D10D").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10E").checked){
		interestSocietyString += document.getElementById("D10E").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10F").checked){
		interestSocietyString += document.getElementById("D10F").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10G").checked){
		interestSocietyString += document.getElementById("D10G").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10H").checked){
		interestSocietyString+= document.getElementById("D10H").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("D10I").checked){
		interestSocietyString += document.getElementById("D10I").value;
	}

	//Sending and Receiving to Server
	let payload = {type: "data", data: insterestDataString, arts: interestArtString, society: interestSocietyString};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/dataformresults/post');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	console.log(payload);
	  console.log("Sending from Client");
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("Loaded matched courses to client");
			var response = JSON.parse(xhr.responseText);
			console.log(response["courses"]);
			console.log("Worked!");
			alert("New Course Recomendations Available");
		};
	};
}

document.getElementById("submitButton3").onclick = function getImmersiveCourses(){
	//Call seperate function here to update form frontend with results.
	let insterestImmerseString = "";
	let interestArtString = "";
	let interestSocietyString = "";
	//Question 3
	if(document.getElementById("I3A").checked){
		insterestImmerseString += document.getElementById("I3A").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3B").checked){
		insterestImmerseString += document.getElementById("I3B").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3C").checked){
		insterestImmerseString += document.getElementById("I3C").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3D").checked){
		insterestImmerseString += document.getElementById("I3D").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3E").checked){
		insterestImmerseString += document.getElementById("I3E").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3F").checked){
		insterestImmerseString += document.getElementById("I3F").value;
		insterestImmerseString += " ";
	}
	if(document.getElementById("I3G").checked){
		insterestImmerseString += document.getElementById("I3G").value;
	}
	console.log(insterestImmerseString);
	
	//Question 9 Arts
	if(document.getElementById("I9A").checked){
		interestArtString += document.getElementById("I9A").value;
		interestArtString += " ";
	}
	if(document.getElementById("I9B").checked){
		interestArtString += document.getElementById("I9B").value;
		interestArtString += " ";
	}
	if(document.getElementById("I9C").checked){
		interestArtString += document.getElementById("I9C").value;
		interestArtString += " ";
	}
	if(document.getElementById("I9D").checked){
		interestArtString += document.getElementById("I9D").value;
		interestArtString += " ";
	}
	if(document.getElementById("I9E").checked){
		interestArtString += document.getElementById("I9E").value;
		interestArtString += " ";
	}
	if(document.getElementById("I9F").checked){
		interestArtString += document.getElementById("I9F").value;
	}
	console.log(interestArtString);

	//Question 10 Society
	if(document.getElementById("I10A").checked){
		interestSocietyString += document.getElementById("I10A").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10B").checked){
		interestSocietyString += document.getElementById("I10B").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10C").checked){
		interestSocietyString += document.getElementById("I10C").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10D").checked){
		interestSocietyString += document.getElementById("I10D").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10E").checked){
		interestSocietyString += document.getElementById("I10E").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10F").checked){
		interestSocietyString += document.getElementById("I10F").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10G").checked){
		interestSocietyString += document.getElementById("I10G").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10H").checked){
		interestSocietyString+= document.getElementById("I10H").value;
		interestSocietyString += " ";
	}
	if(document.getElementById("I10I").checked){
		interestSocietyString += document.getElementById("I10I").value;
	}
	console.log(interestSocietyString);
	
}