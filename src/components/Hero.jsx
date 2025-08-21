export default function Hero() {
  return (
    <header id="accueil" className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/illustrationphoto.png"
          alt="Color Run"
          className="max-w-md rounded-lg hidden lg:block"
        />
        <div>
          <h1 className="text-4xl md:text-5xl">
            Venez vivre l’expérience unique de la
            <span className="inline-block p-2 text-white rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Color Run
            </span>
            dans votre ville.
          </h1>
          <p className="py-6">
            Rejoignez une explosion de couleurs, de fun et d'énergie ! La Color Run, c’est bien plus qu’une course : c’est une fête où chaque kilomètre devient un arc-en-ciel de bonheur. Que vous soyez coureur aguerri ou amateur de bonne humeur, vous êtes au bon endroit.
          </p>
          <div className="flex space-x-4">
            <a href="#decouvrir-courses" className="btn btn-secondary">
              Découvrir les courses
            </a>
            <a href="#inscription" className="btn btn-primary">
              Inscrivez-vous maintenant
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
