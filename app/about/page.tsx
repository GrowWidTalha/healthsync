import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const TeamMember = ({
    name,
    role,
    image,
}: {
    name: string;
    role: string;
    image: string;
}) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
                src={image}
                alt={name}
                width={128}
                height={128}
                className="object-cover"
            />
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
    </div>
);

export default function AboutUs() {
    const teamMember = {
        name: "Talha Ali", // Add your name here
        role: "Founder & Lead Developer",
        image: "/mypic.jpg", // Replace with your actual image path
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
                <Button
                    variant="ghost"
                    className="mb-8 text-[#2663EA] hover:text-[#2663EA]/90"
                    asChild
                >
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>

                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                        About HealthSync
                    </span>
                </h1>

                <Card className="mb-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Our Mission
                        </h2>
                        <p className="mb-4">
                            At HealthSync, our mission is to revolutionize
                            healthcare management by providing an all-in-one
                            solution that empowers healthcare professionals and
                            improves patient care. We aim to streamline
                            operations, enhance communication, and ultimately
                            make healthcare more efficient and accessible.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Our Story
                        </h2>
                        <p className="mb-4">
                            HealthSync was founded with the vision of solving
                            the inefficiencies in healthcare management.
                            Leveraging a strong background in software
                            development, I set out to create a platform that
                            brings together appointment scheduling, patient
                            records, and analytics into one seamless interface.
                        </p>
                        <p className="mb-4">
                            With experience in Next.js, TypeScript, and a
                            passion for solving real-world problems, HealthSync
                            has grown from a concept to a functioning solution
                            that is already helping healthcare providers
                            simplify their workflows.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Our Values
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Innovation:</strong> Continuously
                                striving to improve and innovate in healthcare
                                technology.
                            </li>
                            <li>
                                <strong>Security:</strong> Prioritizing the
                                security and privacy of patient data above all
                                else.
                            </li>
                            <li>
                                <strong>Efficiency:</strong> Aiming to
                                streamline healthcare processes to save time and
                                reduce errors.
                            </li>
                            <li>
                                <strong>Accessibility:</strong> Making
                                healthcare management more accessible to
                                providers of all sizes.
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mb-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Meet the Founder
                        </h2>
                        <p className="mb-6">
                            HealthSync is driven by a passion for technology and
                            healthcare. As the founder and lead developer, I am
                            dedicated to transforming healthcare management by
                            integrating the latest technologies with
                            user-friendly design.
                        </p>
                        <TeamMember {...teamMember} />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Join Our Journey
                        </h2>
                        <p className="mb-4">
                            We&apos;re always open to collaborating with
                            like-minded individuals who are passionate about
                            improving healthcare through technology. Feel free
                            to reach out if you are interested in partnering or
                            contributing to HealthSync's mission.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90"
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-12 text-center">
                    <Button
                        asChild
                        className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90"
                    >
                        <Link href="/">Return to Home</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
