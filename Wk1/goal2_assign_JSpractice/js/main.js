// self-executing function

// Craig Macchi
// 4/3/2012
// Assignment: Javascript Practice
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");
	/*	     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function*/
        //PUT FUNCTION HERE
		
		var firstName = "james";
		var lastName = "bond";
		function fullName(firstName, lastName){
			
			fullName = firstName + " " + lastName;
			return fullName;
			
			};
		
		var results = fullName(firstName,lastName);
		console.log('Full Name: ', results);

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"
/*		     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function*/
        //PUT FUNCTION HERE
		var longString  = 'Hello World, this is my long string';

		function wordCount(strCount){
			var count = 0;
			words = strCount.split(" ");
			for(i=0; i< words.length ; i++){
				if (words[i] != "")
				count +=1;
			}
			return count; 
		
		};
		var cnt = wordCount(longString);
    console.log('Count: ',cnt);

    //--------------------------------------------------------
    console.log("4. sentence char count");
	
	    /* 4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function
*/
        //PUT FUNCTION HERE
		var res = longString.split("");
		function charCount(strCount){
			var count = 0;
			
			for(i=0; i< res.length ; i++){
				if (words[i] != "")
				count +=1;
			}
			return count; 	
		};

   	var cnt = charCount(res);
    console.log('Count: ',cnt);

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
	     /*5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function*/

        //PUT FUNCTION HERE
		var vowelWord = "Abracadabra";
		var vowels = ["a","e","i","o","u"];
		var res = vowelWord.toLowerCase();
		var res = res.split("");
		console.log(res);
		console.log(vowels);
		function vowelsInWord(strCount){
			var count = 0;
			
			for(i=0; i< res.length ; i++){
				for (j=0; j<vowels.length; j++){
				if (res[i] == vowels[j])
				count +=1;
			}
			}
			return count; 	
		};

   	var cnt = vowelsInWord(res);
    console.log('Count: ',cnt);

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");
	
	    /* 6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
*/
        //PUT FUNCTION HERE
		var numbers = [31,22,4,67,83,6,5,4];
		var boolean = 0;
		function findNum(numValue,bValue){
			var results = [];
			
			if (boolean == 0){
			//if false	
				
				for(i=0; i< numbers.length ; i++){
				if (numbers[i]%2 != 0)
				results.push(numbers[i]);
				
			
				}
			
			}else if (boolean == 1){
			//if true
				for(i=0; i< numbers.length ; i++){
				if (numbers[i]%2 == 0)
				results.push(numbers[i]);
				
			
				}
			
			}
			
			var answer = results + boolean;
			return answer;
			
		}
	 var cnt = findNum(results,boolean)
    console.log('Array: ',cnt);

})();