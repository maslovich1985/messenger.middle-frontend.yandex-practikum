import Block from '../../utils/Block';
import './messages.less';
import { validateInputs } from '../../utils/utils';
import { IChatProps } from '../../components/Chat/chat';
import { IMessageProps } from '../../components/Message/message';
import { regexMessage } from '../../utils/regex';

interface IChatListProps {
  chatList: IChatProps[];
  messageList: IMessageProps[];
}

interface IChatList extends IChatListProps {
  onClick: Function;
}

export class MessagesPage extends Block<IChatList> {
  constructor({ chatList, messageList }: IChatListProps) {
    super({
      chatList,
      messageList,
      onClick: () => this.validate(),
    });
  }

  validate() {
    validateInputs({ elementId: 'message', regexp: regexMessage });
  }

  messageListJSX() {
    return this.props.messageList.map((message: IMessageProps) => `{{{ Message isMyMessage=${message.isMyMessage} messageText="${message.messageText}" }}}`).join('');
  }

  chatListJSX() {
    return this.props.chatList
      .map(
        (chat: IChatProps) => `
        {{{ Chat
        title="${chat.title}"
        message="${chat.message}"
        time="${chat.time}"
        newMessages="${chat.newMessages}"
        icon="${chat.icon}"
      }}}`,
      )
      .join('');
  }

  render() {
    // language=hbs
    return `
        <div class="page-container">
            <div class="block-left">
                <div class="link-container">
                    <a class="link-container__link" href="../../pages/profile/index.html">Профиль</a>
                </div>

                <div class="search-block">
                    <input type="search" placeholder="Поиск" class="form-input input-normal" />
                </div>
                <div class="chat-list">
                    ${this.chatListJSX()}
                </div>
            </div>
            <div class="block-right">
                <div class="profile-info">
                    <div class="profile-logo">
                        <img class="profile-logo__img" src="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png" height="34px" width="34px" alt="logo {{title}}" />
                    </div>
                    <div class="profile-info__chat-name">
                        Алексей
                    </div>
                </div>
                <div class="messages-container">
                    ${this.messageListJSX()}
                </div>
                <form class="send-message-block">
                    {{{ Input inputId="message" inputPlaceholder="Сообщение" inputType="text" inputName="message" regexp="^.*\\S.*$" }}}
                    <div class="button-container">
                        {{{ Button buttonId="button-send" label="Отправить" onClick=onClick }}}
                    </div>
                </form>
            </div>
        </div>
    `;
  }
}
