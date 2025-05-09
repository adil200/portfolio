// src/components/ParticleBackground.js
import React, { useEffect, useRef } from 'react';
import particlesConfig from '../particle-config';

const ParticleBackground = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        // Ensure window.particlesJS is available
        if (window.particlesJS && particlesRef.current) {
            window.particlesJS(particlesRef.current.id, particlesConfig);
        }

        // Optional: Cleanup function to destroy particles instance when component unmounts
        return () => {
            if (window.pJSDom && window.pJSDom.length > 0) {
                // pJSDom[0] usually refers to the first (and often only) instance
                // The library stores instances in window.pJSDom array.
                // A more robust way would be to find the specific instance if you had many,
                // but for one, this is usually fine.
                // Check if the pJS object and its destroy function exist
                const pJS = window.pJSDom[0]?.pJS;
                if (pJS && typeof pJS.fn?.vendors?.destroypJS === 'function') {
                    pJS.fn.vendors.destroypJS();
                    window.pJSDom = []; // Clear the array after destroying
                }
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

    return (
        <div
            id="particles-js" // This ID is used by particles.js
            ref={particlesRef}
            style={{
                position: 'fixed', // Or 'fixed' if you want it to stay during scroll
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1,
                backgroundColor: '#000000'
                
            }}
        ></div>
    );
};

export default ParticleBackground;