let test = "Hola Mundo desde el DOM";
console.log(test);

/* Fecha del footer */
let tiempo = document.getElementById("tiempo");
let date = new Date().getFullYear();
tiempo.innerHTML = date;

/* Objeto Project */
class Project {
	constructor(lugar, tipo, titulo, tecnologia, descripcion, link) {
		this.lugar = lugar;
		this.tipo = tipo;
		this.titulo = titulo;
		this.tecnologia = tecnologia;
		this.descripcion = descripcion;
		this.link = link;
	}
}

let project = new Project(
	"UTN - FRGP - Técnicatura en Programación",
	"Software",
	"- S.A.S.A",
	"C - C++",
	"Sistema de Administración de Stock Almacén, aplicación en consola donde se realizan Altas Bajas y Modificación de inventario",
	"www.google.com"
);

console.log(project);

let tipeo = new Typed(".tipeo", {
	string: ["Maximiliano", "Desarrollador", "Programador", "Dev"],
});
