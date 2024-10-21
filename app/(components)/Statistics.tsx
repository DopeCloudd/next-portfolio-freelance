export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "6",
      description: "Années d'expérience",
    },
    {
      quantity: "18",
      description: "Projets réalisés",
    },
    {
      quantity: "6",
      description: "Cafés par jour",
    },
    {
      quantity: "100%",
      description: "Satisfaction client",
    },
  ];

  return (
    <section
      id="statistics"
      className="flex justify-center w-full bg-muted/50 py-8 sm:py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
