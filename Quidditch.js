function quidditchScoreboard(teams, actions) {
  //   variable declaration
  let pointsOne = 0,
    pointTwo = 0,
    teamOne = " ",
    teamTwo = " ",
    finalSentens = " ";
  //...
  report = actions.split(", ");
  for (let team of report) {
    team.split(" ");
  }
  console.log(report);
  let splingTheTeam = teams.split(" vs");

  // teams code source

  teamOne = `${splingTheTeam[0]}:${pointsOne}`;
  teamTwo = `${splingTheTeam[2]}:${pointTwo}`;
  finalSentens = `${teamOne}, ${teamTwo}`;
  console.log(finalSentens);
} //END OF THE MAIN FUN

teams = "Kenmare Kestrels vs Barnton";
actions =
  "Barnton: Quaffle goal, Kenmare Kestrels: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Kenmare Kestrels: Blurting foul, Barnton: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Barnton: Quaffle goal, Kenmare Kestrels: Caught Snitch";
quidditchScoreboard(teams, actions);
