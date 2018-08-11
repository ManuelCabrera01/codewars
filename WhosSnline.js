const whosOnline = friends => {
  const statusobject = { online: [], offline: [], away: [] };

  for (let people of friends) {
    if (people.status === "offline") {
      statusobject.offline.push(people.username);
    } else if (people.status === "online" && people.lastActivity > 10) {
      statusobject.away.push(people.username);
    } else if (people.status === "online" && people.lastActivity >= 10) {
      statusobject.online.push(people.username);
    }
  }
  if (statusobject.online.length <= 0) {
    delete statusobject.online;
  }
  console.log(statusobject);
};
friends = [
  {
    username: "David",
    status: "offline",
    lastActivity: 10
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22
  },
  {
    username: "Bob",
    status: "offline",
    lastActivity: 104
  }
];

whosOnline(friends);
