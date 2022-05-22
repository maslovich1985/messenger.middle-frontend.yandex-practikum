import { registerComponent } from '../../utils/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { RegistrationPage } from './registration';
import { renderDom } from '../../utils/renderDom';
import InputField from '../../components/InputField';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');

const registrationPage = new RegistrationPage();

renderDom('#app', registrationPage);
