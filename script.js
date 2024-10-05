//variable for function to be used on
let nums = [5, 8, 3, 9]

//function itself
push(10)
//function name with parameter given for specific element to be added
function push(pushNum){
    //array to store function to then add to original array
    let newNums = [];
    //for loop
    for(let i = 0; i <= nums.length; i++){
        //writing nums in placeholder
       newNums[i] = nums[i];
       //if statement
       if(i===nums.length){
        //For all new nums add element
            newNums[i] = pushNum;
       }
    }
    //replace orginal array with new array
    nums = newNums;
    //console.log to check if function works
    console.log(newNums)
}

//function itself
pop()
//function name
function pop(){
    //array to store function to then add to original array
    let newNums = [];
    //for loop
    for(let i = 0; i < nums.length - 1; i++){
        //writing nums in placeholder
        newNums [i] = nums [i];
    }
    //to check if function works
    console.log(newNums)
}


//function itself
toString()
//function name
function toString(){
    //string to store function to then add to original string
    let newString = "";
    //for loop
    for(let i = 0; i < nums.length; i++){    
        //if statment    
        if(i === nums.length - 1){
            //if it is, add too string without seperator
            newString += nums[i];
            //if else statment
        } else{
            //for all new strings add element + seperator 
            newString += nums[i] + ",";
        }
    }
    //to check if function works
    console.log(newString)
}

//function itself
join("/")
//naming function and giving parameter to make sure function is given specific element
function join(seperator){
    //new string to store data for function
    let newString = "";
    //for loop for function
    for(let i = 0; i < nums.length; i++){ 
        //check to see if its at the last element of the array      
        if(i === nums.length - 1){
            //if it is, add too string without seperator
            newString += nums[i];
            //else if statment
        } else{
            //for all new strings add element + seperator 
            newString += nums[i] + seperator;
        }
    }
    //to check if function works
    console.log(newString)
}

//function itself
concat([10, 6, 7])
//naming function and giving parameter to make sure function is given specific element
function concat(concatNum){
    //new array to store data for function
    let newArray = [];
    //for loop for function
    for(let i = 0; i < concatNum.length; i++){
        //Push the current element of concatNum to the target array
        push(concatNum[i]);
    
    }

    //to check if function works
    console.log(newArray)
}



//This is something you helped me with and showed me I didn tneed for the function concat 

 // for(let i = 0; i <= nums.length; i++){
    //    newArray[i] = nums[i];
    //    if(i === nums.length){
    //         newArray[i] = concatNum;
    //    }
    // }