export default function Navbar() {
  return (
    <nav className="container mx-auto navbar bg-base-100 items-center">
      <div className="navbar-start">
        <a
          className="btn btn-ghost lg:hover:bg-transparent normal-case text-xl items-center"
          href="#"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 lg:h-20 w-auto mr-2"
          />
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown static lg:hidden flex items-center">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <a className="btn btn-primary" href="#s-inscrire">
            S’inscrire
          </a>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-full left-0 top-16 z-50"
          >
            <li>
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#concept">Concept</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#join">Devenir bénévole</a>
            </li>
            <li>
              <a className="btn btn-outline my-4" href="#se-connecter">
                Se connecter
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal hidden lg:flex items-center space-x-4">
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#concept">Concept</a>
          </li>
          <li>
            <a href="#agenda">Agenda</a>
          </li>
          <li>
            <a href="#join">Devenir bénévole</a>
          </li>
          <li>
            <a className="btn btn-outline" href="#se-connecter">
              Se connecter
            </a>
          </li>
          <li>
            <a className="btn btn-primary" href="#s-inscrire">
              S’inscrire
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
