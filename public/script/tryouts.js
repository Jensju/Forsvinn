export default function () {
document.querySelector('#btn-login').innerHTML = "Logga in"; 
}
  
document.querySelector('#login')
login.addEventListener('submit', handleLogin);

drop.addEventListener('change', function (e) {
  e.preventDefault(); document.querySelector('select').options[select.selectedIndex].value;
})


// {
//   "id": 1,
//     "dish": "Pytt-i-panna",
//       "description": "Finskurna bitar av nöt- och fläskkött, tärnad potatis, lök serverad med stekt ägg och rödbetor.",
//         "price": 85
// },
// {
//   "id": 2,
//     "dish": "Pannbiff med löksås",
//       "description": "Pannbiff av nötkött serveras med kokt potatis, gräddig löksås och lingon",
//         "price": 95
// }