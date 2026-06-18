type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="text-indigo-100 mt-2">
        {description}
      </p>
    </div>
  );
}