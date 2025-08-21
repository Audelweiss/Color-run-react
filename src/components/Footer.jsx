export default function Footer() {
  return (
    <footer className="bg-accent text-accent-content py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:w-auto">
            <img src="/logo.png" alt="Logo Color Run" className="h-16" />
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="footer-title font-normal text-primary">Liens utiles</h2>
            <ul className="list-none">
              <li>
                <a href="#faq" className="link link-hover">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="link link-hover">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="#mentions-legales" className="link link-hover">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="footer-title font-normal text-primary">
              Inscrivez-vous à notre newsletter
            </h2>
            <p className="mb-4">
              Recevez les dernières actualités et offres exclusives.
            </p>
            <form>
              <input
                type="email"
                placeholder="exemple@gmail.com"
                className="input input-bordered w-full mb-2"
                required
              />
              <button type="submit" className="btn btn-primary w-full">
                S’inscrire
              </button>
            </form>
          </div>
        </div>
        <div className="text-center">
          <p>2025 © Color Run par AH & FX. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
