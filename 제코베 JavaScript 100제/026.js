// 행성 문제2
// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

const planets = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune"
}

const name = prompt("행성의 한글 이름을 입력해주세요.");
console.log(planets[name]);

// 마침표 연산자 planets.name으로는 키값에 접근 불가. ex_planets.수성은 가능