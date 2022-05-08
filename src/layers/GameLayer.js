class GameLayer extends Layer {
	constructor() {
		super()
		this.iniciar()
	}
	iniciar() {
		reproducirMusica()
		this.jugador = new Jugador(50, 50)
		this.fondo = new Fondo(imagenes.fondo, 480 * 0.5, 320 * 0.5)
		this.disparos = []
		this.enemigos = []
		this.enemigos.push(new Enemigo(Math.random() * (600 - 500) + 500, Math.random() * (300 - 60) + 60))
		this.marcador = new Fondo(imagenes.icono_puntos, 480*0.85, 320*0.05)
		this.textoPuntos = new Texto(0, 480*0.9, 320*0.07)
	}
	procesarControles() {
		//Shoot
		if( controles.disparo ) {
			var disparo = this.jugador.disparar()
			if(disparo != null) {
				this.disparos.push(disparo)
			}
		}

		//X Axis
		if(controles.moverX > 0) {
			this.jugador.moverX(1)
		}
		else if(controles.moverX < 0) {
			this.jugador.moverX(-1)
		}
		else {
			this.jugador.moverX(0)
		}

		//Y axis
		if(controles.moverY > 0) {
			this.jugador.moverY(-1)
		}
		else if(controles.moverY < 0) {
			this.jugador.moverY(1)
		}
		else {
			this.jugador.moverY(0)
		}
	}
	actualizar() {
		if(this.iteracionEnemigos == null) {
			this.iteracionEnemigos = 0
		}

		this.iteracionEnemigos -= 1

		if (this.iteracionEnemigos < 0) {
			var rX = Math.random() * (600 - 500) + 500
			var rY = Math.random() * (300 - 60) + 60
			this.enemigos.push(new Enemigo(rX, rY))
			this.iteracionEnemigos = 100
		}

		this.jugador.actualizar()
		for (var i = 0; i < this.enemigos.length; i++) {
			this.enemigos[i].actualizar()
		}
		for (var i = 0; i < this.disparos.length; i++) {
			this.disparos[i].actualizar()
		}
		for (var i = 0; i < this.enemigos.length; i++) {
			if(this.jugador.colisiona(this.enemigos[i])) {
				this.iniciar()
			}
		}
		for (var i = 0; i < this.disparos.length; i++) {
			for (var j = 0; j < this.enemigos.length; j++) {
				if(this.disparos[i] != null 
					&& this.enemigos[j] != null
					&& this.disparos[i].colisiona(this.enemigos[j])) {
						this.disparos.splice(i, 1)
						i-=1
						this.enemigos.splice(j, 1)
						j-=1
						reproducirSonidoEfecto( efectos.explosion )
						this.textoPuntos.valor += 5
						if (this.textoPuntos.valor > record.puntos){
							record.puntos = this.textoPuntos.valor
						}
				}
			}
		}
	}
	dibujar() {
		this.fondo.dibujar()
		for (var i = 0; i < this.disparos.length; i++) {
			this.disparos[i].dibujar()
		}
		this.jugador.dibujar()
		for (var i = 0; i < this.enemigos.length; i++) {
			this.enemigos[i].dibujar()
		}
		this.marcador.dibujar()
		this.textoPuntos.dibujar()
		record.dibujar()
	}
}