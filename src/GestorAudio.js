var musicaFondo = new Audio("res/musica_ambiente.mp3")
musicaFondo.loop = true

var efectos = {
	disparo: "res/efecto_disparo.mp3",
	explosion: "res/efecto_explosion.mp3"
}

function reproducirMusica() {
	musicaFondo.play()
}

function pararMusica() {
	musicaFondo.stop()
}

function reproducirSonidoEfecto( srcEfecto ) {
	let sonido = new Audio( srcEfecto )
	sonido.play()
}