document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#translate-button").addEventListener("click", () => {
    const vowels = ["a", "e", "i", "o", "u"];
    let resultArray = [];

    let input = (() => {
      content = document.querySelector("#human-text").value;
      processedContent = content.toLowerCase();
      return processedContent;
    });

    console.log(Array.from(input()));

    let testForVowels = vowels.forEach((element) => {
      return element;
    });

    Array.from(input()).forEach((element, index) => {
      if (element == "e") {
        resultArray.push(element)
      } else if (element == "u") {
        resultArray.push(element)
      }
      vowels.forEach((el) => {
        if (element == el) {
          resultArray.push(element);
          console.log(element, index);
        };
      });
    });

    console.log(resultArray);

    whaleSpeech = resultArray.join("").toUpperCase();

    document.querySelector("#whale-text").innerHTML = whaleSpeech;
  });
});