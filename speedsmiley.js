

let nbSmileys = 6;
let nbSmilingSmileys = 0;
let stateSmileys = [];

/*
alert ("C'est le confinement, les Smileys ne sont pas contents... Voulez-vous les aider à retrouver le sourire ?");
*/

var myVar = setInterval(looseSmile, 500);
var myVar = setInterval(checkSmile, 100);


function onLoad(){
	for (var i = 0; i < nbSmileys; i++) {
		stateSmileys[i] = false;
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;
}


}

function giveSmile(ID){
	if (nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === false)	{
		let smileyID = 'smiley'+ ID
		document.getElementById(smileyID).src = "img/smiley.png";

		nbSmilingSmileys += 1 ;
		stateSmileys[ID-1] = true;
		
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;
	}
}


function looseSmile(){
	let ID = Math.floor((Math.random() * nbSmileys) + 1);
	let smileyToUnsmile = 'smiley'+ ID;

	if (nbSmilingSmileys > 0 && nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === true){
		nbSmilingSmileys -= 1 ;
		stateSmileys[ID-1] = false;

		document.getElementById(smileyToUnsmile).src = "img/smiley_angry.jpg";
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;	
	}
}


function checkSmile(){
	if (nbSmilingSmileys === nbSmileys){
		document.getElementById("message").innerHTML = "";		
		document.getElementById("messageBravo").innerHTML = "YOU WIN !";
	}
}