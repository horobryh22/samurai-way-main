import {
    addPostAC,
    changeValuePostAC,
    ProfilePageType,
    profileReducer,
    setUserProfileAC
} from './profile-reducer';
import {PostType} from '../../../components/Profile/MyPosts/Post/Post';
import {UserProfileType} from '../../../api/api';

let valuePost: string;
let initialState: ProfilePageType

beforeEach(() => {

    valuePost = 'Hello world, I\'m glad to see you';

    initialState = {
        posts: [
            {id: 1, post: 'Tell me how are you friends?', likes: 10},
            {id: 2, post: 'Hello, it is my first posts', likes: 15}
        ] as Array<PostType>,
        postText: '',
        userProfile: {} as UserProfileType
    }

})


test('The valueTextarea should be changing and the post should be sending', () => {

    const newState = profileReducer(initialState, changeValuePostAC(valuePost));

    expect(newState.postText).toBe(valuePost);

})

test('The post should be sending', () => {

    initialState.postText = valuePost;

    const newState = profileReducer(initialState, addPostAC());

    expect(newState.postText).toBe('');
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].id).toBe(3);
    expect(newState.posts[0].post).toBe(valuePost);
    expect(newState.posts[0].likes).toBe(0);
})

test('Users should be added to the state', () => {

    const userProfile: UserProfileType = {
        aboutMe: 'I like to programming',
        userId: 1,
        contacts: {
            youtube: null,
            website: null,
            twitter: null,
            vk: null,
            mainLink: null,
            instagram: null,
            github: null,
            facebook: null
        },
        fullName: 'Ilya Khororbrykh',
        photos: {
            large: null,
            small: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'I want to work in programming sphere'
    }

    const newState = profileReducer(initialState, setUserProfileAC(userProfile));

    expect(newState.userProfile.fullName).toBe('Ilya Khororbrykh');
    expect(newState.userProfile.photos.small).toBeNull();
    expect(Object.keys(newState.userProfile).length).toBe(7);
    expect(Object.values(newState.userProfile)).toEqual(Object.values(userProfile));
})
