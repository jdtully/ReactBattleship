var redShips = [];
var blueShips = [];
var redCarrier = [];
var redBattleShip = [];
var blueDestroyer = [];
var redSubmarine = [];
var redCruiser = [];
var blueCarrier = [];
var redDestroyer = [];
var blueCruiser = [];
var blueSubmarine = [];
var blueBattleShip = [];

class Ship {
  constructor(
    shipId,
    shipType,
    className,
    color,
    player,
    orientation,
    size,
    targets,
    hits,
    placed,
    sunk
  ) {
    this.shipId = shipId;
    this.shipType = shipType;
    this.className = className;
    this.color = color;
    this.player = player;
    this.orientation = orientation;
    this.size = size;
    this.targets = targets;
    this.hits = hits;
    this.placed = placed;
    this.sunk = sunk;
  }
}

function makeShips() {
  redCarrier = new Ship(
    "redCarrier",
    "grey",
    "col_carrier",
    "Carrier",
    "red",
    5,
    [],
    [],
    false,
    false
  );
  redShips.push(redCarrier);
  redBattleShip = new Ship(
    "redBattleShip",
    "orange",
    "col_battleShip",
    "Battleship",
    "red",
    4,
    [],
    [],
    false,
    false
  );
  redShips.push(redBattleShip);
  redSubmarine = new Ship(
    "redSubmarine",
    "blue",
    "col_submarine",
    "Submarine",
    "red",
    3,
    [],
    [],
    false,
    false
  );
  redShips.push(redSubmarine);
  redCruiser = new Ship(
    "redCruiser",
    "green",
    "col_cruiser",
    "Cruiser",
    "red",
    3,
    [],
    [],
    false,
    false
  );
  redShips.push(redCruiser);
  redDestroyer = new Ship(
    "redDestroyer",
    "yellow",
    "col_destroyer",
    "Destroyer",
    "red",
    2,
    [],
    [],
    false,

    false
  );
  redShips.push(redDestroyer);
  blueCarrier = new Ship(
    "blueCarrier",
    "grey",
    "col_carrier",
    "Carrier",
    "blue",
    5,
    [],
    [],
    false,
    false
  );
  blueShips.push(blueCarrier);

  blueBattleShip = new Ship(
    "blueBattleShip",
    "orange",
    "col_battleShip",
    "Battleship",
    "blue",
    4,
    [],
    [],
    false,
    false
  );
  blueShips.push(blueBattleShip);
  blueSubmarine = new Ship(
    "blueSubmarine",
    "blue",
    "col_submarine",
    "Submarine",
    "blue",
    3,
    [],
    [],
    false,
    false
  );
  blueShips.push(blueSubmarine);
  blueCruiser = new Ship(
    "blueCruiser",
    "green",
    "col_cruiser",
    "Cruiser",
    "blue",
    3,
    [],
    [],
    false,
    false
  );
  blueShips.push(blueCruiser);
  blueDestroyer = new Ship(
    "blueDestroyer",
    "yellow",
    "col_destroyer",
    "Destroyer",
    "blue",
    2,
    [],
    [],
    false,

    false
  );
  blueShips.push(blueDestroyer);

  console.log("makeships done");
}
export default makeShips;
