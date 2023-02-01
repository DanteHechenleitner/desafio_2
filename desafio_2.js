import fs from "fs";


class ProductManager {
  constructor(path){
    this.productos = [];
    this.path = path;
    }

    DB(){
        if(fs.existsSync(this.path)){
        this.productos = JSON.parse(fs.readFileSync(this.path))
        }
    }

    crearID(){
        return this.productos.length;
    }
    addProduct(titulo, descripcion, precio, img, codigo, stock){
        this.DB()
        const isInArray = this.productos.some(product => product.code === codigo)
        if(isInArray === false && titulo && descripcion && precio && img && stock){
        this.productos.push({
            id: this.crearID,
            titulo: titulo,
            descripcion: descripcion,
            precio: precio,
            img: img,
            codigo: codigo,
            stock: stock
        });
        fs.writeFileSync(this.path, JSON.stringify(this.productos))
        return "Producto ingresado"
        }else{
        return "Este producto ya existe o faltan datos"
        }
    }
    getProducts(){
        return this.productos
    }
    getProductById(id){
        this.DB()
        const productFound = this.productos.find(product => product.id === id)
        if (productFound){
        return productFound
        }else{
        return "Este producto no existe"
        }
    }


}

