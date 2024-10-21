import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Comment est calculé mon devis ?",
    answer:
      "Après une première prise de contact et basé sur vos besoins, je vous enverrai un devis détaillé avec toutes les actions que je vais réaliser pour répondre à vos attentes.",
    value: "item-1",
  },
  {
    question: "Comment suivre l'évolution de mon projet ?",
    answer:
      "Nous aurons des points réguliers pour valider l'avancement et apporter des modifications si nécessaire.",
    value: "item-2",
  },
  {
    question: "Comment est réalisé le design de mon site ?",
    answer:
      "Je réalise d'abord un design sur mesure pour votre site en vous faisant part de toutes les possibilités offertes.",
    value: "item-3",
  },
  {
    question: "Comment est réalisé le développement de mon site ?",
    answer:
      "Une fois le design et le cahier des charges validés, je réalise le développement de votre site suivant l'offre que vous aurez choisie.",
    value: "item-4",
  },
  {
    question: "Comment se passe la livraison de mon site ?",
    answer:
      "Une fois le développement terminé et votre site testé, je vous livre le site avec un guide d'utilisation et une petite formation.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions{" "}
        </span>
        fréquentes
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Vous avez d'autres questions ?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:contact@valentin-lerouge.fr"
          target="_blank"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Me contacter
        </a>
      </h3>
    </section>
  );
};
