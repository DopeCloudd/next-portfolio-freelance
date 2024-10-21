"use client";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Marketing } from "@/app/(components)/Marketing";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Votre
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              site web{" "}
            </span>
            à votre image
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Vos attentes sont uniques, votre site web doit l'être aussi. Je vous
            accompagne pour créer un site web qui vous ressemble et qui répond à
            vos besoins.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button
            className="w-full md:mr-4 md:w-auto"
            onClick={() => window.open("mailto:contact@valentin-lerouge.fr")}
          >
            Demander un devis
          </Button>
          <a
            rel="noreferrer noopener"
            href="#pricing"
            className={`border ${buttonVariants({
              variant: "outline",
            })} w-full md:mr-4 md:w-auto`}
          >
            Voir les tarifs
          </a>
        </div>
      </div>
      <Marketing />
    </section>
  );
};
