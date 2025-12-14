import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  cityZip: string;
  homeSize: string;
  cleaningType: string;
  preferredDate: string;
  timeWindow: string;
  notes: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  cityZip: "",
  homeSize: "",
  cleaningType: "standard",
  preferredDate: "",
  timeWindow: "",
  notes: "",
};

const homeSizeOptions = [
  "1 Bed / Apartment (≤900 sq ft)",
  "2 Bedrooms (901–1,300 sq ft)",
  "3 Bedrooms (1,301–1,800 sq ft)",
  "4 Bedrooms (1,801–2,400 sq ft)",
  "2,400–3,000 sq ft",
  "3,000+ sq ft",
];

const timeWindowOptions = [
  "Morning (8am–11am)",
  "Midday (11am–2pm)",
  "Afternoon (2pm–5pm)",
  "Flexible",
];

const RequestForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.cityZip) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, and city/zip are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // For now, simulate submission - will need backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  if (isSubmitted) {
    return (
      <div className="card-warm text-center py-12 animate-scale-in">
        <CheckCircle className="w-16 h-16 mx-auto text-primary mb-6" />
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Thanks! | ¡Gracias!
        </h3>
        <p className="text-muted-foreground mb-2">
          We received your request. We reply within 15 minutes during business hours (8am–5pm).
        </p>
        <p className="text-muted-foreground">
          Recibimos tu solicitud. Respondemos en 15 minutos durante horario laboral (8am–5pm).
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 btn-secondary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-warm">
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Request Availability
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="(555) 555-5555"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="your@email.com"
          />
        </div>

        {/* City/Zip */}
        <div>
          <label htmlFor="cityZip" className="block text-sm font-semibold text-foreground mb-2">
            City / Zip <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="cityZip"
            name="cityZip"
            value={formData.cityZip}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Phoenix, 85001"
          />
        </div>

        {/* Home Size */}
        <div>
          <label htmlFor="homeSize" className="block text-sm font-semibold text-foreground mb-2">
            Home Size
          </label>
          <select
            id="homeSize"
            name="homeSize"
            value={formData.homeSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select size...</option>
            {homeSizeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Cleaning Type */}
        <div>
          <label htmlFor="cleaningType" className="block text-sm font-semibold text-foreground mb-2">
            Cleaning Type
          </label>
          <select
            id="cleaningType"
            name="cleaningType"
            value={formData.cleaningType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="standard">Standard Clean</option>
            <option value="deep">Deep Clean</option>
            <option value="move">Move-In / Move-Out</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-foreground mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Time Window */}
        <div>
          <label htmlFor="timeWindow" className="block text-sm font-semibold text-foreground mb-2">
            Time Window
          </label>
          <select
            id="timeWindow"
            name="timeWindow"
            value={formData.timeWindow}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select time...</option>
            {timeWindowOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Any special requests or details about your home..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-cta disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Request
          </>
        )}
      </button>

      <p className="text-center text-sm text-muted-foreground mt-4">
        We reply within 15 minutes during business hours (8am–5pm)
      </p>
    </form>
  );
};

export default RequestForm;
