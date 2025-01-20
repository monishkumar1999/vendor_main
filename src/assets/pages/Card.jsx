import React from "react";

const Cards = () => {
  const cards = [
    {
      key: 'today-revenue',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      title: 'Today Revenue',
      value: '1,200',
      image: '/image/montly_revnue.png',
    },
    {
      key: 'today-loaded',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-900',
      title: 'Today Loaded',
      value: '1,200',
      image: '/image/daily_load.png',
    },
    {
      key: 'monthly-revenue',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-900',
      title: 'Monthly Revenue',
      value: '1,200',
      image: '/image/monthly_revenue.png',
    },
    {
      key: 'monthly-load',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-900',
      title: 'Monthly Load',
      value: '1,200',
      image: '/image/monthly_stock.png',
    },
  ];

  return (
    <>
      {/* Grid items inside the chart section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.key}
            className={`${card.bgColor} h-44 rounded-lg shadow-lg flex flex-col justify-between p-4`}
          >
            <img src={card.image} alt={card.title} className="w-20" />
            <div className={`font-bold text-lg ${card.textColor}`}>{card.title}</div>
            <div className={`text-3xl font-bold ${card.textColor}`}>{card.value}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
