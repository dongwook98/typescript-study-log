// 📌 Union Type (타입2개 이상 합친 새로운 타입만들기)
let 회원: number | string = 123;
// 할당하는 순간 타입은 string 또는 number 중 하나로 변함. 다시 할당하면 타입이 또 바뀜
회원 = '123';

let 회원들4: (number | string)[] = [1, '2', 3]; // 배열안에 숫자 또는 문자
let 회원들5: number | string[] = 1; // 숫자 혹은 문자만 담긴 배열
let obj: { a: string | number } = { a: '123' };

// 📌 any타입 -> 모든 자료형 허용해줌 (타입스크립트 쓰는 의미가 없어짐)
// any타입 -> 타입실드 해제문법임. 그래서 에러를 뿜지 않음..
// 타입관련 버그가 나도 잡아주지 않음 그래서 비상시 쓰는 변수 타입체크 해제기능 이런용도로 쓰자.
let 이름3: any;
이름3 = 123;
이름3 = [];

// 📌 unknown 타입 -> 모든 자료형 허용해줌 (any보다 조금 더 안전함)
// 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 이걸 쓰자.
// 특징 1. unknown 타입에는 모든 자료 다 넣을수 있음
// 특징 2. 자료집어넣어도 타입은 그대로 unknown이다.
let 이름4: unknown;
이름4 = 123;
이름4 = {};
// any보다 안전한 이유는 unknown 타입을 다른 곳에 집어넣으려고 하면 에러가 남 (any는 에러가 안 남)
let 변수: string = 이름4;

// 📌 타입스크립트의 엄격함에 대해
// - 간단한 수학연사도 타입맞아야함
let 이름5: unknown;
이름5 - 1; // unknown타입 이라 에러 내뿜어줌

// ⭐️(중요) 타입스크립트는 타입 엄격하게 지켜야함
// ⭐️(중요) 간단한 수학연산도 타입맞아야함
let 나이: string | number; // union타입도 새로운 타입임!
나이 + 1; // union타입이라 에러 뿜어줌

let 나이3: unknown = 1;
나이 - 1; // unknown타입이라 에러 뿜어줌

// 🔎 (참고) 그래서 unknown 타입인 변수를 조작하려면
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용해야한다.
// 그것이 타입스크립트의 근간이 되는 코딩방법이고
// 변수에 뭐가 들어있을지 애매한, 추측해야하는 상황이 나오는 시점에선 반드시 사용해야한다.

// 📖 (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];
// (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다.

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 📖 (숙제2) 학교라는 변수에 타입지정해보십시오.
// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
