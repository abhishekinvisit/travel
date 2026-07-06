const REVIEWS_URL =
  'https://www.google.com/search?q=invisit#lrd=0x390d035aeead9b33:0x51feccb12f08595,1,,,,';

export default function ReviewsSection() {
  return (
    <div className="reviewsBox">
      <h2 className="heading" id="reviews">Reviews</h2>
      <div className="poweredBy">Powered By <strong>Google</strong></div>
      <div className="blockBox">
        <div className="left">
          <div className="np">
            <div className="count">4.8 <span className="rating single"></span></div>
            <p>Based On <strong>Google Reviews</strong></p>
          </div>
          <a href={REVIEWS_URL} target="_blank" className="reviewsbutton commonbutton">
            Check Reviews
          </a>
        </div>
        <div className="right">
          <div className="barrow">
            <strong>5</strong> <span className="rating single"></span>Excellent{' '}
            <span className="bar"><span className="inner" style={{ width: '80%' }}></span></span>
          </div>
          <div className="barrow">
            <strong>4</strong> <span className="rating single"></span>Good{' '}
            <span className="bar"><span className="inner" style={{ width: '70%' }}></span></span>
          </div>
          <div className="barrow">
            <strong>3</strong> <span className="rating single"></span>Average{' '}
            <span className="bar"><span className="inner" style={{ width: '40%' }}></span></span>
          </div>
          <div className="barrow">
            <strong>2</strong> <span className="rating single"></span>Poor{' '}
            <span className="bar"><span className="inner" style={{ width: '20%' }}></span></span>
          </div>
          <div className="barrow">
            <strong>1</strong> <span className="rating single"></span>Bad{' '}
            <span className="bar"><span className="inner" style={{ width: '10%' }}></span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
