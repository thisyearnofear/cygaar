export default function () {
  return (
    <div className="frame container">
      <div className="frame__title">
        <h1 className="frame__title-main">
          Find him on{" "}
          <a href="https://warpcast.com/cygaar" target="_blank" rel="noopener noreferrer">Farcaster</a>
        </h1>
      </div>
      <a
        aria-label="Abstract announcement"
        className="frame__title-back"
        href="https://x.com/0xCygaar/status/1815779967143141549"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="oh__inner">Abstract announcement on X</span>
        <svg width="18px" height="18px" viewBox="0 0 24 24">
          <path
            vectorEffect="non-scaling-stroke"
            d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
          ></path>
        </svg>
      </a>
      <a 
        className="frame__prev" 
        href="https://decrypt.co/302978/ethreum-l2-abstract-launches-xp-rewards"
        target="_blank"
        rel="noopener noreferrer"
      >
        Decrypt article on Abstract
      </a>
    </div>
  );
}

// Create a new footer component
export function Footer() {
  return (
    <div className="frame container footer-links">
      <a 
        href="https://dexscreener.com/abstract/0xbe01179f2291773d220eae55ee85b417f40342d0"
        target="_blank"
        rel="noopener noreferrer"
      >
        dexscreener
      </a>
      <a 
        href="https://www.abs.xyz/trade/token?address=0x35efa4699edd7b468cbbf4fff7b6e7afc0a7ada6"
        target="_blank"
        rel="noopener noreferrer"
      >
        abs.xyz
      </a>
      <a 
        href="https://warpcast.com/papa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by papa
      </a>
    </div>
  );
}
