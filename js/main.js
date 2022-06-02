

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let txNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";//Value es el valor
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Name")

/* let campos = document.getElementsByClassName("campo");
campos[0].value = "Leche descremada deslactosada light-Agua";

console.log(campos[0].value);
console.log(campos);

for (let i=0; i<campos.length; i++){
    campos [i].getElementsByClassName.border="red thin solid;"
}//for

campos.forEach(element => {

}   )

let spans = document.getElementsByTagName("span");
for (let i=0; i<spans.length ++i);
console.log(span[i].textContent);
*/
let tabla= document.getElementById("tablalistaCompras");
let cuerpoTabla = table.getElementsByTagName("tbody");

/*cuerpoTabla[0].innerHTML = `<tr>
              <th scope="row">1</th>
              <td>Leche descremada</td>
              <td>3</td>
              <td>23.00</td>
            </tr> `;
*/
            let Agregar = doc.getElementById ("btnAgregar");
            Agregar.addEventListener ("click", (event)=>
  let precio = Math.random() * 50;
  let tmp = `<tr>
  <th scope="row">1</th>
  <td>${txtNombre.value}</td>
  <td>${txtNombre.value}</td>
  <td>${precio}</td>
</tr> `
console.log(tmp)
cuerpoTabla[0].innerHTML += tmp;
txtNumber.value="";
txtNumber.value="";
txtNumber.focus();

            
            //console.log("click en el botón agregar", event);
            // Agregar.onclick