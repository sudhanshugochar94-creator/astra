import React from 'react';

interface VanikaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const VanikaLogo: React.FC<VanikaLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  onClick
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      role={onClick ? 'button' : 'group'}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Unique Organic Leaf & Sun Tea emblem */}
      <div
        className={`rounded-2xl bg-gradient-to-br from-[#12263A] to-[#1D3A56] text-[#E4E4E4] flex items-center justify-center border-2 border-[#697A21] shadow-md group-hover:scale-105 transition-all relative overflow-hidden shrink-0 ${
          isSm ? 'w-9 h-9' : isLg ? 'w-14 h-14' : 'w-11 h-11'
        }`}
      >
        {/* Soft Sun Glow */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#697A21]/30 rounded-full blur-xs" />
        
        {/* Custom SVG Tea Leaf & Sacred Banyan Emblem */}
        <svg
          viewBox="0 0 32 32"
          className={`${isSm ? 'w-5 h-5' : isLg ? 'w-8 h-8' : 'w-6 h-6'} text-[#C5D8D1] transition-transform group-hover:rotate-6`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer Leaf Curve */}
          <path d="M16 4C10 8 6 15 8 23C13 25 21 24 25 18C28 12 24 6 16 4Z" fill="#C5D8D1" fillOpacity="0.45" stroke="#697A21" />
          {/* Leaf Vein */}
          <path d="M11 20C14 16 16 12 16 4" stroke="#12263A" strokeWidth="1.8" />
          <path d="M14 14L18 16" stroke="#12263A" strokeWidth="1.5" />
          <path d="M12 18L15 19.5" stroke="#12263A" strokeWidth="1.5" />
          {/* Olive Sun Dot */}
          <circle cx="23" cy="8" r="2.5" fill="#697A21" stroke="none" />
        </svg>
      </div>

      {/* Crisp Dark High-Contrast Wordmark */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-center gap-0.5">
          <span
            className={`font-heading font-extrabold tracking-tight text-[#12263A] dark:text-[#E4E4E4] ${
              isSm ? 'text-xl' : isLg ? 'text-3xl' : 'text-2xl'
            }`}
          >
            ASTRA
            <span className="text-[#697A21] font-black inline-block ml-0.5">
              .
            </span>
          </span>
        </div>

        {showTagline && (
          <p className="text-[10px] sm:text-xs font-black text-[#697A21] dark:text-[#C5D8D1] tracking-wider whitespace-nowrap block mt-0.5">
            Remember. Play. Connect.
          </p>
        )}
      </div>
    </div>
  );
};
