import { registerComponent } from '../../utils/registerComponent';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputField from '../../components/InputField';
import { renderDom } from '../../utils/renderDom';
import { PageProfile } from './profile';

registerComponent(Input, 'Input');
registerComponent(InputField, 'InputField');
registerComponent(Button, 'Button');

const profilePage = new PageProfile({
  email: 'georgiy@yandex.ru',
  login: 'myLog',
  firstName: 'Георгий',
  phone: '+79138880555',
  imagePath: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
  secondName: 'Сидоров',
  displayName: 'Гошак',
});

renderDom('#app', profilePage);
