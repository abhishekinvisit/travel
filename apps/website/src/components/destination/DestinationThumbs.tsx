import type { DestinationThumb } from '@/lib/types';

interface DestinationThumbsProps {
  destinations: DestinationThumb[];
}

export default function DestinationThumbs({ destinations }: DestinationThumbsProps) {
  return (
    <div className="thumBox">
      <div className="holder">
        {destinations.map((dest, i) => (
          <div className="items" key={i}>
            <a href={dest.href} target="_blank">
              <figure>
                <img src={dest.image} alt={dest.name} />
                <figcaption>{dest.name}</figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
