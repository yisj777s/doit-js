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
pet.run();