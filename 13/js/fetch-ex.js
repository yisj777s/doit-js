//13-3.fetch API
//13-3-2.fetcj로 파일 가져오기
//fetch를 사용해 JSON 파일 가져오기
fetch('student-2.json') // json 파일을 읽어옴.
.then(response => response.json()) // json 파일을 객체로 변환.
.then(json => {
  let output = '';
  json.forEach(student => {
    output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
      `;
  });
  document.querySelector("#result").innerHTML = output;
})
.catch(error => console.log(error));