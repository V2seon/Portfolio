// 이미지 파일명 배열
const imageFiles = [];

// 이미지 파일명을 배열에 추가 (1.png부터 33.png까지)
const startNumber = 1;
const endNumber = 33;

for (let i = startNumber; i <= endNumber; i++) {
    const fileName = `${i}.png`;
    imageFiles.push(fileName);
}

let remainingImages = [...imageFiles]; // 남은 이미지 배열 (복사본)

function getRandomImage() {
    if (remainingImages.length === 0) {
        // 모든 이미지를 보여준 경우, 초기화
        remainingImages = [...imageFiles];
    }

    // 남은 이미지 중에서 랜덤하게 선택
    const randomIndex = Math.floor(Math.random() * remainingImages.length);
    const randomImage = remainingImages[randomIndex];

    // 선택한 이미지 보여주기
    const imageElement = document.getElementById('randomImage');
    imageElement.src = randomImage;

    // 사용된 이미지는 남은 이미지 배열에서 제거
    remainingImages.splice(randomIndex, 1);
}

// 페이지 로드 시 초기 이미지 설정
getRandomImage();

// 이미지 클릭 시 새로운 이미지 보여주기
const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', getRandomImage);