import React from 'react';
import './Rewards.css';

const Rewards = ({ summary }) => {
  let messageColorClass = '';

  const calculatePoints = () => {
    const totalCalories = summary.calories;
    let points = 0;

    if (totalCalories >= 200 && totalCalories <= 500) {
      points = 10;
      messageColorClass = 'reward-message-red';
    } else if (totalCalories > 500 && totalCalories <= 800) {
      points = 20;
      messageColorClass = 'reward-message-blue';
    } else if (totalCalories > 800) {
      points = 30;
      messageColorClass = 'reward-message-green';
    }

    return points;
  };

  const points = calculatePoints();

  return (
    <div className="rewards">
      <h2>Reward Points</h2>
      <p>Total Calories: {summary.calories}</p>
      <p >Points Earned: {points}</p>
      <div className="reward-details">
        {points > 0 && (
          <p className={`reward-message ${messageColorClass}`}>Congratulations! You've earned {points} points for balanced nutrition.</p>
        )}
      </div>
    </div>
  );
};

export default Rewards;
