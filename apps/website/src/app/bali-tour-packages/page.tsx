import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EnquiryPopup from '@/components/common/EnquiryPopup';
import PackageCard from '@/components/destination/PackageCard';
import FAQAccordion from '@/components/destination/FAQAccordion';
import ReviewsSection from '@/components/destination/ReviewsSection';
import SimilarDestinations from '@/components/destination/SimilarDestinations';
import DestinationThumbs from '@/components/destination/DestinationThumbs';
import ContentPopup from '@/components/destination/ContentPopup';
import BaliContent from '@/components/destination/BaliContent';
import {
  baliPackages,
  baliFilters,
  baliFAQs,
  baliBlogs,
  internationalThumbs,
  similarDestinations,
  exploreMore,
} from '@/data/bali-packages';

// ─────────────────────────────────────────────
// SEO — exactly as in the original PHP file
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Best Bali Tour Packages from Delhi',
  description:
    'Book the cheapest Bali Tour packages from Delhi and Bali Trip Packages with invisit for a memorable Bali vacation | invisit travels',
  keywords:
    'Bali Tour Packages, Bali Tour, Bali tour Packages from Delhi, Bali Trip, Bali Holiday Packages, bali packages bali trip packages, bali tourism,bali holiday packages,bali packages, bali island tour packages',
  authors: [{ name: 'invisit' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://invisit.in/bali-tour-packages.php',
  },
  openGraph: {
    title: 'Best Bali Tour Packages from Delhi',
    description:
      'Book the cheapest Bali Tour packages from Delhi and Bali Trip Packages with invisit for a memorable Bali vacation.',
    url: 'https://invisit.in/bali-tour-packages.php',
    siteName: 'invisit',
    type: 'website',
  },
};

