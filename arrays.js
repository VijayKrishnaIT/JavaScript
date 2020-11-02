/*

    //Array - collection of indexed elements (hetrogeneous) elements called as array.
    //we will represent arrays by using []
    //we will access array elements with the help of indexes
    let arr = ["Angular","ReactJS","NodeJS","VueJS","MongoDB"];
    //forEach()   (ES6)
    arr.forEach((element,index,array)=>{
        console.log(element,index);
    });
*/

/*
    //map()
    //map() function introduced in ES6
    //map() function used to manipulate the array elements
    //map() function will return new array
    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return "$"+element;
        })
    );   //[ '$100', '$200', '$300', '$400', '$500' ]
*/

/*
    filter()

console.log(
    [100,200,300,400,500].filter((element,index)=>{
        return element>=300;
    })
);   //[ 300, 400, 500 ]
*/

/*
    //[1,2,3,4,5]   => [100,200]
    console.log(
        [1,2,3,4,5].filter((element,index)=>{
            return element<=2;
        }).map((element,index)=>{
            return element*100;
        })
    );   //[ 100, 200 ]
*/

/*
//reduce()
//it is used to find the summation of array elements
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);    //15
*/

/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*1000;
        }).filter((element,index)=>{
            return element<1000;
        }).reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );   //Error   //TypeError: Reduce of empty array with no initial value
*/

/*
    //reduceRight()
    console.log(
        ["ReactJS","to","Welcome"].reduceRight((firstElement,nextElement)=>{
            return firstElement+" "+nextElement;
        })
    );   //Welcome to ReactJS
*/

/*
//some()
console.log(
    [10,20,30,40,50].some((element,index,array)=>{
        return element<50;
    })
);
*/

/*
//every()
console.log(
    [1,2,3,4,5].every((element,index)=>{
        return element<5;
    })
);
*/

/*
    //fill()
    let arr = [1,2,3,4,5];
    console.log( arr.fill(100) );    //[ 100, 100, 100, 100, 100 ]
    console.log( arr.fill(200,1) );  //[ 100, 200, 200, 200, 200 ]
    console.log( arr.fill(300,1,3)); //[ 100, 300, 300, 200, 200 ]
    console.log( arr.fill(400,3,4) );//[ 100, 400, 300, 200, 200 ]
*/

/*
    //length
    //it is used to know the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);                            //10
    console.log(arr[0],arr[4],arr[9],arr[10],arr[-1]);  //10 50 100 undefined undefined
    arr.length = 5;
    console.log(arr);                                   //[ 10, 20, 30, 40, 50 ]
    console.log(arr[0],arr[4],arr[9]);                  //10 50 undefined
*/

/*
    //delete
    let arr = ["Angular10","ReactJS","AngularJS","NodeJS","VueJS"];
    delete arr[2];
    console.log(arr);       //[ 'Angular10', 'ReactJS', <1 empty item>, 'NodeJS', 'VueJS' ]
    console.log(arr.length);//5
    console.log(arr[2]);    //undefined
*/

/*
    //push()     (add at end of array)
    //unshift()  (add at starting)
    //pop()      (remove at end)
    //shift()    (remove from begining)
    let arr = [20,30,40];
    console.log(arr);         //[ 20, 30, 40 ]
    arr.push(50);
    console.log(arr);         //[ 20, 30, 40, 50 ]
    arr.unshift(10);
    console.log(arr);         //[ 10, 20, 30, 40, 50 ]
    arr.pop();
    console.log(arr);         //[ 10, 20, 30, 40 ]
    arr.shift();
    console.log(arr);         //[ 20, 30, 40 ]
*/

/*
    //splice()
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.splice(4,2);
    console.log(arr);           //[10,20,30,40,70,80,90,100]
    arr.splice(4,1);
    console.log(arr);           //[10,20,30,40,80,90,100]
    arr.splice(arr.length-1);   
    console.log(arr);           //[ 10, 20, 30, 40, 80, 90 ]
    arr.splice(4);
    console.log(arr);           //[ 10, 20, 30, 40 ]
    arr.splice(1,1);
    console.log(arr);           //[ 10, 30, 40 ]

    arr.splice(1,0,20);
    console.log(arr);           //[ 10, 20, 30, 40 ]

    arr.splice(3,1,40);
    console.log(arr);           //[ 10, 20, 30, 40 ]

    arr.splice(4,0,50,60,70,80,90,100);    
    console.log(arr);           //[10,20,30,40,70,80,90,100]

    arr.splice(3,0,"Krishna");
    console.log(arr);
*/

