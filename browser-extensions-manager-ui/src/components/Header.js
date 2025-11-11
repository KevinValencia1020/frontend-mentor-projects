import logo  from '../../assets/images/logo.svg';
import darkbtn from '../../assets/images/icon-moon.svg';

const Header = () => {
  return `
  <header>
    <div class="container header__container">
      <img src="${logo}" alt="logo" class="header__logo" />

      <button class="header__btn">
        <img src="${darkbtn}" alt="menu icon" />
      </button>
    </div>
  </header>
`
};
export default Header;