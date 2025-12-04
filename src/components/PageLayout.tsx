import { TopNav } from "./TopNav";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-1 w-[600px] h-[600px] bg-primary/30 -top-48 -left-48" />
        <div className="blob blob-2 w-[500px] h-[500px] bg-accent/30 top-1/2 -right-32" />
        <div className="blob blob-3 w-[400px] h-[400px] bg-[hsl(180,90%,50%)]/20 bottom-0 left-1/3" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <TopNav />
      
      <main className="container mx-auto px-4 py-8 relative">
        {(title || description) && (
          <div className="mb-8 animate-fade-in-up">
            {title && (
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-2 text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </main>
      
      <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">ICVGIP 2025</p>
                <p className="text-xs text-muted-foreground">December 17-20, 2025</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Indian Conference on Computer Vision, Graphics and Image Processing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
