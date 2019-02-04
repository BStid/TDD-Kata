# TDD-Kata

TDD Guidelines:
Loop over these steps until the functionality is implemtned:
    1. Write a test which fails intentionally, testing a small part of functionality.
    2. Implement the functionality defined in the test ( and nothing more) to make the tests pass.
    3. Refactor the code to make it clean while keeping the intended functionality.

File Structure:
    In order for a test to be read by Jest, the test file must be formatted:
        - Inside of a "__tests__" directory with any type of naming convention for the file.
        or
        - The test file can be located anywhere in the project but must be written as either:
            - *testFile*.test.js
            - *testFile*.spec.js
    Jest knows to run any files listed with *.spec.js or *.test.js or any file underneith "__tests__".