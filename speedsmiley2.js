

let nbSmileys = 9;
let nbEmoticones = 5;
let nbSmilingSmileys = 0;

let stateSmileys = [];
let emotiSmile = [];
let emotiSad = [];


alert ("C'est vraiment le rush dans les hôpitaux... Aidez-les les soignants à rendre le smile aux patients !");


var myVar = setInterval(looseSmile, 600);
/*var myVar = setInterval(changeSmile, 2000);
*/
/*var myVar = setInterval(checkSmile, 100);*/


function onLoad(){
	for (var i = 0; i < nbSmileys; i++) {
		stateSmileys[i] = false;
		/*document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;*/
	}

	for (var i = 0; i < nbEmoticones; i++) {
		emotiSmile[i] = new Image();
		emotiSmile[i].src = 'img/smile_' + (i+1) +'.png';

		emotiSad[i] = new Image();
		emotiSad[i].src = 'img/sad_' + (i+1) +'.png';
	}

	console.log(emotiSad);
	console.log(emotiSmile);

/*	imgSmile1 = new Image();
	imgSmile1.src="img/smile_1.png";

	imgSad1 = new Image();
	imgSad1.src="img/sad_1.png";

	imgSmile2 = new Image();
	imgSmile2.src="img/smile_2.png";

	imgSad2 = new Image();
	imgSad2.src="img/sad_2.png";	

	imgSmile3 = new Image();
	imgSmile3.src="img/smile_3.png";

	imgSad3 = new Image();
	imgSad3.src="img/sad_3.png";

	imgSmile4 = new Image();
	imgSmile4.src="img/smile_4.png";

	imgSad4 = new Image();
	imgSad4.src="img/sad_4.png";		

	imgSmile5 = new Image();
	imgSmile5.src="img/smile_5.png";

	imgSad5 = new Image();
	imgSad5.src="img/sad_5.png";*/

}


function changeSmile(){
	let ID = Math.floor((Math.random() * nbEmoticones));
	console.log(ID)
	console.log(emotiSmile[ID].src)
	document.getElementById("smiley1").src = emotiSmile[ID].src;
}


function giveSmile(ID){
	if (nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === false)	{
		let smileyID = 'smiley'+ ID

		let emotiID = Math.floor((Math.random() * nbEmoticones));
		document.getElementById(smileyID).src = emotiSmile[emotiID].src;

		nbSmilingSmileys += 1 ;
		stateSmileys[ID-1] = true;
		
		document.getElementById("message").innerHTML = nbSmilingSmileys + '/' + nbSmileys;	
	}
	if (nbSmilingSmileys === nbSmileys){
	/*document.getElementById("message").innerHTML = "";*/		
	document.getElementById("message2").innerHTML = "Bravo, mais ce n'était que la première vague, rendez-vous au prochain niveau !";
	}
}


function looseSmile(){
	let ID = Math.floor((Math.random() * nbSmileys) + 1);
	let smileyToUnsmile = 'smiley'+ ID;

	if (nbSmilingSmileys > 0 && nbSmilingSmileys < nbSmileys && stateSmileys[ID-1] === true){
		nbSmilingSmileys -= 1 ;
		stateSmileys[ID-1] = false;

		let emotiID = Math.floor((Math.random() * nbEmoticones));
		document.getElementById(smileyToUnsmile).src = emotiSad[emotiID].src;

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