import React from 'react';

const SkillCard = ({ Icon, skillName, iconColor }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 transition-transform bg-white rounded-lg shadow-md duration-600 hover:rotate-20 hover:shadow-lg">
      <Icon className={`w-12 h-12 ${iconColor}`} />
      <p className="mt-2 text-lg font-semibold text-gray-700">{skillName}</p>
    </div>
  );
};

export default SkillCard;