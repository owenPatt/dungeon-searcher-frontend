const challengePerLevel = [
  [0.1, 0.2, 0.25, 0.5, 1, 2.1], // 1
  [0.07, 0.125, 0.2, 0.4, 0.6, 1, 1.5], // 2
  [0.05, 0.085, 0.12, 0.3, 0.5, 0.7, 1, 1.5, 2], // 3
  [0.02, 0.071, 0.1, 0.16, 0.33, 0.5, 0.7, 1, 1.5, 2], // 4
  [0.015, 0.05, 0.072, 0.12, 0.18, 0.36, 0.5, 0.65, 0.8, 1, 1.1, 1.5, 2], // 5
  [
    0.01, 0.015, 0.0625, 0.09, 0.14, 0.3, 0.4, 0.5, 0.65, 0.8, 0.9, 1.3, 1.6, 2,
    2.3,
  ], // 6
  [
    0.01, 0.01, 0.05, 0.077, 0.15, 0.25, 0.33, 0.45, 0.6, 0.75, 0.9, 1, 1.35,
    1.6, 1.9, 2.3,
  ], // 7
  [
    0, 0, 0.05, 0.07, 0.11, 0.2, 0.33, 0.4, 0.5, 0.6, 0.75, 0.9, 1.1, 1.3, 1.5,
    1.8, 2.1,
  ], // 8
  [
    0, 0, 0.025, 0.067, 0.09, 0.2, 0.25, 0.35, 0.45, 0.65, 0.75, 0.85, 0.9, 1,
    1.3, 1.5, 1.7, 2,
  ], // 9
  [
    0, 0, 0.02, 0.055, 0.08, 0.15, 0.2, 0.33, 0.45, 0.55, 0.67, 0.75, 0.9, 1,
    1.1, 1.3, 1.5, 1.8, 2,
  ], // 10
];

const getMonsterIndex = (cr) => {
  if (cr === 0) return 0;
  else if (cr === 0.125) return 1;
  else if (cr === 0.25) return 2;
  else if (cr === 0.5) return 3;
  else return cr + 3;
};

const calculateChallengeRating = (partyLevel, selectedResults) => {
  let totalChallenge = 0;
  for (let i = 0; i < selectedResults.length; i++) {
    const monster = selectedResults[i];
    const monsterChallenge = monster.cr;
    let monsterIndex = getMonsterIndex(monsterChallenge);
    if (!challengePerLevel[partyLevel - 1][monsterIndex])
      return "TPK In coming!";
    const challenge = challengePerLevel[partyLevel - 1][monsterIndex];
    totalChallenge += challenge;
  }

  if (totalChallenge >= 0 && totalChallenge < 0.4) {
    return "Super Easy";
  } else if (totalChallenge >= 0.4 && totalChallenge < 0.6) {
    return "Easy";
  } else if (totalChallenge >= 0.6 && totalChallenge <= 1) {
    return "Medium";
  } else if (totalChallenge > 1 && totalChallenge < 1.5) {
    return "Hard";
  } else if (totalChallenge >= 1.5 && totalChallenge <= 2) {
    return "Deadly";
  } else if (totalChallenge > 2) {
    return "TPK In coming!";
  }
};

export default calculateChallengeRating;
