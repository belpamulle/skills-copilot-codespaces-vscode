function skillsMember() {
  // create array with members
  var members = [
    {
      name: "Nico",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Jeroen",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      name: "David",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    }
  ];

  // loop through members
  for (var i = 0; i < members.length; i++) {
    // get name of member
    var name = members[i].name;
    // get skills of member
    var skills = members[i].skills;

    // log name of member
    console.log("Member: " + name);
    // log skills of member
    console.log("Skills: " + skills.join(", "));
  }
}