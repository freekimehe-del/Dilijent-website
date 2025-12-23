import { useEffect, useState } from 'react';

export const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate 2s load time
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out">
            <div className="flex flex-col items-center">
                {/* Spinner or Logo animation */}
                <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin mb-4"></div>
                <h2 className="text-xl font-heading font-bold text-gray-900 animate-pulse">
                    Dilijent<span className="text-primary">Systems</span>
                </h2>
            </div>
        </div>
    );
};
