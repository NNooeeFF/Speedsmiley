

let nbSmileys = 9;
let nbSmilingSmileys = 0;
let stateSmileys = [];


alert ("C'est le confinement, les smileys ne sont pas contents... Aidez-les à retrouver le sourire !");


var myVar = setInterval(looseSmile, 800);
/*var myVar = setInterval(checkSmile, 100);*/


function onLoad(){
	for (var i = 0; i < nbSmileys; i++) {
		stateSmileys[i] = false;
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;
	}

	imgSmile = new Image();
	imgSmile.src="img/smile_1.png";

	imgSad = new Image();
	imgSad.src="img/sad_1.png";

}

function giveSmile(ID){
	if (nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === false)	{
		let smileyID = 'smiley'+ ID
		document.getElementById(smileyID).src = imgSmile.src;

		nbSmilingSmileys += 1 ;
		stateSmileys[ID-1] = true;
		
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;	
	}
	if (nbSmilingSmileys === nbSmileys){
	document.getElementById("message").innerHTML = "";		
	document.getElementById("message2").innerHTML = "YOU WIN !";
	}
}


function looseSmile(){
	let ID = Math.floor((Math.random() * nbSmileys) + 1);
	let smileyToUnsmile = 'smiley'+ ID;

	if (nbSmilingSmileys > 0 && nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === true){
		nbSmilingSmileys -= 1 ;
		stateSmileys[ID-1] = false;

		document.getElementById(smileyToUnsmile).src = imgSad.src;
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;	
	}
}

/*
function checkSmile(){
	if (nbSmilingSmileys === nbSmileys){
		document.getElementById("message").innerHTML = "";		
		document.getElementById("messageBravo").innerHTML = "YOU WIN !";
	}
}
*/