// 이미지 파일명 배열
const imageFiles = [];

// 이미지 파일명을 배열에 추가 (1.png부터 5.png까지)
const startNumber = 1;
const endNumber = 5;

for (let i = startNumber; i <= endNumber; i++) {
    const fileName = `/portfolio/images/question/${i}.png`;
    imageFiles.push(fileName);
}

let remainingImages = [...imageFiles]; // 남은 이미지 배열 (복사본)
let lastShownIndex = -1; // 마지막으로 보여준 이미지 인덱스 초기화

function getRandomImage() {
    console.log("클릭")
    if (remainingImages.length === 0) {
        // 모든 이미지를 보여준 경우, 초기화
        remainingImages = [...imageFiles];
    }

    let randomIndex;
    do {
        // 남은 이미지 중에서 랜덤하게 인덱스 선택
        randomIndex = Math.floor(Math.random() * remainingImages.length);
    } while (randomIndex === lastShownIndex); // 이전에 보여준 이미지와 중복되지 않도록 반복

    // 선택한 이미지 보여주기
    const randomImage = remainingImages[randomIndex];
    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage;

    // 문제 번호 설정
//    const questionNumber = document.getElementById('questionNumber');
//    const currentQuestionNumber = startNumber + randomIndex;
//    questionNumber.innerText = `문제 번호: ${currentQuestionNumber}`;

    // 사용된 이미지는 남은 이미지 배열에서 제거
    remainingImages.splice(randomIndex, 1);

    // 마지막으로 보여준 이미지 인덱스 업데이트
    lastShownIndex = randomIndex;
}

// 페이지 로드 시 초기 이미지 설정
getRandomImage();

// 이미지 클릭 시 새로운 이미지 보여주기
const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', getRandomImage);
