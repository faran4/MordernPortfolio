import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import ContactExperience from "../components/ContactExperience";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    useGSAP(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    once: true
                }
            }
        );

        // Content animation
        gsap.fromTo('.contact-content',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.contact-content',
                    start: 'top 80%',
                    once: true
                }
            }
        );
    }, { scope: sectionRef });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="relative bg-black-100 min-h-screen flex items-center">
            {/* Background accents */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"></div>
            </div>

            <div className="w-full c-space relative z-10 py-16">
                {/* Title Section */}
                <div ref={titleRef} className="mb-16 opacity-0">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-24 bg-white/20"></div>
                        <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-light">
                            💬 Let's Connect
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                        Get in Touch
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Have questions or ideas? Let's talk and bring your vision to life 🚀
                    </p>
                </div>

                {/* Content Grid - Improved Responsiveness */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {/* Form Section - Fixed Layout */}
                    <div className="contact-content w-full">
                        <div className="w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-[550px] bg-black-200/30 backdrop-blur-sm border border-white/[0.08] rounded-2xl p-4 sm:p-6 hover:border-white/[0.15] transition-all duration-500">
                            <form ref={formRef} onSubmit={handleSubmit} className="h-full flex flex-col gap-6 sm:gap-8">
                                {/* Name Field */}
                                <div className="flex-1 min-h-[80px]">
                                    <label htmlFor="name" className="block text-white/70 mb-2 text-base sm:text-lg font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your good name?"
                                        required
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-black-200 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-all duration-300 text-base sm:text-lg"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="flex-1 min-h-[80px]">
                                    <label htmlFor="email" className="block text-white/70 mb-2 text-base sm:text-lg font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email address?"
                                        required
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-black-200 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-all duration-300 text-base sm:text-lg"
                                    />
                                </div>

                                {/* Message Field - Constrained Height with Explicit Margin */}
                                <div className="flex-1 min-h-[120px] max-h-[180px] sm:max-h-[200px]">
                                    <label htmlFor="message" className="block text-white/70 mb-2 text-base sm:text-lg font-medium">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        required
                                        className="w-full h-full px-4 py-3 sm:px-5 sm:py-4 bg-black-200 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-all duration-300 resize-none text-base sm:text-lg"
                                    />
                                </div>

                                {/* Submit Button - Fixed Position with Margin */}
                                <div className="mt-6 sm:mt-8">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 disabled:opacity-50 text-base sm:text-lg"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* 3D Canvas Section - Fixed Heights */}
                    <div className="contact-content w-full">
                        <div className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:h-[550px] bg-black-200/30 backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-500">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;