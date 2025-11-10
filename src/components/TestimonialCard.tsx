import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ text, author, role, avatar }: TestimonialCardProps) => {
  return (
    <Card className="min-w-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-6">
        <p className="text-muted-foreground italic mb-6 leading-relaxed">{text}</p>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-primary">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
