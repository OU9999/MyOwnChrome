const quotes = [
  {
    quotes:
      "인간을 행복하게 만드는 것이, 동시에 불행의 원천이 될 수 있다는 사실은 과연 변할 수 없는 것일까?",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quotes: "다른 누군가를 사랑하는 것은 신의 얼굴을 보는 것이다.",
    author: "레 미제라블",
  },
  {
    quotes: "겸허한 사랑은 포학보다 훨씬 위력적이고 경외시되는 힘이다.",
    author: "표도르 도스토옙스키",
  },
  {
    quotes: "사랑받는 것은 행복이 아니고 사랑하는 일이야말로 행복이다.",
    author: "헤르만 헤세",
  },
  {
    quotes:
      "사랑한다는 것은 둘이 마주보는 것이 아니라, 같은 방향을 바라보는 것이다.",
    author: "앙투안 드 생텍쥐페리",
  },
  {
    quotes: "사랑하라, 인생에서 좋은 것은 그것뿐이다.",
    author: "조르주 상드",
  },
  {
    quotes: "슬기는 사랑의 첩경이다.",
    author: "유럽의 속담",
  },
  {
    quotes: "재산도, 지위도 사랑에 비하면 먼지에 불과하다.",
    author: "윌리엄 이워트 글래드스턴",
  },
  {
    quotes: "사랑받고 싶다면 사랑하라, 그리고 사랑스럽게 행동하라.",
    author: "벤저민 프랭클린",
  },
  {
    quotes: "사랑이 나를 구했고, 너를 구하고, 세상을 구할 거야.",
    author: "블랙 베히모스",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
