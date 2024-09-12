"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Construct the mailto link
        const mailtoLink = `mailto:contact@healthsync.talhaali.xyz?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open the mailto link
        window.location.href = mailtoLink;
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
                        Contact Us
                    </span>
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                                Get in Touch
                            </h2>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Subject of your message"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[#2663EA] text-white hover:bg-[#2663EA]/90"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 mr-2 text-[#2663EA]" />
                                    <p>contact@healthsync.talhaali.xyz</p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 mr-2 text-[#2663EA]" />
                                    <p>+92 305 2527557</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-[#2663EA]">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://linkedin.com/company/healthsync-company/"
                                    className="text-[#2663EA] hover:text-[#2663EA]/90"
                                >
                                    Linkedin
                                </Link>
                                <Link
                                    href="https://www.instagram.com/healthsync4/"
                                    className="text-[#2663EA] hover:text-[#2663EA]/90"
                                >
                                    Instagram
                                </Link>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=61565433089252"
                                    className="text-[#2663EA] hover:text-[#2663EA]/90"
                                >
                                    Facebook
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mt-12">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-[#2663EA]">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">
                                    How can I schedule a demo?
                                </h3>
                                <p>
                                    You can schedule a demo by clicking the
                                    "Book a Demo" button on our homepage or by
                                    contacting our sales team directly.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Is Healthsync HIPAA compliant?
                                </h3>
                                <p>
                                    Yes, Healthsync is fully HIPAA compliant. We
                                    take data security and privacy very
                                    seriously.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">
                                    Can I integrate Healthsync with my existing
                                    systems?
                                </h3>
                                <p>
                                    Healthsync offers various integration
                                    options. Please contact our support team for
                                    specific integration inquiries.
                                </p>
                            </div>
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
