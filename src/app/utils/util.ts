export class Utils{
  options = [{ id: "1", valor: "Fecha" },
  { id: "2", valor: "Categoria" },
  { id: "3", valor: "Estado" }]
  categorias = [{ id: "1", name: "Basura" },
  { id: "2", name: "Alumbrado" },
  { id: "3", name: "Caminos" },
  { id: "4", name: "Seguridad" },
  { id: "5", name: "Otros" }]
  estados = [{ id: "1", name: "pendiente" },
  { id: "2", name: "aceptado" },
  { id: "3", name: "rechazado" },
  { id: "4", name: "en proceso" }]

  Utils(){

  }
  getOptions(){
    return this.options;
  }
  getCategorias(){
    return this.categorias;
  }
  getEstados(){
    return this.estados
  }

}
