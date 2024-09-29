// razzle();
// function razzle() {
//   console.log("you have been razzled");
// }

// function razzle(lawyer = "Brian", target = "'em") {
//   console.log(`${lawyer} razzle-dazzles ${target}`);
// }
// razzle();
// razzle("Mwangi", "T'challah");

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
};

// const saturdayFun = (activity = "roller-skate") => {
