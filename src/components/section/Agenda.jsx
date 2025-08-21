import EventCard from '../organims/EventCard'
import Button from '../atoms/Button'

const events = [
  {
    city: 'Embrun',
    date: 'Dimanche 12 mai 2025',
    distance: '5km',
    image: '/photo/embrun.jpg',
    badge: 'avec obstacles',
  },
  {
    city: 'Lyon',
    date: 'Dimanche 2 juin 2025',
    distance: '10km',
    image: '/photo/lyon.jpg',
  },
  {
    city: 'Marseille',
    date: 'Dimanche 26 juillet 2025',
    distance: '20km',
    image: '/photo/marseille.jpg',
  },
]

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="container mx-auto px-4 lg:px-16 md:rounded-2xl shadow-2xl bg-primary text-white lg:text-[oklch(var(--n))] md:bg-white py-12 text-center"
    >
      <h2 className="text-4xl mb-6">Nos prochaines étapes colorées</h2>
      <p className="mb-6">
        La Color Run voyage dans toute la France ! Voici les villes où nous poserons nos valises prochainement :
      </p>
      <div className="text-neutral grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.city} {...event} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button to="#voir-plus-evenements" className="btn-secondary">
          Voir plus d’événements
        </Button>
      </div>
    </section>
  )
}
