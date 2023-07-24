import convertDatetoDay from "./convertDatetoDay";


describe(convertDatetoDay, () => {
    test('Converts a date to day properly', () => {
        expect(convertDatetoDay('2023-07-24')).toBe('Monday')
    })

    test('Converts a date to day properly', () => {
        expect(convertDatetoDay('2023/07/24')).toBe('Monday')
    })

    test('Converts a date to day properly', () => {
        expect(convertDatetoDay('2023/07/29')).toBe('Saturday')
    })
})