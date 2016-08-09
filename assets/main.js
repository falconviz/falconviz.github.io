// JavaScript Document
//------------------------------------------------------------------------------------------------- General

function goEml(txt){
	var s1 = txt;
	var s2 = "@";
	var s3 = "falconviz.com";
	var s4 = s1 + s2 + s3;
	document.write("<a class=\'cont\' href=" + "mail" + "to:" + s1 + s2 + s3 + ">" + s4 + "</a>");
}
	
jQuery(document).ready(function(){
	$(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
    $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
      $(this).tab('show');
	});
	
	
	  //----------- fix videos responsiveness
	  
			 // Find all YouTube videos
		//var $allVideos = $("iframe[src~='//player.vimeo.com'], iframe[src~='//www.youtube.com']"),
		var $allVideos = $(".vid2fix"),
		 
			// The element that is fluid width
			$fluidEl =$("figure"); //$(".inner-main-content");
			
		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
		
		  $(this)
			.data('aspectRatio', this.height / this.width)
		
			// and remove the hard coded width/height
			.removeAttr('height')
			.removeAttr('width');
		});
		
		// When the window is resized
		$(window).resize(function() {
		
		  var newWidth = $fluidEl.width();
		  // Resize all videos according to their own aspect ratio
		  $allVideos.each(function() {
		
			var $el = $(this);
			$el
			  .width(newWidth)
			  .height(newWidth * $el.data('aspectRatio'));
		
		  });
		
		// Kick off one resize to fix all videos on page load
		}).resize();

	  
    });
	

	 

	
 //------------------------------------------------------------------------------------------ Banner

jQuery(document).ready(function ($) {

	// if slider1_container is there, then initiate slider [only on homepage]
     if($("#slider1_container").length ){
		 console.log("xxxxxxx");
		   
	var _SlideshowTransitions = [
                  {$Duration:1300,$Opacity:2}				  
                ];
				
       var jssor_1_SlideoTransitions = [
	   	[{b:-1,d:1, o:-1} , {b:0,d:1000,x:50,o:1,e:{x:27}}],	
		[{b:-1,d:1, o:-1} , { b:0,d:1000,x:-200,o:1,e:{x:27}}],	
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}],
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}],
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}],
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}],
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}],
		[{b:-1,d:1,x:-200, o:-1} , { b:0,d:1000,x:100,o:1,e:{x:27}}]
	   ];
        var options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,				 
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },				
				$CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:2000,b:1000}]
                ]
              },

				$ArrowNavigatorOptions: {                         
                    $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Scale: false                                   //Scales bullets navigator or not while slider scale
                },

                $BulletNavigatorOptions: {                                
                    $Class: $JssorBulletNavigator$,                  //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 12,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 4,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1,                                //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                    $Scale: false                                   //Scales bullets navigator or not while slider scale
                }
				
        };
		
		
		var jssor_slider1 = new $JssorSlider$("slider1_container", options);
	  
		//responsive code begin
		//you can remove responsive code if you don't want the slider scales while window resizes
		function ScaleSlider() {
			var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
			if (parentWidth) {
				jssor_slider1.$ScaleWidth(parentWidth);
			}
			else
			   { window.setTimeout(ScaleSlider, 30);}
		}
		
			ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
	 }
	 
        
		

		//------------------------------------------------------------------------------------------ Parallex
		// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
        duration: 100,    // the scene should last for a scroll distance of 100px
        offset: 50        // start this scene after scrolling for 50px
    })
    .setPin("#txt-1") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

//});

	var slides = ["#slide01"];
	// move bcg container when slide gets into the view
	slides.forEach(function (slide, index) {
	 
		var $bcg = $(slide).find('.bcg');
	 
		var slideParallaxScene = new ScrollMagic.Scene({
			triggerElement: slide,
			triggerHook: 1,
			duration: "120%",
			offset:100
		})
		.setTween(TweenMax.from($bcg, 1, {y: '-70%',  ease:Power0.easeNone})) //autoAlpha: 0.3,
		.addTo(controller);
	});


//-------------------------------------------------------------------------------------- Set height of News, Project, ..
	
    var h= $("#inner-news").width()*0.6;
	$("#inner-news").css('height', h);
	
	$("#project #inner-project").css('height', h);
	$("#video").css('height', h);
		
//------------------------------------------------------------------------------------------ Search				
	var $target = $("#top-search");
	$target.hide();
	var isOpen = false;
	
	$("#top-search-icon").click(function() {
		console.log("clicked");
		if(!isOpen){
			$target.show( 500);
			isOpen = true;
			return false;
		}else{
			$target.hide(500);
			isOpen = false;
			return false;
		}
	});
	
	//---------------------------------------------------------------- Modal
	$("#video-img").click(function (){
			$("#popup").show(1);
		});
		
	$("#popup").click(function (){
		$("#popup").hide(1);
		var $frame = $("#viVideo");
		
		// saves the current iframe source
		var vidsrc = $frame.attr('src');
		
		// sets the source to nothing, stopping the video
		$frame.attr('src',''); 
		
		// sets it back to the correct link so that it reloads immediately on the next window open
		$frame.attr('src', vidsrc);
	});
		
		
	//------------------------------------------------------------------------------------------ Form

 $("#contact_form").submit(function(e)
	{
		e.preventDefault(); //STOP default action
		var msgTitle = "Contact us";//titles[Number($(this).attr("id").charAt(4))-1];
		var postData = "Subject="+msgTitle+"&"+$(this).serialize();
		var formURL = "spam.php";			
		
		$.ajax(
		{
			url : formURL,
			type: "POST",
			dataType: "text",
			data :postData,
			//async: false,
			success:function(data, textStatus, jqXHR) 
			{
				alert(data); //data
			},
			error: function(jqXHR, textStatus, errorThrown) 
			{
				alert("Sorry, could not send your message. "+errorThrown);
			}
		});
		
		return false;
	});
	
	$("#getQuote-but").click(function(){
			console.log("clicked");
		});
	
	//------------------------- Construction 
	
	var box = $("#construction_zoom"),    tween;
	
	$("#const_img_container").height($("#const_img_container").width());
	
	$(window).resize(function(){
		$("#const_img_container").height($("#const_img_container").width());
	});

	tween = TweenMax.to(box, 20, {x:"-50%", y:"-50%", width:"1900px", height:"1900px", repeat:-1, yoyo:true, repeatDelay:2, ease:Linear.easeNone});

	var fileLocation = window.location.pathname;
	var fileLocationArray = fileLocation.split('/');
	
   if(fileLocationArray[fileLocationArray.length-1]=== "quotation.html"){
	   checkFile();
   }
//});

//--------------------  check file upload
function checkFile(){
	//binds to onchange event of your input field
	$('#fileup').bind('change', function() {
	
	  //this.files[0].size gets the size of the file.
	  if(this.files[0].size >2097152){
		// file is over 2M and this is not allowed
		$("#warning").text("File size must not exceed 2Mb");  
		
	  }
	});
}


	
function gatherDelivrables(){
	
	console.log("change is here");
	var deliv_data="";

	$(".deliverables").each(function() {
		//console.log ("is checked: "+ $( this ).is(':checked'));
		if( $( this ).is(':checked')){
			deliv_data += $( this ).attr('value')+" - ";//+" \n\r ";
			//deliv_data += $( this ).attr('value')+" \n\r ";
		}
	});

	$('#deliv').attr('value', deliv_data) ;	
	console.log(":: "+deliv_data);
}

 $(document).ready(function() {
	 $(".deliverables").change(function() {
		//console.log("change is here xx");
		 gatherDelivrables();
	});
 });
});