window.data = ['Inventory', 'item', 'boom', 'Inventory', 'Invsdfsdf'];

function renderWords(entries) {
  window.words.innerHTML = `${entries
    .map(entry => {
      if (typeof entry === 'string') {
        return `<div>${entry}</div>`;
      }

      return `
      	<div>
					${entry[0]}<span style="background-color: yellow">${entry[1]}</span>${entry[2]}
				</div>
      `;
    })
    .join('')}`;
}

renderWords(window.data);

window.search.addEventListener('input', function (ev) {
  const { value } = ev.currentTarget;

  const data = [...window.data].map(item => {
    const index = item.toLowerCase().indexOf(value.toLowerCase());

    if (index > -1) {
      return [
        item.substr(0, index),
        item.substr(index, value.length),
        item.substr(index + value.length),
      ];
    }

    return item;
  });

  renderWords(data);
});
