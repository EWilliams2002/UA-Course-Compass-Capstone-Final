
window.onload = function(e){
	let payload = {interestform: "Sending data"};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/loadinterests');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			if(response["insterestsaved"] != "No intersts"){
				let updateDiv = document.getElementById("formResult");
				updateDiv.innerHTML = response["insterestsaved"];
			};

		};
	};


}

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

//TODO will load session data here from the database

document.getElementById("submitButton2").onclick = function getDataCourses(){
	//Call seperate function here to update form frontend with results.
	saveDataResponse();
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
  	xhr.open('POST', '/dataformresultsforalgorithm');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			alert("New Course Recomendations Available");
		};
	};
}

document.getElementById("submitButton3").onclick = function getImmersiveCourses(){
	//Call seperate function here to update form frontend with results.
	saveImmersiveResponse();
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

	//Sending and Receiving to Server
	let payload = {type: "immersive", data: insterestImmerseString, arts: interestArtString, society: interestSocietyString};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/dataformresultsforalgorithm');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			alert("New Course Recomendations Available");
		};
	};
	
}

function saveDataResponse(){
	let question1 = "";
	let question2 = "";
	let question3 = "";
	let question4 = "";
	let question5 = "";
	let question6 = "";
	let question7 = "";
	let question8 = "";
	let question9 = "";
	let question10 = "";
	//Question 1
	if(document.getElementById("1A").checked){
		question1 += document.getElementById("1A").value;
	}
	if(document.getElementById("1B").checked){
		question1 += document.getElementById("1B").value;
	}
	//Question 2
	if(document.getElementById("D2A").checked){
		question2 += document.getElementById("D2A").value;
		question2+= ", ";
	}
	if(document.getElementById("D2B").checked){
		question2 += document.getElementById("D2B").value;
		question2+= ", ";
	}
	if(document.getElementById("D2C").checked){
		question2 += document.getElementById("D2C").value;
		question2+= ", ";
	}
	if(document.getElementById("D2D").checked){
		question2 += document.getElementById("D2D").value;
		question2+= ", ";
	}
	if(document.getElementById("D2E").checked){
		question2 += document.getElementById("D2E").value;
		question2+= ", ";
	}
	if(document.getElementById("D2F").checked){
		question2 += document.getElementById("D2F").value;
		question2+= ", ";
	}

	//Question 3
	if(document.getElementById("D3A").checked){
		question3 += document.getElementById("D3A").value;
		question3 += ", ";
	}
	if(document.getElementById("D3B").checked){
		question3 += document.getElementById("D3B").value;
		question3 += ", ";
	}
	if(document.getElementById("D3C").checked){
		question3 += document.getElementById("D3C").value;
		question3 += ", ";
	}
	if(document.getElementById("D3D").checked){
		question3 += document.getElementById("D3D").value;
		question3 += ", ";
	}
	if(document.getElementById("D3E").checked){
		question3 += document.getElementById("D3E").value;
		question3 += ", ";
	}
	if(document.getElementById("D3F").checked){
		question3 += document.getElementById("D3F").value;
		question3 += ", ";
	}
	if(document.getElementById("D3G").checked){
		question3 += document.getElementById("D3G").value;
		question3 += ", ";
	}
	if(document.getElementById("D3H").checked){
		question3 += document.getElementById("D3H").value;
		question3 += ", ";
	}
	if(document.getElementById("D3I").checked){
		question3 += document.getElementById("D3I").value;
		question3 += ", ";
	}

	//Question 4
	if(document.getElementById("D4A").checked){
		question4 += document.getElementById("D4A").value;
		question4 += ", ";
	}
	if(document.getElementById("D4B").checked){
		question4 += document.getElementById("D4B").value;
		question4 += ", ";
	}
	if(document.getElementById("D4C").checked){
		question4 += document.getElementById("D4C").value;
	}
	//Question 5
	if(document.getElementById("D5A").checked){
		question5 += document.getElementById("D5A").value;
		question5 += ", ";
	}
	if(document.getElementById("D5B").checked){
		question5 += document.getElementById("D5B").value;
		question5 += ", ";
	}
	if(document.getElementById("D5C").checked){
		question5 += document.getElementById("D5C").value;
		question5 += ", ";
	}
	if(document.getElementById("D5D").checked){
		question5 += document.getElementById("D5D").value;
		question5 += ", ";
	}

	//Question 6
	if(document.getElementById("D6A").checked){
		question6 += document.getElementById("D6A").value;
		question6 += ", ";
	}
	if(document.getElementById("D6B").checked){
		question6 += document.getElementById("D6B").value;
		question6 += ", ";
	}
	if(document.getElementById("D6C").checked){
		question6 += document.getElementById("D6C").value;
		question6 += ", ";
	}
	if(document.getElementById("D6D").checked){
		question6 += document.getElementById("D6D").value;
		question6 += ", ";
	}

	//Question 7
	if(document.getElementById("D7A").checked){
		question7 += document.getElementById("D7A").value;
		question7 += ", ";
	}
	if(document.getElementById("D7B").checked){
		question7 += document.getElementById("D7B").value;
		question7 += ", ";
	}
	if(document.getElementById("D7C").checked){
		question7 += document.getElementById("D7C").value;
		question7 += ", ";
	}

	//Question 8
	if(document.getElementById("D8A").checked){
		question8 += document.getElementById("D8A").value;
		question8 += ", ";
	}
	if(document.getElementById("D8B").checked){
		question8 += document.getElementById("D8B").value;
		question8 += ", ";
	}
	if(document.getElementById("D8C").checked){
		question8 += document.getElementById("D8C").value;
		question8 += ", ";
	}
	if(document.getElementById("D8D").checked){
		question8 += document.getElementById("D8D").value;
		question8 += ", ";
	}
	if(document.getElementById("D8E").checked){
		question8 += document.getElementById("D8E").value;
		question8 += ", ";
	}
	//Question 9
	if(document.getElementById("D9A").checked){
		question9 += document.getElementById("D9A").value;
		question9  += ", ";
	}
	if(document.getElementById("D9B").checked){
		question9 += document.getElementById("D9B").value;
		question9 += ", ";
	}
	if(document.getElementById("D9C").checked){
		question9 += document.getElementById("D9C").value;
		question9  += ", ";
	}
	if(document.getElementById("D9D").checked){
		question9 += document.getElementById("D9D").value;
		question9  += ", ";
	}
	if(document.getElementById("D9E").checked){
		question9  += document.getElementById("D9E").value;
		question9  += ", ";
	}
	if(document.getElementById("D9F").checked){
		question9  += document.getElementById("D9F").value;
		question9  += ", ";
	}

	//Question 10
	if(document.getElementById("D10A").checked){
		question10 += document.getElementById("D10A").value;
		question10 += ", ";
	}
	if(document.getElementById("D10B").checked){
		question10 += document.getElementById("D10B").value;
		question10 += ", ";
	}
	if(document.getElementById("D10C").checked){
		question10 += document.getElementById("D10C").value;
		question10 += ", ";
	}
	if(document.getElementById("D10D").checked){
		question10 += document.getElementById("D10D").value;
		question10 += ", ";
	}
	if(document.getElementById("D10E").checked){
		question10 += document.getElementById("D10E").value;
		question10 += ", ";
	}
	if(document.getElementById("D10F").checked){
		question10 += document.getElementById("D10F").value;
		question10 += ", ";
	}
	if(document.getElementById("D10G").checked){
		question10 += document.getElementById("D10G").value;
		question10 += ", ";
	}
	if(document.getElementById("D10H").checked){
		question10 += document.getElementById("D10H").value;
		question10 += ", ";
	}
	if(document.getElementById("D10I").checked){
		question10 += document.getElementById("D10I").value;
		question10 += ", ";
	}
	let updateString = "";
	updateString += "<br>";
	updateString += "<br>";
	updateString += "<h2 class='question'> Interest Result Summary</h2>";
	updateString += "<br>";
	updateString += "<h4 class='question'> Pick an emphasis:</h4>";
	updateString += "<ul class='question'>";
	updateString += "<li>"+question1+"</li>";
	updateString += "</ul>";
	updateString += "<br>"
	updateString += "<h4 class='question'> What programming langauges are you most interested in exploring futher:</h4>";
	updateString += "<ul class='question'>";
	updateString += "<li>"+question2.slice(0, -2)+"</li>";
	updateString += "</ul>";
	updateString += "<br>";
	updateString += "<h4 class='question'> What type of technology-related project would you like to undertake:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question3.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which aspect of technology interests you the most:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question4.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> What role do you envision yourself in within industry:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question5.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which technical skill do you prioritize developing further:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question6.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'>Which technology-related hobby or activity are you most likely to spend your free time on:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question7.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which technology industry excites you the most:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question8.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> What aspect of art do you want to gain more skills in:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question9.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> When it comes to examining society, what would you like to learn more about:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question10.slice(0, -2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	let updateDiv = document.getElementById("formResult");
	updateDiv.innerHTML = updateString;
	//Sending and Receiving to Server
	let payload = {interestform: updateString};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/saveinterstformsummary');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
		};
	};
	

};

