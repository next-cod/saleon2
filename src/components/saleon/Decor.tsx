export function BlobA({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="bA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2555F5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7AA2FF" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bA)"
        d="M421,331Q393,412,309,447Q225,482,150,427Q75,372,87,286Q99,200,167,148Q235,96,322,108Q409,120,440,210Q471,300,421,331Z"
      />
    </svg>
  );
}

export function BlobB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="bB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        fill="url(#bB)"
        d="M438,316Q416,382,353,418Q290,454,210,438Q130,422,103,346Q76,270,121,205Q166,140,243,118Q320,96,392,144Q464,192,460,256Q456,320,438,316Z"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} aria-hidden fill="none">
      <path d="M2 10 C 20 0, 40 20, 60 10 S 100 0, 120 10 S 160 20, 198 10"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowHand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden fill="none">
      <path d="M5 10 C 40 5, 70 20, 80 55" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeDasharray="1 5" />
      <path d="M70 50 L 82 60 L 88 46" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
