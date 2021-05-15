let test = "Desde el DOM";

console.log(test);

/* Fecha del footer */
let tiempo = document.getElementById("tiempo");
let date = new Date().getFullYear();
tiempo.innerHTML = date;
