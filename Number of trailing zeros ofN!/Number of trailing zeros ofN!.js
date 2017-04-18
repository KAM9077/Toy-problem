// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// http://mathworld.wolfram.com/Factorial.html

// N! = 1 * 2 * 3 * 4 ... N

// zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
// that has 2 trailing zeros 4790016(00)
// Be careful 1000! has length of 2568 digital numbers.

function numberOfTrailing(n) {
var array = [1];
for (var j = 1; j <=n; j++) {
	for (var i = 0; i < array.length+1; i++) {
		if (i===0){
			array[i]=array[i]*j
		}else if(array[i-1] > 9 && array[i] === undefined){
			array[i] = parseInt(array[i-1]/10);
			array[i-1]=array[i-1]%10;
		}else if (array[i-1] > 9 && array[i] !== undefined){
			array[i] = parseInt(array[i-1]/10) + array[i]*j;
			array[i-1]=array[i-1]%10;
		}else if (array[i] < 9 && array[i] !== undefined){
			array[i] = array[i]*j;
		}
	}
	//array.push(0);
}
return array;
}