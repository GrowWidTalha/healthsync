import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingCard() {
    return (
        <Card className="border-2 border-[#2663EA]">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Professional Plan
                </CardTitle>
                <CardDescription className="text-center">
                    Everything you need to streamline your healthcare practice
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2">
                    {[
                        "All-in-one healthcare management",
                        "Smart appointment booking",
                        "Virtual consultations",
                        "Google Calendar integration",
                        "Automated reminders",
                        "Prescription writing & PDF download",
                        "Powerful analytics",
                        "Secure user authentication",
                        "Customizable settings",
                        "24/7 customer support",
                    ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <Check className="w-5 h-5 text-[#2663EA] mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="text-center">
                    <Button className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90 w-full py-6">
                        Start Free 30-Day Trial
                    </Button>
                    <p className="mt-2 text-sm text-muted-foreground">
                        No credit card required
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
