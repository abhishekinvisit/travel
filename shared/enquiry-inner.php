
<script async src="https://salesmax.ai/formdata/js/index.js"></script>

<script>
window.salesmaxDataLayer = window.salesmaxDataLayer || [];
  function salesmax() {
    window.salesmaxDataLayer.push(arguments);
  }
  salesmax('form-id', 'enquirypopup');
  salesmax('account', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMDgyNjExOS1mODQ1LTRjYzMtYmU1MC1iNzIwNmY4N2IxY2UiLCJzdWIiOiIyMWE5ODgwMC1iNDJkLTRmOWEtYjg5Ny0wOTA3MWY3MzI3MmUiLCJpYXQiOjE3MzM1NTI5MTh9.Jo5XSePXzlQoGaeqwU3NmQmYXYjusaqEs5Obojirmzg');
</script>

<div class="pageoverlay"></div>
<div class="call_banner"> <a href="javascript:void(0)" class="close"><img src="../images/icon/close-call-pop.svg" /></a> <img src="../images/sticky-banner.png" alt="" /> <a href="tel:+91 9650932408" class="call_icon"><img src="../images/icon/phone-icon-call-pop.svg" />+91 9650932408</a> </div>
<div class="stickyCallMob"> <a href="javascript:void(0);" class="whatsapp_icon"><img src="../images/icon/whatsapp-icon.svg" alt="" /> </a>
  <div class="call_dropdown">
    <ul>
      <li><a href="javascript:void(0);" class="clickenquiry"><img src="../images/icon/enquiry.svg" alt="en" >Send Enquiry</a></li>
      <li><a href="https://wa.me/919650932408" target="_blank"><img src="../images/icon/whatsapp-icon_sm.svg" alt="en" >WhatsApp</a></li>
      <li><a href="tel:+91 9650932408"><img src="../images/icon/call-mob-icon.svg" alt="en" >Call Now</a></li>
    </ul>
  </div>
</div>

<!-- Enquiry PopupBox-->

<div class="popup_Box" id="enquirypopup" style="display:none;">
  <div class="center-block">
    <div class="outer">
      <div class="enquiryBox"> <a href="javascript:void(0)" class="close__popup"><img src="../images/icon/popup-close.svg" alt="" /></a>
        <div class="left"> <img src="../images/popup-banner.svg?12333" alt="" /> </div>
	<div class="popupmobile_image">
		<img src="../images/popup-banner_mobile.svg?15445" alt="" />
		</div>
        <div class="right">
          <h2>Let us Help!</h2>
          <p>We make sure you get your desired travel services with minimal efforts.</p>
          <form action="../send.php" method="post" id="enquirypopup" target="_blank">
            <div class="holder">
              <div class="column">
                <label class="label">Name</label>
                <input type="text" class="inputText"  placeholder="Type here..." name="first_name" required />
              </div>
              <div class="column">
                <label class="label">Phone</label>
                <input type="tel" class="inputText" placeholder="99xxxxx7x5" name="mobile_no" required minlength="10" maxlength="14" pattern="[0-9]{10}"/>
              </div>
            </div>
			<div class="clearfix"></div>
			<div class="holder">
				<div class="column">
					<div class="form-row">
					  <label class="label">Location</label>
					  <input type="text" class="inputText" placeholder="Type here..." name="location" required />
					</div>
				</div>
				<div class="column">
					<div class="form-row">
					  <label class="label">Destination</label>
					  <input type="text" class="inputText" placeholder="E.g.. Manali" name="destination" required />
					</div>
				</div>
			</div>
            <div class="holder">
              <div class="column">
                <label class="label">No. Of Travelers</label>
                <input type="number" class="inputText" placeholder="Type here..." name="no_of_travelers" />
              </div>
              <div class="column">
                <label class="label">Date Of Travel</label>
                <!--<input type="text" class="inputText" placeholder="DD/MM/YYY" name="travel_date" required />-->
                <input type="date" class="inputText" name="travel_date" style="background:#fff;" required pattern="\d{4}-\d{2}-\d{2}" />
              </div>
            </div>
            <div class="clearfix"></div>
            <input type="submit" name="submit" value="Send Enquiry" class="submitButton" id="addEventListener">
            <div class="clearfix"></div>
          </form>
          <div class="safe"><i class="bi bi-check-circle-fill"></i> We Are Safe And Secure</div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>


<div class="popup_Box" id="enquirypopup_offer" style="display:none;">
  <div class="center-block">
    <div class="outer">
      <div class="enquiryBox"> <a href="javascript:void(0)" id="closePopupBtn" class="close__popup "><img src="../images/icon/popup-close.svg" alt="" /></a>
        <div class="left"> <img src="../images/popup-banner.svg?345" alt="" /> </div>
		
		<div class="popupmobile_image">
		<img src="../images/popup-banner_mobile.svg?345" alt="" />
		</div>
        <div class="right">
		
		<div class="offer_content">
		<h3>How To Avail <br />This Offer?</h3>
		<div class="subtitle"><strong>Follow The Simple Steps :</strong></div>
		
		<div class="steps"><strong>Step 1 - </strong> Connect With Our Destination Expert & Get Your Holiday Package According To Your Preference.</div>
		
		<div class="steps"><strong>Step 2 - </strong>Get A Special Price Quotation From Our Expert For Your Customised Itinerary.</div>
		
		<div class="steps"><strong>Step 3 -</strong> Pay The Minimum Amount Within 10 Minutes & Get Up To 50% Off.</div>
		
		
		<a href="https://wa.me/919650932408" class="knowmorebg" target="_blank">Know more</a>
		</div>
          
          
          
          
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>

<script>
        // Get references to elements
        const openPopupBtn = document.getElementById('openPopupBtn');
        const popup = document.getElementById('enquirypopup_offer');
        const closePopupBtn = document.getElementById('closePopupBtn');

        // Show the popup when the button is clicked
        openPopupBtn.addEventListener('click', function() {
            popup.style.display = 'block';
        });

        // Hide the popup when the close button is clicked
        closePopupBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });

        // Optionally, close the popup if the user clicks outside of the popup content
        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    </script>
	
