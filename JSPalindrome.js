const palindrome = str => {

	reverse = (str.split('').reverse().join(''));

	if(reverse == str){
		console.log("Is palindrome");
	}
	else{
		console.log("Not palindrome");
	}
};

palindrome("bob");