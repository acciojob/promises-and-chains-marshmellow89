const name = document.getElementById("name").value.trim();
const age = document.getElementById("age").value.trim();

if(!name || !age){
	alert("Please enter valid details.");
	document.getElementById("myform").addEventListener("submit",event.preventDefault());
}else{
function submitform(){
	return new promise((resolve,reject) => {
		if(age>=18){
		setTimeout(() => {
			resolve("Welcome, . You can vote.");
		},4000);
		}else{
			setTimeout(() => {
				reject("Oh sorry . You aren't old enough.");
			});
		};
	});
}
};