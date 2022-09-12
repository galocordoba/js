
class Producto{
    constructor(id,nombre,precio,categoria){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }
}
let productos= [
    new Producto(10,"Adidas Runnig",17000,"zapatillas"),
    new Producto(11,"adidas boost",20000,"zapatillas"),
    new Producto(12,"nike runnig",18000,"buzo"),
];

let cantidad=0;
let seguirComprando =true;
let carrito=[];




let nombre = prompt("Ingrese su nombre!")


do{
    let opcion =Number(prompt( `Bienvenido : ${nombre}  \nQue zapatillas desea comprar \n 1- Adidas runnig \n 2- Adidas boost \n 3- Nike runnig`))
        // cantidad = parseInt(prompt("Cuantas unidades desea comprar?"))
        
    switch(opcion){

         case 1:
        
            alert("Escogiste: Adidas Runnig")
            carrito.push(productos[0]);
            break;

         case 2:
            alert("Escogiste: Adidas boost")
             carrito.push(productos[1]);
            break;

         case 3:
             alert("Escogiste: Nike runnig");
            carrito.push(productos[2])
             break;

        default:
            alert("No se eljio ningun producto ,Vuelva a intentarlo")
            break;
    }





seguirComprando = confirm("¿Desea seguir comprando?")



}while(seguirComprando);

let detalleDeCarrito = carrito.map((el) => `id : ${el.id}  ${el.nombre} x ${cantidad} = $ ${el.precio}`);

const filtrar = (deleteId) => {
    const result = carrito.filter((el) => el.id != deleteId);
    return result;
    
}

let total = carrito.reduce((acc, el) => acc + el.precio  ,0);

let eliminar = prompt(`${detalleDeCarrito.join("\n")} \n Desea eliminar algun producto? si o no`);
while(eliminar != "si" && eliminar != "no"){
    
    alert("Por favor elija si o no")
    eliminar = prompt("Desea eliminar algun producto? si o no")

}
    
        if(eliminar === "si"){
            let productoEliminado = parseInt(prompt(`${detalleDeCarrito.join("\n")} \n Seleccione el id el producto que desea eliminar.`));
           console.log( filtrar(productoEliminado))
        
            // total = filtrar.reduce((acc,el)=> acc +el.precio,0 )
            alert(`El total de su compra es ${total}`)
            
    
        }else(eliminar == "No")
    
        
            alert(`Gracias por su compra su total es de : ${total}`)














