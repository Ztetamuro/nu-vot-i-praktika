const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

const textSecond = {
  "text":
    ["Жили-были {var1} да {var2}",
      "Была у них {var3}",
      "Снесла {var3} {var4}, не простое - золотое",
      "- {var1} бил, бил - не разбил",
      "- {var2} била, била - не разбила",
      "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
      "{var1} плачет, {var2} плачет, а {var3} кудахчет:",
      "{speach}"]
};

const textFirst = $('#result');
const btnText = $('#button-fetch');

btnText.click(function () {
  textFirst.html(textSecond.text);
});

const btnRep = $('#button-replace')
const var1Text = $('.var1');
const var2Text = $('.var2');
const var3Text = $('.var3');
const var4Text = $('.var4');
const var5Text = $('.var5');
const var6Text = $('.var6');
const speachText = $('.speach');

btnRep.click(function () {
  const var1 = var1Text.val();
  const var2 = var2Text.val();
  const var3 = var3Text.val();
  const var4 = var4Text.val();
  const var5 = var5Text.val();
  const var6 = var6Text.val();
  const speach = speachText.val();

  const textReplace = {
    "text":
      [
        `Жили-были ${var1} да ${var2}`,
        `Снесла ${var3} ${var4}, не простое - золотое`,
        `- ${var1} бил, бил - не разбил`,
        `- ${var2} била, била - не разбила`,
        `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
        `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
        `${speach}`
      ]
  };
  textFirst.html(textReplace.text);
});

for (i = 0; i <= 100; i++){

  if (i % 3 == 0){ 
    console.log ('Fizz');
  };
  if (i % 5 == 0) {
    console.log ('Buzz');
  };
};