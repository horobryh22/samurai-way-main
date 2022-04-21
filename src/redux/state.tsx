import {MessageType} from '../components/Dialogs/Message/Message';
import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {NavElementType} from '../components/Navbar/Navbar';

export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'} as const);
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);

export const changeValueMessageActionCreator = (valueMessage: string) =>
    ({type: 'CHANGE-VALUE-TEXTAREA-MESSAGE', valueMessage} as const);

export const changeValuePostActionCreator = (valuePost: string) =>
    ({type: 'CHANGE-VALUE-TEXTAREA-POST', valuePost} as const);


export type ActionTypes = ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof addPostActionCreator> |
                          ReturnType<typeof changeValueMessageActionCreator> | ReturnType<typeof changeValuePostActionCreator>;
export type ProfilePageType = {
    posts: Array<PostType>
    textareaValue: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    textareaValue: string
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    navbar: Array<NavElementType>
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Tell me how are you friends?', likes: 10},
                {id: 2, post: 'Hello, it is my first posts', likes: 15}
            ],
            textareaValue: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Ilya',
                    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3429702/pub_5eff4fb431eb186e8b617f87_5eff649a5cdcc361cfb1589f/scale_1200'
                },
                {
                    id: 2,
                    name: 'Ivan',
                    avatar: 'https://placepic.ru/wp-content/uploads/2021/02/nastol.com_.ua-8909.jpg'
                },
                {
                    id: 3,
                    name: 'Nasty',
                    avatar: 'https://yt3.ggpht.com/a/AATXAJzZpMmhjtgbwRRICUuw5hW7we83khiUL56vpoZe5A=s900-c-k-c0xffffffff-no-rj-mo'
                },
                {
                    id: 4,
                    name: 'Petr',
                    avatar: 'https://cs5.livemaster.ru/storage/c7/60/e232231c06ead74902e60d2cb11e--kukly-i-igrushki-kukla-blythe-blajz-kastom-blythe-doll-tbl-oo.jpg'
                },
                {
                    id: 5,
                    name: 'Natasha',
                    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1591494/pub_5e0d9806dddaf400b1f68d0d_5e0d99ec8d5b5f00b19c14cc/scale_1200'
                },
                {
                    id: 6,
                    name: 'Oly',
                    avatar: 'https://avatars.mds.yandex.net/i?id=dff8a0b76910b049f55c6f118f3e3581_l-5663611-images-thumbs&ref=rim&n=13&w=640&h=640'
                },
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Nice to meet you'},
                {id: 4, message: 'Where are you from?'}
            ],
            textareaValue: ''
        },
        navbar: [
            {navElement: 'Profile', to: '/profile', id: 1},
            {navElement: 'Messages', to: '/dialogs', id: 2},
            {navElement: 'News', to: '/news', id: 3},
            {navElement: 'Music', to: '/music', id: 4},
            {navElement: 'Friends', to: '/friends', id: 5},
            {navElement: 'Settings', to: '/settings', id: 6},
        ]
    },
    _rerenderEntireTree() {
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost = {
                    id: 3,
                    post: this._state.profilePage.textareaValue,
                    likes: 0
                }
                this._state.profilePage.textareaValue = '';
                this._state.profilePage.posts.push(newPost);
                this._rerenderEntireTree();
                break;

            case 'CHANGE-VALUE-TEXTAREA-POST':
                this._state.profilePage.textareaValue = action.valuePost;
                this._rerenderEntireTree();
                break;

            case 'SEND-MESSAGE':
                const newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.textareaValue
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.textareaValue = '';
                this._rerenderEntireTree();
                break;

            case 'CHANGE-VALUE-TEXTAREA-MESSAGE':
                this._state.dialogsPage.textareaValue = action.valueMessage;
                this._rerenderEntireTree();
                break;
        }
    }
}

