'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MobileDropdown {
  [key: string]: boolean;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<MobileDropdown>({});

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <header id="headerCntr">
        {/* Offer bar */}
        <div className="offerheader" id="openPopupBtn">
          <div className="desktop">
            <div className="container">
              <div className="holder">
                <div className="offer"><span>Introducing</span></div>
                <div className="traveloffer">
                  <span className="hand"><img src="/images/hand.svg" alt="hand" /></span>
                  <span className="hand travelBooking"><img src="/images/travelBooking.png" alt="travelBooking" /></span>
                </div>
                <div className="offer"><span>upto 50% off</span></div>
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="holder">
              <div className="traveloffer">
                <span className="hand"><img src="/images/hand.svg" alt="hand" /></span>
                <span className="hand travelBooking"><img src="/images/travelBooking.png" alt="travelBooking" /></span>
              </div>
              <div className="offerrepeat">
                <div className="marquee-container">
                  <span>upto 50% off</span>
                  <span>upto 50% off</span>
                  <span>upto 50% off</span>
                  <span>upto 50% off</span>
                  <span>upto 50% off</span>
                  <span>upto 50% off</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="container">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="logotransparent" target="_blank">
              <img src="/images/logo-invisit.svg" alt="logo-invisit" />
            </a>
            <a href="/" target="_blank" className="logoblack">
              <img src="/images/logo-black.svg" alt="logo-invisit" />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="menuBox" id="nav">
            <ul>
              <li><a href="/" target="_blank" className="home">Home</a></li>
              <li>
                <a href="javascript:void(0);" className="group">Group Tours</a>
                <ul className="dropdownMenu">
                  <li><a href="/group-tours.php" target="_blank" className="clickenquiry">Domestic Group Tours</a></li>
                  <li><a href="/international-group-tours.php" target="_blank">International Group Tours</a></li>
                </ul>
              </li>
              <li>
                <a href="/domestic-trips.php" target="_blank" className="domestic">Domestic</a>
                <ul className="dropdownMenu">
                  <li><a href="/kerala-tour-packages.php" target="_blank">Kerala</a></li>
                  <li><a href="/goa-tour-packages.php" target="_blank">Goa</a></li>
                  <li><a href="/kashmir-tour-packages.php" target="_blank">Kashmir</a></li>
                  <li><a href="/meghalaya-tour-packages.php" target="_blank">Meghalaya</a></li>
                  <li><a href="/udaipur-tour-packages.php" target="_blank">Udaipur</a></li>
                  <li><a href="/andaman-holiday-packages.php" target="_blank">Andaman</a></li>
                  <li><a href="/leh-ladakh-tour-packages.php" target="_blank">Ladakh</a></li>
                  <li><a href="/northeast-tour-packages.php" target="_blank">North East</a></li>
                  <li><a href="/kedarnath-tour-Packages.php" target="_blank">Kedarnath</a></li>
                  <li><a href="/himachal-tour-packages.php" target="_blank">Himachal</a></li>
                  <li><a href="/uttarakhand-tour-Packages.php" target="_blank">Uttarakhand</a></li>
                  <li><a href="/rajasthan-tour-packages.php" target="_blank">Rajasthan</a></li>
                  <li><a href="/sikkim-tour-Packages.php" target="_blank">Sikkim</a></li>
                </ul>
              </li>
              <li>
                <a href="/international-trips.php" target="_blank" className="international">International</a>
                <ul className="dropdownMenu">
                  <li><a href="/dubai-holiday-package.php" target="_blank">Dubai</a></li>
                  <li><a href="/europe-group-tours.php" target="_blank">Europe</a></li>
                  <li><a href="/singapore-tour-packages.php" target="_blank">Singapore</a></li>
                  <li><a href="/turkey-group-tours.php" target="_blank">Turkey</a></li>
                  <li><a href="/bali-tour-packages.php" target="_blank">Bali</a></li>
                  <li><a href="/maldives-holiday-package.php" target="_blank">Maldives</a></li>
                  <li><a href="/thailand-holiday-packages.php" target="_blank">Thailand</a></li>
                  <li><a href="/nepal-holiday-packages.php" target="_blank">Nepal</a></li>
                  <li><a href="/vietnam-tour-packages.php" target="_blank">Vietnam</a></li>
                  <li><a href="/baku-holiday-packages.php" target="_blank">Baku</a></li>
                  <li><a href="/srilanka-tour-packages.php" target="_blank">Sri Lanka</a></li>
                  <li><a href="/japan-tour-packages.php" target="_blank">Japan</a></li>
                </ul>
              </li>
              <li><a href="/couple-trips.php" target="_blank" className="couple">Couple Trips</a></li>
              <li><a href="/honeymoon-package.php" target="_blank">Honeymoon</a></li>
              <li><a href="/blogs.php" className="blogs" target="_blank">Blogs</a></li>
              <li>
                <a href="#" className="more">More</a>
                <ul className="dropdownMenu">
                  <li><a href="/about-us.php" target="_blank">About Us</a></li>
                  <li><a href="/contact-us.php" target="_blank">Contact Us</a></li>
                  <li><a href="/career.php" target="_blank">Career with invisit</a></li>
                  <li><a href="https://www.google.com/search?q=invisit" target="_blank">invisit Reviews</a></li>
                  <li><a href="/flight-tickets.php" target="_blank">Flight Tickets</a></li>
                  <li><a href="/hotel-booking.php" target="_blank">Hotel Booking</a></li>
                  <li><a href="/luxury-packages.php" target="_blank">Luxury Packages</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Right side: Instagram + Call */}
          <div className="right">
            <a href="https://www.instagram.com/invisit.in/" target="_blank">
              <img src="/images/instagram.png" alt="instagram" />
            </a>
            <a href="tel:+91 9650932408" className="call">Call us</a>
          </div>

          {/* Mobile menu overlay */}
          <div className={`mobileMenuBox${mobileMenuOpen ? ' open' : ''}`} style={mobileMenuOpen ? { display: 'block' } : { display: 'none' }}>
            <a href="javascript:void(0);" className="closemenu" onClick={() => setMobileMenuOpen(false)}>
              <i className="bi bi-x-lg"></i>
            </a>
            <div className="holder">
              <div className="call">
                <a href="tel:+91 9650932408">
                  <img src="/images/icon/call-icon-mob.svg" alt="" />
                  +91 9650932408 <span>Call us 24/7</span>
                </a>
              </div>
              <ul>
                <li><a href="/" target="_blank" className="home">Home</a></li>
                <li><a href="/group-tours.php" target="_blank" className="group">Weekend Group Tours</a></li>
                <li>
                  <a href="/group-tours.php" target="_blank" className="group">Group Tours</a>
                  <i className="clickbtnmobile bi bi-chevron-up" onClick={() => toggleMobileDropdown('group')}></i>
                  <ul className="dropdownMenu show_dropdown" style={{ display: mobileDropdowns['group'] ? 'block' : 'none' }}>
                    <li><a href="javascript:void(0);" className="clickenquiry">Domestic Group Tours</a></li>
                    <li><a href="/international-group-tours.php" target="_blank">International Group Tours</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/domestic-trips.php" target="_blank" className="domestic">Domestic Trips</a>
                  <i className="clickbtnmobile bi bi-chevron-up" onClick={() => toggleMobileDropdown('domestic')}></i>
                  <ul className="dropdownMenu show_dropdown" style={{ display: mobileDropdowns['domestic'] ? 'block' : 'none' }}>
                    <li><a href="/kerala-tour-packages.php" target="_blank">Kerala</a></li>
                    <li><a href="/goa-tour-packages.php" target="_blank">Goa</a></li>
                    <li><a href="/kashmir-tour-packages.php" target="_blank">Kashmir</a></li>
                    <li><a href="/meghalaya-tour-packages.php" target="_blank">Meghalaya</a></li>
                    <li><a href="/udaipur-tour-packages.php" target="_blank">Udaipur</a></li>
                    <li><a href="/andaman-holiday-packages.php" target="_blank">Andaman</a></li>
                    <li><a href="/leh-ladakh-tour-packages.php" target="_blank">Ladakh</a></li>
                    <li><a href="/northeast-tour-packages.php" target="_blank">North East</a></li>
                    <li><a href="/kedarnath-tour-Packages.php" target="_blank">Kedarnath</a></li>
                    <li><a href="/himachal-tour-packages.php" target="_blank">Himachal</a></li>
                    <li><a href="/uttarakhand-tour-Packages.php" target="_blank">Uttarakhand</a></li>
                    <li><a href="/rajasthan-tour-packages.php" target="_blank">Rajasthan</a></li>
                    <li><a href="/sikkim-tour-Packages.php" target="_blank">Sikkim</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/international-trips.php" target="_blank" className="international">International Trips</a>
                  <i className="clickbtnmobile bi bi-chevron-up" onClick={() => toggleMobileDropdown('international')}></i>
                  <ul className="dropdownMenu show_dropdown" style={{ display: mobileDropdowns['international'] ? 'block' : 'none' }}>
                    <li><a href="/dubai-holiday-package.php" target="_blank">Dubai</a></li>
                    <li><a href="/europe-group-tours.php" target="_blank">Europe</a></li>
                    <li><a href="/singapore-tour-packages.php" target="_blank">Singapore</a></li>
                    <li><a href="/turkey-group-tours.php" target="_blank">Turkey</a></li>
                    <li><a href="/bali-tour-packages.php" target="_blank">Bali</a></li>
                    <li><a href="/maldives-holiday-package.php" target="_blank">Maldives</a></li>
                    <li><a href="/thailand-holiday-packages.php" target="_blank">Thailand</a></li>
                    <li><a href="/nepal-holiday-packages.php" target="_blank">Nepal</a></li>
                    <li><a href="/vietnam-tour-packages.php" target="_blank">Vietnam</a></li>
                    <li><a href="/baku-holiday-packages.php" target="_blank">Baku</a></li>
                    <li><a href="/srilanka-tour-packages.php" target="_blank">Sri Lanka</a></li>
                    <li><a href="/japan-tour-packages.php" target="_blank">Japan</a></li>
                  </ul>
                </li>
                <li><a href="/couple-trips.php" target="_blank" className="couple">Couple Trips</a></li>
                <li><a href="/honeymoon-package.php" target="_blank">Honeymoon</a></li>
                <li><a href="/luxury-packages.php" target="_blank">Luxury Packages</a></li>
                <li><a href="/flight-tickets.php" target="_blank">Flights <span className="bluebg">Cheapest Available</span></a></li>
                <li><a href="/hotel-booking.php" target="_blank">Hotels <span className="yellowbg">100K+</span></a></li>
                <li><a href="/career.php" target="_blank">Career With invisit <span className="bluebg">Jobs</span></a></li>
                <li><a href="/blogs.php" target="_blank">Blogs</a></li>
                <li><a href="/contact-us.php" target="_blank">Contact Us</a></li>
              </ul>
              <div className="social_icons">
                <strong>Follow us on</strong>
                <a href="https://www.linkedin.com/company/invisitt" target="_blank">
                  <img src="/images/icon/linkdin-mob.svg" alt="linkdin" />
                </a>
                <a href="https://www.instagram.com/invisit.in/" target="_blank">
                  <img src="/images/icon/instagram-mob.svg" alt="instagram" />
                </a>
                <a href="https://www.facebook.com/invisit.in/" target="_blank">
                  <img src="/images/icon/facebook-mob.svg" alt="facebook" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <a className="mobileMenu" href="javascript:void(0);" onClick={() => setMobileMenuOpen(true)}>
            <img src="/images/icon/mobile-icon.svg" alt="" className="normalimg" />
            <img src="/images/icon/mobile-icon-sticky.svg" className="stickyimg" alt="" />
          </a>
        </div>

        <div className="clearfix"></div>
      </header>
    </>
  );
}
