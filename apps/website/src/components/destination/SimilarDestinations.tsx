import type { SimilarDestination } from '@/lib/types';

interface SimilarDestinationsProps {
  title: string;
  titleStrong: string;
  destinations: SimilarDestination[];
}

export default function SimilarDestinations({ title, titleStrong, destinations }: SimilarDestinationsProps) {
  return (
    <div className="sliderwithinfo">
      <h2 className="page_title">
        <strong>{titleStrong}</strong> {title}
        <a href="#" className="viewall">View All</a>
      </h2>
      <div className="holder centersliderresults">
        {destinations.map((dest, i) => (
          <div className="items" key={i}>
            <a href={dest.href} target="_blank">
              <div className="block">
                <figure>
                  <img src={dest.image} alt={dest.title} />
                  <figcaption>
                    <strong>{dest.title}</strong> | {dest.duration}
                  </figcaption>
                </figure>
                <div className="detail">
                  <p>{dest.description}</p>
                  <div className="price">
                    <span className="discount">{dest.originalPrice}</span>
                    {dest.price}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