/*
    //slice()
    let arr = [0,1,2,3,4,5,6,7,8,9,10];
    console.log(arr.slice(5,8));   //[ 5, 6, 7 ]
    let arr1 = [10,100,1000,10000,20,200,2000,20000];
    console.log(arr1.slice(3,5));    //[ 10000, 20 ]
    console.log(arr1.slice(5,6));     //[ 200 ]
*/

/*
    //findIndex()
    //findIndex() function used to know the index of a particular element in array
    let arr = [10,20,30,40,50];
    console.log(
        arr.findIndex((element,index)=>{
            return element === 30;
        })
    );   //2

    console.log(
        arr.findIndex((element,index)=>{
            return element === 50;
        })
    );   //4

    arr.splice(arr.findIndex((element,index)=>{
        return element===20;
    }),1);
    console.log(arr);    //[ 10, 30, 40, 50 ]

    arr.splice(arr.findIndex((element,index)=>{
        return element===40;
    }),1);
    console.log(arr);    //[ 10, 30, 50 ]


    let arr1 = [{"p_id":111,"p_name":"p_one","p_cost":10000},
                {"p_id":222,"p_name":"p_two","p_cost":20000},
                {"p_id":333,"p_name":"p_three","p_cost":30000},
                {"p_id":444,"p_name":"p_four","p_cost":40000},
                {"p_id":555,"p_name":"p_five","p_cost":50000}];
    arr1.splice(arr1.findIndex((element,index)=>{
        return element.p_id === 333
    }),1);
    console.log(arr1);

    arr1.splice(arr1.findIndex((element,index)=>{
        return element.p_id === 555;
    }),1);
    console.log(arr1);



let arr = [10,20,30,40,50];
let i = arr.findIndex((element,index)=>{
    return element === 60;
});
console.log(i);   //-1
arr.splice(i,1);
console.log(arr);    //[ 10, 20, 30, 40 ]
*/

/*
    //includes()
    let arr = [10,20,30,40,50];
    console.log( arr.includes(30) );    //true
    console.log( arr.includes(3) );     //false
    console.log( arr.includes(30,3) );  //false
*/

/*
    //copyWithin()
    let arr1 = [1,2,3,4,5,6,7,8,9,10];
    arr1.copyWithin(3);
    console.log(arr1);    //[1,2,3,1,2,3,4,5,6,7]


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(5);
    console.log(arr2);   //[10,20,30,40,50,10,20,30,40,50]


    let arr3 = [10,100,20,1000,200,3456,67,123];
    arr3.copyWithin(10);
    console.log(arr3);


    let arr4 = [0,1,2,3,4,5,6,7,8,9,10];
    arr4.copyWithin(2,5);
    console.log(arr4);    //[0,1,5,6,7,8,9,10,8, 9,10]

    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(5,8);
    console.log(arr5);    //[10,20,30,40,50,90,100,80,90,100];


    let arr6 = [0,1,2,3,4,5,6,7,8,9,10];
    arr6.copyWithin(2,6,9);
    console.log(arr6);       //[0,1,6,7,8,5,6,7,8,9,10]
*/

/*
//find()
let arr = [10,20,30,40,50];
console.log(
    arr.find((element,index)=>{
        return element == 2;
    })
);   //undefined
*/

/*
    //sort()
    //ascending order or decending order
    let arr1 = [10,50,20,40,30];
    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );    //[ 10, 20, 30, 40, 50 ]
    console.log(
        arr1.sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );    //[ 50, 40, 30, 20, 10 ]

    let arr2 = [10,4,2,100,3,6,7,1];
    console.log( arr2.sort((arg1,arg2)=>{
        return arg2-arg1;
    })[1] );   //10

    console.log(
        arr2.sort((arg1,arg2)=>{
            return arg1-arg2
        })[1]
    );   //2
*/

/*
    //indexOf()
    //indexOf() won't created id's to repeated elements
    let arr = [10,20,30,10,20,10,40];
    arr.forEach((element,index)=>{
        console.log( arr.indexOf(element) );   
    });   //0 1 2 0 1 0 6


    let arr1 = [90,10,20,30,90,100,40,60,10];
    arr1.forEach((element,index)=>{
        console.log(arr1.indexOf(element));
    });  //0 1 2 3 0 5 6 7 1


    let arr3 = [10,20,30,10,20,30];
    console.log(
        arr3.filter((element,index)=>{
            return arr3.indexOf(element) === index;
        })
    );
*/

/*
    //flat()
    let arr = [1,[2],[3],4];
    console.log( arr.flat(1) );   //[ 1, 2, 3, 4 ]

    let arr1 = [1,[[[[[[[[[[2]]]]]]]]]],[[[[[[3]]]]]],[4]];
    console.log( arr1.flat(Infinity).reduce((a,b)=>{
        return a+b;
    }) );   //10
*/

