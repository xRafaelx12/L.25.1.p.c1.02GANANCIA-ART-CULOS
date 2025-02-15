export default class CL_Articulo {
    constructor(codigo, costo, precioVenta) {
        this.codigo = codigo;
        this.costo = costo; 
        this.precioVenta = precioVenta;

    }
    set Codigo(codigo) {
        this._codigo = codigo;
    }
    get Codigo() {
        return this._codigo;
    }
    
    set Costo(costo) {
        this._costo = +costo;
    }

    get Costo() {
        return this._costo;
    }    

    set precioVenta(precioVenta) {
        this._precioVenta = +precioVenta;
    }
    get precioVenta() {
        return this._precioVenta;
    }
    ganancia(){
        return this.Costo - this.precioVenta
    }
}