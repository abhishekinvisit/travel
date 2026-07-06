'use client';

import { useState, useEffect } from 'react';

export default function EnquiryPopup() {
  const [enquiryVisible, setEnquiryVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);

  // Show enquiry popup after 20 seconds (matching original PHP behaviour)
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnquiryVisible(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for clicks on elements with class 'clickenquiry'
  useEffect(() => {
    const handleEnquiryClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.classList.contains('clickenquiry') ||
        target.closest('.clickenquiry') ||
        target.classList.contains('sendequirybtn')
      ) {
        e.preventDefault();
        setEnquiryVisible(true);
      }
    };
    document.addEventListener('click', handleEnquiryClick);
    return () => document.removeEventListener('click', handleEnquiryClick);
  }, []);

  // Listen for clicks on #openPopupBtn (offer header bar)
  useEffect(() => {
    const btn = document.getElementById('openPopupBtn');
    if (!btn) return;
    const handler = () => setOfferVisible(true);
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, []);

  return (
    <>
      {/* Salesmax AI script */}
      <script async src="https://salesmax.ai/formdata/js/index.js"></script>

      <div className="pageoverlay" style={{ display: enquiryVisible || offerVisible ? 'block' : 'none' }}
        onClick={() => { setEnquiryVisible(false); setOfferVisible(false); }}
      />

      {/* Sticky call banner */}
      <div className="call_banner">
        <a href="javascript:void(0)" className="close">
          <img src="/images/icon/close-call-pop.svg" alt="" />
        </a>
        <img src="/images/sticky-banner.png" alt="" />
        <a href="tel:+91 9650932408" className="call_icon">
          <img src="/images/icon/phone-icon-call-pop.svg" alt="" />
          +91 9650932408
        </a>
      </div>

      {/* Sticky WhatsApp/Call mobile bar */}
      <div className="stickyCallMob">
        <a href="javascript:void(0);" className="whatsapp_icon">
          <img src="/images/icon/whatsapp-icon.svg" alt="" />
        </a>
        <div className="call_dropdown">
          <ul>
            <li>
              <a href="javascript:void(0);" className="clickenquiry">
                <img src="/images/icon/enquiry.svg" alt="en" />Send Enquiry
              </a>
            </li>
            <li>
              <a href="https://wa.me/919650932408" target="_blank">
                <img src="/images/icon/whatsapp-icon_sm.svg" alt="en" />WhatsApp
              </a>
            </li>
            <li>
              <a href="tel:+91 9650932408">
                <img src="/images/icon/call-mob-icon.svg" alt="en" />Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Enquiry Popup ── */}
      <div className="popup_Box" id="enquirypopup" style={{ display: enquiryVisible ? 'block' : 'none' }}>
        <div className="center-block">
          <div className="outer">
            <div className="enquiryBox">
              <a href="javascript:void(0)" className="close__popup" onClick={() => setEnquiryVisible(false)}>
                <img src="/images/icon/popup-close.svg" alt="" />
              </a>
              <div className="left">
                <img src="/images/popup-banner.svg" alt="" />
              </div>
              <div className="popupmobile_image">
                <img src="/images/popup-banner_mobile.svg" alt="" />
              </div>
              <div className="right">
                <h2>Let us Help!</h2>
                <p>We make sure you get your desired travel services with minimal efforts.</p>
                <form action="/send.php" method="post" target="_blank">
                  <div className="holder">
                    <div className="column">
                      <label className="label">Name</label>
                      <input type="text" className="inputText" placeholder="Type here..." name="first_name" required />
                    </div>
                    <div className="column">
                      <label className="label">Phone</label>
                      <input type="tel" className="inputText" placeholder="99xxxxx7x5" name="mobile_no" required minLength={10} maxLength={14} pattern="[0-9]{10}" />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="holder">
                    <div className="column">
                      <div className="form-row">
                        <label className="label">Location</label>
                        <input type="text" className="inputText" placeholder="Type here..." name="location" required />
                      </div>
                    </div>
                    <div className="column">
                      <div className="form-row">
                        <label className="label">Destination</label>
                        <input type="text" className="inputText" placeholder="E.g.. Manali" name="destination" required />
                      </div>
                    </div>
                  </div>
                  <div className="holder">
                    <div className="column">
                      <label className="label">No. Of Travelers</label>
                      <input type="number" className="inputText" placeholder="Type here..." name="no_of_travelers" />
                    </div>
                    <div className="column">
                      <label className="label">Date Of Travel</label>
                      <input type="date" className="inputText" name="travel_date" style={{ background: '#fff' }} required pattern="\d{4}-\d{2}-\d{2}" />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <input type="submit" name="submit" value="Send Enquiry" className="submitButton" />
                  <div className="clearfix"></div>
                </form>
                <div className="safe">
                  <i className="bi bi-check-circle-fill"></i> We Are Safe And Secure
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Offer Popup ── */}
      <div className="popup_Box" id="enquirypopup_offer" style={{ display: offerVisible ? 'block' : 'none' }}>
        <div className="center-block">
          <div className="outer">
            <div className="enquiryBox">
              <a href="javascript:void(0)" id="closePopupBtn" className="close__popup" onClick={() => setOfferVisible(false)}>
                <img src="/images/icon/popup-close.svg" alt="" />
              </a>
              <div className="left">
                <img src="/images/popup-banner.svg" alt="" />
              </div>
              <div className="popupmobile_image">
                <img src="/images/popup-banner_mobile.svg" alt="" />
              </div>
              <div className="right">
                <div className="offer_content">
                  <h3>How To Avail <br />This Offer?</h3>
                  <div className="subtitle"><strong>Follow The Simple Steps :</strong></div>
                  <div className="steps"><strong>Step 1 - </strong> Connect With Our Destination Expert &amp; Get Your Holiday Package According To Your Preference.</div>
                  <div className="steps"><strong>Step 2 - </strong>Get A Special Price Quotation From Our Expert For Your Customised Itinerary.</div>
                  <div className="steps"><strong>Step 3 -</strong> Pay The Minimum Amount Within 10 Minutes &amp; Get Up To 50% Off.</div>
                  <a href="https://wa.me/919650932408" className="knowmorebg" target="_blank">Know more</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
