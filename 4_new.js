// new keyword-> jaha per bhi new likha ho waha per ek blank object imagine karlo aur new ke aage agar function ho to uss function ke andar jao aur jaha per bhi this likha ho use blank object mano

// {

// }

function abcd(){
    this.age = 12;
}

new abcd();

{
    age: 12;
}

//new ek blank obj hai aur vo function me this dhundta hai aur this ke baad ki value us blank obj me put kar deta hai