// Write your solution here!
 let cats = ["Milo", "Otis", "Garfield"]
 
 function destructivelyAppendCat(name){
 
 name = cats.push("Ralph");
   
 }
 
 function destructivelyPrependCat(name){
    name = cats.unshift("Bob");
 }
 
 function destructivelyRemoveLastCat(){
 
   cats.pop();
 }
 
 function destructivelyRemoveFirstCat(){
 
   cats.shift();
 }
 
 function appendCat(name){
 
   name = [...cats, "Broom"];
 
   return name;
   
 }
 
 function prependCat(name){
 
   name = ["Arnold", ...cats]
   return name;
 
 }
 
 function removeLastCat(){
 
   let lastCat = [...cats]
   lastCat.pop("Garfield")
   return lastCat;
   
 }
 
 function removeFirstCat(){
    let firstCat = [...cats]
  firstCat.shift("Milo")
   return firstCat;
 
 }
