import Block from '../../utils/Block';
import './authorisation.less';
import { validateInputs } from '../../utils/utils';
import { regexLogin, regexPass } from '../../utils/regex';

export class AuthorisationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs({ elementId: 'login', regexp: regexLogin }, { elementId: 'password', regexp: regexPass });
  }

  render() {
    // language=hbs
    return `
      <div class="form-container">
        <div class="authorisation-form">
          <h2 class="authorisation-form__title">Авторизация</h2>
          <form class="authorisation-form__form">
            <div class="input-block">
              {{{ InputField labelText="Логин:" inputId="login" inputType="text" inputName="login" regexp="${regexLogin}" }}}
              {{{ InputField labelText="Пароль:" inputId="password" inputType="password" inputName="password" regexp="${regexPass}" }}}

              <nav class="nav-block">
                <a class="nav-block__link" href="../registration/index.html">Регистрация</a>
              </nav>
            </div>
            <div class="button-block">
              {{{ Button buttonId="button-auth" label="Авторизация" onClick=onClick }}}
            </div>
          </form>
        </div>
      </div>
    `;
  }
}
