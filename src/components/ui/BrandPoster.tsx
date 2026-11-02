// Фирменная композиция «Диёра»: восточная арка-ниша, звёзды-сарказ и силуэт мечети с минаретами.
// Полностью на SVG: название — настоящий текст, масштабируется без потери качества.
const GOLD = "#d9b477";
const CREAM = "#f7f1e6";

export function BrandPoster() {
  return (
    <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Диёра — восточная кухня" className="absolute inset-0 size-full">
      <defs>
        <radialGradient id="bp-bg" cx="50%" cy="42%" r="75%">
          <stop offset="0" stopColor="#0d4f3d" />
          <stop offset="1" stopColor="#04231b" />
        </radialGradient>
        <linearGradient id="bp-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3dfb2" />
          <stop offset="0.55" stopColor={GOLD} />
          <stop offset="1" stopColor="#b88b45" />
        </linearGradient>
        <pattern id="bp-lattice" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M24 4l20 20-20 20L4 24z M24 14l10 10-10 10-10-10z" fill="none" stroke={GOLD} strokeOpacity=".16" />
        </pattern>
        {/* восьмиконечная звезда */}
        <g id="bp-star" fill="none" stroke={GOLD} strokeWidth="1.5">
          <rect x="-10" y="-10" width="20" height="20" />
          <rect x="-10" y="-10" width="20" height="20" transform="rotate(45)" />
          <circle r="3" fill={GOLD} stroke="none" />
        </g>
        <path id="bp-arch" d="M160 830V470C160 330 300 250 400 150C500 250 640 330 640 470V830Z" />
        <clipPath id="bp-niche"><use href="#bp-arch" /></clipPath>
      </defs>

      <rect width="800" height="1000" fill="url(#bp-bg)" />
      <rect width="800" height="1000" fill="url(#bp-lattice)" />

      {/* рамка с угловыми звёздами */}
      <rect x="28" y="28" width="744" height="944" rx="6" fill="none" stroke="url(#bp-gold)" strokeWidth="2.5" />
      <rect x="44" y="44" width="712" height="912" rx="3" fill="none" stroke={GOLD} strokeOpacity=".5" />
      {[[44, 44], [756, 44], [44, 956], [756, 956]].map(([x, y]) => (
        <use key={`${x}-${y}`} href="#bp-star" transform={`translate(${x} ${y}) scale(1.1)`} />
      ))}

      {/* звезда над аркой и по бокам */}
      <use href="#bp-star" transform="translate(400 98) scale(2)" />
      <use href="#bp-star" transform="translate(112 250) scale(1.4)" />
      <use href="#bp-star" transform="translate(688 250) scale(1.4)" />
      <use href="#bp-star" transform="translate(112 420) scale(0.9)" />
      <use href="#bp-star" transform="translate(688 420) scale(0.9)" />

      {/* ниша: двойной контур стрельчатой арки */}
      <use href="#bp-arch" fill="#04231b" fillOpacity=".55" />
      <use href="#bp-arch" fill="url(#bp-lattice)" />
      <use href="#bp-arch" fill="none" stroke="url(#bp-gold)" strokeWidth="3" />
      <path d="M182 830V474C182 346 308 272 400 182C492 272 618 346 618 474V830" fill="none" stroke={GOLD} strokeOpacity=".6" strokeWidth="1.2" />

      {/* название */}
      <text x="400" y="538" textAnchor="middle" fill="url(#bp-gold)" fontSize="168" fontWeight="600" style={{ fontFamily: "var(--font-serif), Georgia, serif" }}>Диёра</text>
      <path d="M250 585H375M425 585H550" stroke={GOLD} strokeOpacity=".7" />
      <use href="#bp-star" transform="translate(400 585) scale(0.8)" />
      <text x="400" y="636" textAnchor="middle" fill={CREAM} fontSize="23" letterSpacing="8" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>ВОСТОЧНАЯ КУХНЯ</text>

      {/* силуэт: купол и минареты */}
      <g clipPath="url(#bp-niche)" fill="#03191a" stroke={GOLD} strokeWidth="1.6" strokeOpacity=".85">
        <g transform="translate(0 14)">
        <path d="M250 830V775H335V735C335 700 365 685 400 662C435 685 465 700 465 735V775H550V830Z" />
        <path d="M400 662V636" />
        <circle cx="400" cy="631" r="5" fill={GOLD} />
        <path d="M382 830V775C382 755 392 748 400 740C408 748 418 755 418 775V830" fill="none" />
        {[232, 568].map((x) => (
          <g key={x}>
            <rect x={x - 11} y="715" width="22" height="115" />
            <path d={`M${x - 16} 715Q${x} 676 ${x + 16} 715Z`} />
            <path d={`M${x} 690V664`} />
            <path d={`M${x - 11} 745H${x + 11}M${x - 11} 775H${x + 11}`} strokeOpacity=".5" />
          </g>
        ))}
        </g>
      </g>

      {/* нижний орнаментальный пояс */}
      <path d="M44 862H756M44 930H756" stroke={GOLD} strokeOpacity=".6" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M${100 + i * 75} 896l16-16 16 16-16 16z`} fill="none" stroke={GOLD} strokeOpacity=".8" />
      ))}
    </svg>
  );
}
