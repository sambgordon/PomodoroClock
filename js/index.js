$(document).ready(function(){
	//call buzzer with audio at index 0 to select proper 		audio
	var buzzer= $("#buzzer")[0];
	//buzzer.play();

	//turns string values from num and breakNum into integers
	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	//hide reset button id on load
	$("#reset").hide();
	//run function when start is clicked
	$("#start").click(function(){
		//sets interval val based on function, returned in milliseconds
		var counter = setInterval(timer, 1000);
		count*=60;
		function timer(){
		//hide all the following vars on start click
		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
		$("#timeType").show();
		//changes empty timeType h2 tag to display "Session Time:" after hiding all above elements
		$("#timeType").html("Session Time:");
		//decrement by 1
		count -=1;    //1 second
		//at 0, stop counting down
		if(count===0){
			//buzzer.play();
			clearInterval(counter);
			var startBreak= setInterval(breakTimer, 1000);
			$("#num").hide();
		}


			//converts parsed string into proper time format
			if(count%60>=10){
							$("#num").html(Math.floor(count/60)+":"+count%60);

		}
			else{
	$("#num").html(Math.floor(count/60)+":"+"0"+count%60);
			}
		function breakTimer(){
			$("#timeType").html("Break Time: ");
			$("#breakNum").show();
				breakTime*=60;
			$("#timeType").show();
			breakTime -=1;
			if(breakTime===0){
				clearInterval(startBreak);
				$("#reset").show();
				$("#breakNum, #timeType").hide();
			}

						if(breakTime%60>=10){
							$("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);

		}
			else{
		$("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);

			}

		 }
		} //function timer end
	});

	//run reset function on click
	$("#reset").click(function(){
		count = 25;
		breakTime = 25;
		$("#num").html(count);
		$("#breakNum").html(breakTime);
		//Now show everything that was hidden by start button
		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #num, #breakNum, #title1, #title2").show();
		$("#timeType, #reset").hide();
	});

	//run function on minus5 button click
	$("#minus5Clock").click(function(){
		if(count>5){
		count -= 5;
		$("#num").html(count);
		console.log(count);
		}
	});

		//run function on add5 button click. the if statement is removed because max time is not as important as min.
	$("#add5Clock").click(function(){

		count += 5;
		$("#num").html(count);
		console.log(count);
	});

	$("#minus5Break").click(function(){
		if(breakTime>5){
		breakTime -= 5;
		$("#breakNum").html(breakTime);
		}
	});

	$("#add5Break").click(function(){
		breakTime += 5;
		$("#breakNum").html(breakTime);

	});

});
