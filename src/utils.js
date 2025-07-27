// import { currentAgeForBirthYear } from "../utils";


export function currentAgeForBirthYear(birthYear) {
  return new Date().getFullYear() - birthYear;
}



// describe("currentAgeForBirthYear", () => {
//   it("returns the age of a person based on the year of birth", () => {
//     const birthYear = 1984;
//     const ageOfPerson = currentAgeForBirthYear(birthYear);
//     expect(ageOfPerson).toBe(38);
//   });
// })

