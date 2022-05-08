class Modelo{
	constructor(rutaImagen, x, y) {
		this.imagen = cache[rutaImagen]
		this.x = x
		this.y = y
		this.ancho = this.imagen.width
		this.alto = this.imagen.height
	}

	dibujar() {
		rootContext.drawImage( this.imagen, 
			this.x - this.ancho / 2, this.y - this.alto / 2 )
	}

	colisiona(modelo) {
		var isCollision = false

		if(modelo.x - modelo.ancho/2 <= this.x + this.ancho/2
			&& modelo.x + modelo.ancho/2 >= this.x - this.ancho/2
			&& modelo.y - modelo.alto/2 <= this.y + this.alto/2
			&& modelo.y + modelo.alto/2 >= this.y - this.alto/2)
		{
			isCollision = true
		}

		return isCollision

	}

	dibujarEscalado() {
		rootContext.drawImage( this.imagen, 
			this.x - this.ancho / 2, this.y - this.alto / 2, this.imagen.width, this.imagen.height,
			0, 0, rootElement.width, rootElement.height )
	}

}