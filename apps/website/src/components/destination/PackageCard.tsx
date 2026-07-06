import type { TourPackage } from '@/lib/types';

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <a href={pkg.href} target="_blank">
      <div className="resultsBox">
        <div className="left">
          <figure>
            <img src={pkg.image} alt={pkg.title} />
            {pkg.badge && (
              <span className="recmandend-new">
                {pkg.badgeIcon && <i className={pkg.badgeIcon}></i>}
                {pkg.badgeIcon ? ' ' : ''}{pkg.badge}
              </span>
            )}
          </figure>
          <div className="detail">
            <h2>{pkg.title}</h2>
            <span className="daynight">{pkg.duration}</span>
            <ul>
              {pkg.inclusions.map((inc, i) => (
                <li key={i}>
                  <div className="icon">
                    <img src={inc.icon} alt={inc.label} className={inc.className} />
                  </div>
                  <span>{inc.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightmobile"></div>
        <div className="right">
          <div className="mobleft">
            {pkg.discountLabel ? (
              <>
                <span className="discount">{pkg.originalPrice}</span>{' '}
                <b>{pkg.discountLabel}</b>
              </>
            ) : (
              <span>Starting from <span className="discount">{pkg.originalPrice}</span></span>
            )}
            <div className="price">
              {pkg.price} <small>Per Person</small>
            </div>
          </div>
          <span className="viewdetailBtn commonbutton">View Detail</span>
        </div>
      </div>
    </a>
  );
}
