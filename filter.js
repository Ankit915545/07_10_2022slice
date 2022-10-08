function even(){
var numberArray = [12,324,213,4,2,3,45,4234];
var newno = numberArray.filter(function(value)
{
    return value%2==0;
})
console.log(newno);
}
even();

var numberArray = [12,324,213,4,2,3,45,4234];
var prime = numberArray.filter(function(item){
    let prime1 = true;
    if(item>1){
        for(let i=2;i<item;i++){
            if(item%i == 0){
                prime1 = false;
                break;
            }
        }
        if(prime1){
            return item;
        }
    }
})
console.log(prime);
document.write(prime);



