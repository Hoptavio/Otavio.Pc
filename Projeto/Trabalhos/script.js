let nome = document.getElementById("nome").innerText;
let idade = document.getElementById("idade").innerText;

document.getElementById("ola").innerText = "Olá " + nome;

if(idade >= 18)
{
  document.getElementById("acesso").innerHTML = "seja bem vindo";
}
else
{
  document.getElementById("acesso").innerHTML = "saia imediatamente ";
}
