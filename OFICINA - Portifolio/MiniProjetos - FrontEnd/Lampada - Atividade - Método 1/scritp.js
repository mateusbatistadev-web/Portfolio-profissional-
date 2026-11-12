var lampada = document.getElementById("lamp")
var ligado = false

lampada.addEventListener("click",lig_des)
function lig_des() {
    if(ligado == false){
        document.body.style.background="radial-gradient(circle, white 8%, yellow 100%)";
        lampada.src="assets/lamp_on.png";
        lampada.alt="Lâmpada acessa";
        ligado = true;
    }
    else {
        document.body.style.background="radial-gradient(circle, white 8%, black 100%)";
        lampada.src="assets/lamp_off.png";
        lampada.alt="Lâmpada apagada";
        ligado = false;
    }
}