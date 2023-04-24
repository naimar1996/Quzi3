// 1.
const word ="Bello world";
console.log(word.replace("Bello","Hello"));

// 2.
const word1 = "Hellu wurld!";
console.log(word1.replace("Hellu wurld!","Hello world"));

// 3.
const loveJS ="I love javascript";
console.log(loveJS.split(" "));

// 4.
const trimmedWord =" Hey there ";
console.log(trimmedWord.trim());


// 5.
const user1 ={
    name:"Test name"
}
const user2 ={
    surname:"Test surname"
}
const mergedWords = `${user1} ${user2}`;
console.log(mergedWords);


// 6.
const address ={
    city:"Baku",
    street:"Ahmad racabli",
    zip:1000
};
const{city,street,zip} = address;

// 8. Key_Methode(But I do not know how it works);
// 7.
const user={};
console.log(Object.defineProperties(user,{
    name:{
        value:"Naim",
        enumerable:true,
        writeable:false
    },
    surname:{
        value:"Rahimov",
        enumerable:true,
        writeable:false
    },
    age:{
        value:27,
        enumerable:true,
        writable:false
    }
}));


// 9.
const user3={
    name:"test",
    surname:"test"
};
Object.freeze(user3);
console.log(user3);



// 10.
class Car{
    brand;
    year;
    batteryCapacity;
    constructor(brand,year,batteryCapacity){
        this.brand = brand;
        this.year = year;
        this.batteryCapacity = batteryCapacity;
    }
}
class BMW  extends Car{
    constructor(brand,year,batteryCapacity,isSafe){
        super(brand,year,batteryCapacity)
        this.isSafe = isSafe;

    }
}
class Mercedes extends Car{

}
class Volvo extends Car{

}

class Alpina extends BMW{
    constructor(brand,year,batteryCapacity,isSafe,speed){
        super(brand,year,batteryCapacity,isSafe);
        this.speed = speed;
    }
}
class Brabus extends Mercedes{

}
class Polestar extends Volvo{

}