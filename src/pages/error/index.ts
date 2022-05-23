import { renderDom } from '../../utils/renderDom';
import ErrorForm from '../../components/ErrorForm';

const errorPage = new ErrorForm({
  errorNumber: 500,
});

renderDom('#app', errorPage);
