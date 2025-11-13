import data from '../../data.json';
const options = ['All', 'Active', 'Inactive'];

const Extensions = () => {
  return `

    <div class="extensions__container container">
      <h2 class="extensions__title">Extensions List</h2>
      <nav class="extensions__nav">
        ${options.map(option => `<button class="extensions__button">${option}</button>`).join('')}
      </nav>

      <section class="extensions__list">

        ${data.map((extension, index) => `
          <article class="extension__card" key=${index}>
            <img src="${extension.logo}" alt="${extension.name} logo" class="extension__img" />
          <div class="extension__info">
            <h3 class="extension__name">${extension.name}</h3>
            <p class="extension__description">${extension.description}</p>
            <div>
              <div class="toggle-container">
                <div class="toggle"></div>
              </div>
            </div>
          </div>
          </article>
        `)}
      </section>
    </div>
    
  `

};

export default Extensions;
