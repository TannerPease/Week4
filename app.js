let user=5;
let dragon=10;
let input;
let userDamage;
let dragonDamage;

while (dragon>0&&user>0){
   input= prompt("Enter how many hits (1-5) you would like to attempt to hit the dragon with.");
    if (input<6){
        userDamage = Math.floor(Math.random() * input) + 1;
    }else {
        userDamage = 1
    }

    dragon=dragon-userDamage
    if (dragon<1){
        break
    }
    dragonDamage=Math.floor(Math.random() * 2) + 1
    user=user-dragonDamage
}





if (dragon<=0){
    document.body.innerHTML="Congrats you beat the dragon!"+" User Health: "+user
}
 if (user<=0){
    document.body.innerHTML="The dragon has defeated you!"+" Dragon Health: "+dragon
}








//Class Lecture
// let number=0;
// let start=0;
// let answer="";
// // for loop to add to number variable
// // for(let i=10;i>0; i--){
// //     number=number+2;
// // }
//
// //while loop ike for loop
// // while(start<4){
// //     number=number+2;
// //     start++;
// // }
//
// while(answer!=="*")
// answer= prompt("What symbol would you like?")
//
// document.body.innerHTML=number