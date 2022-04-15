import {MessageType} from '../components/Dialogs/Message/Message';
import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {NavElementType} from '../components/Navbar/Navbar';

export type TypeNameType = 'ADD-POST' | 'CHANGE-VALUE-TEXTAREA-POST' | 'SEND-MESSAGE' | 'CHANGE-VALUE-TEXTAREA-MESSAGE';
export type ActionType = {
    type: TypeNameType
    messagePost?: string
    valuePost?: string
    textMessage?: string
    valueMessage?: string

}
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
    _rerenderEntireTree: (state: StateType) => void
    subscriber: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
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
    // dispatch(action: ActionType) {
    //     if (action.type === 'ADD-POST') {
    //
    //         if (action.messagePost !== undefined) {
    //             const newPost: PostType = {
    //                 id: 3,
    //                 post: action.messagePost,
    //                 likes: 0
    //             }
    //             this._state.profilePage.textareaValue = '';
    //             this._state.profilePage.posts.push(newPost);
    //             this._rerenderEntireTree(this._state);
    //         }
    //
    //     } else if (action.type === 'CHANGE-VALUE-TEXTAREA-POST') {
    //
    //         if (action.valuePost !== undefined) {
    //             this._state.profilePage.textareaValue = action.valuePost;
    //             this._rerenderEntireTree(this._state);
    //         }
    //
    //     } else if (action.type === 'SEND-MESSAGE') {
    //
    //         if (action.textMessage !== undefined) {
    //             const newMessage = {
    //                 id: 5,
    //                 message: action.textMessage
    //             }
    //             this._state.dialogsPage.messages.push(newMessage);
    //             this._state.dialogsPage.textareaValue = '';
    //             this._rerenderEntireTree(this._state);
    //         }
    //
    //     } else if (action.type === 'CHANGE-VALUE-TEXTAREA-MESSAGE') {
    //
    //         if (action.valueMessage) {
    //             this._state.dialogsPage.textareaValue = action.valueMessage;
    //             this._rerenderEntireTree(this._state);
    //         }
    //     }
    // }
    dispatch(action: ActionType) {
        switch (action.type) {
            case 'ADD-POST':
                if (action.messagePost !== undefined) {
                    const newPost: PostType = {
                        id: 3,
                        post: action.messagePost,
                        likes: 0
                    }
                    this._state.profilePage.textareaValue = '';
                    this._state.profilePage.posts.push(newPost);
                    this._rerenderEntireTree(this._state);
                }
                break;

            case 'CHANGE-VALUE-TEXTAREA-POST':
                if (action.valuePost !== undefined) {
                    this._state.profilePage.textareaValue = action.valuePost;
                    this._rerenderEntireTree(this._state);
                }
                break;

            case 'SEND-MESSAGE':
                if (action.textMessage !== undefined) {
                    const newMessage = {
                        id: 5,
                        message: action.textMessage
                    }
                    this._state.dialogsPage.messages.push(newMessage);
                    this._state.dialogsPage.textareaValue = '';
                    this._rerenderEntireTree(this._state);
                }
                break;

            case 'CHANGE-VALUE-TEXTAREA-MESSAGE':
                if (action.valueMessage) {
                    this._state.dialogsPage.textareaValue = action.valueMessage;
                    this._rerenderEntireTree(this._state);
                }
                break;
        }
    }
}
