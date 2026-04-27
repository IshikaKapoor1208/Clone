"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen bg-white text-ink overflow-x-hidden">
            <Navbar />

            <section className="relative px-6 py-16 md:px-12 md:py-24 pt-24">
                {/* Background Pattern */}
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(33,32,32,0.01)_0,rgba(33,32,32,0.01)_1px,transparent_1px,transparent_86px)]" />

                <div className="relative mx-auto max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24"
                    >
                        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ink/50 mb-6">
                            Connect with us
                        </p>
                        <h1 className="font-signature text-xl md:text-2xl xl:text-3xl font-light leading-relaxed">
                            <span className="text-rustic-red">Get in </span>
                            <span className="text-[#A34E24] italic font-medium">Touch.</span>
                        </h1>
                    </motion.div>

                    <div className="grid gap-20 lg:grid-cols-12">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 space-y-12"
                        >
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 border border-ink/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-ink/60" />
                                    </div>
                                    <div>
                                        <p className="text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Email Enquiry</p>
                                        <a href="mailto:gauravpathareyarchitects@gmail.com" className="text-xl hover:text-ink/60 transition-colors">gauravpathareyarchitects@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 border border-ink/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-ink/60" />
                                    </div>
                                    <div>
                                        <p className="text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Call Us</p>
                                        <a href="tel:+917420857333" className="text-xl hover:text-ink/60 transition-colors">7420-857333</a>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 border border-ink/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-ink/60" />
                                    </div>
                                    <div>
                                        <p className="text-[0.65rem] uppercase tracking-widest text-ink/40 mb-1">Studio Address</p>
                                        <p className="text-xl leading-relaxed">
                                            Office - 328 &amp; 329, 3rd Floor, Gera Imperium Gateway,<br />
                                            Metro Station Road of Nashik Phata, Opp. Bhosari,<br />
                                            Pune, Maharashtra 411034
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-ink/10">
                                <p className="text-[0.65rem] uppercase tracking-widest text-ink/40 mb-6">Follow our Journal</p>
                                <div className="flex gap-8">
                                    {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="text-xs uppercase tracking-[0.2em] hover:text-ink/60 transition-colors"
                                        >
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-7"
                        >
                            <form className="grid gap-10 md:grid-cols-2">
                                <div className="group relative">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-ink/40 group-focus-within:text-ink transition-colors">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-ink transition-colors placeholder:text-ink/10"
                                    />
                                </div>

                                <div className="group relative">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-ink/40 group-focus-within:text-ink transition-colors">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="gauravpathareyarchitects@gmail.com"
                                        className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-ink transition-colors placeholder:text-ink/10"
                                    />
                                </div>

                                <div className="group relative md:col-span-2">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-ink/40 group-focus-within:text-ink transition-colors">
                                        Project Type
                                    </label>
                                    <select className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-ink transition-colors appearance-none cursor-pointer">
                                        <option>Residential</option>
                                        <option>Hospitality</option>
                                        <option>Workspace</option>
                                        <option>Wellness</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="group relative md:col-span-2">
                                    <label className="text-[0.65rem] uppercase tracking-widest text-ink/40 group-focus-within:text-ink transition-colors">
                                        Tell us about your vision
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Describe your project details..."
                                        className="w-full bg-transparent border-b border-ink/10 py-4 outline-none focus:border-ink transition-colors resize-none placeholder:text-ink/10"
                                    />
                                </div>

                                <div className="md:col-span-2 pt-6">
                                    <button
                                        type="submit"
                                        className="group flex items-center gap-4 bg-ink px-8 py-4 text-paper transition-all hover:bg-ink/90 active:scale-95"
                                    >
                                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em]">Send Message</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
