import {User} from "../records/user";


let user: User;

beforeAll(async () => {
    user = new User();
});

test('User should not be logged in at the begining', () => {

    expect(user.loggedIn).toEqual(false);

})
// test('User logged in state should not be modified outside of class', () => {
//
//     expect(() => {
//         user.loggedIn = true;
//     }).toThrow();
//
// })

test('User should have no e-mail at the beginning', () => {

    expect(user.email).toBeNull();

})
// test('User e-mail should not be modified outside of class', () => {
//
//     expect(() => {
//         user.email = '...';
//     }).toThrow();
//
// })