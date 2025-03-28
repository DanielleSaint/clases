export class members {
    constructor(name, age) {
      this.name = name
      this.age = age
    } 
}

const member1 = new members("Dani",31);
const member2 = new members("Fernando",31);

export class team {
    constructor(principiante) {
      this.principiante = []
      console.log(this.principiante);
      
    }
    add(member){
      this.principiante.push(member)
    }
}

const team1 = new team()


