import CL_Articulo from "./CL_Articulo.js";
import CL_Tienda from "./CL_Tienda.js";


let articulo1 = new CL_Articulo(888, 10, 15),
 articulo2 = new CL_Articulo(777, 20, 25),
articulo3 = new CL_Articulo(999, 15, 25),
articulo4= new CL_Articulo(666, 25, 35),
articulo5= new CL_Articulo(111, 50, 70),
articulo6= new CL_Articulo(333, 40, 50),
articulo7= new CL_Articulo(444, 80, 100),
articulo8= new CL_Articulo(222, 5, 10);

let tiendaInstancia = new CL_tiendaInstancia();
tiendaInstancia.procesarArticulo(articulo1),
tiendaInstancia.procesarArticulo(articulo2),
tiendaInstancia.procesarArticulo(articulo3),
tiendaInstancia.procesarArticulo(articulo4),
tiendaInstancia.procesarArticulo(articulo5),
tiendaInstancia.procesarArticulo(articulo6),
tiendaInstancia.procesarArticulo(articulo7),
tiendaInstancia.procesarArticulo(articulo8); 
salida = document.getElementById("salida");
salida.innerHTML = `
<br> Ganancia total: ${tiendaInstancia.gananciaTotal()}<br>
<br> Codigo del articulo con mayor precio ${tiendaInstancia.articuloMayorPrecio()}

`;
