const f1=()=>{
console.log("Function 1 ");
}

const f2=()=>{
    console.log("Function 2");
   
}

const f3=()=>{
    console.log("Function 3");
    f1();
    f2();
}
f3();