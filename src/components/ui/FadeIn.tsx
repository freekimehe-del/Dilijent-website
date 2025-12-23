import { useRef, useEffect, useState, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
    threshold?: number;
}

const FadeIn = ({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    className = '',
    threshold = 0.1
}: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    const getTransform = () => {
        switch (direction) {
            case 'up': return 'translateY(20px)';
            case 'down': return 'translateY(-20px)';
            case 'left': return 'translateX(20px)';
            case 'right': return 'translateX(-20px)';
            default: return 'none';
        }
    };

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    };

    return (
        <div
            ref={domRef}
            className={className}
            style={style}
        >
            {children}
        </div>
    );
};

export default FadeIn;
