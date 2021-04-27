function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 3; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}
let army = makeArmy();

army[2]();
