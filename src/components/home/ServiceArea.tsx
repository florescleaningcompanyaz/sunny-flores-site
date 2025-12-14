import { MapPin, Check } from "lucide-react";

const areas = [
  "Phoenix",
  "Scottsdale", 
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Glendale",
  "Peoria",
  "Surprise",
  "Goodyear",
  "Avondale",
  "Buckeye",
];

const ServiceArea = () => {
  return (
    <section className="py-16 md:py-24 bg-flores-green-light/30">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Service Area</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Serving All of Maricopa County
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              We proudly serve homes throughout the greater Phoenix metro area. 
              <strong className="text-foreground"> No travel fees</strong> within our service area!
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder - decorative */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-square bg-card rounded-3xl shadow-card border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Maricopa County, AZ</h3>
                  <p className="text-muted-foreground">Serving the entire valley</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary/20 animate-pulse-soft" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
