import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// You can find these values in your EmailJS account
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    company: string; // Honeypot field
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '', company: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // EmailJS is loaded from a script tag in index.html, so we access it from the window object
    const emailjs = (window as any).emailjs;

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Message must be at least 20 characters.';
        }
        return newErrors;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;
        if (formData.company) return; // Honeypot check
        if (!emailjs) {
            console.error("EmailJS is not loaded");
            setStatus('error');
            return;
        }

        setStatus('loading');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '', company: '' });
            }, (error: any) => {
                console.error('EmailJS error:', error);
                setStatus('error');
            });
    };

    useEffect(() => {
        // Fix: Use ReturnType<typeof setTimeout> for browser compatibility instead of NodeJS.Timeout
        let timer: ReturnType<typeof setTimeout>;
        if (status === 'success' || status === 'error') {
            timer = setTimeout(() => setStatus('idle'), 5000);
        }
        return () => clearTimeout(timer);
    }, [status]);
    
    return (
         <div className="py-24 sm:py-32 bg-[#0C0F1D]">
            <div className="container max-w-7xl mx-auto px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#88FF55] text-glow relative inline-block">
                        Get In Touch
                        <motion.span
                            className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#88FF55]"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </h1>
                    <p className="mt-8 max-w-3xl mx-auto text-lg text-[#A8B0C2]">
                        Have a project in mind, a question, or just want to say hi? I’d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Form */}
                    <motion.div
                        className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-2xl font-bold text-[#E6EAF2] mb-6">Send Me a Message</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Honeypot field */}
                            <input type="text" name="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="hidden" />
                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#A8B0C2]">Your Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" required className={`mt-1 block w-full bg-[#0C0F1D] border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm py-2 px-3 text-[#E6EAF2] focus:outline-none focus:ring-2 focus:ring-[#88FF55] focus:border-[#88FF55]`} aria-invalid={!!errors.name} />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#A8B0C2]">Your Email</label>
                                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john.doe@example.com" required className={`mt-1 block w-full bg-[#0C0F1D] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm py-2 px-3 text-[#E6EAF2] focus:outline-none focus:ring-2 focus:ring-[#88FF55] focus:border-[#88FF55]`} aria-invalid={!!errors.email} />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>
                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-[#A8B0C2]">Subject</label>
                                    <input type="text" id="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder="Project Collaboration" required className={`mt-1 block w-full bg-[#0C0F1D] border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm py-2 px-3 text-[#E6EAF2] focus:outline-none focus:ring-2 focus:ring-[#88FF55] focus:border-[#88FF55]`} aria-invalid={!!errors.subject} />
                                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                                </div>
                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-[#A8B0C2]">Your Message</label>
                                    <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} placeholder="Tell me more about your project or opportunity..." required minLength={20} className={`mt-1 block w-full bg-[#0C0F1D] border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md shadow-sm py-2 px-3 text-[#E6EAF2] focus:outline-none focus:ring-2 focus:ring-[#88FF55] focus:border-[#88FF55]`} aria-invalid={!!errors.message}></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>
                                {/* Submit Button */}
                                <div>
                                    <button type="submit" disabled={status === 'loading'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0C0F1D] bg-[#88FF55] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#88FF55] disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300">
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </form>
                         <AnimatePresence>
                            {status === 'success' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-4 p-3 text-center text-sm text-green-300 bg-green-900/50 rounded-md" role="alert">Thanks! I’ll get back to you within 24–48 hours.</motion.div>
                            )}
                             {status === 'error' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-4 p-3 text-center text-sm text-red-300 bg-red-900/50 rounded-md" role="alert">Something went wrong. Please try again or email me directly.</motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                     {/* Right Column: Contact Info */}
                    <motion.div
                         className="bg-[#111623] p-8 rounded-[14px] border border-[rgba(136,255,85,0.14)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, amount: 0.3 }}
                         transition={{ duration: 0.7 }}
                    >
                         <h2 className="text-2xl font-bold text-[#E6EAF2] mb-6">Contact Information</h2>
                         <div className="space-y-4 text-[#A8B0C2]">
                            <p>Email me directly or connect with me on social media.</p>
                            <p><strong className="text-[#E6EAF2]">Email:</strong> <a href="mailto:shubhasree.sarkar3103@gmail.com" className="hover:text-[#88FF55] transition-colors">shubhasree.sarkar3103@gmail.com</a></p>
                            <p><strong className="text-[#E6EAF2]">Phone:</strong> <a href="tel:+917978584688" className="hover:text-[#88FF55] transition-colors">+91-7978584688</a></p>
                            <p><strong className="text-[#E6EAF2]">Location:</strong> Bengaluru, India</p>
                         </div>
                         <div className="mt-8 pt-6 border-t border-gray-800">
                             <h3 className="text-lg font-semibold text-[#E6EAF2]">Follow Me</h3>
                             <div className="mt-4 flex flex-col space-y-3">
                                 <a href="https://www.linkedin.com/in/shubhasree-sarkar-51052178/" target="_blank" rel="noopener noreferrer" className="inline-block text-center w-full px-4 py-2 text-sm font-semibold text-[#E6EAF2] border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">LinkedIn</a>
                                 <a href="https://github.com/shubhasree1234" target="_blank" rel="noopener noreferrer" className="inline-block text-center w-full px-4 py-2 text-sm font-semibold text-[#E6EAF2] border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">GitHub</a>
                                 <a href="https://www.instagram.com/data.product_design/" target="_blank" rel="noopener noreferrer" className="inline-block text-center w-full px-4 py-2 text-sm font-semibold text-[#E6EAF2] border-2 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 hover:border-[#88FF55] hover:neon-text">Instagram</a>
                             </div>
                         </div>
                    </motion.div>
                </div>
            </div>
         </div>
    );
};

export default Contact;