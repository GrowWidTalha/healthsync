import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
    name: string;
    role: string;
    quote: string;
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
    return (
        <Card className="h-full">
            <CardContent className="p-6">
                <p className="mb-4 italic">&quot;{quote}&quot;</p>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
            </CardContent>
        </Card>
    );
}
