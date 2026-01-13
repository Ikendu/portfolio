export default function CardContents({ title, desc, image, link, tools }) {
  return (
    <div className="max-w-[400px] border-2 border-blue-50 rounded-xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src={image}
          alt={title}
          className="w-full object-cover border-2 border-slate-700 group-hover:scale-110 transition-transform duration-300 rounded-lg"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-500 flex flex-col justify-end p-4 text-center rounded-lg">
          <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors transform translate-y-8 group-hover:translate-y-0 duration-500 opacity-0 group-hover:opacity-100">
            {title}
          </h4>
          <span className="text-gray-300 text-sm mb-3 transform translate-y-8 group-hover:translate-y-0 duration-700 opacity-0 group-hover:opacity-100 delay-100">
            {desc}
          </span>
          <p className="font-bold text-cyan-400 text-xs transform translate-y-8 group-hover:translate-y-0 duration-700 opacity-0 group-hover:opacity-100 delay-200">
            {tools}
          </p>
        </div>
      </a>
    </div>
  );
}
