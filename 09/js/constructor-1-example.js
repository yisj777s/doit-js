function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function() {
    let str = "";
    this.done === false ? str = "읽는 중" : str = "완독";
    return str;
  }
}