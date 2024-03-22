function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function() { // Book() 생성자 함수에 메서드 추가.
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
}

const book1 = new Book("ABCDE", 10000); // 인스턴스 객체
book1.buy(); // Book 객체의 buy() 메서드를 사용 실행.

function Textbook(title, price, major) {
  Book.call(this, title, price); // 기존 객체의 프로퍼티를 재사용.
  this.major = major; // 새로운 프로퍼티를 정의.
}
Textbook.prototype.buyTextbook = function() { // 새로운 메서드 정의.
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
}

// Textbook 프로토타입을 Book 프로토타입으로 연결.
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
book2.buyTextbook(); // Textbook 객체의 메서드 사용.
book2.buy(); // Book 객체의 메서드 사용.