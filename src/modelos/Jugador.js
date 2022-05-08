class Jugador extends Modelo {
	constructor(x, y) {
		super(imagenes.jugador, x, y)
		this.vx = 0
		this.vy = 0
		this.cadenciaDisparo = 13
		this.tiempoDisparo = 0
	}
	actualizar() {
		if(this.tiempoDisparo > 0) {
			this.tiempoDisparo -= 1
		}
		this.x = this.x + this.vx
		this.y = this.y + this.vy
	}
	moverX( direccion ) {
		if(this.x + this.ancho/2 < 480 && this.x - this.ancho/2 > 0) {
			this.vx = direccion * 2
		}
		else {
			this.vx = 0
			if(this.x + this.ancho/2 >= 480) {
				this.x -= 2
			}
			if(this.x - this.ancho/2 <= 0) {
				this.x += 2
			}
		}
	}
	moverY( direccion ) {
		if(this.y >= 0 + this.alto/2 && this.y < 320 - this.alto/2) {
			this.vy = direccion * 2
		}
		else {
			this.vy = 0
			if(this.y < 0 + this.alto/2) {
				this.y += 2
			}
			if(this.y > 320 - this.alto/2) {
				this.y -= 2
			}
		}
	}
	disparar() {
		if(this.tiempoDisparo == 0) {
			this.tiempoDisparo = this.cadenciaDisparo
			reproducirSonidoEfecto( efectos.disparo )
			return new DisparoJugador(this.x, this.y)
		}
		else return null
	}
}