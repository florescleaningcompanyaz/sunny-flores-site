import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import mascot from "@/assets/flores-mascot.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="text-center section-container">
          <div className="mb-8 animate-bounce-soft">
            <img 
              src={mascot} 
              alt="Flores mascot looking confused" 
              className="w-32 h-32 mx-auto opacity-80"
            />
          </div>
          <h1 className="mb-4 text-6xl font-extrabold text-foreground">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Oops! This page got cleaned up a little too well.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link to="/" className="btn-cta">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
