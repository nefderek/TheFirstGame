
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	const c = canvas.getContext("2d");
	
	
	const image = new Image();
	const image2 = new Image();
	const image10 = new Image();

	// основные данные

	image.onload = function(){
	
	let x = 0;	// основное положение x,y
	let y = 0;
	let mx = 820;
	let my = 150;
	
	let k = 0; // счетчик проходов.
	
	let speed = 1;

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

	if (y - my >= -45 && y-my <= 45 && x-mx >= -45 && x-mx <= 45) {

	x = 0;
	y = 0;
	
	k = 0;

	k = k - 1;
	
	 }
	}
	
//	
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

//
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

	}
	console.log(my);
	}

	function stop1 () {

	if (mx < -1 || my < -1 || mx > 950 || my > 450 ) {
	mx = 820;
	my = 150;
	
	OPS();
	}
	 }

	function draw1() {
  	var ctx = document.getElementById('canvas').getContext('2d');
  	ctx.font = "48px serif";
	ctx.fillStyle = 'gray';
  	ctx.fillText(`Score: ${k}`,  50, 490);
	}
	
	function im(){
	
	window.requestAnimationFrame(im);
	// ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.drawImage(image10, mx,my);

	image10.src = './10.gif';
	mx = mx - 0.01;
	}
	
	im();
	stolk ();
	draw1();
	stop1 ();
	
	
	ctx.drawImage(image2, 100, 100);
	ctx.drawImage(image2, 50, 100);
	ctx.drawImage(image2, 100, 50);
	ctx.drawImage(image2, 100, 0);
	ctx.drawImage(image2, 0, 100);
//
	ctx.drawImage(image, x, y);

	window.requestAnimationFrame(render);
	}

	window.requestAnimationFrame(render);

	}
	image.src = './1.gif';
	image2.src = './2.gif';
	
	image10.src = './10.gif';

	ctx.strokeRect(0, 0, 1000, 500);
