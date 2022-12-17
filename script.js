let words = ["apple", "pear", "peach", "apricot", "plum"];
// document.write('<img id="' + words[1] + '" src="images/' + words[1] + '.png">');

window.onload = function () {
  gen(random(words));
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = check;
  }
};
function random(arr) {
  let n;
  let arrRandom = [];
  while (arrRandom.length != 3) {
    n = Math.floor(Math.random() * arr.length);
    if (!arrRandom.includes(n)) arrRandom.push(arr[n]);
  }
  return arrRandom;
}
console.log(random(words));
function check(event) {
  let image = event.target;
  let answ = prompt("Вгадайте назву");
  if (answ == image.id) {
    alert(`Молодець, це ${image.id}`);
  } else alert(`Ні, це ${image.id}`);
}
function gen(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(
      '<img id="' + arr[i] + '" src="images/' + arr[i] + '.png" height="120">'
    );
  }
}
