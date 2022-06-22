f1 = () => {
    console.log("Macro Task")
}
f2 = () => {
    console.log("JS Function-2")
}
f3 = () => {
    console.log("JS Function-3");

    setTimeout(f1, 0);
    new Promise((resolve, reject) =>
        resolve('Micro Task'))
        .then(resolve => console.log(resolve))

    f2();

}
f3();