type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div
      className="p-4 rounded text-white shadow-sm"
      style={{ backgroundColor: "#0d3b66" }}
    >
      <h4 className="fw-bold mb-2">{title}</h4>

      <small className="text-white-50">{description}</small>
    </div>
  );
}