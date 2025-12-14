import Layout from "@/components/layout/Layout";
import { Download, Check, Sparkles, Phone } from "lucide-react";

const pricingData = [
  {
    size: "1 Bed / Apartment",
    sqft: "≤900 sq ft",
    standard: "$90 – $120",
    deep: "$150 – $180",
    moveInOut: "$180 – $220",
  },
  {
    size: "2 Bedrooms",
    sqft: "901 – 1,300 sq ft",
    standard: "$120 – $150",
    deep: "$180 – $230",
    moveInOut: "$220 – $290",
  },
  {
    size: "3 Bedrooms",
    sqft: "1,301 – 1,800 sq ft",
    standard: "$150 – $200",
    deep: "$220 – $300",
    moveInOut: "$280 – $360",
  },
  {
    size: "4 Bedrooms",
    sqft: "1,801 – 2,400 sq ft",
    standard: "$200 – $260",
    deep: "$300 – $380",
    moveInOut: "$350 – $450",
  },
  {
    size: "Large Home",
    sqft: "2,400 – 3,000 sq ft",
    standard: "$260 – $320",
    deep: "$380 – $460",
    moveInOut: "$450 – $550",
  },
  {
    size: "XL Home",
    sqft: "3,000+ sq ft",
    standard: "Custom Quote",
    deep: "Custom Quote",
    moveInOut: "Custom Quote",
  },
];

const standardIncludes = [
  "Kitchen cleaning & counters",
  "Bathroom sanitization",
  "Vacuuming & mopping floors",
  "Dusting all surfaces",
  "Trash removal",
  "Making beds",
];

const deepIncludes = [
  "Everything in Standard",
  "Inside oven & microwave",
  "Inside refrigerator",
  "Baseboards & door frames",
  "Window sills & blinds",
  "Light switches & outlets",
];

const moveInOutIncludes = [
  "Everything in Deep Clean",
  "Inside all cabinets & drawers",
  "Closet interiors",
  "Window tracks",
  "Full sanitization",
  "Garage sweep (if accessible)",
];

const addOns = [
  { name: "Interior windows", price: "$5–$10/window" },
  { name: "Interior fridge", price: "$25–$40" },
  { name: "Interior oven", price: "$25–$40" },
  { name: "Laundry (wash, dry, fold)", price: "$20–$35/load" },
  { name: "Organizing (closet/pantry)", price: "$30–$50/area" },
  { name: "Garage sweep & tidy", price: "$40–$60" },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-flores-yellow-light/50 to-background">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Precios Fijos | Flat-Rate Pricing
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Just clean homes and happy customers.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-primary/10">
                  <th className="px-4 py-4 text-left font-bold text-foreground rounded-tl-2xl">
                    Home Size
                  </th>
                  <th className="px-4 py-4 text-center font-bold text-foreground">
                    Standard
                  </th>
                  <th className="px-4 py-4 text-center font-bold text-foreground">
                    Deep Clean
                  </th>
                  <th className="px-4 py-4 text-center font-bold text-foreground rounded-tr-2xl">
                    Move-In/Out
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr
                    key={row.size}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="font-semibold text-foreground">{row.size}</div>
                      <div className="text-sm text-muted-foreground">{row.sqft}</div>
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-foreground">
                      {row.standard}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-primary">
                      {row.deep}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold text-accent">
                      {row.moveInOut}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Button */}
          <div className="mt-8 text-center">
            <a
              href="/flores-pricing.pdf"
              download
              className="btn-cta inline-flex"
            >
              <Download className="w-5 h-5" />
              Download Pricing PDF
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16 bg-flores-green-light/20">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            What's Included | ¿Qué Incluye?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            All supplies and equipment included. Just relax!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard */}
            <div className="card-warm">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Standard Clean</h3>
              <ul className="space-y-3">
                {standardIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep */}
            <div className="card-warm border-2 border-primary">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Deep Clean</h3>
              <ul className="space-y-3">
                {deepIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Move In/Out */}
            <div className="card-warm">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Move-In/Out</h3>
              <ul className="space-y-3">
                {moveInOutIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            Add-Ons | Servicios Adicionales
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Customize your clean with these extra services
          </p>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border"
              >
                <span className="font-medium text-foreground">{addon.name}</span>
                <span className="font-bold text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Promise to You
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Transparent pricing",
                "No travel fees",
                "24-hour rescheduling",
                "100% satisfaction",
              ].map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready to Book?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contact us for a free quote today!
          </p>
          <a href="tel:+16024874094" className="btn-secondary inline-flex">
            <Phone className="w-5 h-5" />
            Call (602) 487-4094
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
