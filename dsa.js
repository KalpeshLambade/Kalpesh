Q 1
var array =[ 34,45,65,23,5,676,32,34];
var target =66;

for(var i=0;i<array.length-1;i++){
    for(var j=i; j<array.length; j++){
        if(array[i] + array[j] === target){
            flag =true;
            console.log(array[i], array[j]);
        }
    }
}


Q2 
var start = 5768;
var end =78656;

var start =5768;
var end =78656;
var sum =0;

for(var i= start+1; i<end ; i++){

    if(i % 2 == 0){
        sum +=i;
    }
   
}
console.log(sum);

Q 3 
var number= 19;
var array =[3,5,79,45,0,-67,23,77,19,78,12];
var index =null;
var flag =false;
for(var i=0; i<array.length; i++){
    if( array[i] === number){
        index = i;
        flag =true;
    }
}
if(flag){
    console.log(index);
}
else{
    console.log("Not Found");
}

Q4 
var array =[34,45,567,78,89,34,67,87,34,78,89];
var obj ={};

for(var i=0; i<array.length; i++){
    obj[i] = array[i];
}
console.log(obj);


