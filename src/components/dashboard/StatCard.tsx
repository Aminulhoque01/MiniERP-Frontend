type Props = {
  title: string;
  value: number | string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
};

export default StatCard;