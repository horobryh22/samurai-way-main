import {
    DialogsPageType,
    dialogsReducer,
    sendMessageAC
} from './dialogs-reducer';


let value: string;
let initialState: DialogsPageType;

beforeEach(() => {
    value = 'Hello world';
    initialState = {
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
    }
})

test('The message should be sending', () => {

    const newState = dialogsReducer(initialState, sendMessageAC(value));

    expect(newState.messages[0].id).toBe(5);
    expect(newState.messages[0].message).toBe(value);
    expect(newState.messages.length).toBe(5);
    expect(newState).not.toBe(initialState);
})


