class Texto {
	constructor(valorTexto, x, y) {
		this.valor = valorTexto
		this.x = x
		this.y = y
	}
	dibujar() {
		rootContext.font = "20px Arial"
		rootContext.fillStyle = "white"
		rootContext.textAlign = "left"
		rootContext.fillText(this.valor, this.x, this.y)
	}
}