// Prototype inheitance

// shinchen me useke papa ki properties aayegi
// Parent se child me Parent ki properties jana, inside Prototype (borrow karna)

var Human = {
  canWalk: true,
  canTalk: true,
  canFly: false,
  canDie: true,
};

var SupremeStudent = {
  createModernWebsites: true,
  solveJsProblems: true,
};

// .__proto__  is used for Inherit

SupremeStudent.__proto__ = Human;
