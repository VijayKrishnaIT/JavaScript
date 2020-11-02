/*
    function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
        console.log(arg1,arg2,arg3);
    };
    fun_one();                              //undefined undefined undefined
    fun_one(undefined,"Hello");             //undefined Hello undefined
    fun_one("React","Deno","MongoDB");      //React Deno MongoDB
    fun_one(null,null,null);                //null null null
*/
/*
    function fun_one(arg1:any,arg2?:any,arg3?:any):any{
        return `${arg1},${arg2},${arg3}`;
    };
    //fun_one();                            //Expected 1-3 arguments, but got 0.
    console.log( fun_one("React") );       //React,undefined,undefined
*/
/*
    function fun_one(arg1:any,arg2:any="Hello_2",arg3?:any):any{
        console.log(arg1,arg2,arg3);
    };
    //fun_one();                                //Expected 1-3 arguments, but got 0
    //fun_one("Hello_1");                       //Hello_1 Hello_2 undefined
    //fun_one("Hello_1",undefined,"Hello_3");   //Hello_1 Hello_2 Hello_3
    //fun_one("Hello_1","Hello","Hello_3");     //Hello_1 Hello Hello_3
    //fun_one(null,null,null);                  //null null null
*/
function fun_one(arg1, arg3, arg2) {
  if (arg2 === void 0) {
    arg2 = "Hello_2";
  }
  var arg4 = [];
  for (var _i = 3; _i < arguments.length; _i++) {
    arg4[_i - 3] = arguments[_i];
  }
  console.log(arg1, arg2, arg3, arg4);
}
//fun_one();                        //Expected at least 1 arguments, but got 0.
//fun_one("Hello_1");               //Hello_1 Hello_2 undefined []
//fun_one(undefined,undefined,undefined,undefined);  //undefined Hello_2 undefined [ undefined ]
fun_one(null, null, null, null); //
