let myform = document.getElementById("myform");
myform.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

  if(!age || !name){
    alert("Please enter valid details");
	return;
	}

 new Promise((resolve,reject) =>{
	setTimeout(() => {
		if(age>=18){
			resolve(`Welcome, ${name}. You can vote.`);
		}else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	},4000);
}).then(msg => {
    alert(msg);
}).catch(mssg => {
    alert(mssg);
});
});