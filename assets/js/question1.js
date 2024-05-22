// 이미지 파일명 배열
const imageFiles = [];

// 이미지 파일명을 배열에 추가 (1.png부터 5.png까지)
const startNumber = 1;
const endNumber = 360;
let yanswer = 0;
let answerYN = 1;

for (let i = startNumber; i <= endNumber; i++) {
    const fileName = `/portfolio/images/newque/${i}.png`;
    imageFiles.push(fileName);
}

let remainingImages = [...imageFiles]; // 남은 이미지 배열 (복사본)
let shownImages = new Set(); // 이미 보여진 이미지 저장할 Set
let numberindex = 0;
let thisIndex;
function getRandomImage() {
    if(answerYN == 1){
        answerYN = 0;
            const imageIndex1 = document.getElementById('answer');
            imageIndex1.textContent = '';
            if(numberindex >= endNumber){
                numberindex = 0;
                yanswer = 0;
                const answerIndex = document.getElementById('answerIndex');
                answerIndex.textContent = '정답 : ( '+yanswer+' / '+ endNumber+' )'
            }
            numberindex++;
            if (remainingImages.length === 0) {
                // 모든 이미지를 보여준 경우, 초기화
                remainingImages = [...imageFiles];
                shownImages.clear(); // 보여진 이미지 Set 초기화
            }

            let randomImage;
            do {
                // 남은 이미지 중에서 랜덤하게 선택
                const randomIndex = Math.floor(Math.random() * remainingImages.length);
                randomImage = remainingImages[randomIndex];
            } while (shownImages.has(randomImage)); // 이미 보여진 이미지는 건너뛰기

            // 선택한 이미지 보여주기
            const imageElement = document.getElementById('randomImage');
            imageElement.src = randomImage;
            thisIndex = randomImage.match(/\d+/)[0];
            // 이미지를 보여준 것으로 처리
            shownImages.add(randomImage);

            // 사용된 이미지는 남은 이미지 배열에서 제거
            remainingImages = remainingImages.filter(image => image !== randomImage);
            const imageIndex = document.getElementById('imageIndex');
            imageIndex.textContent = '( '+numberindex+' / '+ endNumber+' )'
    }
}

function getrightAnswer(){
    const answerText = document.getElementById('answer');
    answerText.textContent = answers[thisIndex-1];
}

// 페이지 로드 시 초기 이미지 설정
getRandomImage();

// 이미지 클릭 시 새로운 이미지 보여주기
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', getRandomImage);

//const answerButton = document.getElementById('answerButton');
//answerButton.addEventListener('click', getrightAnswer);



function ckanswer(data){
answerYN = 1;
if(answers[thisIndex-1] == data){
    yanswer += 1;
    const answerIndex = document.getElementById('answerIndex');
    answerIndex.textContent = '정답 : ( '+yanswer+' / '+ endNumber+' )'
}
getrightAnswer();
}

