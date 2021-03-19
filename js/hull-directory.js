const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < hull.length; i++ ) {
  let room = hull[i];
  html += `
  <div class="gallery">
  <img src="${room.photo}" alt="${room.description}">
  <h4>${room.description}</h4>
  </div>
  `;
}

main.insertAdjacentHTML('beforeend', html);

// {/*  */}