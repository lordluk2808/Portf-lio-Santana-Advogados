import { AUTHORITY_METRICS } from '../data/firmData';

export function AuthorityBar() {
  return (
    <section
      aria-label="Indicadores de experiência do escritório"
      className="bg-white border-b border-slate-200/90"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-slate-200 md:divide-y-0 md:divide-x">
          {AUTHORITY_METRICS.map((item, idx) => (
            <div
              key={item.value}
              className={`${
                idx === 0
                  ? 'pb-4 md:pb-0 md:pr-8'
                  : idx === 1
                    ? 'py-4 md:py-0 md:px-8'
                    : 'pt-4 md:pt-0 md:pl-8'
              } flex flex-col justify-center`}
            >
              <p className="font-serif text-xl sm:text-2xl font-semibold text-[#0F1E36] tabular-nums tracking-tight">
                {item.value}
              </p>
              <p className="text-[15px] sm:text-sm text-[#2B303A]/85 leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
