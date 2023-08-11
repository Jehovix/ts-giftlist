import {buildPerson, getMyBodyTemperature} from "../utils/foobar";
import {ChildRecord} from "../records/child.record";
//
//
// test('getMyBodyTemperature should give real values between 33 - 45', () => {
//     expect(getMyBodyTemperature()).toBeGreaterThanOrEqual(33);
//     expect(getMyBodyTemperature()).toBeLessThanOrEqual(45);
// });
//
// test('foo bar test test', () => {
//     expect(0.2 + 0.1).toEqual(0.3)
// })
// test('foo bar test test', () => {
//     expect(0.2 + 0.1).toBeCloseTo(0.3)
// })
//
// test('foo bar test test', () => {
//     expect(() => buildPerson('', '')).toThrow()
// })
// sprawdza czy zawiera jakies wyrazenie
// test('foo bar test test', () => {
//     expect('Ala ma kota, a kot ma Alę.').toMatch(/kot/);
// });
// czy tablica zawiera dany element
// test('foo bar test test', () => {
//
//     expect([1, 2, 3]).toContain(2)
//
// });

//zaprzeczenie

// test('foo bar test test', () => {
//     expect([1, 2, 3]).not.toContain(777)
// });

//testowanie asynchronicznego kodu

// test('foo bar test test', async () => {
//     expect([1, 2, 3]).not.toContain(777)
// });
//
// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe( 'peanut butter');
// });


// Mocki!!!!!!!!!!!!!

// const myMock = jest
//     .spyOn(ChildRecord.prototype, 'insert')
//     .mockImplementation(async() => {
//         return 'test';
//     });

// mocki w Jest- przykład z metodą statyczną

let child: ChildRecord;

beforeAll(async () => {
    child = await ChildRecord.getOne('7777777');
});

jest
    .spyOn(ChildRecord.prototype, 'update')
    .mockImplementation(async () => {});


test('foo bar test test', async () => {


    console.log(child)

    expect(child).toBeDefined()
    expect(child.id).toEqual('7777777')

});

test('foo bar test test', async () => {
    await child.update()
})