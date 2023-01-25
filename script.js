function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja() {
  for (let i = 0; i <= 20; i += 5) {
    console.log(i);
  }
}

function mojaFunkcja2() {
  const target = 3;
  let sum = 0;

  for (let i = 0; i <= target; i += 1) {
    console.log("Twoje i wynosi: " + i);
    sum += i;
    console.log("Twoja suma wynosi: " + sum);
  }
  console.log(sum);
}

function mojaFunkcja3() {
  const clients = ["mango", "Poly", "Ajax"];

  for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i]);
  }
}

function mojaFunkcja4() {
  const clients = ["mango", "Poly", "Ajax"];
  const clientNameToFind = "Poly";

  for (const client of clients) {
    if (client === clientNameToFind) {
      message = "Klient z takim imieniem jest w bazie danych!";
      break;
    }
    message = "Nie ma klienta w bazie danych";
  }
  console.log(message);
}

function mojaFunkcja5(imie) {
  const clients = ["mango", "Poly", "Ajax"];
  let message;

  for (const client of clients) {
    if (client === imie) {
      message = "Klient z takim imieniem jest w bazie danych!";
      break;
    }
    message = "Nie ma klienta w bazie danych";
  }
  console.log(message);
}
