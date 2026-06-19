type StatCardProps = {
  title: string;
  value: number | string;
  icon: string;
};

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-5
      shadow-sm
      border
      border-slate-100
      hover:shadow-md
      transition-all
      duration-300
      w-full
      overflow-hidden
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        gap-4
        "
      >
        {/* Text Section */}

        <div
          className="
          min-w-0
          flex-1
          "
        >
          <p
            className="
            text-slate-500
            text-sm
            font-medium
            truncate
            "
            title={title}
          >
            {title}
          </p>

          <h2
            className="
            text-3xl
            font-bold
            mt-2
            text-slate-800
            wrap-break-word
            "
          >
            {value}
          </h2>
        </div>

        {/* Icon */}

        <div
          className="
          h-14
          w-14
          shrink-0
          rounded-2xl
          bg-linear-to-r
          from-indigo-500
          to-purple-500
          text-white
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
