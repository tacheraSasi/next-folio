import { motion } from 'framer-motion';
import { Calendar, Music, Clock, Hash } from 'lucide-react';
import { Beat } from '@/data/musicCatalog';
import AudioPlayer from './AudioPlayer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BeatCardProps {
  beat: Beat;
  index: number;
}

export default function BeatCard({ beat, index }: BeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg text-foreground">{beat.title}</CardTitle>
            <Badge variant="secondary" className="ml-2">
              {beat.genre}
            </Badge>
          </div>
          {beat.description && (
            <p className="text-sm text-muted-foreground">{beat.description}</p>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{beat.bpm} BPM</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{beat.key}</span>
            </div>
            <div className="flex items-center gap-2">
              <Hash className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{beat.mood}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">
                {new Date(beat.dateProduced).toLocaleDateString()}
              </span>
            </div>
          </div>

          <AudioPlayer audioUrl={beat.audioUrl} title={beat.title} />
        </CardContent>
      </Card>
    </motion.div>
  );
}