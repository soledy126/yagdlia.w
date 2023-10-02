// Crie a função addUser()
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);

   window.location.replace("game_page.html");// Obtenha o valor do usuário através das ids player1_name_input e player2_name_input

  // Armazene esses valores localmente

  // Atribua "game_page.html" para window.location
}

