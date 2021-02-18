
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(
        registration => {
            console.log("SW registered");
            console.log(registration);
        }
    ).catch(error => {
        console.log("SW failed");
    })
}


let login = "false";

function scriptmath(){
    if(document.getElementById("heading").style.color!="yellow")
        document.getElementById("heading").style.color="yellow";
    else
    document.getElementById("heading").style.color="white";

    let temp = sessionStorage.getItem("loginstr");
    console.log(temp);
}

function reset(){
    document.getElementById("keyy2").value="";
    document.getElementById("encryted").innerHTML="";
    console.log("Reset clicked");
}

function encrypt(){
    let key = document.getElementById("keyy").value;
    let msg = document.getElementById("keyy2").value;
    if(key!=""){
        let encypted="";
		let looper=0, len = key.length;
        let conv;
        let exchange=0;
        let firstspace = true;
        let series = [" ","!","'","#","$","%","&","\"","(",")","*","+",",","-",".","/",
        "0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@",
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
        "v","w","x","y","z","{","|","}","~"];

        for(let i=0; i<msg.length; i++){
            let j=parseInt(key.charAt(looper));
            for(let k=0; k<series.length; k++){
                if(series[k]===msg.charAt(i)){
                    exchange=k;
                    break;
                }
            }
            conv = series[(exchange+j)%95];
            if(firstspace==true){
                if(conv==" ")
                break;
            }
            firstspace=false;
            if(i === msg.length-2)
                firstspace=true;
            encypted = encypted.concat(conv);
            looper = (looper+1)%len;
        }
        if(firstspace==true){
            document.getElementById("crypted").innerHTML=`Please change ${looper+1}'th digit to avoid SPACE error <br/>This occurs when encrypted code is having first or last letter as a SPACE`;
            document.getElementById("encryted").innerHTML="! Warning !<br/>SPACE at the beginning or at the end";
        }
        
        else{
            console.log("Encrypted:"+encypted);
            document.getElementById("encryted").innerText=encypted;
            document.getElementById("crypted").innerHTML="Encrypted Message:";
        }
        
    }	
    else
        alert("key not entered");
    
}

function decrypt(){
    let key = document.getElementById("keyy").value;
    let msg = document.getElementById("keyy2").value;
    if(key!=""){
		let encypted="";
		let j =0, looper=0, len = key.length;
        let exchange=0;
        let series = [" ","!","'","#","$","%","&","\"","(",")","*","+",",","-",".","/",
        "0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@",
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
        "v","w","x","y","z","{","|","}","~"];

		for(let i=0; i<msg.length; i++) {
			j= parseInt(key.charAt(looper));
			for(let k=0; k<series.length; k++) {
				if(series[k] === msg.charAt(i)) {
					exchange = k;
					break;
				}
			}
            let conv;
			if(exchange-j<0) {
				conv = series[95+(exchange-j)];
			}
			else
				conv = series[exchange-j];
			
			encypted = encypted.concat(conv);
			looper = (looper+1)%len;
		}

		console.log("Decrypted: "+encypted);
        document.getElementById("encryted").innerText=encypted;
        document.getElementById("crypted").innerHTML="Decrypted Message:";
    }
    else
        alert("Please enter a key");
}

const menu = document.querySelector(".inck");
const menuLinks = document.querySelector(".dropdown");
const overlay = document.querySelector(".overlay");
let a=0;

function overlayhandle(){
    menuLinks.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    if(a%2!=0){
        document.getElementById("changeicon").className="fas fa-bars";
        a++;
    }
    else{
        document.getElementById("changeicon").className="fas fa-times";
        a++;
    }
}

menu.addEventListener('click', function handler(){
    menuLinks.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    if(a%2!=0){
        document.getElementById("changeicon").className="fas fa-bars";
        a++;
    }
    else{
        document.getElementById("changeicon").className="fas fa-times";
        a++;
    }
});


