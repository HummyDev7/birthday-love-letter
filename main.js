let allFunc = (function () {
  let yesBtn = document.querySelector(".yes__btn");
  let noBtn = document.querySelector(".no__btn");
  let greeting = document.querySelector(".greeting");
  let love__letter = document.querySelector(".love__letter");
  let loveText = document.querySelector(".text");
  let loveTextTwo = document.querySelector(".textTwo");
  let heartClick = document.querySelector(".heart");
  let subContainer = document.querySelector(".subContainer");

  noBtn.addEventListener("click", increaseDiv);
  noBtn.addEventListener("click", increaseFontSizeBy100px);
  yesBtn.addEventListener("click", loveLetter);
  heartClick.addEventListener("click", letter);

  function increaseDiv() {
    let currWidth = yesBtn.getBoundingClientRect().width;
    let currHeight = yesBtn.getBoundingClientRect().height;
    yesBtn.style.height = currHeight + 50 + "px";
    yesBtn.style.width = currWidth + 50 + "px";
  }

  function increaseFontSizeBy100px() {
    let style = window
      .getComputedStyle(yesBtn, null)
      .getPropertyValue("font-size");
    let currentSize = parseFloat(style);
    yesBtn.style.fontSize = currentSize + 10 + "px";
  }

  function loveLetter() {
    greeting.style.display = "none";
    love__letter.style.display = "block";
    typingEffect(loveText, 100, "Happy Birthday");
    setTimeout(() => {
      typingEffect(loveTextTwo, 100, "Click my heart");
    }, 2000);
  }

  const typingEffect = (element, speed, txt) => {
    let i = 0;
    let timer = setInterval(function () {
      if (i < txt.toString().length) {
        element.append(txt.charAt(i));
        i++;
        //What this does is empty the text content if the text reach its last length
        if (i == txt.toString().length) {
          setTimeout(() => {}, 1000);
        }
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  function letter() {
    subContainer.style.display = "none";
  }
})();
