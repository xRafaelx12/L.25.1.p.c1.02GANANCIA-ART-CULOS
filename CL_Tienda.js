export default class CL_Tienda {
    constructor(){
        this.acGanacia = 0;
        this.mayorPrecio = 0;
        this.codigoMayorPrecio;
    }
    gananciaTotal(){
        return this.acGanacia;
    }
    articuloMayorPrecio(){
        return this.codigoMayorPrecio;
    }

    procesarArticulo(articulo){
        this.acGanacia+=(articulo.precioVenta-articulo.costo);
          
        if(articulo.precioVenta > this.mayorPrecio){
            this.mayorPrecio = articulo.precioVenta;
            this.codigoMayorPrecio = articulo.codigo;
    }
}

}
