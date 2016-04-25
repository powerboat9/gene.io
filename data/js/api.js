var canvasElement = document.getElementById("draw")
var canvas = canvasElement.getContext("2d")
var height = canvasElement.height
var width = canvasElement.width

var popUp = document.getElementById("popup")

function center(node) {
    var add = "transform: translate(\"-%50\", \"-%50\"); position: absolute"
    if (node.style) {
        node.style = node.style + "; " + add
    } else {
        node.style = add
    }
}

function popUp() {
    popUp.style.display = "block"
}

var colors = {"#ff0042", "#00ff42", "#0042ff", "#00ffe0"}

function drawArc(sx, sy, ex, ey)
    local centerX = 
    canvas.arc(sx - 

function drawAmino(color, sx, sy, ex, ey) {
    color = colors[color]
    
    

var drawCanvas = document.getElementById("game")
