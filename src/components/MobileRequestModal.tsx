
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface MobileRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileRequestModal = ({ isOpen, onClose }: MobileRequestModalProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({
        interestedIn: '',
        iAm: '',
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        workPhone: '',
        comments: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            setTimeout(() => setIsAnimating(true), 10);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            setIsAnimating(false);
            setTimeout(() => setShowModal(false), 300);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Trap Focus and Close on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.interestedIn) newErrors.interestedIn = 'Please select an option';
        if (!formData.iAm) newErrors.iAm = 'Please select an option';
        if (!formData.companyName) newErrors.companyName = 'Company Name is required';
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.telephone) newErrors.telephone = 'Telephone is required';

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Simulate API call
            console.log('Form Submitted:', formData);
            setIsSubmitted(true);
            setFormData({
                interestedIn: '',
                iAm: '',
                companyName: '',
                firstName: '',
                lastName: '',
                email: '',
                telephone: '',
                workPhone: '',
                comments: ''
            });
        }
    };

    if (!showModal) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className={`bg-white w-full max-w-2xl rounded-xl shadow-2xl relative overflow-hidden transition-all duration-300 transform ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-heading font-bold text-gray-900">Request a callback</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                            <p className="text-gray-600">Our team will contact you shortly.</p>
                            <button onClick={() => { setIsSubmitted(false); onClose(); }} className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">Close</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Interested In */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested In <span className="text-red-500">*</span></label>
                                    <select
                                        value={formData.interestedIn}
                                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.interestedIn ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all appearance-none`}
                                    >
                                        <option value="">Select option</option>
                                        <option value="iOS App Development">iOS App Development</option>
                                        <option value="Android App Development">Android App Development</option>
                                        <option value="Cross-Platform App">Cross-Platform App</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="App Maintenance">App Maintenance</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.interestedIn && <p className="text-red-500 text-xs mt-1">{errors.interestedIn}</p>}
                                </div>

                                {/* I am */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">I am <span className="text-red-500">*</span></label>
                                    <select
                                        value={formData.iAm}
                                        onChange={(e) => setFormData({ ...formData, iAm: e.target.value })}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.iAm ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all appearance-none`}
                                    >
                                        <option value="">Select option</option>
                                        <option value="Startup Founder">Startup Founder</option>
                                        <option value="Business Owner">Business Owner</option>
                                        <option value="Product Manager">Product Manager</option>
                                        <option value="CTO / Tech Lead">CTO / Tech Lead</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.iAm && <p className="text-red-500 text-xs mt-1">{errors.iAm}</p>}
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.companyName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all`}
                                    placeholder="Your company name"
                                />
                                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all`}
                                        placeholder="First name"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all`}
                                        placeholder="Last name"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Telephone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Telephone <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        value={formData.telephone}
                                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.telephone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} rounded-lg focus:ring-0 outline-none transition-all`}
                                        placeholder="123-456-7890"
                                    />
                                    {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                                </div>

                                {/* Work Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.workPhone}
                                        onChange={(e) => setFormData({ ...formData, workPhone: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-0 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Optional"
                                    />
                                </div>
                            </div>

                            {/* Comments */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                                <textarea
                                    value={formData.comments}
                                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-0 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Your comments here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0a0f1c] text-white font-bold text-lg py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98]"
                            >
                                SEND REQUEST
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileRequestModal;
