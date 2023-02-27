	
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	
	
	let image = new Image();
	let image2 = new Image();
	let image10 = new Image();
	let image11 = new Image();

	image.src = '1.gif';
	image2.src = '2.gif';
	image10.src = '10.gif';
	image11.src = '11.gif';
	
	// основные данные
	
	
	let x = 0;	// основное положение x,y
	let y = 0;
	let mx = 820;
	let my = 150;

	let mx1 = 740;
	let my1 = 300;

	let k = 0; // счетчик проходов.
	
	let speed = 1;

	let speed2 = 1;

	let z = 0; // передает состояние движения

// стопает персонажа

	function stop () {

	if (x < -1 || y < -1 || x > 950 || y > 450) {
	x = 0;
	y = 0;
	 }
	}
	
// столкновение возвращает персонажа

	function stolk () {

	if (y - my >= -45 && y-my <= 45 && x-mx >= -45 && x-mx <= 45

	||y - my1 >= -45 && y-my1 <= 45 && x-mx1 >= -45 && x-mx1 <= 45) {



	x = 0;
	y = 0;
	
	k = 0;

	k = k - 1;
	

	speed2 = 1;

	 }
	}
	
	
	function render() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	

	if (z == 1) {
	
	y = y + speed;
	stop();
	 
	
	}
	
	  if (z == 2) {
	
	   y = y - speed;
	   stop();

	  }

	
	    if (z == 3) {
	
	    x = x - speed;
	    stop();
 
	    }
  
	       if (z == 4) {
	
	       x = x + speed;
	      stop();
	
	       }
	

	document.addEventListener("keydown", function(event){

	
	 if (event.code == 'KeyS' || (event.ctrlKey || event.metaKey)){	
//DOWN   		
			z = 1;	
		}
	if (event.code == 'KeyW' || (event.ctrlKey || event.metaKey)){	
//up 
			z = 2;
		}
	if (event.code == 'KeyA' || (event.ctrlKey || event.metaKey)){	
// left 
			z = 3;	
		}
	 if (event.code == 'KeyD' || (event.ctrlKey || event.metaKey)){	
// Right 
			z = 4;
		}
	});


	function OPS(){
	
	my = Math.random()*1000;
	
	my = Math.round(my);
	
	if (my < 450){	// нужно что бы "my" было не больше 450

	k = k + 1;

	speed2 = speed2 + 0.2;

	}
	

	  }

	function OPS1(){
	
	my1 = Math.random()*1000;
	
	my1 = Math.round(my1);
	
	

		
	}


	function stop1 () {

	if (mx < -1 || my < -1 || mx > 950 || my > 450
	) {

	//  || mx1 < -1 || my1 < -1 || mx1 > 950 || my1 > 450


	mx = 820;
	my = 150;
	mx1 = 720;
	my1 = 200;

	OPS();

	if (mx1 < -1 || my1 < -1 || mx1 > 950 || my1 > 450){
	OPS1();
	}
	
	}
	
	 }

	function drawText1() {
  	ctx.font = "35px serif";
	ctx.fillStyle = 'gray';
  	ctx.fillText(`Score: ${k}`,  50, 490);
	}
	
	function drawText2() {
  	ctx.font = "35px serif";
	ctx.fillStyle = 'gray';
  	ctx.fillText(`Press: W \u2191 D \u2193 \u2190 A S \u2192 `,  550, 490);
	}


	
	stolk ();
	drawText1();
	drawText2();
	stop1 ();
	


	ctx.drawImage(image2, 100, 100);

	ctx.drawImage(image2, 50, 100);

	ctx.drawImage(image2, 100, 50);

	ctx.drawImage(image2, 100, 0);

	ctx.drawImage(image2, 0, 100);
	
	ctx.drawImage(image, x, y);
//

	function im(){

	ctx.drawImage(image10, mx,my);
	
	mx = mx - speed2;
	
	}
//
	
	function im2(){
	
	ctx.drawImage(image11, mx1,my1);
	
	mx1 = mx1 - speed2;
	
	}
	
	im();
	

	if (k > 5){
	im2();
	}

	window.requestAnimationFrame(render);
	}


	window.requestAnimationFrame(render);

	
	ctx.strokeRect(0, 0, 1000, 500);
	
