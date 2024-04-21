import header from "./header.js";
import home from "./home.js"
import loginForm from "./loginForm.js"
import admin from "./admin.js";
import { handleLogin, logOut } from "./handleLogin.js";
import { appAll, appAllAdmin, appAdd, appUpdate, appDelete, appLogin } from "./app.js";
import { getAccess } from "../server-request.js";


console.log(getAccess());
async function router() {

  //Shortcut to grab on to main
  const toMain = document.querySelector('main');

  //Send header-html to header-section
  document.querySelector('header').innerHTML = header()

  const access = await getAccess() //true or false at login

  // SPA-switch:
  switch (location.hash) {
    case "#log-in":
      console.log(`Loggen: ${access[0].exist}`);

      toMain.innerHTML = loginForm();
      appLogin();
      login.addEventListener('submit', handleLogin);
      break;

    case "#admin":
      console.log(`Loggen 2: ${access[0].exist}`);
      // const getit = true
      if (await access[0].exist === "true") {
        toMain.innerHTML = admin()
        appAllAdmin() + appAdd() + appUpdate() + appDelete();

        document.getElementById('btn-login')
          .innerHTML = "Logga ut";
        document.getElementById('btn-login')
          .id = 'btn-logout';

        document.querySelector('#btn-logout').addEventListener('click', logOut);
        document.querySelector('#btn-meny').addEventListener('click', logOut);
      } else { window.location.href = "#log-in" }
      break;

    default:
      toMain.innerHTML = home()
      appAll()

      document.querySelector('#btn-login').innerHTML = "Logga in";
  }
}

window.onhashchange = router;
window.onload = router;