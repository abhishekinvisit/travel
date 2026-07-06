<!DOCTYPE html>
<html>

<head>

    <title>Invisit</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.svg">

    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta name="keywords" content="key, words" />
    <meta name="description" content="Website description" />
    <meta name="robots" content="" /><!-- change into index, follow -->

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    
    <link href="stylesheet/css/slick-theme.css" type="text/css" rel="stylesheet" />
	<link href="stylesheet/fonts/fonts.css" type="text/css" rel="stylesheet" />
	<link href="stylesheet/css/style.css?251120231" type="text/css" rel="stylesheet" />
        
    <script type="text/javascript" src="javascripts/jquery.js"></script>
    <script type="text/javascript" src="javascripts/slick_carousel.js"></script>
    <script type="text/javascript" src="javascripts/global.js"></script>

    <!--[if lt IE 9]>
    <script type="text/javascript" src="javascripts/html5.js"></script>
    <![endif]-->
<style>
#headerCntr {background: #333;}
</style>

    <!-- Google Tag Manager -->
    <?php include 'shared/header-tag.php';?>
    <!-- End Google Tag Manager --> 
	
</head>

<body class="grayBg">
	
    <!-- Google Tag Manager (noscript) -->
    <?php include 'shared/header-tag-body.php';?>
    <!-- End Google Tag Manager (noscript) --> 

<!--  / wrapper \ -->
<div id="wrapper">

    <!--  / main container \ -->
    <div id="mainCntr">

		
         
        
        <!--  / content container \ -->
        <div id="contentCntr">
			<div class="container">           
           
          

                 <!--  / highlightsBox box \ -->
				 <br>
				 <br>
				 
				 <!-- Sucess Start here-->
				<div class="successfully-added-pop" style="margin-top:70px;">
					<div class="succesfull-box">
					<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
					<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
					<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
					</svg>
					<h2>Thank You!</h2>
					<h6>Your query has been submitted. Our Travel Expert will connect with you soon.</h6>

					<!--<a href="#" class="commonbutton">Explore More</a>-->
					
			<!-- Sucess End here-->

				 <!--
				 <h2 class="heading">Thank You!</h2>
                	<div class="alert alert-success">
                		
                        <p> Your query has been submitted. Our Travel Expert will connect with you soon.</p>

                    </div>
				-->


				<?php 
if(isset($_POST['submit'])){
	$to = "sales2.invisit@gmail.com"; // Where you want to send email
	$from = "sales2.invisit@gmail.com"; // this is the sender's Email address
	//$to = "ajay.invisit@gmail.com"; // Where you want to send email
	//$from = "ajay.invisit@gmail.com"; // this is the sender's Email address

	$first_name = $_POST['first_name'];  
	$mobile_no = $_POST['mobile_no'];
	$no_of_travelers = $_POST['no_of_travelers'];
	$travel_date = $_POST['travel_date'];
	$destination = $_POST['destination'];  
	$location = $_POST['location']; 
	$email = $_POST['email']; 
	$subject = "Trip Query";

	$message = "Dear Team "."\n\n". "I'm ".$first_name. " and I'm planning my trip to ".$destination ;
	$message .= " on this date : ". $travel_date ."\n\n";
	$message .= "My Mobile No : ".$mobile_no."\n\n";
	$message .= "Number Travelers : ".$no_of_travelers."\n\n";
	$message .= "Location : ".$location."\n\n";
	$message .= "Email Id : ".$email."\n\n";
	$headers = "From:" . $from;
   
   
    if (mail($to,$subject,$message,$headers)) 
    {
        echo " ";
    }
    
    }
?>
				

				<a href="index.php" class="commonbutton">Explore More</a>
				
				</div>

				</div>
				

                
               
               	
                   
                
                </div>
                

                
                
        </div>
        <!--  \ content container / -->


    </div>
    <!--  \ main container / -->

</div>
<!--  \ wrapper / -->


 

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>

</body>

</html>