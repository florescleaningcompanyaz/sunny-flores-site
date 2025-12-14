import Layout from "@/components/layout/Layout";
import RequestForm from "@/components/RequestForm";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-flores-yellow-light/50 to-background">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We reply within 15 minutes during business hours. Let's get your home sparkling!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Text */}
            <a
              href="sms:+16024874094"
              className="card-warm flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <MessageSquare className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Text Us</h3>
              <p className="text-muted-foreground mb-2">Quick questions? Text anytime!</p>
              <p className="font-semibold text-primary">(602) 487-4094</p>
            </a>

            {/* Call */}
            <a
              href="tel:+16024874094"
              className="card-warm flex flex-col items-center text-center hover:scale-105 transition-transform border-2 border-primary"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Now</h3>
              <p className="text-muted-foreground mb-2">Speak with us directly</p>
              <p className="font-semibold text-primary">(602) 487-4094</p>
            </a>

            {/* Email */}
            <a
              href="mailto:flores.cleaning.company.az@gmail.com"
              className="card-warm flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">Detailed inquiries welcome</p>
              <p className="font-semibold text-primary text-sm">flores.cleaning.company.az@gmail.com</p>
            </a>
          </div>

          {/* Hours & Location */}
          <div className="max-w-2xl mx-auto">
            <div className="card-warm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday – Saturday</p>
                    <p className="font-semibold text-foreground">8:00 AM – 5:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ⚡ We reply within 15 minutes during these hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Service Area</h4>
                    <p className="text-muted-foreground">All of Maricopa County, AZ</p>
                    <p className="font-semibold text-foreground">No travel fees!</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Phoenix, Scottsdale, Tempe, Mesa & more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-12 md:py-16 bg-flores-yellow-light/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Request Availability
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and we'll get back to you quickly!
              </p>
            </div>
            <RequestForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
