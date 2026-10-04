interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#171717]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
          align === 'center' ? 'mx-auto' : ''
        } ${
          light ? 'text-white/60' : 'text-[#666666]'
        }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
