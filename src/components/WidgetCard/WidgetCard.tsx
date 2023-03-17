type WidgetCardProps = {
  title: string;
  children: any;
};

function WidgetCard({ title, children }: WidgetCardProps) {
  return (
    <div className="mx-1 my-4 p-3 w-full bg-gray-100 rounded-xl">
      <h1 className="text-lg font-bold">{title}</h1>
      {children}
    </div>
  );
}

export default WidgetCard;
