function inputData(){
	let fullstr="";
	let inpu = document.getElementById("namedata").value;
	
	
	if(localStorage.getItem("111")!=null){

		fullstr = localStorage.getItem("111");
	}
	else{
		localStorage.setItem("111","");
		fullstr = localStorage.getItem("111");
	}
	
	if(inpu!="")
		fullstr = fullstr.concat("\n"+inpu);
	localStorage.setItem("111",fullstr);
	console.log(fullstr);
	document.getElementById("outpara").innerText=fullstr;

}

function deleteData(){
	localStorage.removeItem("111");
	document.getElementById("outpara").innerText="";
}

const menu = document.querySelector(".inck");
const menuLinks = document.querySelector(".dropdown");
let a=0;

menu.addEventListener('click', function handler(){
    menuLinks.classList.toggle("active");
    menu.classList.toggle("active");
    if(a%2!=0){
        document.getElementById("changeicon").className="fas fa-bars";
        a++;
    }
    else{
        document.getElementById("changeicon").className="fas fa-times";
        a++;
    }
});

function logincontrol(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user == "admin" && pass == "sagar123"){
        window.location.href="./application.html";
        login = "true";
        sessionStorage.setItem("loginstr", login);
    }
    else{
        document.getElementById("outpu").innerHTML="Invalid username or password";
        login = "false";
        sessionStorage.setItem("loginstr", login);
    }
        

}
