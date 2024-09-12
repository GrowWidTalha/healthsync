import React from "react";

interface TextGradientProps {
    children: React.ReactNode;
}

const TextGradient: React.FC<TextGradientProps> = ({ children }) => {
    return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
            {children}
        </span>
    );
};

export default TextGradient;
