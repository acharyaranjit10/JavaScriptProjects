/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let adjective, Shop_Name, another;
let adj = Math.random();
if(adj<.33){
    adjective = "Crazy";
}
else if(adj>.33 && adj <.66){
     adjective = "Amazing";
}
else{
    adjective = "Fire";
}

let shp = Math.random();
if(shp<.33){
     Shop_Name = "Engine";
}
else if(adj>.33 && adj <.66){
     Shop_Name = "Foods";}
else{
     Shop_Name = "Garments";
}

let ano = Math.random();
if(ano<.33){
     another = "Bros";
}
else if(ano>.33 && adj <.66){
     another = "Limited";
}
else{
     another = "Hub";

}

console.log("Random Business Name is " + adjective + " " + Shop_Name + " " + another);
