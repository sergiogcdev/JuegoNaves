class Enemigo extends Modelo {
	constructor(x, y) {
		super(imagenes.enemigo, x, y)
		this.vx = 1
		this.vy = 0
	}
	actualizar() {
		this.vx = -1
		this.x = this.x + ( this.vx * 2 )
	}
}