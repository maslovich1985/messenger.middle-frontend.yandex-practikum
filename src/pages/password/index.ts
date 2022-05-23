import { registerComponent } from '../../utils/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { renderDom } from '../../utils/renderDom';
import { PasswordPage } from './password';
import InputField from '../../components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

const passwordPage = new PasswordPage();

renderDom('#app', passwordPage);
