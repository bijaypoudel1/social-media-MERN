import { TrendData } from "../../Data/trendData";

const TrendCard = () => {
  return (
    <>
      <div className="mt-10">
        <div className="bg-[#F7F7F7] p-5 rounded-xl shadow-xl">
          <h1 className=" text-primary-black text-xl font-bold">
            Trends For You
          </h1>
          <div className="flex flex-col mt-5 gap-2">
            {TrendData.map((value, index) => {
              return (
                <div className="" key={index}>
                  <p className="font-bold text-primary-black">
                    # <span>{value.name}</span>
                  </p>
                  <p className="text-primary-gray text-sm">
                    {value.shares} <span>shares</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendCard;
