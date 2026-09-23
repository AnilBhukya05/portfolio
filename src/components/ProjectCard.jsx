export default function ProjectCard({ title, description, tags, image, link, index, status }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-3xl border border-line bg-white/60 overflow-hidden hover:shadow-soft hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
        />
        {index && (
          <span className="absolute top-4 left-4 h-8 w-8 rounded-full bg-paper/90 backdrop-blur flex items-center justify-center text-xs font-semibold text-ink/60">
            {index}
          </span>
        )}
        {status && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-paper/90 backdrop-blur text-[11px] font-medium text-sage flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            {status}
          </span>
        )}
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl">{title}</h3>
          <span className="mt-1 h-8 w-8 shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm group-hover:bg-clay group-hover:text-white group-hover:border-clay group-hover:rotate-45 transition-all duration-300">
            ↗
          </span>
        </div>
        <p className="text-ink2 text-sm mt-3 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {(tags || []).map((t) => (
            <span key={t} className="text-[11px] font-medium px-3 py-1 rounded-full bg-paper2 text-ink2">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}