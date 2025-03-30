export class members {
    constructor(name, age) {
      this.name = name
      this.age = age
    } 
}

const member1 = new members("Dani",31);
const member2 = new members("Fernando",40);
const member3 = new members("Kerly",25);
const member4 = new members("Fabian",38); //agregar llamado

export class team {
    constructor() {
      this.principiante = []
      this.eliminado = []
    }
    add(member){
        this.principiante.push(member)
    }
    remove(member){
      for (let i = 0; i < this.principiante.length; i++) {
        if (member === this.principiante[i]) {
          this.eliminado.push(this.principiante[i])
          this.principiante.splice(i,1);
          return;
        }
      }
    }
}

const team1 = new team();
team1.add(member1);
team1.add(member2);
team1.add(member3);
team1.add(member4);
team1.remove(member2);
console.log(team1);


