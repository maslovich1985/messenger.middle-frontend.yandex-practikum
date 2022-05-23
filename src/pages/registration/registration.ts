import Block from '../../utils/Block';
import './registration.less';
import { validateInputs } from '../../utils/utils';
import {
  regexEmail, regexLogin, regexName, regexPass, regexPhone,
} from '../../utils/regex';

export class RegistrationPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs(
      { elementId: 'email', regexp: regexEmail },
      { elementId: 'login', regexp: regexLogin },
      { elementId: 'first_name', regexp: regexName },
      { elementId: 'second_name', regexp: regexName },
      { elementId: 'phone', regexp: regexPhone },
      { elementId: 'password', regexp: regexPass },
    );
  }

  render() {
    // language=hbs
    return `
        <div class="form-container">
            <div class="registration-form">
                <h2 class="registration-form__title">Регистрация</h2>
                <form class="registration-form__form">
                    <div class="input-block">
                        {{{ InputField labelText="Почта:" inputId="email" inputType="email" inputName="email" regexp="${regexEmail}" }}}
                        {{{ InputField labelText="Логин:" inputId="login" inputType="text" inputName="login" regexp="${regexLogin}" }}}
                        {{{ InputField labelText="Имя:" inputId="first_name" inputType="text" inputName="first_name" regexp="${regexName}" }}}
                        {{{ InputField labelText="Фамилия:" inputId="second_name" inputType="text" inputName="second_name" regexp="${regexName}" }}}
                        {{{ InputField labelText="Телефон:" inputId="phone" inputType="tel" inputName="phone" regexp="${regexPhone}" }}}
                        {{{ InputField labelText="Пароль:" inputId="password" inputType="password" inputName="password" regexp="${regexPass}" }}}
                    </div>
                    <div class="button-block">
                        {{{ Button buttonId="button-register" label="Регистрация" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
