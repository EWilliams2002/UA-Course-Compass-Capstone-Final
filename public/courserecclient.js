/* IMPORTANT whenever this page loads it is always
pulling from the database and what is updated there.
*/

window.onload = function(e){
    let payload = {message: "Getting Data to Update UI."};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/updatecourseui');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			if(response["coursematches"] != 'No courses'){
				var split_response = response["coursematches"].split("::");
				var data_courses = split_response[0].split(":");
				var art_courses = split_response[1].split(":");
				var soc_courses = split_response[2].split(":");
				let buildStr1 = "<ul>";
				let buildStr2 = "<ul>";
				let buildStr3 = "<ul>";
				for(var i = 0; i < data_courses.length; i += 1) {
					buildStr1 += "<li>"+data_courses[i]+"</li>";
					buildStr1 += "<br>"
				}
				buildStr1 += "</ul>";
				for(var i = 0; i < art_courses.length; i += 1) {
					buildStr2 += "<li>"+art_courses[i]+"</li>";
					buildStr2 += "<br>"
				}
				buildStr2 += "</ul>";
				for(var i = 0; i < soc_courses.length; i += 1) {
					buildStr3 += "<li>"+soc_courses[i]+"</li>";
					buildStr3 += "<br>"
				}
				buildStr3 += "</ul>";
				let div1 = document.getElementById("divToChange1");
				let div2 = document.getElementById("divToChange2");
				let div3 = document.getElementById("divToChange3");
				div1.innerHTML = buildStr1;
				div2.innerHTML = buildStr2;
				div3.innerHTML = buildStr3;

			};
		};
	};
  	
};
document.getElementById("logoutCourseRec").onclick = function logoutUser(){
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