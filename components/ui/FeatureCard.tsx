import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <Card className="border-none shadow-lg h-full">
            <CardContent className="p-6 flex flex-col h-full">
                <Icon className="w-12 h-12 mb-4 text-[#2663EA]" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground flex-grow">{description}</p>
            </CardContent>
        </Card>
    );
}
