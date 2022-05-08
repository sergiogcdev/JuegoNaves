class TextoPuntuacionMaxima {
	constructor(x, y) {
		this.puntos = 0
		this.x = x
		this.y = y
		this.valor = "Max: " + this.puntos
		this.textoPuntuacionMaxima = new Texto(this.valor, this.x, this.y)
	}
	actualizar() {
		this.valor = "Max: " + this.puntos
	}
	dibujar() {
		rootContext.font = "20px Arial"
		rootContext.fillStyle = "white"
		rootContext.textAlign = "left"
		rootContext.fillText(this.valor, this.x, this.y)
	}
}