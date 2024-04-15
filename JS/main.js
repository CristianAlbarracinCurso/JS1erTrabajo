//declaraciond e varibles y array de productos
let productosnombre = "";
let productosprecio = 0;
let Preciofinal = 0 ;
carrito = [];
const productos = 
[
  {
    nombre: "Memoria Ram DDR4 8GB",
    precio: 8000,
  },
  {
    nombre: "Memoria Ram DDR4 16GB",
    precio: 15000,
  },
  {
    nombre: "Disco SSD 120",
    precio: 10000,
  },
  {
    nombre: "Disco SSD 240",
    precio: 15000,
  },
  {
    nombre: "Disco SSD 480",
    precio: 20000,
  },
  {
    nombre: "MEMORIA RAM DDR5 8GB",
    precio: 16000,
  },
  {
    nombre: "MEMORIA RAM DDR5 16GB",
    precio: 23000,
  },
  {
    nombre: "Disco HD 1TB",
    precio: 20000,
  },
  {
    nombre: "Gabinete KIT",
    precio: 36000,
  }
];
//pregunta si quiere comprar 
let seleccion = prompt("Desea comprar algo 1-Si o 2-No");
//usando while exigimos que la respuesta sea 1 o 2.
while (seleccion != "1" && seleccion != "2") {
  alert("Por favor ingrese una de las opciones, 1 o 2");
  seleccion = prompt("hola desea comprar algo 1-Si o 2-No");
}
//cuando la respuesta es 1-si, da aviso de seleccionar un producto de la lista siguiente
//si es 2-no, lo despedimos y se corta el programa. En caso de compra para a calcularlo
if (seleccion == "1") {
  alert("Seleccione un producto de la siguiente lista");                       
} else if (seleccion == "2") {
  alert("gracias por su visita!");
}
//cuando la respuesta sea 1 se le pide ingresar el producto de las opciones del array productos
//tambien agregamos cantidad de unidades
//con el metodo push se agrega al array vacio carrito las unidades y productos elegidos.
while (seleccion == "1") {
  alert(ListaProductos (productos));
  let producto = prompt("agrega un producto a tu carrito!");
  let precio = 0;
    //Verificamos si el dato ingresado esta dentro de los productos
    if (producto == null || producto < 0 || producto > productos.length)
    {
      alert("No se encuentra el codigo de producto seleccionado");
    }
    else  
    {
      //consultamos cuantas unidades va a llevar
      let unidades = parseInt(prompt("cuantas unidades de ese producto queres llevar"));
      //verificamos positividad de unidades
        if (unidades > 0)  
        {
          carrito.push({ productosnombre : productos[producto].nombre , unidades, productosprecio : productos[producto].precio });
          console.log(carrito);
        } 
        else 
        {
          alert("las unidades deben ser mayores a cero");
          continue;
        }    
    }
  //estos es por si el uduario eligue un porducto que no esta disponible, pasar por el elsediciendo que no se cuenta con ese prodcuto
  //le preguntar si quiere seguir comprando y arancar de nuevo el ciclo
  seleccion = prompt("Quiere seguir comprando 1-Si o 2-No");
  //si el usuario elege la opcion de no seguir comprando
  if (seleccion == "2") 
  {
    alert("Gracias por si compra \nA continuacion le mostraremos el detalle de su compra");
    //recorremos el array con forEach para que vea uno a uno los pproductos del array carrito
    for (let i = 0; i<carrito.length; i++)
    {
      //luego en consola mostramos el producto  unidades y el total
      alert("Producto: " + carrito[i].productosnombre + "\n Unidades: " + carrito[i].unidades +
      "\n \nTotal a pagar por este producto: " + carrito[i].productosprecio );
      console.log (carrito[i].productosnombre)
    };
    //al final se calcula el total de la compra
    alert("El Valor final de la compra es: $ "+ totalcompra(carrito))
    break;
  }
}
//funcion para listar los productos
function ListaProductos (productos)
{
  let todosLosProductos = "Seleccione las siguientes opciones"
  for (let i = 0; i<productos.length; i++)
  {
    //Use el codigo de un ejemplo de la clase pero tenia otra opcion que funcionaba que era mas fea
    //todosLosProductos = todosLosProductos + productos[i].nombre + " " + "$"  + productos[i].precio+ "\n "
    todosLosProductos += `\n ${i} - ${productos[i].nombre} - precio: $${productos[i].precio}`   
  }
  return todosLosProductos
}
//funcion para caltuclar el total de la venta
function totalcompra(carrito) 
{
  let totalfinal=0
  for (let i = 0; i<carrito.length; i++)
  {
    totalfinal+= (carrito[i].productosprecio * carrito[i].unidades)
    console.log (totalfinal)
  }
return totalfinal
}
