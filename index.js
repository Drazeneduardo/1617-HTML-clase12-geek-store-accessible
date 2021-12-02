const menuDropdown = document.getElementById("menuDropdown");
const heart = document.getElementsByClassName("heart"); //hay muchos corazones. No nos conviene el id en este caso!
// lo que vamos a repetir muchas veces, nos lo podemos guardar
//*Para la cart:
const total = document.getElementById("total");
const buyBtn = document.getElementsByClassName("buyBtn");

const hasClass = menuDropdown.classList;
const dropdown = () => {
  if (hasClass.contains("hide")) {
    hasClass.remove("hide");
  } else {
    hasClass.add("hide");
  }
};

// //*La forma mas larga del mundo:
// const dropdown = () =>{
//     if(document.getElementById("menuDropdown").classList.contains("hide")){
//         console.log('oh mis ojos')
//     }
// }

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}
//! MIERCOLES 1/12
//* Vamos a hacer el cart
//? Como hacerlo: funcion cart es una iffe!

(function () {
    total.innerHTML = 0
    //podemos usar el + para convertir a numero, pero es un poco mas limitado y no permite parametros
    let acumulador = +total.innerHTML;
    //console.log(typeof acumulador)

    for(let j = 0; j < buyBtn.length; j++){
        // esto es un callback: el primer param es qué tipo de evento va a pasar (un click), el segundo, es que va a hacer, que en este caso es una funcion
        buyBtn[j].addEventListener("click", function(){ //acá guardo el valor que voy a querer sumarle, el valor del producto del botón que apreté
            let newProd = +buyBtn[j].innerHTML //va a tomar el precio que esta en HTML y convertirlo en numero
            acumulador = acumulador + newProd //acumulador va a mantener el valor con lo que hayamos sumado, y va a sumar lo nuevo una y otra vez
            total.innerHTML = acumulador
        })
    }
})();
