class Pet {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  run = function() {
    alert(`${this.name} is running.`);
  }
}

const pet = new Pet("미미", "검정");
// pet.run();

class Cat extends Pet {
  constructor(name, color, breed){
    super(name, color);
    this.breed = breed;
  }

  viewInfo = function() {
    alert(`이름 : ${this.name}, 품종: ${this.breed}, 색깔 : ${this.color}`);
  }
}

const cat = new Cat("아롱", "흰색", "일반");
cat.viewInfo();