type WidgetCardProps = {
  title: string;
};

function WidgetCard({ title }: WidgetCardProps) {
  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  );
}

export default WidgetCard;
