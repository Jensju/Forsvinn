import { getUser, getAccess, updateAccess } from '../server-request.js'
import admin from './admin.js'
window.admin = admin

export async function handleLogin(e) {
  e.preventDefault();

  const adminUser = await getUser() // fetch the stored login values from db

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const userExists = await adminUser.some(user => user.username === username && user.password === password)
  console.log(userExists);

  if (userExists) {

    let access = await getAccess()
    
    access = {
      id: 1,
      exist: "true"
    }
    updateAccess(access)
    alert('Du har loggat in!')

    window.location.href = "#admin"

  } else {
    alert('Fel användarnamn eller lösenord')
  }
}

export async function logOut(e) {
  e.preventDefault();

  let access = await getAccess()

  access = {
    id: 1,
    exist: "false"
  }
  updateAccess(access)

  window.location.href = ""
}