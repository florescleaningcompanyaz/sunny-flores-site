import { Package, MapPin, Clock } from "lucide-react";

const badges = [
  {
    icon: Package,
    title: "Supplies Included",
    description: "We bring everything",
  },
  {
    icon: MapPin,
    title: "Maricopa County",
    description: "Local & reliable",
  },
  {
    icon: Clock,
    title: "Reply in 15 min",
    description: "During business hours",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-8 md:py-12 bg-flores-warm-white border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 justify-center md:justify-start animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
