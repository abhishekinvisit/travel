<!DOCTYPE html>
<html>

<head>

    <title>Invisit -  Career - Content Writer</title>

    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta name="keywords" content="key, words" />
    <meta name="description" content="Website description" />
    <meta name="robots" content="" /><!-- change into index, follow -->
	
	<link rel="canonical" href="https://invisit.in/career.php">
	
<link rel="icon" type="image/x-icon" href="images/favicon.ico">

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    
    
	<link href="stylesheet/fonts/fonts.css" type="text/css" rel="stylesheet" />
	<link href="stylesheet/css/style.css?12345" type="text/css" rel="stylesheet" />
        
    <script type="text/javascript" src="javascripts/jquery.js"></script>
   
    <script type="text/javascript" src="javascripts/global.js"></script>

    <!--[if lt IE 9]>
    <script type="text/javascript" src="javascripts/html5.js"></script>
    <![endif]-->

	<script>

$(document).ready(function(){
	$('.menuBox ul li a.home').addClass('active');

});

</script>    
 

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

<!--  / header container \ -->
    <?php include 'shared/header.php';?>
    <!--  \ header container / --> 
		
         <!--  / banner container \ -->
         <div class="careerbannerBox" style="background-image:url(images/banners/career-banner.jpg);">
			
         <div class="banner_text">
         	<div class="container relative">
            	<h2>Join Our Team!</h2>
                <p>Our teams are structured around the areas of expertise we provide our clients. Explore opportunities that you find are the right fit for you.</p>
                
                
            </div>
            </div>
         </div>
         
        
        <!--  \ banner container / -->
        
        <!--  / content container \ -->
        <div id="contentCntr">
			<div class="container">
         
          <!--  / contact box \ -->
          <div class="row pb-120">
                  <div class="col-md-7">
                  <div class="careerContentBox pt-5">
                      <div class="contact">
                      <h3 class="page__title"><strong>Content Writer</strong></h3>
						  
                      <h4>Job description</h4>
<p><strong>Company Overview:</strong></p>

<p>invisit is a leading provider of travel services, specializing in offering unique and unforgettable travel experiences to our clients. We are seeking a talented and passionate Content Writer to join our team. As a Content Writer, you will play a crucial role in creating engaging and informative content that inspires and informs travelers, driving brand awareness and customer engagement.</p>

<h4>Key Responsibilities:</h4>
<p><strong>Content Creation:</strong> Write and edit high-quality, SEO-optimized content for various digital platforms, including websites, blogs, social media, email newsletters, and promotional materials. Produce travel guides, destination descriptions, itineraries, and travel tips that captivate readers and provide valuable information to potential travelers.</p>
						  <p>
Craft engaging and creative storytelling content that conveys the unique experiences and adventures our travel packages offer.</p>

<p><strong>Research and Analysis:</strong> Stay updated with industry trends, travel news, and destination information to ensure content is relevant and informative.</p>
						  <p>
  Conduct thorough research to gather facts, statistics, and insights for content accuracy and credibility. Analyze content performance metrics and adjust strategies accordingly to enhance reach and engagement.</p>

<p><strong>Collaboration:</strong> Collaborate with the marketing and design teams to ensure content aligns with branding and promotional strategies. Work closely with the product development team to gain insights into upcoming travel packages and create compelling pre-launch and post-launch content.</p>

<p><strong>Content Strategy:</strong> Develop and maintain a content calendar to ensure a consistent flow of fresh and engaging content. Contribute to content strategy discussions and offer creative ideas to improve content quality and engagement.</p>

<p><strong>Proofreading and Editing:</strong> Review and edit content to maintain high standards of grammar, style, and tone. Ensure accuracy and consistency in all published content.</p>

<h4>Qualifications:</h4>
<ul>
  <li>Proven experience as a Content Writer, preferably with a focus on travel-related content.</li>
  <li> Exceptional writing and editing skills, with a strong command of the English language.</li>
  <li> Proficiency in SEO best practices and keyword research.</li>
  <li> Creativity and the ability to tell compelling stories through written content.</li>
  <li> Strong research and analytical skills.</li>
  <li> Passion for travel and a deep understanding of various travel destinations.</li>
  <li> Excellent time management and organizational skills.</li>
  <li> Ability to work in a fast-paced and dynamic environment.</li>
  </ul>

  <p> This job description for a Content Writer in a travel company should attract candidates who are not only skilled in content creation but also have a deep passion for travel and the ability to convey the excitement and beauty of destinations to potential travelers.</p>


						  
                      <h4>Additional Information:</h4>
						  
                      <ul>
						  <li><strong>Job Type:</strong> Full-time</li>
                        </ul>
                      
                    </div>
                       </div>
                  </div>

                  <div class="col-md-5">
                      <div class="contact__formBox">
                  <h3 class="page__title">Apply to this role</h3>
                  <p>In case of any questions/queries or last minute requests</p>
						  
						   <?php
