export class members {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.items = []
    this.itemEliminado = []
  }
  add(item){
    this.items.push(item);
  }
  remove(item){
    for (let i = 0; i < this.items.length; i++) {
      if (item === this.items[i]) {
        this.itemEliminado.push(this.items[i])
        this.items.splice(i,1);
        return;
      }
    }
  }
}

const member1 = new members("Dani",31);
const member2 = new members("Fernando",40);
const member3 = new members("Kerly",25);
const member4 = new members("Fabian",38); 

//& inventario
member1.add("Baston")
member1.add("Hongos")
member2.add("Pocion")
member2.add("Manzana")
member3.add("Libro")
member4.add("Katana")

member1.remove("Baston")

console.log(member1);
console.log(member2);
console.log(member3);
console.log(member4);



