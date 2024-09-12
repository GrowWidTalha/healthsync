import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Introduction",
            content:
                "Welcome to Healthsync (“we,” “our,” or “us”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare management platform.",
        },
        {
            title: "2. Information We Collect",
            content:
                "We collect personal information that you provide to us, including but not limited to:",
            list: [
                "Contact information (name, email address, phone number)",
                "Professional information (medical license number, specialization)",
                "Patient health information (as input by healthcare providers)",
                "Payment information (processed securely through our payment provider)",
                "Usage data (how you interact with our platform)",
            ],
        },
        {
            title: "3. How We Use Your Information",
            content:
                "We use your personal information for various purposes, including:",
            list: [
                "Providing and maintaining our healthcare management services",
                "Processing appointments and payments",
                "Sending administrative information and service updates",
                "Improving and optimizing our platform",
                "Complying with legal obligations",
            ],
        },
        {
            title: "4. Data Security",
            content:
                "We implement robust security measures to protect your personal information, including:",
            list: [
                "Encryption of data in transit and at rest",
                "Regular security audits and vulnerability assessments",
                "Strict access controls and authentication procedures",
                "Compliance with HIPAA and other relevant healthcare data protection standards",
            ],
        },
        {
            title: "5. Data Sharing and Disclosure",
            content: "We may share your information with:",
            list: [
                "Healthcare providers as necessary for your treatment",
                "Third-party service providers who assist in our operations",
                "Legal and regulatory authorities when required by law",
            ],
        },
        {
            title: "6. Your Rights and Choices",
            content:
                "You have certain rights regarding your personal information, including:",
            list: [
                "Accessing and updating your personal information",
                "Requesting deletion of your data (subject to legal requirements)",
                "Opting out of marketing communications",
                "Requesting a copy of your data",
            ],
        },
        {
            title: "7. Children's Privacy",
            content:
                "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.",
        },
        {
            title: "8. Changes to This Privacy Policy",
            content:
                "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date.",
        },
        {
            title: "9. Contact Us",
            content:
                "If you have any questions about this Privacy Policy, please contact us at:",
            contact: {
                email: "privacy@healthsync.com",
                address:
                    "123 Healthcare Ave, Medical City, HC 12345, United States",
            },
        },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

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
                        Privacy Policy
                    </span>
                </h1>

                <Card className="mb-8">
                    <CardContent className="p-6">
                        <p className="text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                                    {section.title}
                                </h2>
                                <p className="mb-4">{section.content}</p>
                                {section.list && (
                                    <ul className="list-disc pl-6 space-y-2">
                                        {section.list.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.contact && (
                                    <div className="mt-4">
                                        <p>Email: {section.contact.email}</p>
                                        <p>
                                            Address: {section.contact.address}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button
                        asChild
                        className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90"
                    >
                        <Link href="/">Return to Home</Link>
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
