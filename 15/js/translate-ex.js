//15.캔버스로 그래픽 요소 다루기
//15-2.그래픽 요소 변형하기
//15-2-2.위치 옮기기 - translate() 메서드
//15-2-2-1.원점을 옮겨서 도형 그리기
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.save(); // 캔버스의 현재 드로잉 상태를 저장.
ctx.translate(150, 150); // 원점을 이동.
ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = 'teal';
ctx.fillRect(50, 50, 80, 20);
ctx.restore(); // 캔버스의 드로잉 상태 복구.