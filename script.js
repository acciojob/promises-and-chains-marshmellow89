document.getElementById("myform").addEventListener("submit",function(event)){
	event.preventDefault();
		const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();

	if(!name || !age){
		return("Please enter valid details.");
		
	}
	
const mypromise = new promise((resolve,reject) => {
		if(age>=18){
		setTimeout(() => {
			resolve(`Welcome,${name}. You can vote.`);
		},4000);
		}else{
			setTimeout(() => {
				reject(`Oh sorry ${name}. You aren't old enough.`);
			});
		};
	});

mypromise
     .then((data1) => {
		 console.log(`data1`);
	 })
    .catch((data2) => {
		console.log(`data2`);
	});

};

