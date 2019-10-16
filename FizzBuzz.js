//FIZZBUZZ

/*

Write a program that prints the numbers from 1 to 100
and for multiples of '3' print "Fizz" instead of the
number and for the multiples of '5' print "Buzz".


*/

const fizzbuzz = () =>{
	for (var i = 1; i < 101; i++) {
		if (i%3 == 0 && i%5 == 0){
			console.log(i,"FIZZBUZZ");
		}
		else if(i%3 == 0){
			console.log(i,"FIZZ");
		}
		else if(i%5 == 0){
			console.log(i,"BUZZ");
		}
		else{
			console.log(i,"No conditions met")
		}
	}
}

fizzbuzz()