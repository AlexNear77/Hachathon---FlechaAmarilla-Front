// assets
import { IconMessageChatbot } from '@tabler/icons-react';

// constant
const icons = { IconMessageChatbot };

// ==============================|| CHAT MENU ITEMS ||============================== //

const chat = {
  id: 'asistente',
  title: 'asistente',
  type: 'group',
  children: [
    {
      id: 'chat',
      title: 'Chat',
      type: 'item',
      url: '/chat',
      icon: icons.IconMessageChatbot,
      breadcrumbs: false
    }
  ]
};

export default chat;
