import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Site vitrine",
    popular: 0,
    price: 500,
    description:
      "Présentez votre activité et vos services sur un site web moderne. Développé via WordPress pour une gestion facile.",
    buttonText: "Demander un devis",
    benefitList: [
      "Charte graphique",
      "Domaine + Hébergement",
      "Interface d'administration",
      "Site responsive (adapté sur tous les appareils)",
      "Intégration de contenu",
      "Formulaires",
      "Optimisation du référencement naturel (SEO)",
      "Statistiques de visite",
      "Formation à l'utilisation du site",
    ],
  },
  {
    title: "Plateforme e-commerce",
    popular: 0,
    price: 1000,
    description:
      "Vendez vos produits en ligne grâce à une boutique e-commerce. Développé via Shopify pour une expérience utilisateur optimale.",
    buttonText: "Demander un devis",
    benefitList: [
      "Charte graphique personnalisée",
      "Domaine + Hébergement",
      "Installation et configuration des plugins",
      "Interface d'administration",
      "Site responsive (adapté sur tous les appareils)",
      "Intégration de contenu",
      "Formulaires",
      "Optimisation du référencement naturel (SEO) et performances",
      "Statistiques de visite",
      "Formation à l'utilisation du site",
    ],
  },
  {
    title: "Site sur mesure",
    popular: 0,
    price: 1400,
    description:
      "Développement d'un site web sur mesure pour répondre à vos besoins spécifiques. Développé via React pour une performance optimale.",
    buttonText: "Demander un devis",
    benefitList: [
      "Charte graphique personnalisée",
      "Domaine + Hébergement",
      "Développement des fonctionnalités sur mesure",
      "Interface d'administration personnalisée",
      "Connexion à des outils tiers",
      "Site responsive (adapté sur tous les appareils)",
      "Intégration de contenu",
      "Formulaires",
      "Optimisation du référencement naturel (SEO) et performances",
      "Statistiques de visite",
      "Formation à l'utilisation du site",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Tarifs{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Un tarif adapté pour obtenir un site web de qualité !
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>

              <div>
                <span className="text-muted-foreground">A partir de </span>
                <span className="text-3xl font-bold">{pricing.price} €*</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
