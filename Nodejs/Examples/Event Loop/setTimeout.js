const greet = () => {
    console.log("Hai Sneha!!");
}

const display = () => {
    let timeout = setTimeout(greet, 2000);
}
display();