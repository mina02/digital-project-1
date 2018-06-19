$(document).ready(function(){  		

	// 마우스 오버시
	$("#first").on("mouseover",function(){		
	
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#cherry").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
		$("#second").stop().animate({"width":"40px"},1200);
		$("#third").stop().animate({"width":"40px"},1200);
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"0"},200);
		$(this).stop().animate({"width":"933px"},1000,function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);	
		});
		$(this).find("#cherry").stop().animate({"opacity":"1"},1200);
		$(this).find("h2").stop().animate({"opacity":"0"},200);	
	});
	
	// 마우스 아웃시
	$("#first").on("mouseout",function(){		
		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#cherry").get(0);
		// 동영상을 정지
		vid.pause();
		$("#second").stop().animate({"width":"295px"},1200);
		$("#third").stop().animate({"width":"295px"},1200);
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"1"},1200);	
		$(this).stop().animate({"width":"295px"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);		
		$(this).find("h3").stop().animate({"right":"-710px"},200);
		
	});

		// 마우스 오버시
	$("#second").on("mouseover",function(){		
	
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#avo").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
		$("#first").stop().animate({"width":"40px"},1200);
		$("#third").stop().animate({"width":"40px"},1200);
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"0"},200);
		$(this).stop().animate({"width":"933px"},1000,function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);	
		});
		$(this).find("#avo").stop().animate({"opacity":"1"},1200);
		$(this).find("h2").stop().animate({"opacity":"0"},200);			
	});
	
	// 마우스 아웃시
	$("#second").on("mouseout",function(){		
		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#avo").get(0);
		// 동영상을 정지
		vid.pause();
		$("#first").stop().animate({"width":"295px"},1200);
		$("#third").stop().animate({"width":"295px"},1200);	
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"1"},1200);
		$(this).stop().animate({"width":"295px"},700);
		$(this).find("#avo").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-710px"},200);

		
	});

	// 마우스 오버시
	$("#third").on("mouseover",function(){		
	
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#cheese").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
		$("#first").stop().animate({"width":"40px"},1200);
		$("#second").stop().animate({"width":"40px"},1200);
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"0"},200);	
		$(this).stop().animate({"width":"933px"},1000,function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);	
		});
		$(this).find("#cheese").stop().animate({"opacity":"1"},1200);
		$(this).find("h2").stop().animate({"opacity":"0"},200);				
	});
	
	// 마우스 아웃시
	$("#third").on("mouseout",function(){		
		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("#cheese").get(0);
		// 동영상을 정지
		vid.pause();
		$("#first").stop().animate({"width":"295px"},1200);
		$("#second").stop().animate({"width":"295px"},1200);
		$("first").stop().animate({"background-image":"url('')"},200);
		$(".num").stop().animate({"opacity":"1"},200);
		$(".title").stop().animate({"opacity":"1"},1200);	
		$(this).stop().animate({"width":"295px"},700);
		$(this).find("#cheese").stop().animate({"opacity":"0"},2000);		
		$(this).find("h3").stop().animate({"right":"-710px"},200);
		
	});

	
});
















