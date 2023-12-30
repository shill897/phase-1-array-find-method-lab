function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //... other game records
  ];
  
  const winningYear = superbowlWin(record);
  console.log("Year of Superbowl Win:", winningYear); // Output: "Year of Superbowl Win: 2015" (if a win exists)
  







