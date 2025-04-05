const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const emails = [
  "rennifer10@gmail.com",
  "ana.silva123@emailteste.com",
  "joao.teste.falso@exemplo.net",
  "marcos_dev_fake@maildemo.org",
  "lara.inexistente@testeapp.com",
  "teste.usuario@dominiofalso.io",
  "email.naoexiste@abcxyz.fake",
  "usuario123@invalido.dev",
  "falso.contato@naoresponder.org",
  "lucas_aleatorio@webmailfake.net",
];

const apiKey = process.env.EMAILABLE_API_KEY;

async function verificarEmails() {
  for (const email of emails) {
    try {
      const response = await fetch(
        `https://api.emailable.com/v1/verify?email=${email}&api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(`✅ Resultado da verificação para ${email}:`, data.state);
    } catch (error) {
      console.error(`❌ Erro ao verificar ${email}:`, error.message);
    }
  }
}

verificarEmails();
