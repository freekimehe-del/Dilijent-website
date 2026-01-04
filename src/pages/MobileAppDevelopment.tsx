
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Smartphone, MonitorSmartphone, Code, Layers, ShieldCheck, Rocket, UserCheck, AppWindow, Settings, Zap, Globe } from 'lucide-react';
import MobileRequestModal from '@/components/MobileRequestModal';

// Placeholder images for portfolio
const PORTFOLIO_IMAGES = {
    meditrack: "https://placehold.co/600x400/10b981/ffffff?text=MediTrack+Pro",
    shopswift: "https://placehold.co/600x400/3b82f6/ffffff?text=ShopSwift",
    finpulse: "https://placehold.co/600x400/6366f1/ffffff?text=FinPulse+Wallet",
    eduspark: "https://placehold.co/600x400/f59e0b/ffffff?text=EduSpark+LMS",
    fleetsync: "https://placehold.co/600x400/ef4444/ffffff?text=FleetSync",
    fitjourney: "https://placehold.co/600x400/ec4899/ffffff?text=FitJourney"
};

const MobileAppDevelopment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('All');

    // SEO and Scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Mobile App Development Services | iOS, Android, Cross-Platform";

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', "Expert mobile app development services for iOS and Android. Custom, secure, and scalable mobile solutions for healthcare, fintech, and more.");
    }, []);

    const openModal = () => setIsModalOpen(true);

    // Portfolio Data
    const portfolioItems = [
        {
            id: 1,
            title: "MediTrack Pro",
            category: "Healthcare",
            platform: "iOS + Android",
            description: "Comprehensive patient monitoring and telehealth solution.",
            image: PORTFOLIO_IMAGES.meditrack,
            metrics: "+45% user engagement",
            type: "Healthcare"
        },
        {
            id: 2,
            title: "ShopSwift",
            category: "E-commerce",
            platform: "Cross-Platform",
            description: "High-performance mobile commerce app with 1-click checkout.",
            image: PORTFOLIO_IMAGES.shopswift,
            metrics: "100k+ downloads",
            type: "E-commerce"
        },
        {
            id: 3,
            title: "FinPulse Wallet",
            category: "FinTech",
            platform: "iOS",
            description: "Secure crypto and fiat digital wallet with real-time analytics.",
            image: PORTFOLIO_IMAGES.finpulse,
            metrics: "Bank-grade security",
            type: "FinTech"
        },
        {
            id: 4,
            title: "EduSpark LMS",
            category: "Education",
            platform: "Android",
            description: "Interactive learning management system for schools.",
            image: PORTFOLIO_IMAGES.eduspark,
            metrics: "50k+ active students",
            type: "Education"
        },
        {
            id: 5,
            title: "FleetSync",
            category: "Logistics",
            platform: "Cross-Platform",
            description: "Real-time fleet tracking and driver management system.",
            image: PORTFOLIO_IMAGES.fleetsync,
            metrics: "Reduced process time by 30%",
            type: "Logistics"
        },
        {
            id: 6,
            title: "FitJourney",
            category: "Fitness",
            platform: "iOS + Android",
            description: "Personalized workout and nutrition planning app.",
            image: PORTFOLIO_IMAGES.fitjourney,
            metrics: "4.9 star rating",
            type: "Healthcare"
        }
    ];

    const filteredPortfolio = activeTab === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.platform.includes(activeTab) || item.category === activeTab || item.type === activeTab);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0A0F1C] text-white py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Top-Rated Mobile App Development Agency
                        </div>

                        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
                            Mobile App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                            Transform your business with high-impact iOS, Android, and cross-platform mobile solutions. We build secure, scalable, and user-centric apps that drive growth.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            {['30+ Apps Delivered', 'Agile Team', 'Secure & Scalable'].map((tag) => (
                                <div key={tag} className="flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={openModal}
                            className="bg-[#EF2B2B] hover:bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-900/20 active:scale-95"
                        >
                            Get Quote for Mobile App Development
                        </button>
                    </div>
                </div>
            </section>

            {/* Highlights / Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">Why Choose Us?</h2>
                        <p className="text-slate-600">We combine technical expertise with design thinking to deliver exceptional mobile experiences.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Expert Mobile Developers", desc: "Seasoned engineers with deep expertise in Swift, Kotlin, and React Native." },
                            { icon: <UserCheck className="w-8 h-8 text-purple-500" />, title: "UI/UX Focused", desc: "User-centric design that ensures high engagement and intuitive navigation." },
                            { icon: <Rocket className="w-8 h-8 text-red-500" />, title: "Fast Delivery with Agile", desc: "Rapid iteration cycles to get your product to market faster." },
                            { icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "Secure Code & Compliance", desc: "Enterprise-grade security standards and data protection protocols." },
                            { icon: <Settings className="w-8 h-8 text-orange-500" />, title: "Post-Launch Support", desc: "Dedicated maintenance and updates to keep your app running smoothly." },
                            { icon: <Layers className="w-8 h-8 text-cyan-500" />, title: "Scalable Architecture", desc: "Built to handle growth, from thousands to millions of users." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white" id="services-list">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">Comprehensive Mobile Services</h2>
                        <p className="text-slate-600">End-to-end mobile application development tailored to your business needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Android App Development", icon: <Smartphone />, desc: "Native Android apps ensuring high performance and seamless integration with the ecosystem.", bullets: ["Kotlin / Java", "Material Design", "Google Play Optimization"] },
                            { title: "iOS App Development", icon: <AppWindow />, desc: "Premium iOS applications built for iPhone and iPad with strict adherence to Apple's design guidelines.", bullets: ["Swift / SwiftUI", "Human Interface Guidelines", "App Store Success"] },
                            { title: "Cross-Platform Development", icon: <Globe />, desc: "Build once, deploy everywhere. Cost-effective solutions without compromising on performance.", bullets: ["React Native / Flutter", "Single Codebase", "Native Performance"] },
                            { title: "Hybrid Apps", icon: <MonitorSmartphone />, desc: "Web technologies wrapped in native containers for rapid development and deployment.", bullets: ["Ionic / Capacitor", "Web Tech Stack", "Fast Time-to-Market"] },
                            { title: "UI/UX Design for Mobile", icon: <Zap />, desc: "Creating visually stunning and highly intuitive interfaces that users love.", bullets: ["Wireframing & Prototyping", "User Research", "Visual Design"] },
                            { title: "App Maintenance & Support", icon: <Settings />, desc: "Keeping your app up-to-date, secure, and bug-free ensuring long-term success.", bullets: ["Performance Monitoring", "Security Updates", "Feature Enhancements"] }
                        ].map((service, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="mb-6 text-blue-600">
                                    {/* Create a wrapper to resize icon */}
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-600 mb-6">{service.desc}</p>
                                <ul className="space-y-2">
                                    {service.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Work</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Mobile App Portfolio</h2>
                            <p className="text-gray-400 max-w-xl">Explore how we've helped businesses transform their ideas into successful mobile products.</p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {['All', 'iOS', 'Android', 'Healthcare', 'E-commerce', 'FinTech'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveTab(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === filter
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPortfolio.map((item) => (
                            <div key={item.id} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                                            {item.platform}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                                    {item.metrics && (
                                        <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/5">
                                            <p className="text-sm font-semibold text-green-400">{item.metrics}</p>
                                        </div>
                                    )}

                                    <button className="text-white font-medium text-sm flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                                        View Case Study <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">Development Process</h2>
                        <p className="text-slate-600">A transparent and collaborative approach to bring your app to life.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {['Discovery', 'Wireframing', 'Development', 'QA & Testing', 'Deployment', 'Support'].map((step, idx) => (
                                <div key={idx} className="relative bg-white pt-8 lg:pt-0">
                                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto lg:mb-8 shadow-lg shadow-blue-200 relative z-10">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-center font-bold text-slate-900 mb-2">{step}</h3>
                                </div>
                            ))}
                        </div>
                        {/* Mobile Timeline: Could be enhanced, but simple grid works for now */}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology Stack</h2>
                        <p className="text-slate-600">We use modern frameworks to build robust applications.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder text/icons if actual logos aren't available as assets */}
                        {['Flutter', 'React Native', 'Swift', 'Kotlin', 'Node.js', 'Firebase', 'AWS', 'Azure', 'GraphQL', 'Docker'].map(tech => (
                            <div key={tech} className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:scale-105 transition-all">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">{tech[0]}</div>
                                <span className="font-semibold text-slate-700">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Client Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Johnson", role: "CEO, MediTrack", text: "The team delivered an exceptional healthcare app that exceeded our expectations. Patient engagement has doubled!" },
                            { name: "Michael Chen", role: "Founder, ShopSwift", text: "Professional, agile, and technically sound. They built our cross-platform store in record time." },
                            { name: "David Miller", role: "CTO, FinPulse", text: "Their security-first approach gave us the confidence to launch our fintech wallet globally." }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="flex gap-1 mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                                </div>
                                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How long does mobile app development take?", a: "Typically 3-6 months depending on complexity. MVP can be launched faster." },
                            { q: "What's the cost of an app?", a: "Costs vary based on features. We offer custom quotes after a free discovery session." },
                            { q: "Do you provide maintenance?", a: "Yes, we offer ongoing support and maintenance packages to keep your app updated." },
                            { q: "Do you build both iOS and Android?", a: "Absolutley. We build native apps for both, as well as cross-platform solutions." },
                            { q: "Do you sign NDA?", a: "Yes, we sign NDAs to protect your intellectual property and confidentiality." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-slate-50 rounded-lg p-4 cursor-pointer open:bg-white open:shadow-md transition-all">
                                <summary className="font-semibold text-slate-900 flex justify-between items-center decoration-0 list-none">
                                    {faq.q}
                                    <span className="transition-transform group-open:rotate-180">▼</span>
                                </summary>
                                <p className="text-slate-600 mt-4 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Let's Build Your Mobile App</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Ready to turn your idea into a reality? Schedule a free consultation with our experts today.</p>
                    <button
                        onClick={openModal}
                        className="bg-white text-blue-900 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Request a Callback
                    </button>
                </div>
            </section>

            <Footer />
            <MobileRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default MobileAppDevelopment;
