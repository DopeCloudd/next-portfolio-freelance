import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const content = [
  {
    title: "Développement Web",
    skills: [
      { name: "HTML", level: "intermédiaire", icon: "🌐" },
      { name: "WordPress", level: "intermédiaire", icon: "📝" },
      { name: "CSS", level: "intermédiaire", icon: "🎨" },
      { name: "SQL", level: "Les bases", icon: "🗃️" },
      { name: "JavaScript", level: "Les bases", icon: "📜" },
      { name: "PHP", level: "Les bases", icon: "🐘" },
    ],
  },
  {
    title: "Web-Design",
    skills: [
      { name: "Figma", level: "Avancé", icon: "📐" },
      { name: "Premier Pro", level: "Les bases", icon: "🎬" },
      { name: "Illustrator", level: "intermédiaire", icon: "✏️" },
      { name: "Blender", level: "Les bases", icon: "🌀" },
      { name: "Photoshop", level: "intermédiaire", icon: "🖌️" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container flex flex-col items-center text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          compétences{" "}
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-8 w-4/5">
        {content.map((category, index) => (
          <Card key={index} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                  </li>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
