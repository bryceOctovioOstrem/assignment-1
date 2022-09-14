public class mergeSort{ // public class for 
	Void sort(){ // normally would have an input array varaible but not placed for testing puposes
	 var inArray = []; // testing in array
	 var tmp = []; //tempo array for holding the split up variables 
	 tmp = inArray; // set temp equal to in array for sorting
	 var lo,mid,hi;
	  //var mid[inArray.length()/2]; // settimg up a mid point for analayist
	 // var lo[inArray.length()/2]; // settimg up a lower array for later
	 // var hi[inArray.length()/2]; // settimg up a hi array for later use
	  
	 //mid = inArray.lengty()
	 var step = 2; // variable for steppingt through array
	 var left; // first variable for juding the variable on the left
	 var right; // variable for judeing variables on the right
	 var singleElement;
	 for ( a= 0; a <= inArray.lengty()-1; a++) // loop to handle first step
	 {
		 if ( tmp[i]> tmp[i+1]) //checks if next element is smaller 
		 {
			 singleElement = tmp[i+1]; // variable for holdoing
			 
			 
		}
	 while (step <= inArray.lengty()/2){ // main loop past first sort
		for ( i=0; i < inArray.lengty()/step; i += step)// second loop
		{
			left = tmp.slice(i,i+step); // set variable left got code for slice :https://www.w3schools.com/jsref/jsref_slice_array.asp
			right = tmp.slice(i+step,i+(step*2)); // sets variable right
			if ( left > right) { // swaps the variables
				temp.slice(i,i+step) =  right; 
				temp.slice(i+step,i+(step*2)) =  left;
		}
		step *= 2; // multiplies step each iteration
	 }
	}
	
}