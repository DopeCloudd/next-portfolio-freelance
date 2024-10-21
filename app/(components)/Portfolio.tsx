"use client";
import Mockup_Myprottracker from "@/public/assets/mockup-myprottracker.png";
import Mockup_Ltk from "@/public/assets/mockup-ltk.png";
import Mockup_Garnem from "@/public/assets/mockup-garnem.png";
import Mockup_Optima from "@/public/assets/mockup-optima.png";
import Mockup_Optifroid from "@/public/assets/mockup-optifroid.png";
import Mockup_Anais from "@/public/assets/mockup-anais.png";
import Mockup_Creatyz from "@/public/assets/mockup-creatyz.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

export const Portfolio = () => {
  interface website {
    url: string;
    title: string;
    image?: StaticImageData;
    description: string;
    online: boolean;
  }

  const websites: website[] = [
    {
      url: "https://creatyz.fr/",
      title: "Creatyz",
      image: Mockup_Creatyz,
      description: "Design et développement via WordPress",
      online: true,
    },
    {
      url: "https://www.myprottracker.com/",
      title: "MyProtTracker",
      image: Mockup_Myprottracker,
      description: "Design et développement sur mesure en React et Node.js",
      online: false,
    },
    {
      url: "https://garnem.com/",
      title: "Garnem",
      image: Mockup_Garnem,
      description: "Refonte graphique et développement d'un site vitrine",
      online: true,
    },
    {
      url: "https://anais-difilippo.fr/",
      title: "Anaïs Di filippo",
      image: Mockup_Anais,
      description: "Design et développement via WordPress",
      online: false,
    },
    {
      url: "https://ltk-couverture.fr/",
      title: "LTK Couverture",
      image: Mockup_Ltk,
      description: "Design et développement via WordPress",
      online: true,
    },
    {
      url: "https://optifroid.fr/",
      title: "Optifroid",
      image: Mockup_Optifroid,
      description: "Design et développement via WordPress",
      online: true,
    },
    {
      url: "https://optima-groupe.com/",
      title: "Optima Formation",
      image: Mockup_Optima,
      description: "Design et développement via WordPress",
      online: true,
    },
  ];

  return (
    <section id="portfolio" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          projets{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Voici quelques-uns des sites web que j'ai réalisés pour mes clients.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {websites.map(({ url, title, image, description, online }: website) =>
          // if online, display it
          online === true ? (
            <div
              key={title}
              className="space-y-3 cursor-pointer"
              onClick={() => {
                "use client";
                window.open(url, "_blank");
              }}
            >
              <span data-state="closed">
                <div className="overflow-hidden rounded-md relative border border-muted">
                  <Image
                    alt="Thinking Components"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="w-auto object-cover transition-all hover:scale-105"
                    src={image!}
                  />
                  <div className="space-y-1 text-left font-bold text-sm absolute bottom-0 z-10 bg-white/75 dark:bg-black/75 w-full p-4">
                    {title}
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};
