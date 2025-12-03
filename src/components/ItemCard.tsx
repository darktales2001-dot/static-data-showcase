import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, ArrowRight } from 'lucide-react';
import { DataItem } from '@/data/data';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ItemCardProps {
  item: DataItem;
  index?: number;
}

const getCategoryBadgeClass = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'Plenary': 'badge-plenary',
    'Oral Session': 'badge-oral',
    'Poster Session': 'badge-poster',
    'Industry Session': 'badge-industry',
    'Workshop': 'badge-workshop',
    'Tutorial': 'badge-workshop',
    'Social Event': 'badge-social',
    'Break': 'badge-break',
  };
  return categoryMap[category] || 'badge-oral';
};

const ItemCard: React.FC<ItemCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link
        to={`/item/${item.id}`}
        className="block h-full glass-card glass-card-dark rounded-2xl p-5 hover-lift focus-ring"
        aria-label={`View details for ${item.title}`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge 
            variant="outline" 
            className={`${getCategoryBadgeClass(item.category)} text-xs font-medium px-2.5 py-0.5`}
          >
            {item.category}
          </Badge>
          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>{new Date(item.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{item.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{item.venue}</span>
          </div>
          {item.speaker && (
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-primary" />
              <span className="font-medium">{item.speaker}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
            {item.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 text-muted-foreground">
                +{item.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </Link>
    </motion.article>
  );
};

export default ItemCard;
