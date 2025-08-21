import Button from '../atoms/Button'

export default function Enroll() {
  return (
    <section id="enroll" className="py-12 mt-12 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-2/3 lg:w-1/3 mb-10 lg:mb-0">
          <img
            src="/final.png"
            alt="Participants à la Color Run"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-2/3 w-full lg:pl-16">
          <h2 className="text-3xl mb-4">Rejoignez l’aventure&nbsp;!</h2>
          <p className="mb-4">
            Prêt à vivre une expérience unique ? Inscrivez-vous en quelques clics et préparez-vous à une journée mémorable. Voici ce que vous recevez en participant :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <span className="font-bold">Un kit de bienvenue</span> comprenant un t-shirt blanc officiel, un dossard, et des sacs de poudre colorée.
            </li>
            <li>
              <span className="font-bold">Une médaille souvenir</span> pour célébrer votre exploit.
            </li>
            <li>
              <span className="font-bold">L’accès à l’after-party</span>, où musique et couleurs seront au rendez-vous.
            </li>
          </ul>
          <p className="mb-4">
            Alors, qu’attendez-vous ? Faites partie des milliers de coureurs qui partagent cette aventure incroyable !
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="#inscription" className="btn-primary">
              S’inscrire maintenant
            </Button>
            <Button to="#en-savoir-plus" className="btn-secondary">
              En savoir plus sur l’inscription
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
