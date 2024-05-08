// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Test 1 - isPhoneNumber ', () =>{
expect(isPhoneNumber('123 456-7890')).toBe(true);

}); 
test('Test 2 - isPhoneNumber ', () =>{
expect(isPhoneNumber('626 477-888-5555')).toBe(true);

}); 
test('Test 3 - isPhoneNumber ', () =>{
expect(isPhoneNumber('abc')).toBe(false);

}); 
test('Test 4 - isPhoneNumber ', () =>{
expect(isPhoneNumber('Not A Number')).toBe(false);

}); 
test('Test 1 - isEmail ', () =>{
expect(isEmail('a6lara@ucsd.edu')).toBe(true);

}); 
test('Test 2 - isEmail ', () =>{
expect(isEmail('andrewlara@gmail.com')).toBe(true);

}); 
test('Test 3 - isEmail ', () =>{
expect(isEmail('a6lara@123.gov')).toBe(false);

}); 
test('Test 4 - isEmail ', () =>{
expect(isEmail('andrew@gmail.c')).toBe(false);

}); 
test('Test 1 - isStrongPassword ', () =>{
expect(isStrongPassword('aStrongpass')).toBe(true);

}); 
test('Test 2 - isStrongPassword ', () =>{
expect(isStrongPassword('aSTRONGPASSWORD')).toBe(true);

}); 
test('Test 3 - isStrongPassword ', () =>{
expect(isStrongPassword('Not')).toBe(false);

}); 
test('Test 4 - isStrongPassword ', () =>{
expect(isStrongPassword('12')).toBe(false);

}); 
test('Test 1 - isDate ', () =>{
expect(isDate('10/10/2024')).toBe(true);

}); 
test('Test 2 - isDate ', () =>{
expect(isDate('5/7/2024')).toBe(true);

}); 
test('Test 3 - isDate ', () =>{
expect(isDate('005/007/2024')).toBe(false);

}); 
test('Test 4 - isDate ', () =>{
expect(isDate('5/5/24')).toBe(false);

}); 
test('Test 1 - isHexColor ', () =>{
expect(isHexColor('#000000')).toBe(true);

}); 
test('Test 2 - isHexColor ', () =>{
expect(isHexColor('#FFFFFF')).toBe(true);

}); 
test('Test 3 - isHexColor ', () =>{
expect(isHexColor('black')).toBe(false);

}); 
test('Test 4 - isHexColor ', () =>{
expect(isHexColor('1345')).toBe(false);

}); 


