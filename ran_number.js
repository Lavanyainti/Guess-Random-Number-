var randomnumber=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById("guessbtn").addEventListener("click",function(){
    var input=parseInt(document.getElementById("guessinput").value);
    attempt++;
    if(randomnumber==input){
        displaymsg("Congratulations.! You guessed the number in"+attempt+"attempts.");
        document.getElementById("guessbtn").disable=true;
    }else if(input<randomnumber){
        displaymsg("Too low.! Try another number");
        
    }
    else{
        displaymsg("Too High.! Try another number");
        
    }
});
function displaymsg(k){
    document.getElementById("msg").textContent=k;
}