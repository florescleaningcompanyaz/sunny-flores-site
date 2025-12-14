import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Services from "@/components/home/Services";
import ServiceArea from "@/components/home/ServiceArea";
import Testimonials from "@/components/home/Testimonials";
import RequestForm from "@/components/RequestForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <Services />
      <ServiceArea />
      <Testimonials />
      
      {/* Request Form Section */}
      <section id="request-form" className="py-16 md:py-24 bg-flores-yellow-light/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Ready for a Spotless Home?
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 15 minutes during business hours.
              </p>
            </div>
            <RequestForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
