var rootElement = document.getElementById('canvas')
var rootContext = rootElement.getContext('2d')
var gameLayer, puntuacionMaxima
var controles = {}

function iniciarJuego() {
	record = new TextoPuntuacionMaxima(25*0.85, 320*0.07)
	gameLayer = new GameLayer()
	setInterval(loop, 1000 / 50)
}

function loop() {
	record.actualizar()
	gameLayer.actualizar()
	gameLayer.procesarControles()
	gameLayer.dibujar()
}

window.addEventListener('load', resize, false)

function resize() {
	console.log('Resizing...')
	var escaladoAncho = parseFloat(window.innerWidth / rootElement.width)
	var escaladoAlto = parseFloat(window.innerHeight / rootElement.height)
	var escaladoMinimo = Math.min(escaladoAncho, escaladoAlto)
	rootElement.width = rootElement.width * escaladoMinimo
	rootElement.height = rootElement.height * escaladoMinimo

	rootContext.scale(escaladoMinimo, escaladoMinimo)

}