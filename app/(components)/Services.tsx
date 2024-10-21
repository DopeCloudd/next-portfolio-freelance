import {
  AnalyseIcon,
  DesignIcon,
  DevIcon,
  LivraisonIcon,
  TestIcon,
} from "@/app/(components)/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <AnalyseIcon />,
    title: "Analyse",
    description:
      "Nous analysons votre projet pour comprendre vos besoins et vos objectifs",
  },
  {
    icon: <DesignIcon />,
    title: "Design",
    description:
      "Nous créons un design unique et moderne qui correspond à votre image et vos valeurs",
  },
  {
    icon: <DevIcon />,
    title: "Code",
    description:
      "Nous développons votre site web avec des technologies adaptées à vos besoins",
  },
  {
    icon: <TestIcon />,
    title: "Tests",
    description:
      "Nous testons votre site web pour garantir un fonctionnement optimal",
  },
  {
    icon: <LivraisonIcon />,
    title: "Livraison",
    description:
      "Nous livrons votre site web et vous accompagnons pour sa mise en ligne",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Notre{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Collaboration{" "}
        </span>
        Pas à Pas
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Je vous accompagne à chaque étape de la création de votre site web pour
        un résultat à la hauteur de vos attentes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
