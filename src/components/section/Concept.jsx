export default function Concept() {
  return (
    <section id="concept" className="py-20 container mx-auto px-4 text-center">
      <h2 className="text-4xl mb-6">Découvrez le concept de la Color Run</h2>
      <p className="mb-6">
        La Color Run est une course festive et accessible à tous, où le chrono n’a aucune importance.
        <br />
        Laissez-vous emporter par une vague de couleurs à chaque kilomètre et terminez l’épreuve dans une ambiance de fête.
      </p>
      <p className="bg-accent text-white font-bold p-3 animate-bounce mb-4 inline-flex rounded-lg">
        Une seule règle : porter du blanc au départ et finir complètement coloré !
      </p>
      <p className="text-2xl my-4 font-oi">Pourquoi participer&nbsp;?</p>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li className="flex flex-col items-center">
          <img src="/convivial.svg" alt="Ambiance fun et conviviale" className="w-36 h-36" />
          <h3 className="font-ws font-bold">Une ambiance fun et conviviale.</h3>
        </li>
        <li className="flex flex-col items-center">
          <img src="/happy.svg" alt="Aucune pression, juste du plaisir" className="w-36 h-36" />
          <h3 className="font-ws font-bold">Aucune pression, juste du plaisir.</h3>
        </li>
        <li className="flex flex-col items-center">
          <img src="/tous-ages.svg" alt="Accessible à tous les âges et niveaux" className="w-36 h-36" />
          <h3 className="font-ws font-bold">Accessible à tous les âges et niveaux.</h3>
        </li>
      </ul>
    </section>
  )
}
