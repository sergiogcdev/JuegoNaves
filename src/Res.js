var cache = []
var imagenes = {
	jugador: 'res/jugador.png',
	fondo: 'res/fondo.png',
	enemigo: 'res/enemigo.png',
	disparo_jugador: 'res/disparo_jugador.png',
	icono_puntos: 'res/icono_puntos.png'
}
var rutasImagenes = Object.values(imagenes)
cargarImagenes(0)

function cargarImagenes(i) {
	cache[rutasImagenes[i]] = new Image()
	cache[rutasImagenes[i]].src = rutasImagenes[i]
	cache[rutasImagenes[i]].onload = function() {
		if(i < rutasImagenes.length-1) {
			i+=1
			cargarImagenes(i)
		}
		else {
			iniciarJuego()
		}
	}
}