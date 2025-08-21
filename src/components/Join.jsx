export default function Join() {
  return (
    <section id="join" className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-2/3 w-full lg:pr-12">
          <h2 className="text-3xl mb-4">Devenez un héros de la Color Run</h2>
          <p className="mb-4">
            Envie de faire partie de l’envers du décor ? Rejoignez notre équipe de bénévoles et participez à l’organisation d’un événement inoubliable ! En tant que bénévole, vous pourrez :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Accueillir et guider les participants.</li>
            <li>Animer les zones colorées et assurer une ambiance de folie.</li>
            <li>Distribuer des kits ou des rafraîchissements.</li>
            <li>Partager des moments uniques avec l’équipe et les coureurs.</li>
          </ul>
          <p className="mb-4">
            En échange, vous vivrez une expérience enrichissante et recevrez un kit souvenir pour votre engagement. Merci de votre aide précieuse !
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rejoindre-equipe" className="btn btn-primary">
              Rejoindre l’équipe bénévole
            </a>
            <a href="#en-savoir-plus" className="btn btn-secondary">
              En savoir plus sur le bénévolat
            </a>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/3 mb-10 lg:mb-0">
          <img
            src="/benevole.png"
            alt="Bénévoles de la Color Run"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
