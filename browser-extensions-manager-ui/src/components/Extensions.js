const options = ['All', 'Active', 'Inactive'];

const Extensions = () => {
  return `

    <div class="extensions__container container">
      <h2 class="extensions__title">Extensions List</h2>
      <nav class="extensions__nav">
        ${options.map(option => `<button class="extensions__button">${option}</button>`).join('')}
      </nav>
    </div>
    
  `

};

export default Extensions;
