"use client";
import profilePicture from "@/public/assets/PP Dessin.png";
import { LightBulbIcon } from "@/app/(components)/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Check, FacebookIcon, Linkedin } from "lucide-react";
import Image from "next/image";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Anaïs DI FILIPPO</CardTitle>
            <CardDescription>@anais_df_10</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Un plaisir de travailler avec Valentin !</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Image
            src={profilePicture}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Valentin LEROUGE</CardTitle>
          <CardDescription className="font-normal text-primary">
            Développeur web
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Passioné par le développement web, j'en ai fait mon métier. J'aime
            créer et innover.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=61564522257510"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Facebook icon</span>
              <FacebookIcon size="20" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://github.com/DopeCloudd"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/valentin-lerouge-b623b51a4/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Mes services
            <Badge variant="secondary" className="text-sm text-primary">
              Populaire
            </Badge>
          </CardTitle>

          <CardDescription>
            Voici quelques services que je propose à mes clients.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            className="w-full"
            onClick={() => {
              "use client";
              window.open("mailto:contact@valentin-lerouge.fr");
            }}
          >
            Collaborer avec moi
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Site vitrine",
              "Site e-commerce",
              "Application sur mesure",
              "SEO",
              "Maintenance",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Une idée de projet ?</CardTitle>
            <CardDescription className="text-md mt-2">
              Je serai ravi de vous accompagner dans la réalisation de votre
              projet.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