if ($_SERVER['REQUEST_METHOD']=="POST"){

   // Set the "To" email address
   $to="Vanshika.hr@invisit.in";

	//Subject of the mail
   $subject="Apply for Content Writer";

   // Get the sender's name and email address plug them a variable to be used later
   $from = stripslashes($_POST['name']);
	
	// Check for empty fields
   if(empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['url']) || empty($_POST['filename']) || empty($_POST['descri']))
	{
		$errors .= "\n Error: all fields are required";
	}
	
	// Get all the values from input
	$name = $_POST['name'];
	$email_address = $_POST['email'];
	$phone = $_POST['phone'];
	$url = $_POST['url'];
	$file_name = $_POST['filename'];
	$descri = $_POST['descri'];

	// Check the email address
	/*if (!eregi(	"^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email_address))
	{
		$errors .= "\n Error: Invalid email address";
	}
*/
   // Now Generate a random string to be used as the boundary marker
   $mime_boundary="==Multipart_Boundary_x".md5(mt_rand())."x";

   // Now Store the file information to a variables for easier access
   $tmp_name = $_FILES['filename']['tmp_name'];
   $type = $_FILES['filename']['type'];
   $file_name = $_FILES['filename']['name'];
   $size = $_FILES['filename']['size'];

   // Now here we setting up the message of the mail
   $message = "\n Name: $name \n Email: $email_address \n Phone: $phone \n Linkedin URL: $url \n Attach file: $file_name \n Description: $descri" ;

   // Check if the upload succeded, the file will exist
   if (file_exists($tmp_name)){

      // Check to make sure that it is an uploaded file and not a system file
      if(is_uploaded_file($tmp_name)){

         // Now Open the file for a binary read
         $file = fopen($tmp_name,'rb');

         // Now read the file content into a variable
         $data = fread($file,filesize($tmp_name));

         // close the file
         fclose($file);

         // Now we need to encode it and split it into acceptable length lines
         $data = chunk_split(base64_encode($data));
     }

      // Now we'll build the message headers
      $headers = "From: $from\r\n" .
         "MIME-Version: 1.0\r\n" .
         "Content-Type: multipart/mixed;\r\n" .
         " boundary=\"{$mime_boundary}\"";

      // Next, we'll build the message body note that we insert two dashes in front of the  MIME boundary when we use it
      $message = "This is a multi-part message in MIME format.\n\n" .
         "--{$mime_boundary}\n" .
         "Content-Type: text/plain; charset=\"iso-8859-1\"\n" .
         "Content-Transfer-Encoding: 7bit\n\n" .
         $message . "\n\n";

      // Now we'll insert a boundary to indicate we're starting the attachment we have to specify the content type, file name, and disposition as an attachment, then add the file content and set another boundary to indicate that the end of the file has been reached
      $message .= "--{$mime_boundary}\n" .
         "Content-Type: {$type};\n" .
         " name=\"{$file_name}\"\n" .
         //"Content-Disposition: attachment;\n" .
         //" filename=\"{$fileatt_name}\"\n" .
         "Content-Transfer-Encoding: base64\n\n" .
         $data . "\n\n" .
         "--{$mime_boundary}--\n";

      // Thats all.. Now we need to send this mail... :)
      if (@mail($to, $subject, $message, $headers))
	  {
         echo "<div><center><h4 style='color:#F15747; font-style:normal'>"."Thank You for submitting your information..." . " <b>$name </b>" . "<br> We will get back to you if we find your application interesting!!"."</h4></center><br></div>";
	  }else
	  {
         ?>
         <div><center>
           <h1>Error !! Unable to send Mail..</h1></center></div>
         <?php
	  }
   }
}
?>

<div class="clear"></div>
						  
                  <form id="form1" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data"  onsubmit="return validateForm()">

					  
					  <div class="input_set user-icon">
                           <input type="text" placeholder="Name" class="form-control" name="name" id="name" required />
                           <span class="star">*</span>
                      </div>
					  
					  <div class="input_set email-icon">
                           <input type="text" placeholder="Email" class="form-control" name="email" id="email" required />
                           <span class="star">*</span>
                      </div>
					  
					  <div class="input_set phone-icon">
                           <input type="text" placeholder="Mobile" class="form-control" name="phone" id="phone" required/>
                           <span class="star">*</span>
                      </div>
					  

						<div class="input_set phone-icon">
                             <input type="text" placeholder="Linkedin URL" class="form-control" name="url" id="url" />
                             <span class="star"> </span>
                        </div>
					  
					  
					  <div class="input_set phone-icon">
						  <input type="file" placeholder="Attach Resume or CV" class="form-control" name="filename" id="tele" required>
						   <span class="star">*</span>
						  <span class="small">We accept PDF, DOC, DOCX, JPG and PNG files</span>
					  </div>
					  
					  
					  <textarea cols="5" rows="4" class="textarea" placeholder="Description" name="descri" id="descri"></textarea>
					  
					  
					  <div class="text-center">
						<input type="submit" name="submit" type="submit" value="Submit" class="button">
                    </div>


						
				</form>
                </div>  
                </div>
              </div>
         <!--  \ contact box / -->
                   
                
                </div>
                
             
                
        </div>
        <!--  \ content container / -->
			
          
   <div id="st_footer"></div>      
  <!--  / footer container \ -->
  <?php include 'shared/footer.php';?>
  <!--  \ footer container / --> 

    </div>
    <!--  \ main container / -->

</div>
<!--  \ wrapper / -->
<!--  \ wrapper / -->
<!--
<div class="stickyHeight"></div>


<div class="sticky-mobile-buttons">
	<a href="tel:+91 9650932408">Call Now</a>
</div>
-->

</body>
</html>