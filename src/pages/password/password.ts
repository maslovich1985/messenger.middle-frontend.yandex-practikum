import './password.less';
import { validateInputs } from '../../utils/utils';
import { regexPass } from '../../utils/regex';
import Block from '../../utils/Block';

export class PasswordPage extends Block<{ onClick: Function }> {
  constructor() {
    super({
      onClick: (event: Event) => {
        if ((event.target as HTMLButtonElement).id === 'button-save') {
          this.validate();
        }
      },
    });
  }

  validate() {
    validateInputs({ elementId: 'oldPassword', regexp: regexPass }, { elementId: 'newPassword', regexp: regexPass });
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="password-form">
                <h2 class="password-form__title">Сменить пароль</h2>
                <form class="password-form__form">
                    <div class="input-block">
                        {{{ InputField labelText="Текущий пароль:" inputId="oldPassword" inputType="password"
                                       inputName="oldPassword" regexp="${regexPass}" }}}
                        {{{ InputField labelText="Новый пароль:" inputId="newPassword" inputType="password"
                                       inputName="newPassword" regexp="${regexPass}" }}}  
                    </div>
                    <div class="button-block">
                        {{{ Button buttonId="button-save" label="Сохранить" onClick=onClick }}}
                        {{{ Button buttonId="button-cancel" label="Отмена" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
