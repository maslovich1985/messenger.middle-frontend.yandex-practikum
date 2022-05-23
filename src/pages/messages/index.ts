import { registerComponent } from '../../utils/registerComponent';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MessagesPage } from './messages';
import { renderDom } from '../../utils/renderDom';
import Chat from '../../components/Chat';
import Message from '../../components/Message';

registerComponent(Button, 'Button');
registerComponent(Input, 'Input');
registerComponent(Chat, 'Chat');
registerComponent(Message, 'Message');

const messagesPage = new MessagesPage({
  messageList: [
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:09:20',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:09:41',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:10:05',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:10:51',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:08:31',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:09:20',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:09:41',
    },
    {
      isMyMessage: false,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:10:05',
    },
    {
      isMyMessage: true,
      messageText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum neque minima nulla aliquam sequi itaque est facere odio velit ullam!',
      messageDate: '22.05.2022',
      messageTime: '14:10:51',
    },
  ],
  chatList: [
    {
      title: 'Котики',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      newMessages: '1',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
    {
      title: 'Чатик под настроение',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      newMessages: '4',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
    {
      title: 'Чат об инвестициях',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '12:45',
      newMessages: '',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
    {
      title: 'Мемы про программистов',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '13:25',
      newMessages: '',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
    {
      title: 'Погода в Москве',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '13:51',
      newMessages: '3',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
    {
      title: 'Обо всем',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita excepturi tenetur voluptas quis modi vel nobis possimus laboriosam nisi. Omnis?',
      time: '11:11',
      newMessages: '',
      icon: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png',
    },
  ],
});

renderDom('#app', messagesPage);
