
abstract class Coffee {
  public description: string = "I'm a coffee";

  public abstract cost(): number;

  public abstract getDescription(): string;
}

abstract class Decorator extends Coffee {
  coffee: Coffee;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class Expresso extends Coffee {
  public description: string = "I'm an Expresso";

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 9.99;
  }
}

class Cappuccino extends Coffee {
  public description: string = "I'm a Cappuccino";

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 15.99;
  }
}

class Mocha extends Coffee {
  public description: string = "I'm a Mocha";

  public getDescription(): string {
    return this.description;
  }

  public cost(): number {
    return 12.99;
  }
}

class WithMilk extends Decorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + " , with milk";
  }

  public cost(): number {
    return this.coffee.cost() + 0.99;
  }
}

class WithCinnamon extends Decorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + " , with cinnamon";
  }

  public cost(): number {
    return this.coffee.cost() + 1.05;
  }
}

class WithExtraSugar extends Decorator {
  coffee: Coffee;

  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + " , with extra sugar";
  }

  public cost(): number {
    return this.coffee.cost() + 0.80;
  }
}

let expresso: Coffee = new Expresso();

// Example 1

console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");

expresso = new WithMilk(expresso);

console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");

expresso = new WithCinnamon(expresso);

console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");

expresso = new WithExtraSugar(expresso);

console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");

// Example 2

let cappuccino: Coffee = new Cappuccino();

console.log("Name: " + cappuccino.getDescription());
console.log("Price: " + cappuccino.cost());
console.log("\n");

cappuccino = new WithMilk(cappuccino);

console.log("Name: " + cappuccino.getDescription());
console.log("Price: " + cappuccino.cost());
console.log("\n");

cappuccino = new WithCinnamon(cappuccino);

console.log("Name: " + expresso.getDescription());
console.log("Price: " + expresso.cost());
console.log("\n");

cappuccino = new WithExtraSugar(cappuccino);

console.log("Name: " + cappuccino.getDescription());
console.log("Price: " + cappuccino.cost());
console.log("\n");
