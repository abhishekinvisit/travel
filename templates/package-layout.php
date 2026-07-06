<?php
// Shared layout for destination package pages (Phase 1 pilot: goa-holiday-packages).
// $pkg must be an associative array (see /data/goa-holiday-packages.php for shape).
// This file must render byte-identical output to the original static pages it replaces.
?>
<!DOCTYPE html>
<html>
<head>
<title><?php echo $pkg['title']; ?></title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="description" content="<?php echo $pkg['meta_description']; ?>">
<meta name="keywords" content="<?php echo $pkg['meta_keywords']; ?>">
<meta name="robots" content="index, follow">
<meta name="author" content="invisit">
<link rel="icon" type="image/x-icon" href="../images/favicon.ico">
<link rel="canonical" href="https://invisit.in/goa-holiday-packages/<?php echo $pkg['slug']; ?>.php">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<link href="../stylesheet/css/slick-theme.css" type="text/css" rel="stylesheet" />
<link href="../stylesheet/fonts/fonts.css" type="text/css" rel="stylesheet" />
<link href="../stylesheet/css/lightbox.min.css" type="text/css" rel="stylesheet" />
<link href="../stylesheet/css/style.css<?php echo $pkg['style_css_suffix']; ?>" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="../javascripts/jquery.js"></script> 
<script type="text/javascript" src="../javascripts/lightbox-plus-jquery.min.js"></script> 
<script type="text/javascript" src="../javascripts/slick_carousel.js"></script> 
<script type="text/javascript" src="../javascripts/global.js"></script> 
<script>
$(document).ready(function(){
    $('#myselection').on('change', function(){
        var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});
<?php echo $pkg['post_ready_lines']; ?></script> 
<!--[if lt IE 9]>
    <script type="text/javascript" src="javascripts/html5.js"></script>
    <![endif]-->
        
<script>

$(document).ready(function(){
        $('.menuBox ul li a.domestic').addClass('active');
});

</script>       

        <!-- Google Tag Manager -->
    <?php include '../shared/header-tag.php';?>
    <!-- End Google Tag Manager --> 
        
</head>

<body class="grayBg">
        
                <!-- Google Tag Manager (noscript) -->
    <?php include '../shared/header-tag-body.php';?>
    <!-- End Google Tag Manager (noscript) --> 

<!--  / wrapper \ -->
<div id="wrapper"> 
  
  <!--  / main container \ -->
  <div id="mainCntr"> 
    
    <!--  / header container \ -->
     <?php include '../shared/header-inner.php';?>
    <!--  \ header container / --> 
    
    <!--  / banner container \ -->
    <div class="citybannerBox shadow" style="background-image:url(<?php echo $pkg['banner_image']; ?>);">
      <div class="banner_text">
        <div class="container">
          <h1><?php echo $pkg['h1']; ?> <span><?php echo $pkg['duration']; ?></span></h1>
          <!--<span class="recmandend"><span class="rating single"></span> Recommended</span>--> </div>
      </div>
    </div>
    
    <!--  \ banner container / --> 
    
    <!--  / content container \ -->
    <div id="contentCntr">
      <div class="container"> 
        <!--  / Gallery box \ -->
        <div class="galleryBox">
          <div class="holder">
            <div class="items">
              <figure><a href="../images/destination/goa/gallery1.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery1.jpg" alt="manali" ></a></figure>
            </div>
            <div class="items">
              <figure><a href="../images/destination/goa/gallery2.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery2.jpg" alt="manali" ></a></figure>
            </div>
            <div class="items">
              <figure><a href="../images/destination/goa/gallery3.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery3.jpg" alt="manali" ></a></figure>
            </div>
            <div class="items">
              <figure><a href="../images/destination/goa/gallery4.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery4.jpg" alt="manali" ></a></figure>
            </div>
            <div class="items">
              <figure><a href="../images/destination/goa/gallery5.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery5.jpg" alt="manali" ></a></figure>
            </div>
            <div class="items">
              <figure class="last"><a href="../images/destination/goa/gallery6.jpg" data-lightbox="example-set"><img src="../images/destination/goa/gallery6.jpg" alt="manali" >
                <div class="info"><i class="bi bi-image"></i> <span>View Gallery</span></div>
                </a> </figure>
            </div>
          </div>
        </div>
        <!--  \ Gallery box / --> 
        
        <!--  / Left container \ -->
        <div id="leftCntr"> 
          <!--  / highlightsBox box \ -->
          <div class="highlightsBox" id="overviews">
            <h2 class="heading">Highlights</h2>
            <div class="safe"><img src="../images/icon/right-check.svg" alt="" />100% Safe</div>
            <ul>
              <li>
                <div class="icon"> <img src="../images/icon/hotel-icon.svg" alt="hotel" /> </div>
                <span>Hotels</span> </li>
              <li>
                <div class="icon"> <img src="../images/icon/meals.svg" alt="meals" /> </div>
                <span>Meals</span> </li>
              <li>
                <div class="icon"> <img src="../images/icon/transport.svg" class="iconcar" alt="Tranportation" /> </div>
                <span>Transportation</span> </li>
              <li>
                <div class="icon"> <img src="../images/icon/itineary.svg" alt="itineary" /> </div>
                <span>Special Itinerary</span> </li>
              <li>
                <div class="icon"> <img src="../images/icon/guide.svg" alt="Local" /> </div>
                <span>Local Guide</span> </li>
            </ul>
          </div>
          <!--  \ highlightsBox box / --> 
          
          <!--  / overview box \ -->
          <div class="overviewBox">
            <h2 class="heading">Overview</h2>
            <div class="blockBox">
<?php echo $pkg['overview_html'] . "\n"; ?>            </div>
          </div>
          <!--  \ overview box / --> 
          
          <!--  / accordianBox box \ -->
          <div class="accordianBox">
            <h2 class="heading" id="Itinerary">Itinerary</h2>
            <div class="blockBox">
<?php foreach ($pkg['itinerary_days'] as $day): echo $day['gap_before']; ?><div class="accordianRow">
                <h3 class="accordion<?php echo $day['active'] ? ' active' : ''; ?>"><span><?php echo $day['label']; ?></span><?php echo $day['title_suffix']; ?></h3>
                <div class="expendaccordian"<?php echo $day['active'] ? ' style="max-height:initial;"' : ''; ?>>
                  <div class="content">
<?php echo $day['content_html'] . "\n"; ?>                  </div>
                </div>
              </div>
<?php endforeach; ?>
<?php echo $pkg['itinerary_tail'] . "\n"; ?>            </div>
          </div>
          <!--  \ accordianBox box / --> 
          
          <!--  / Hotel Categories box \ -->
          <div class="hotelCategories">
            <h2 class="heading">Hotel Categories</h2>
            <div class="blockBox">
              <ul class="thumnails">
                <li><a href="../images/destination/goa/hotel1.jpg" data-lightbox="example-set"><img src="../images/destination/goa/hotel1.jpg" alt="thumb1"></a></li>
                <li><a href="../images/destination/goa/hotel2.jpg" data-lightbox="example-set"><img src="../images/destination/goa/hotel2.jpg" alt="thumb1"></a></li>
                <li><a href="../images/destination/goa/hotel3.jpg" data-lightbox="example-set"><img src="../images/destination/goa/hotel3.jpg" alt="thumb1"></a></li>
                <li><a href="../images/destination/goa/hotel4.jpg" data-lightbox="example-set"><img src="../images/destination/goa/hotel4.jpg" alt="thumb1"></a></li>
                <li><a href="../images/destination/goa/hotel5.jpg" data-lightbox="example-set"><img src="../images/destination/goa/hotel5.jpg" alt="thumb1"></a></li>
              </ul>
              <div class="note"><i class="bi bi-info-circle"></i> These hotels are subject to availability. In case of unavailability, the equivalent hotel will be provided and you can also choose the hotel category according to your convenience.</div>
            </div>
          </div>
          <!-- Hotel Categories --> 
          
          <!--  / Inclusions box \ -->
          <div class="Inclusions">
            <h2 class="heading" id="Inclusions">Inclusions</h2>
            <div class="blockBox">
              <ul class="contentList">
<?php echo $pkg['inclusions_html'] . "\n"; ?>              </ul>
            </div>
          </div>
          <!-- Inclusions --> 
          
          <!--  / Exclusions box \ -->
          <div class="exclusions">
            <h2 class="heading">Exclusions</h2>
            <div class="blockBox">
              <ul class="contentList">
<?php echo $pkg['exclusions_html'] . "\n"; ?>              </ul>
            </div>
          </div>
          <!-- Exclusions --> 
          
          <!--  / Cancelation Policies box \ -->
          <div class="cancelation_policies">
            <h2 class="heading" id="policies">Payment and Cancellation Policy</h2>
            <div class="blockBox">
              <ul class="contentList">
                <li>100% Payment Required before the travel.</li>
                <li>Free cancellation, if the booking is canceled 30 days before the date of arrival.</li>
                <li>50% cancellation will be charged if canceled 29 days before travel.</li>
                <li>90% cancellation will be charged if canceled 15 days before travel.</li>
                <li>In the case of No –Show, 100% of the total price of the reservation shall be charged.</li>
              </ul>
            </div>
          </div>
          <!-- Cancelation Policies --> 
          
          <!--  / Terms & Conditions box \ -->
          <div class="tncBlock">
            <h2 class="heading">Terms & Conditions</h2>
            <div class="blockBox">
<?php echo $pkg['terms_html'] . "\n"; ?>
            </div>
          </div>
          <!-- Terms & Conditions --> 
          
          <!--  / Reviews box \ -->
           <?php include '../reviews-inner.php';?>
          <!-- Reviews --> 
          
        </div>
        <!--  \ Left container / --> 
        
        <!--  / Right container \ -->
        <div id="rightCntr">
          <div id="stickyTop"></div>
          <div class="rightblock sticky" >
            <h2>Feel The <strong>Heaven Vibes!!</strong></h2>
            <div class="sendequiry rightBlcok"> <strong><?php echo $pkg['price_html']; ?></strong> <small>Per Person</small>
              <p>Starting from <span class="discount"><?php echo $pkg['price_original']; ?></span></p>
              <a href="javascript:void(0);" class="sendequirybtn commonbutton clickenquiry">Send Enquiry</a> </div>
            <div class="call_block rightBlcok">
              <h3>Any Questions?</h3>
              <p>Let our expert suggest the best for you!</p>
              <a href="tel:+91 9650932408" class="call_action"><img src="../images/icon/call-black.svg" alt="call" >+91 9650932408</a><br>
              <a href="https://wa.me/919650932408" target="_blank" class="call_action2">Quick Chat <img src="../images/icon/whatsapp.svg" alt="call" ></a> </div>
            <div class="rightMenu rightBlcok">
              <ul>
                <li><a href="#overviews" class="active">Overview</a></li>
                <li><a href="#Itinerary">Itinerary</a></li>
                <li><a href="#Inclusions">Inclusions & Exclusions</a></li>
                <li><a href="#policies">Policies</a></li>
                <li><a href="#reviews">Rating & Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--  \ Right container / -->
        
        <div class="clearfix"></div>
        <div id="sticky_footer"></div>
       <?php include '../shared/destination_bottom-inner.php';?>
        
      </div>
      
      <!--  / usp box \ -->
      <div class="uspBox showdesktop">
        <div class="container">
          <div class="holder">
            <div class="block"> <img src="../images/icon/percent.svg" alt="" />
              <p>Get 10% Off On Your Next Trip <br>
                With invisit</p>
            </div>
            <div class="block"> <img src="../images/icon/noun-map-color.svg" alt="" />
              <p>Customised Trips Available For Domestic <br>
                & International Destinations</p>
            </div>
            <div class="block"> <img src="../images/icon/bag.svg" alt="" />
              <p>All Arrangements For Corporate Tours <br>
                & Travel</p>
            </div>
          </div>
        </div>
      </div>
      <!--  \ usp  box / --> 
      
      <!--  / usp box \ -->
      <div class="uspBox showmobile">
        <div class="container">
          <div class="holder addSlider">
            <div class="block"> <img src="../images/icon/percent.svg" alt="" />
              <p>Get 10% Off On Your Next Trip <br>
                With invisit</p>
            </div>
            <div class="block"> <img src="../images/icon/noun-map-color.svg" alt="" />
              <p>Customised Trips Available For Domestic <br>
                & International Destinations</p>
            </div>
            <div class="block"> <img src="../images/icon/bag.svg" alt="" />
              <p>All Arrangements For Corporate Tours <br>
                & Travel</p>
            </div>
          </div>
        </div>
      </div>
      <!--  \ usp  box / --> 
      
    </div>
    <!--  \ content container / --> 
    
    <!--  / footer container \ -->
     <?php include '../shared/footer-inner.php';?>
    <!--  \ footer container / --> 
    
  </div>
  <!--  \ main container / --> 
  
</div>
<!--  \ wrapper / -->
<?php include '../shared/enquiry-inner.php';?>

<div class="enquiryStrip">
  <div class="mobleft">Starting from <span class="discount"><?php echo $pkg['price_original']; ?></span>
    <div class="price"><?php echo $pkg['price_bottom_html']; ?><small> Per Person</small></div> 
  </div>
  <a href="javascript:void(0);" class="viewdetailBtn commonbutton clickenquiry">Send Enquiry</a> </div>
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