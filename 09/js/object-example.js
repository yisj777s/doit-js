const book1 = {
  title : "웹 표준의 정석",
  pages : 648,
  buy : function() {
    console.log("이 책을 구입했습니다.")
  }
}

let keys = Object.keys(book1); // 키만 가져오기
console.log(keys); 

let values = Object.values(book1); // 값만 가져오기
console.log(values);

let entries = Object.entries(book1); // 키와 값 함께 가져오기
console.log(entries);