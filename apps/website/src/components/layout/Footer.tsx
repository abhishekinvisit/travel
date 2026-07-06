export default function Footer() {
  return (
    <>
      <footer id="footerCntr">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-6">
              <h4>Domestic Destinations</h4>
              <ul>
                <li><a href="/himachal-tour-packages.php" target="_blank">Himachal Pradesh</a></li>
                <li><a href="/leh-ladakh-tour-packages.php" target="_blank">Ladakh</a></li>
                <li><a href="/rajasthan-tour-packages.php" target="_blank">Rajasthan</a></li>
                <li><a href="/uttarakhand-tour-Packages.php" target="_blank">Uttarakhand</a></li>
                <li><a href="/kerala-tour-packages.php" target="_blank">Kerala</a></li>
                <li><a href="/kashmir-tour-packages.php" target="_blank">Kashmir</a></li>
                <li><a href="/andaman-holiday-packages.php" target="_blank">Andaman</a></li>
                <li><a href="/sikkim-tour-Packages.php" target="_blank">Sikkim</a></li>
                <li><a href="/northeast-tour-packages.php" target="_blank">North East</a></li>
                <li><a href="/meghalaya-tour-packages.php" target="_blank">Meghalaya</a></li>
                <li><a href="/goa-tour-packages.php" target="_blank">Goa</a></li>
              </ul>
              <div className="d-none d-lg-block">
                <h4>Follow us on</h4>
                <div className="social_icons">
                  <a href="https://www.linkedin.com/company/invisitt" target="_blank">
                    <img src="/images/icon/linkdin.svg" alt="linkdin" />
                  </a>
                  <a href="https://www.instagram.com/invisit.in/" target="_blank">
                    <img src="/images/icon/instagram.svg" alt="instagram" />
                  </a>
                  <a href="https://twitter.com/InvisitTravel" target="_blank">
                    <img src="/images/icon/facebook.svg" alt="facebook" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6">
              <h4>International Destinations</h4>
              <ul>
                <li><a href="/dubai-holiday-package.php" target="_blank">Dubai</a></li>
                <li className="internationalhide"><a href="/europe-group-tours.php" target="_blank">Europe Group</a></li>
                <li><a href="/singapore-tour-packages.php" target="_blank">Singapore</a></li>
                <li className="internationalhide"><a href="/turkey-group-tours.php" target="_blank">Turkey Group</a></li>
                <li><a href="/bali-tour-packages.php" target="_blank">Bali</a></li>
                <li><a href="/maldives-holiday-package.php" target="_blank">Maldives</a></li>
                <li><a href="/thailand-holiday-packages.php" target="_blank">Thailand</a></li>
                <li><a href="/nepal-holiday-packages.php" target="_blank">Nepal</a></li>
                <li><a href="/vietnam-tour-packages.php" target="_blank">Vietnam</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
              <h4>About invisit</h4>
              <ul>
                <li><a href="/about-us.php" target="_blank">About Us</a></li>
                <li><a href="/contact-us.php" target="_blank">Contact Us</a></li>
                <li><a href="/career.php" target="_blank">Career with invisit</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="/terms-and-conditions.php" target="_blank">Terms &amp; Conditions</a></li>
                <li><a href="/privacy-policy.php" target="_blank">Privacy Policy</a></li>
                <li><a href="/cancellation-policy.php" target="_blank">Cancellation Policy</a></li>
                <li><a href="/disclaimer.php" target="_blank">Disclaimer</a></li>
                <li><a href="/blogs.php" target="_blank">Travel Blogs</a></li>
                <li><a href="/flight-tickets.php" target="_blank">Flight Services</a></li>
                <li><a href="#">Corporate Travel</a></li>
                <li><a href="https://www.google.com/search?q=invisit" target="_blank">invisit Reviews</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
              <h4>Contact Info</h4>
              Email: <a href="mailto:Info@invisit.in">info@invisit.in</a><br />
              Phone: <a href="tel:+91 9650932408">+91 9650932408</a>
              <div className="corporate_add">
                <h4>Delhi Office</h4>
                <p>205 Aggarwal City Square, Sector 3, Rohini, New Delhi, Delhi 110085</p>
                <h4>Jaipur Office</h4>
                <p>Workhauz, Plot no.3, Power House, Mirza Ismail Rd, Jaipur, Rajasthan 302001</p>
                <div className="d-block d-lg-none">
                  <h4>Follow us on</h4>
                  <div className="social_icons">
                    <a href="https://www.linkedin.com/company/invisitt" target="_blank">
                      <img src="/images/icon/linkdin.svg" alt="linkdin" />
                    </a>
                    <a href="https://www.instagram.com/invisit.in/" target="_blank">
                      <img src="/images/icon/instagram.svg" alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/invisit.in/" target="_blank">
                      <img src="/images/icon/facebook.svg" alt="facebook" />
                    </a>
                  </div>
                </div>
                <img src="/images/logo-invisit.svg" alt="logo" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p className="copyright">@ 2023 - 2024 invisit.in All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button — controlled by global.js */}
      <button id="scrollBottomtop" title="Go to top" style={{ display: 'none' }}>
        <svg width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </button>
    </>
  );
}
