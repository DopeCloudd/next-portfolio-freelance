export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            VALENTIN LEROUGE
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Navigation</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Étapes
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#portfolio"
              className="opacity-60 hover:opacity-100"
            >
              Projets
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Tarifs
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Me suivre</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=61564522257510"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/valentin-lerouge-b623b51a4/"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/DopeCloudd"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Utiles</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/mentions-legales"
              className="opacity-60 hover:opacity-100"
            >
              Mentions légales
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/politique-de-confidentialite"
              className="opacity-60 hover:opacity-100"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          Copyrights © 2024.{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/valentin-lerouge-b623b51a4/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Valentin LEROUGE
          </a>
        </h3>
      </section>
    </footer>
  );
};