function saveImmersiveResponse(){
	//TODO Will send data to be written/updated to the database
	let question1 = "";
	let question2 = "";
	let question3 = "";
	let question4 = "";
	let question5 = "";
	let question6 = "";
	let question7 = "";
	let question8 = "";
	let question9 = "";
	let question10 = "";
	//Question 1
	if(document.getElementById("1A").checked){
		question1 += document.getElementById("1A").value;
	}
	if(document.getElementById("1B").checked){
		question1 += document.getElementById("1B").value;
	}
	//Question 2
	if(document.getElementById("I2A").checked){
		question2 += document.getElementById("I2A").value;
		question2+= ", ";
	}
	if(document.getElementById("I2B").checked){
		question2 += document.getElementById("I2B").value;
		question2+= ", ";
	}
	if(document.getElementById("I2C").checked){
		question2 += document.getElementById("I2C").value;
		question2+= ", ";
	}
	if(document.getElementById("I2D").checked){
		question2 += document.getElementById("I2D").value;
		question2+= ", ";
	}
	if(document.getElementById("I2E").checked){
		question2 += document.getElementById("I2E").value;
		question2+= ", ";
	}
	if(document.getElementById("I2F").checked){
		question2 += document.getElementById("I2F").value;
		question2+= ", ";
	}

	//Question 3
	if(document.getElementById("I3A").checked){
		question3 += document.getElementById("I3A").value;
		question3 += ", ";
	}
	if(document.getElementById("I3B").checked){
		question3 += document.getElementById("I3B").value;
		question3 += ", ";
	}
	if(document.getElementById("I3C").checked){
		question3 += document.getElementById("I3C").value;
		question3 += ", ";
	}
	if(document.getElementById("I3D").checked){
		question3 += document.getElementById("I3D").value;
		question3 += ", ";
	}
	if(document.getElementById("I3E").checked){
		question3 += document.getElementById("I3E").value;
		question3 += ", ";
	}
	if(document.getElementById("I3F").checked){
		question3 += document.getElementById("I3F").value;
		question3 += ", ";
	}
	if(document.getElementById("I3G").checked){
		question3 += document.getElementById("I3G").value;
		question3 += ", ";
	}

	//Question 4
	if(document.getElementById("I4A").checked){
		question4 += document.getElementById("I4A").value;
		question4 += ", ";
	}
	if(document.getElementById("I4B").checked){
		question4 += document.getElementById("I4B").value;
		question4 += ", ";
	}
	if(document.getElementById("I4C").checked){
		question4 += document.getElementById("I4C").value;
		question4 += ", ";
	}
	//Question 5
	if(document.getElementById("I5A").checked){
		question5 += document.getElementById("I5A").value;
		question5 += ", ";
	}
	if(document.getElementById("I5B").checked){
		question5 += document.getElementById("I5B").value;
		question5 += ", ";
	}
	if(document.getElementById("I5C").checked){
		question5 += document.getElementById("I5C").value;
		question5 += ", ";
	}
	if(document.getElementById("I5D").checked){
		question5 += document.getElementById("I5D").value;
		question5 += ", ";
	}

	//Question 6
	if(document.getElementById("I6A").checked){
		question6 += document.getElementById("I6A").value;
		question6 += ", ";
	}
	if(document.getElementById("I6B").checked){
		question6 += document.getElementById("I6B").value;
		question6 += ", ";
	}
	if(document.getElementById("I6C").checked){
		question6 += document.getElementById("I6C").value;
		question6 += ", ";
	}

	//Question 7
	if(document.getElementById("I7A").checked){
		question7 += document.getElementById("I7A").value;
		question7 += ", ";
	}
	if(document.getElementById("I7B").checked){
		question7 += document.getElementById("I7B").value;
		question7 += ", ";
	}
	if(document.getElementById("I7C").checked){
		question7 += document.getElementById("I7C").value;
		question7 += ", ";
	}

	//Question 8
	if(document.getElementById("I8A").checked){
		question8 += document.getElementById("I8A").value;
		question8 += ", ";
	}
	if(document.getElementById("I8B").checked){
		question8 += document.getElementById("I8B").value;
		question8 += ", ";
	}
	if(document.getElementById("I8C").checked){
		question8 += document.getElementById("I8C").value;
		question8 += ", ";
	}
	if(document.getElementById("I8D").checked){
		question8 += document.getElementById("I8D").value;
		question8 += ", ";
	}
	if(document.getElementById("I8E").checked){
		question8 += document.getElementById("I8E").value;
		question8 += ", ";
	}
	//Question 9
	if(document.getElementById("I9A").checked){
		question9 += document.getElementById("I9A").value;
		question9  += ", ";
	}
	if(document.getElementById("I9B").checked){
		question9 += document.getElementById("I9B").value;
		question9 += ", ";
	}
	if(document.getElementById("I9C").checked){
		question9 += document.getElementById("I9C").value;
		question9  += ", ";
	}
	if(document.getElementById("I9D").checked){
		question9 += document.getElementById("I9D").value;
		question9  += ", ";
	}
	if(document.getElementById("I9E").checked){
		question9  += document.getElementById("I9E").value;
		question9  += ", ";
	}
	if(document.getElementById("I9F").checked){
		question9  += document.getElementById("I9F").value;
		question9  += ", ";
	}

	//Question 10
	if(document.getElementById("I10A").checked){
		question10 += document.getElementById("I10A").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10B").checked){
		question10 += document.getElementById("I10B").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10C").checked){
		question10 += document.getElementById("I10C").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10D").checked){
		question10 += document.getElementById("I10D").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10E").checked){
		question10 += document.getElementById("I10E").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10F").checked){
		question10 += document.getElementById("I10F").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10G").checked){
		question10 += document.getElementById("I10G").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10H").checked){
		question10 += document.getElementById("I10H").value;
		question10 +=  ", ";
	}
	if(document.getElementById("I10I").checked){
		question10 += document.getElementById("I10I").value;
		question10 +=  ", ";
	}
	let updateString = "";
	updateString += "<br>"
	updateString += "<br>"
	updateString += "<h2 class='question'> Interest Result Summary</h2>";
	updateString += "<br>";
	updateString += "<h4 class='question'> Pick an emphasis:</h4>";
	updateString += "<ul class='question'>";
	updateString += "<li>"+question1+"</li>";
	updateString += "</ul>";
	updateString += "<br>"
	updateString += "<h4 class='question'> What programming langauges are you most interested in exploring futher:</h4>";
	updateString += "<ul class='question'>";
	updateString += "<li>"+question2.slice(0,-2)+"</li>";
	updateString += "</ul>";
	updateString += "<br>";
	updateString += "<h4 class='question'> What type of technology-related project would you like to undertake:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question3.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which aspect of technology interests you the most:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question4.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> What role do you envision yourself in within industry:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question5.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which technical skill do you prioritize developing further:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question6.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'>Which technology-related hobby or activity are you most likely to spend your free time on:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question7.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> Which technology industry excites you the most:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question8.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> What aspect of art do you want to gain more skills in:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question9.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	updateString += "<h4 class='question'> When it comes to examining society, what would you like to learn more about:</h4>"
	updateString += "<ul class='question'>"
	updateString += "<li>"+question10.slice(0,-2)+"</li>"
	updateString += "</ul>"
	updateString += "<br>"
	let updateDiv = document.getElementById("formResult");
	updateDiv.innerHTML = updateString;
	//Sending and Receiving to Server
	let payload = {interestform: updateString};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/saveinterstformsummary');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
		};
	};
};

document.getElementById("logoutInterest").onclick = function logoutUser(){
    //Sending login info to server
    let payload = {logout: "Logging out user"};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/logout');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parse(xhr.responseText);
        window.location.replace("login.html");
    };
    };
  };