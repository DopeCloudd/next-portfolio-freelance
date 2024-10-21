import portrait from "@/public/assets/file.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={portrait}
            alt=""
            className="w-[300px] h-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Développeur web freelance basé à Montpellier, je vous accompagne
                dans la création de votre site ou application web sur mesure.
                <br />
                <br />
                Avec une expérience de plus de 5 ans dans le développement web,
                je vous propose des solutions adaptées à vos besoins.
                <br />
                <br />
                Je serai vous accompagner tout au long de votre projet, de la
                conception à la mise en ligne. N&apos;hésitez pas à me contacter
                pour discuter de votre projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
