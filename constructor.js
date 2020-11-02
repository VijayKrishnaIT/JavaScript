/*
    function class_one(){
        this.sub_one = "ReactJS";
        this.sub_two = "Deno";
        this.sub_three = "MongoDB";
    };
    let obj1 = new class_one();
    console.log( obj1.sub_one,obj1.sub_two,obj1.sub_three );   //ReactJS Deno MongoDB
*/

/*
    function class_one(){
        this.fun_one = function(){
            return "Hello_1";
        };

        this.fun_two = function(){
            return "Hello_2";
        };

        this.fun_three = function(){
            return "Hello_3";
        };
    };

    let obj = new class_one();
    console.log( obj.fun_one(), 
                obj.fun_two(), 
                obj.fun_three() );   //Hello_1 Hello_2 Hello_3
*/

/*
    function class_one(arg1,arg2,arg3){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    };

    let obj1 = new class_one("Angular","NodeJS","MongoDB");
    console.log( obj1.var_one,
                obj1.var_two,
                obj1.var_three );

    let obj2 = new class_one("ReactJS","Deno","MySQL");
    console.log( obj2.var_one, obj2.var_two, obj2.var_three );
*/

/*
    function class_one(arg1,arg2,arg3){
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    };

    function class_two(){
        this.sub_one = "ReactJS";
    };

    function class_three(){
        this.sub_two = "NodeJS";
    };

    function class_four(){
        this.sub_three = "MongoDB";
    };
    let obj1 = new class_one(new class_two(), new class_three(), new class_four());
    console.log( obj1.sub_one.sub_one, obj1.sub_two.sub_two, obj1.sub_three.sub_three );  //ReactJS NodeJS MongoDB
*/

/*
    //prototype   (predefined property)
    function class_one(){

    };
    class_one.prototype.sub_one = "ReactJS";

    function class_two(){

    };
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.sub_two = "Deno";

    let obj1 = new class_one();
    console.log( obj1.sub_one );      //ReactJS

    let obj2 = new class_two();
    console.log( obj2.sub_one, obj2.sub_two );   //ReactJS Deno
*/

/*
    function front_end(){
    };
    front_end.prototype.sub_one = "ReactJS";
    front_end.prototype.getSubOne = function(){
        return "Hemanth !!!";
    };

    function server(){
    };
    server.prototype = Object.create(front_end.prototype);
    server.prototype.sub_two = "NodeJS";
    server.prototype.getSubTwo = function(){
        return "Jyothi !!!";
    };
    let obj1 = new front_end();
    console.log( obj1.sub_one, obj1.getSubOne() );    //ReactJS Hemanth !!!

    let obj2 = new server();
    console.log(obj2.sub_one, obj2.getSubOne(), obj2.sub_two, obj2.getSubTwo() );   //ReactJS Hemanth !!! NodeJS Jyothi !!!
*/
/*
    function class_one(){};
    class_one.prototype.var_one = "Hello_1";

    function class_two(){};
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.var_two = "Hello_2";

    function class_three(){};
    class_three.prototype = Object.create(class_two.prototype);
    class_three.prototype.var_three = "Hello_3";

    let obj1 = new class_one();
    console.log(obj1.var_one);              //Hello_1

    let obj2 = new class_two();
    console.log( obj2.var_one, obj2.var_two );      //Hello_1 Hello_2

    let obj3 = new class_three();
    console.log(obj3.var_one, obj3.var_two, obj3.var_three);    //Hello_1 Hello_2 Hello_3
*/

function Parent() {}
Parent.prototype.earnedMoney = function () {
  return 100;
};

function Child() {}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.earnedMoney = function () {
  return 200;
};
let obj = new Child();
console.log(obj.earnedMoney()); //200