export default function BaliTourPackagesPage() {
  return (
    <>
      <div id="wrapper">
        <div id="mainCntr">
          {/* Header */}
          <Header />

          {/* Banner */}
          <div
            className="citybannerBox shadow"
            style={{ backgroundImage: 'url(/images/destination/bali/banner.jpg)' }}
          >
            <div className="banner_text">
              <div className="container">
                <span>Up To 40% OFF</span>
                <br />
                <h1>
                  Bali Tour Packages <span>INR 22,999</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Content container */}
          <div id="contentCntr">
            <div className="container">
              {/* Destination filter tabs */}
              <div className="sortingBox">
                <h2>
                  View By <strong>Destination</strong>
                </h2>
                <ul>
                  {baliFilters.map((filter, i) => (
                    <li key={i}>
                      <a href={filter.href} className={filter.active ? 'active' : ''}>
                        {filter.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read-more content popup */}
              <ContentPopup
                title="All About Bali Trip"
                previewText="Whether you're up for a Solo trip, honeymoon trip, or planning a fun-filled family vacation, Bali, Indonesia - the island of gods, is the ultimate travel destination for all."
              >
                <BaliContent />
              </ContentPopup>

              {/* Package listings (left) + sidebar (right) */}
              <div id="leftCntr">
                {baliPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>

              {/* Right sidebar */}
              <div id="rightCntr">
                <div id="stickyTop"></div>
                <div className="rightblock sticky">
                  <div className="stkysidebar">
                    <div className="call_block rightBlcok">
                      <h3>Any Questions?</h3>
                      <p>Let our expert suggest the best for you!</p>
                      <a href="tel:+91 9650932408" className="call_action">
                        <img src="/images/icon/call-black.svg" alt="call" />
                        +91 9650932408
                      </a>
                      <br />
                      <a
                        href="https://wa.me/919650932408"
                        target="_blank"
                        className="call_action2"
                      >
                        Quick Chat <img src="/images/icon/whatsapp.svg" alt="whatsapp" />
                      </a>{' '}
                      <a
                        href="javascript:void(0);"
                        className="call_action2 sendequirybtn clickenquiry"
                      >
                        Send Enquiry
                      </a>
                    </div>
                    <a href="https://invisit.in/bali-tour-packages.php" target="_blank">
                      <img
                        src="/images/monsoon-side-banner.png"
                        alt="monsoon destinations"
                        className="sidebanner"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div id="sticky_footer"></div>

              {/* International destination thumbnails */}
              <DestinationThumbs destinations={internationalThumbs} />

              {/* FAQ section */}
              <FAQAccordion faqs={baliFAQs} heading="Bali FAQ" />

              {/* Bali Blog section */}
              <div className="faqcityBox">
                <h2 className="heading" id="Itinerary">
                  Bali Blog
                </h2>
                <div className="blogList-2">
                  <div className="holder topBlog">
                    {baliBlogs.map((blog, i) => (
                      <div className="items" key={i}>
                        <a href={blog.href} target="_blank">
                          <div className="block">
                            <figure>
                              <img src={blog.image} alt={blog.title} />
                            </figure>
                            <div className="detail">
                              <h2>{blog.title}</h2>
                              <p>{blog.excerpt}</p>
                              <span className="text-orange">read more</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <ReviewsSection />

            {/* Similar & Explore sections */}
            <SimilarDestinations
              titleStrong="Similar"
              title="Destinations"
              destinations={similarDestinations}
            />
            <SimilarDestinations
              titleStrong="Explore"
              title="More"
              destinations={exploreMore}
            />

            {/* Ad banners */}
            <div className="addblogBox">
              <div className="holder addSlider">
                {[1, 2, 3].map((n) => (
                  <div className="items clickenquiry" key={n}>
                    <figure>
                      <img src={`/images/destination/add_banner_${n}.jpg`} alt="offer" />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Travel Blog section */}
          <div className="travelBlog">
            <div className="container"></div>

            <div className="addblogBox d-none d-md-block">
              <div className="holder addSlider" data-aos="flip-left">
                {[1, 2, 3].map((n) => (
                  <div className="items" key={n}>
                    <a href="/things-to-do-in-dubai.php" target="_blank">
                      <figure>
                        <img src="/images/blog/blog-banner.jpg" alt="blog-banner" />
                      </figure>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="addblogBox d-block d-md-none">
              <div className="holder addSlider">
                <div className="items">
                  <a href="/things-to-do-in-dubai.php" target="_blank">
                    <figure>
                      <img src="/images/blog/banner-top10-mob.jpg" alt="blog-banner" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row blogBox">
                <div className="col-lg-4">
                  <a
                    href="https://invisit.in/blogs/delhi/best-weekend-group-tours-from-delhi.php"
                    target="_blank"
                  >
                    <div className="block">
                      <figure>
                        <img
                          src="/images/blog/best-weekend-group-tours-from-delhi/thumb.jpg"
                          alt="blog"
                        />
                      </figure>
                      <div className="detail">
                        <h4>8 Best Weekend Group Tours from Delhi</h4>
                        <p>North India is the epitome of...</p>
                        <small>5 Min Read</small>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a
                    href="https://invisit.in/blogs/delhi/weekend-getaways-from-delhi.php"
                    target="_blank"
                  >
                    <div className="block">
                      <figure>
                        <img
                          src="/images/blog/weekend-getaways-from-delhi/thumb.jpg"
                          alt="blog"
                        />
                      </figure>
                      <div className="detail">
                        <h4>Budget-friendly Weekend Getaways from Delhi</h4>
                        <p>The weekend is for relaxation and...</p>
                        <small>4 Min Read</small>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a
                    href="https://invisit.in/blogs/delhi/weekend-trips-from-delhi.php"
                    target="_blank"
                  >
                    <div className="block">
                      <figure>
                        <img
                          src="/images/blog/weekend-trips-from-delhi/thumb.jpg"
                          alt="blog"
                        />
                      </figure>
                      <div className="detail">
                        <h4>Best Places to Visit During Weekend Trips from Delhi</h4>
                        <p>Don&rsquo;t get stressed finding out...</p>
                        <small>4 Min Read</small>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <a href="/blogs.php" target="_blank" className="viewall">
                View All
              </a>
            </div>

            {/* USP strip */}
            <div className="uspBox showdesktop">
              <div className="container">
                <div className="holder">
                  <div className="block">
                    <img src="/images/icon/percent.svg" alt="" />
                    <p>
                      Get 10% Off On Your Next Trip
                      <br />
                      With invisit
                    </p>
                  </div>
                  <div className="block">
                    <img src="/images/icon/noun-map-color.svg" alt="" />
                    <p>
                      Customised Trips Available For Domestic
                      <br />
                      &amp; International Destinations
                    </p>
                  </div>
                  <div className="block">
                    <img src="/images/icon/bag.svg" alt="" />
                    <p>
                      All Arrangements For Corporate Tours
                      <br />
                      &amp; Travel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="st_footer"></div>
          <Footer />
        </div>
      </div>

      {/* Enquiry popup */}
      <EnquiryPopup />

      {/* Sticky bottom call button (mobile) */}
      <div className="stickyHeight"></div>
      <div className="sticky-mobile-buttons">
        <a href="tel:+91 9650932408">Call Now</a>
      </div>

      {/* Page-level script — only things NOT already in global.js.
          global.js already handles: .addSlider, .centersliderresults, .clickenquiry,
          .close__popup (enquiry popup). Do NOT duplicate those here. */}
      <Script
        id="bali-page"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            $(document).ready(function(){
              // Highlight active nav item
              $('.menuBox ul li a.international').addClass('active');

              // Content popup open (readmore) — global.js does not handle this
              $(".readmoreclick").click(function(){
                $("#contentpopup").show();
                $("body").addClass("open-model");
              });

              // Content popup close button
              $(document).on('click', '.close__popup_content', function(){
                $("#contentpopup").hide();
                $("body").removeClass("open-model");
              });
            });
          `,
        }}
      />
    </>
  );
}
