const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	
	
	let image = new Image();
	let image2 = new Image();
	let image10 = new Image();
	let image11 = new Image();
	let image12 = new Image();
	let image13 = new Image();

	image.src = '1_1.gif';
	image2.src = '2.gif';
	image10.src = '10v1.gif';
	image11.src = '11v1.gif';
	image12.src = '12.gif';
	image13.src = '13.gif';

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
	let speedStar = 0.2;
	let speedStar2 = 0.1;

	let z = 0; // передает состояние движения

	let arr1 = [890,700,200,450,650,650,250,10,450,900];
	let arr2 = [35,50,150,330,220,320,234,320,15,250];

	let star1 = [70,30,30,50,56,125,95,195,175,295,253,287,315,485,445,545,500,645,600,590,675,687,700,715,745,765,760,845,815,915,890,960];
	let star2 = [70,140,340,280,355,40,165,265,345,165,35,55,255,355,55,255,115,332,12,137,222,22,62,272,142,42,320,90,270,230,330,175];


	

	function end(){
	
	ctx.strokeRect(300,10,400, 480);
	ctx.fillStyle = '#182432';
	ctx.fillRect(300,10,400,480);

	ctx.font = "50px serif";
	ctx.fillStyle = 'white';
  	ctx.fillText(`THE END`,  391, 250);

	ctx.font = "30px serif";
	ctx.fillStyle = 'white';
  	ctx.fillText(`press enter`,  430, 280);
	}

	
