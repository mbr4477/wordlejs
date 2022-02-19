const WordleSolver = require("../src/wordle.js");
const words = require("./words.js")

test("Check first guess is arose", () => {
    solver = new WordleSolver(words)
    guess = solver.getGuess()
    expect(guess).toBe("arose")
})

test("Check apply hint right letter wrong spot", () => {
    solver = new WordleSolver(["arose", "skill", "pumps", "docks"])
    solver.applyHint("thick", "00011")
    expect(solver._remaining).toStrictEqual(["docks"])
})

test("Check apply hint right letter right spot", () => {
    solver = new WordleSolver(["arose", "skill", "pumps", "docks"])
    solver.applyHint("wrong", "02200")
    expect(solver._remaining).toStrictEqual(["arose"])
})

test("Check all letters wrong", () => {
    solver = new WordleSolver(["arose", "skill", "pumps", "docks"])
    solver.applyHint("thick", "00000")
    expect(solver._remaining).toStrictEqual(["arose", "pumps"])
})

test("Check next guess", () => {
    solver = new WordleSolver(["arose", "skill", "pumps", "docks"])
    solver.applyHint("thick", "00000")
    guess = solver.getGuess()
    expect(guess).toBe("arose")
})