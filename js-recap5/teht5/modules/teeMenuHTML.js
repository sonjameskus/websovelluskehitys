const teeMenuHTML = (courses) => {
  let html = '';
  for (const course of courses) {
    const {name, price, diets} = course;
    html += `
    <article class="course">
    <hr>
      <p><strong>${name || 'Ei ilmoitettu'}</strong></p>
      <p>Hinta: ${price ?? 'Ei ilmoitettu'}</p>
      <p>Allergeenit: ${diets ?? 'Ei ilmoitettu'}</p>
    </article>
    `;
  }
  return html;
};

export default teeMenuHTML;