/*
    let arr1 = [1,2,3];
    let arr2 = ["one","two","three"];
    //[ [1,"one"], [2,"two"], [3,"three"] ]
    console.log(
        arr1.map((ele,idx)=>{
            return [ele,arr2[idx]];
        })
    );   //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
*/

/*
    let arr1 = [10,20,30];
    //[100,200,300]
    console.log(
        arr1.map((element,index)=>{
            return element*10;
        })
    );
    //[[100],[200],[300]]
    console.log(
        arr1.map((element,index)=>{
            return [element*10]
        })
    );

    //[[100,0],[200,1],[300,2]]
    console.log(
        arr1.map((element,index)=>{
            return [element*10,index]
        })
    );



let arr1 = [10,20,30];
//[10,20,30] ==> [100,200,300]  ==> [[100,0],[200,1],[300,2]] ==> [100,201,302] => 603
const def = (firstElement,nextElement)=>{
    return firstElement+nextElement;
};
console.log(
    arr1.map((element,index)=>{
        return [element*10,index];
    }).map((element,index)=>{
        return element.reduce(def)
    }).reduce(def)
);
*/

/*
    let arr1 = ["Angular","ReactJS","VueJS"];
    let arr2 = ["NodeJS","Deno","ServerLess"];
    console.log(
        arr1.flatMap((element,index)=>{
            return [element,arr2[index]]
        })
    );  
        //["Angular","NodeJS","ReactJS","Deno","VueJS","ServerLess"]
*/

/*
    //reverse()
    console.log(
        [10,20,30,40,50].reverse()
    );    //[ 50, 40, 30, 20, 10 ]

    console.log(
        ["Angular","NodeJS","ReactJS"].reverse()
    );  //[ 'ReactJS', 'NodeJS', 'Angular' ]

    console.log(
        Array.from("Hello").reverse().join("")
    );     //olleH   


    console.log(
        Array.from("Deno").reverse().join("*")
    );


    console.log(
        ["Angular","ReactJS","VueJS"].map(element=>{
            return Array.from(element).reverse().join("");
        }).reverse()
    );
    //[ 'SJeuV', 'SJtcaeR', 'ralugnA' ]

*/

/*
    console.log(
        "Hello ".repeat(5)
    );
*/

/*
    let str = " welcome ";
    console.log( str.length );              //9
    console.log( str.trim().length );       //7         //ES1
    console.log( str.trimStart().length );  //8         //ES11
    console.log( str.trimEnd().length );    //8         //ES11
*/

/*
    let str = "Hello";
    console.log( str.padStart(20,"*") );    //ES11
    console.log( str.padEnd(20,"#"));       //ES11
    console.log( str.padStart(10,"#").padEnd(15,"#") );
*/

/*
    //toString()
    //convert  array ==> string


    console.log(
        ["H","e","l","l","o"].toString()
    );   //H,e,l,l,o

    console.log(
        ["H","e","l","l","o"].join("")
    );    //Hello  

    console.log(
        ["R","E","A","C","T"].toString().replace(/,/g,"")
    );

    //R,E,A,C,T
    //RE,A,C,T
    //REACT
*/

/*
    console.log(
        Array.from("Deno").toString().replace(",","").replace(",","").replace(",","")
    );

    //[ 'D', 'e', 'n', 'o' ]
    //D,e,n,o
    //De,n,
    //Den,o
    //Deno

    console.log(
        Array.from("Deno").toString().replace(/,/g,"")
    );
    //Deno
*/

/*
    console.log( [10,20,30,10,20].lastIndexOf(10) );    //3
    console.log( [10,20,30,10,20].lastIndexOf(20) );    //4
    console.log( [10,20,30,10,20].lastIndexOf(1) );     //-1
    console.log( [10,20,30,10,20].lastIndexOf(30) );    //2
*/

//console.log( "welcome to reactjs".split(" ") );    //[ 'welcome', 'to', 'reactjs' ]

/*
    console.log( "Hello".substr(1,3) );    //ell
    console.log( "welcome to reactjs".substr(0,7) );        //welcome
    console.log( "welcome to reactjs".substr(8,2) );        //to
    console.log( "welcome to reactjs".substr(11) );         //reactjs
*/

console.log("welcome to reactjs".substring(0, 8)); //welcome
console.log("welcome to reactjs".substring(8, 10)); //to
console.log("welcome to reactjs".substring(11, 18)); //reactjs
