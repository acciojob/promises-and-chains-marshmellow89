let age = document.getElementById("age").value;
let name = document.getElementById("name").value;
let btn = document.getElementById("btn").value;

if(age=="" || name==""){
	btn.addEventListener("click",(event) => {
		event.preventDefault();
		alert("Please enter valid details.");
	});
}

return new Promise((resolve,reject) =>{
	setTimeout(() => {
		if(age>=18){
			alert("Welcome, . You can vote.");
		}else{
			alert("Oh sorry . You aren't old enough.");
		}
	})
})