import Block from '../../utils/Block';
import './errorForm.less';

interface IButtonProps {
  errorNumber: number;
}

export class ErrorForm extends Block<IButtonProps> {
  constructor({ errorNumber }: IButtonProps) {
    super({
      errorNumber,
    });
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="error-container">
                <p class="error-text">
                    Ошибка <b>{{errorNumber}}</b>. Скоро починим!
                </p>
                <nav>
                    <a href="../../index.html">На главную</a>
                </nav>
            </div>
        </div>
    `;
  }
}
