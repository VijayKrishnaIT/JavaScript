//callback
//passing one function to another function as an argument called as callback
//callbacks plays the major role while implementing the real time applications
//Ex.  ajax calls, arrays manipulations (ES6),.....
//we can use arrow functions as callback functions

/*
    function fun_one(arg1){
        console.log(arg1());
    };
    fun_one( function fun_two(){
        return "hello";
    } );    //hello
*/
/*
    function fun_one(callback1,callback2,callback3){
        console.log( callback1(),
                    callback2(),
                    callback3());
    };
    fun_one(()=>{ return "Success...!" },
            ()=>{ return "Error...!" },
            ()=>{ return "Pending...!" });   //Success...! Error...! Pending...!
*/

/*
    function fun_one(arg1){
        return arg1(10,20);
    };

    fun_one( (num1,num2)=>{
        console.log(num1+num2);
    } );    //30
*/

/*
    function mern(uiFun,serverFn,backendFn){
        return `${uiFun("ReactJS")}
                ${serverFn("Deno")}
                ${backendFn("MongoDB")}`;
    };

    mern((sub1)=>{
            console.log(sub1);
        },
        (sub2)=>{
            console.log(sub2);
        },
        (sub3)=>{
            console.log(sub3);
        });
*/

function add(num, callback) {
  return callback(num + 5, false);
}
function sub(num, callback) {
  return callback(num - 3, false);
}
function mul(num, callback) {
  return callback(num * 2, false);
}
function div(num, callback) {
  return callback(num / 2 - 2, false);
}
add(5, (addRes, error) => {
  if (!error) {
    sub(addRes, (subRes, error) => {
      if (!error) {
        mul(subRes, (mulRes, error) => {
          if (!error) {
            div(mulRes, (divRes, error) => {
              if (!error) {
                console.log(divRes);
              }
            });
          }
        });
      }
    });
  }
});

//10    //7    //14   //5     //callback hell       //promises
