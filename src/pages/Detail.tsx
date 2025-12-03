import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, User, Tag, Share2, ExternalLink } from 'lucide-react';
import { getItemById, DATA } from '@/data/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageTransition from '@/components/PageTransition';
import ItemCard from '@/components/ItemCard';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = id ? getItemById(id) : undefined;

  if (!item) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-3">
              Session Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The session you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Schedule
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Get related items (same category, different id)
  const relatedItems = DATA
    .filter(i => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
      'Plenary': '#14b8a6',
      'Oral Session': '#0ea5e9',
      'Poster Session': '#8b5cf6',
      'Industry Session': '#f97316',
      'Workshop': '#ec4899',
      'Tutorial': '#ec4899',
      'Social Event': '#eab308',
      'Break': '#22c55e',
    };
    return colorMap[category] || '#0ea5e9';
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: getCategoryColor(item.category) }}
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: getCategoryColor(item.category) }}
          />

          <div className="container mx-auto px-4 py-8 md:py-12 relative">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Schedule
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li className="text-foreground font-medium truncate max-w-[200px]">
                  {item.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              {/* Back Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="mb-6 -ml-2"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              {/* Category Badge */}
              <Badge
                variant="outline"
                className="text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${getCategoryColor(item.category)}20`,
                  borderColor: `${getCategoryColor(item.category)}50`,
                  color: getCategoryColor(item.category),
                }}
              >
                {item.category}
              </Badge>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {item.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{item.venue}</span>
                </div>
              </div>

              {/* Speaker */}
              {item.speaker && (
                <div className="flex items-center gap-3 mb-6 p-4 glass-card glass-card-dark rounded-xl">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: getCategoryColor(item.category) }}
                  >
                    {item.speaker.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.speaker}</p>
                    <p className="text-sm text-muted-foreground">Speaker</p>
                  </div>
                </div>
              )}

              {/* Share Button */}
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl">
            {/* Description */}
            <div className="glass-card glass-card-dark rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                About This Session
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.fullDescription}
              </p>
            </div>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="glass-card glass-card-dark rounded-2xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Related Sessions */}
            {relatedItems.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Related Sessions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedItems.map((relatedItem, index) => (
                    <ItemCard key={relatedItem.id} item={relatedItem} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Detail;
