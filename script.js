let age = document.getElementById("age");
let name = document.getElementById("name");
let btn = document.getElementById("btn");

if(age=="" || name==""){
	btn.addEventListener("click", (event) => {
		event.preventDefault();
	});
	console.alert("Please enter valid details.")
};

return new Promise("resolve","reject") =>{
	setTimeout(()=> {
		if(age>=18){
			resolve("Welcome, . You can vote.");
		}else{
			reject("Oh sorry . You aren't old enough.");
		}
	},4000)
}.then(msg => {
	console.alert(msg);
}).catch(mssg =>{
	console.alert(mssg);
});