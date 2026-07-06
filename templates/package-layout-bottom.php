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
