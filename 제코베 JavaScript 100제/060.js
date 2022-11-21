// 번호 매기기

// 이름을 가나다 순서로 배정하고 번호 매기기

const students = [
    "강은지",
    "김유정",
    "박현서",
    "최성훈",
    "홍유진",
    "박지호",
    "권윤일",
    "김채리",
    "한지호",
    "김민호",
    "강채연",
];

students.sort().forEach((student, index) => {
    console.log(`번호: ${index + 1}, 이름: ${student}`);
});
