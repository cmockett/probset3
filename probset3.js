// var palindrome = function(str){
// 	strArray = str.split("")
// 	if(strArray.join("") === strArray.reverse().join("")){
// 		return true
// 	}
// 	else{
// 		return false
// 	}
// }

var dashInsert = function(num){
	numArray = num.toString().split("")
	for(var i=0; i<numArray.length; i++){
		if ((numArray[i] % 2 ===1) && (numArray[i+1]%2 ===1)){
			numArray.splice([i+1], 0, "-")
			// return numArray.join("")
		}
	}
	return numArray.join("")
}
