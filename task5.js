export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.experience = 0
    this.lvlExp = 100
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(){
    this.level += 1
  }
  expPoint(point){
    this.experience += point
    console.log(point);
    
    while (this.experience >= this.lvlExp) {
      this.experience -= this.lvlExp;
      this.levelUp()

      }
    }
  }


const player1 = new Player("Grog",4);
player1.info();
player1.levelUp();
player1.expPoint(50);
player1.info();
player1.expPoint(180);
player1.info();
player1.expPoint(200);
player1.info();
player1.expPoint(70);
player1.info();
player1.expPoint(70);
player1.info();