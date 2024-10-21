import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image, { StaticImageData } from "next/image";
import Jack from "@/public/assets/jack.png";
import Jill from "@/public/assets/jill.png";
import John from "@/public/assets/john.png";
import Jane from "@/public/assets/jane.png";
import Jenny from "@/public/assets/jenny.png";
import James from "@/public/assets/james.png";

const reviews = [
  {
    name: "MyProtTracker",
    username: "@MyProtTracker",
    body: "Nous avons adoré développer notre idée et notre application web avec Valentin.",
    img: Jack,
  },
  {
    name: "LTK Couverture",
    username: "@LTK Couverture",
    body: "Merci à Valentin d'avoir fait notre site internet en montrant nos compétences et savoir faire.",
    img: Jill,
  },
  {
    name: "Optima Formation",
    username: "@optima",
    body: "Valentin a su redéfinir notre identité visuelle et mettre en avant nos formations.",
    img: John,
  },
  {
    name: "Anais Di Filippo",
    username: "@anaisdifilippo",
    body: "J'ai enfin un site pour montrer mon cv et mes compétences en ligne.",
    img: Jane,
  },
  {
    name: "Garnem",
    username: "@garnem",
    body: "Une touche de modernité et de simplicité pour notre site vitrine.",
    img: Jenny,
  },
  {
    name: "Optifroid",
    username: "@optifroid",
    body: "Valentin a créer de A à Z notre site internet, de l'hébergement à la conception graphique.",
    img: James,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: StaticImageData;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
