/** Illustrated assistant identity; decorative beside the Counsel AI label. */
export default function CounselAvatar({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="32" fill="#DBEAFE" />
      <path d="M15 43V26c0-13 7-21 17-21s18 8 18 21v18H15Z" fill="#0B1F4B" />
      <path d="M9 64c1-14 8-22 23-22s22 8 23 22" fill="#1D4ED8" />
      <path d="m24 44 8 14 8-14-8 3-8-3Z" fill="white" />
      <path d="M26 35h12v11c-3 5-9 5-12 0V35Z" fill="#B97450" />
      <ellipse cx="32" cy="27" rx="13" ry="17" fill="#D99A73" />
      <path d="M18 25C16 13 22 7 31 7c12 0 18 8 16 20-7-2-12-7-14-12-3 6-8 9-15 10Z" fill="#0B1F4B" />
      <path d="M24 28h3m10 0h3" stroke="#0B1F4B" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 36c2 2 6 2 8 0" stroke="#873F31" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m23 45-5 7 10 3-4 9m17-19 5 7-10 3 4 9" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M47 27v8c0 4-3 6-8 6" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="36" y="39" width="6" height="4" rx="2" fill="#C2410C" />
      <rect x="44" y="25" width="5" height="10" rx="2.5" fill="#C2410C" />
    </svg>
  );
}
