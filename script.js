//your JS code here. If required.
function allMethods() {
  //write your code 
	let properties = Object.getOwnPropertyNames(Math);

	return properties.join(', ');
} 

alert(allMethods()); 
