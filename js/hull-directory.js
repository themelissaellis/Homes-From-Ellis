const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < hull.length; i++ ) {
  let room = hull[i];
  html += `
  <img src="${room.photo}" alt="${room.description}">
  `;
}

main.insertAdjacentHTML('beforeend', html);

{/* <h4>${room.description}</h4> */}