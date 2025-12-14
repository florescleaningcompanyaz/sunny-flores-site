import { MessageSquare, Phone, Calendar } from "lucide-react";

const MobileBottomBar = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("request-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-float safe-area-bottom">
      <div className="grid grid-cols-3 gap-1 p-2 pb-safe">
        <a
          href="sms:+16024874094"
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-all active:scale-95"
        >
          <MessageSquare className="w-5 h-5 text-secondary-foreground" />
          <span className="text-xs font-semibold text-secondary-foreground">Text Us</span>
        </a>

        <a
          href="tel:+16024874094"
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-primary hover:bg-primary/90 transition-all active:scale-95"
        >
          <Phone className="w-5 h-5 text-primary-foreground" />
          <span className="text-xs font-semibold text-primary-foreground">Call Now</span>
        </a>

        <button
          onClick={scrollToForm}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-xl bg-accent hover:bg-accent/90 transition-all active:scale-95"
        >
          <Calendar className="w-5 h-5 text-accent-foreground" />
          <span className="text-xs font-semibold text-accent-foreground">Request</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