// стопает персонажа об рамки

	
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
	// ctx.clearRect(0,0, canvas.width, canvas.height);
	

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

	ctx.clearRect(0,0, canvas.width, canvas.height);


	
	function OPS1(){
	
	my1 = Math.random()*1000;
	
	my1 = Math.round(my1);
	
	
	if (my1>500) {
	my1 = 200;
	
	}
	
	}

	function stars(){
	ctx.fillStyle = "white";
	
	ctx.drawImage(image13, arr1[0],arr2[0]);
	arr1[0] = arr1[0] - speedStar2; 
	ctx.drawImage(image13, arr1[1],arr2[1]);
	arr1[1] = arr1[1] - speedStar;
	ctx.drawImage(image13, arr1[2],arr2[2]);
	arr1[2] = arr1[2] - speedStar2;
	ctx.drawImage(image13, arr1[3],arr2[3]);
	arr1[3] = arr1[3] - speedStar;
	ctx.drawImage(image13, arr1[4],arr2[4]);
	arr1[4] = arr1[4] - speedStar2;
	ctx.drawImage(image13, arr1[5],arr2[5]);
	arr1[5] = arr1[5] - speedStar;
	ctx.drawImage(image13, arr1[6],arr2[6]);
	arr1[6] = arr1[6] - speedStar2;
	ctx.drawImage(image13, arr1[7],arr2[7]);
	arr1[7] = arr1[7] - speedStar;
	ctx.drawImage(image13, arr1[8],arr2[8]);
	arr1[8] = arr1[8] - speedStar;
	
	ctx.fillRect(star1[0], star2[0], 3, 3);
	ctx.fillRect(star1[1], star2[1], 2, 2);
	ctx.fillRect(star1[2], star2[2], 3, 3);
	ctx.fillRect(star1[3], star2[3], 4, 4);
	ctx.fillRect(star1[4], star2[4], 2, 2);
	ctx.fillRect(star1[5], star2[5], 3, 3);
	ctx.fillRect(star1[6], star2[6], 2, 2);
	ctx.fillRect(star1[7], star2[7], 2, 2);
	ctx.fillRect(star1[8], star2[8], 3, 3);
	ctx.fillRect(star1[9], star2[9], 2, 2);
	ctx.fillRect(star1[10], star2[10], 2, 2);
	ctx.fillRect(star1[11], star2[11], 3, 3);
	ctx.fillRect(star1[12], star2[12], 2, 2);
	ctx.fillRect(star1[13], star2[13], 4, 4);
	ctx.fillRect(star1[14], star2[14], 3, 3);
	ctx.fillRect(star1[15], star2[15], 2, 2);
	ctx.fillRect(star1[16], star2[16], 4, 4);
	ctx.fillRect(star1[17], star2[17], 2, 2);
	ctx.fillRect(star1[18], star2[18], 2, 2);
	ctx.fillRect(star1[19], star2[19], 3, 3);
	ctx.fillRect(star1[20], star2[20], 2, 2);
	ctx.fillRect(star1[21], star2[21], 4, 4);
	ctx.fillRect(star1[22], star2[22], 2, 2);
	ctx.fillRect(star1[23], star2[23], 5, 5);
	ctx.fillRect(star1[24], star2[24], 2, 2);	
	ctx.fillRect(star1[25], star2[25], 2, 2);
	ctx.fillRect(star1[26], star2[26], 2, 2);
	ctx.fillRect(star1[27], star2[27], 2, 2);
	ctx.fillRect(star1[28], star2[28], 2, 2);
	ctx.fillRect(star1[29], star2[29], 4, 4);
	ctx.fillRect(star1[30], star2[30], 2, 2);
	ctx.fillRect(star1[31], star2[31], 2, 2);
	
	star1[0] = star1[0] - speedStar2;
	star1[1] = star1[1] - speedStar2;
	star1[2] = star1[2] - speedStar2;
	star1[3] = star1[3] - speedStar2;
	star1[4] = star1[4] - speedStar2;
	star1[5] = star1[5] - speedStar2;
	star1[6] = star1[6] - speedStar2;
	star1[7] = star1[7] - speedStar2;
	star1[8] = star1[8] - speedStar2;
	star1[9] = star1[9] - speedStar2;
	star1[10] = star1[10] - speedStar2;
	star1[11] = star1[11] - speedStar2;
	star1[12] = star1[12] - speedStar2;
	star1[13] = star1[13] - speedStar2;
	star1[14] = star1[14] - speedStar2;
	star1[15] = star1[15] - speedStar2;
	star1[16] = star1[16] - speedStar2;
	star1[17] = star1[17] - speedStar2;
	star1[18] = star1[18] - speedStar2;
	star1[19] = star1[19] - speedStar2;
	star1[20] = star1[20] - speedStar2;
	star1[21] = star1[21] - speedStar2;
	star1[22] = star1[22] - speedStar2;
	star1[23] = star1[23] - speedStar2;
	star1[24] = star1[24] - speedStar2;
	star1[25] = star1[25] - speedStar2;
	star1[26] = star1[26] - speedStar2;
	star1[27] = star1[27] - speedStar2;
	star1[28] = star1[28] - speedStar2;
	star1[29] = star1[29] - speedStar2;
	star1[30] = star1[30] - speedStar2;
	star1[31] = star1[31] - speedStar2;
	}
	function OPS2(){
	
	 if (arr1[0] < -20) { arr1[0] = 999; arr2 [0] = 35;}
	else if (arr1[1] < -20) { arr1[1] = 999; arr2 [1] = 50;}
	else if (arr1[2] < -20) { arr1[2] = 999; arr2 [2] = 150;}
	else if (arr1[3] < -20) { arr1[3] = 999; arr2 [3] = 330;}
	else if (arr1[4] < -20) { arr1[4] = 999; arr2 [4] = 220;}
	else if (arr1[5] < -20) { arr1[5] = 999; arr2 [5] = 320;}
	else if (arr1[6] < -20) { arr1[6] = 999; arr2 [6] = 234;}
	else if (arr1[7] < -20) { arr1[7] = 999; arr2 [7] = 320;}
	else if (arr1[8] < -20) { arr1[8] = 999; arr2 [8] = 15;}
	else if (arr1[9] < -20) { arr1[9] = 999; arr2 [9] = 250;}

                                                             //y
	else if (star1[0] < -20) { star1[0] = 999; star2 [0] = star2 [0];}
	else if (star1[1] < -20) { star1[1] = 999; star2 [1] = star2 [1];}
	else if (star1[2] < -20) { star1[2] = 999; star2 [2] = star2 [2];}
	else if (star1[3] < -20) { star1[3] = 999; star2 [3] = star2 [3];}
	else if (star1[4] < -20) { star1[4] = 999; star2 [4] = star2 [4];}
	else if (star1[5] < -20) { star1[5] = 999; star2 [5] = star2 [5];}
	else if (star1[6] < -20) { star1[6] = 999; star2 [6] = star2 [6];}
	else if (star1[7] < -20) { star1[7] = 999; star2 [7] = star2 [7];}
	else if (star1[8] < -20) { star1[8] = 999; star2 [8] = star2 [8];}
	else if (star1[9] < -20) { star1[9] = 999; star2 [9] = star2 [9];}
	else if (star1[10] < -20) { star1[10] = 999; star2 [10] = star2 [10];}
	else if (star1[11] < -20) { star1[11] = 999; star2 [11] = star2 [11];}
	else if (star1[12] < -20) { star1[12] = 999; star2 [12] = star2 [12];}
	else if (star1[13] < -20) { star1[13] = 999; star2 [13] = star2 [13];}
	else if (star1[14] < -20) { star1[14] = 999; star2 [14] = star2 [14];}
	else if (star1[15] < -20) { star1[15] = 999; star2 [15] = star2 [15];}
	else if (star1[16] < -20) { star1[16] = 999; star2 [16] = star2 [16];}
	else if (star1[17] < -20) { star1[17] = 999; star2 [17] = star2 [17];}
	else if (star1[18] < -20) { star1[18] = 999; star2 [18] = star2 [18];}
	else if (star1[19] < -20) { star1[19] = 999; star2 [19] = star2 [19];}
	else if (star1[20] < -20) { star1[20] = 999; star2 [20] = star2 [20];}
	else if (star1[21] < -20) { star1[21] = 999; star2 [21] = star2 [21];}
	else if (star1[22] < -20) { star1[22] = 999; star2 [22] = star2 [22];}
	else if (star1[23] < -20) { star1[23] = 999; star2 [23] = star2 [23];}
	else if (star1[24] < -20) { star1[24] = 999; star2 [24] = star2 [24];}
	else if (star1[25] < -20) { star1[25] = 999; star2 [25] = star2 [25];}
	else if (star1[26] < -20) { star1[26] = 999; star2 [26] = star2 [26];}
	else if (star1[27] < -20) { star1[27] = 999; star2 [27] = star2 [27];}
	else if (star1[28] < -20) { star1[28] = 999; star2 [28] = star2 [28];}
	else if (star1[29] < -20) { star1[29] = 999; star2 [29] = star2 [29];}
	else if (star1[30] < -20) { star1[30] = 999; star2 [30] = star2 [30];}
	else if (star1[31] < -20) { star1[31] = 999; star2 [31] = star2 [31];}
	}

	OPS2();

	stars();

		

	function stop1 () {

	if (mx < -1 || my < -1 || mx > 950 || my > 450
	) {

	mx = 820;
	my = 150;
	

	OPS();

	function stop2 (){
	if (mx1 < -1 || my1 < -1 || mx1 > 950 || my1 > 450){

	mx1 = 820;
	my1 = 100;

	if  (my1 < 450){
	OPS1();
	
	}
	}

	}

	stop2 ();
	

	}
	
	 }

	

	function drawText1() {
  	ctx.font = "35px serif";
	ctx.fillStyle = 'white';
  	ctx.fillText(`Score: ${k}`,  50, 490);
	}
	
	function drawText2() {
  	ctx.font = "35px serif";
	ctx.fillStyle = 'white';
  	ctx.fillText(`Press: W \u2191 D \u2193 \u2190 A S \u2192 `,  550, 490);
	}
	
	 ctx.drawImage(image12, 890,35);
	ctx.drawImage(image, x, y);
//
	
	
	stolk ();
	drawText1();
	drawText2();
	stop1 ();
	
	
	

		
	
	
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
	

	if (k > 2){
	im2();

	}
	
	window.requestAnimationFrame(render);
	}


	window.requestAnimationFrame(render);

	
	ctx.strokeRect(0, 0, 1000, 500);

