import Button from '../atoms/Button'

export default function EventCard({ city, date, distance, image, badge }) {
  return (
    <article className="card bg-base-200 hover:scale-105 hover:shadow-xl transition-transform">
      <figure>
        <img
          src={image}
          alt={city}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
      </figure>
      <div className="card-body items-start">
        <h3 className="card-title">{city}</h3>
        <p>{date}</p>
        <p>
          {distance}
          {badge && <span className="badge badge-outline ml-1">{badge}</span>}
        </p>
        <div className="card-actions self-end">
          <Button to={`#participer-${city.toLowerCase()}`} className="btn-primary">
            Participer
          </Button>
        </div>
      </div>
    </article>
  )
}
