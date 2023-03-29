// 변수만들기
// 변수에 타입지정가능 (장점) 타입이 실수로 변경될 때 에러내줌
// 변수명 :타입명
let 이름2: string = 'kim';
let 나이2: number = 50;
let 결혼했니: boolean = true;

let 회원들: string[] = ['강동욱', '손흥민']; // :string[] => 문자만 담긴 array만 가능

let 회원들2: { member1: string; member2: string } = {
  member1: '강동욱',
  member2: '손흥민',
};

// 온갖 곳에 타입지정할 필요없다. 타입지정 원래 자동으로 된다. 타입지정 문법 생략가능
let 회원들3 = '강동욱';

// 연습문제
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
// 물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다.
let 나의이름: string = '강동욱';
let 나의나이: number = 26;
let 나의고향: string = '서산';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
// object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
// 근데 제목과 가수는 문자만 들어올 수 있어야합니다.
let 좋아하는거: { 노래제목: string; 가수: string } = {
  노래제목: '네가 없는밤',
  가수: 'BE:O',
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};
