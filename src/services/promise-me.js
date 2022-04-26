/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const result = await res.json();
    const quote = result[0];
    const totalResults = result.length;

    return { quote, totalResults };
}

export function getQuotes() {

}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
    const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
        .then((res) => res.json())
        .then((result) => ({ quote: result[0], totalResults: result.length }))
        .then(() => console.log('.then chain complete!'));
    
    return result;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
    try {
        return asyncGetQuotes();
    } catch (error) {
        console.error(error);
    }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function thenTryGetQuotes() {
    const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
        .then((res) => res.json())
        .then((result) => ({ quote: result[0], totalResults: result.length }))
        .then(() => console.log('.then chain complete!'))
        .catch((error) => console.error('Oops! An errror occured.'));

    return result;
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
 export async function asyncFinallyGetQuotes() {
    try {
        return asyncGetQuotes();
    } catch (error) {
        console.error(error);
    } finally {
        console.log('All done!');
    }
}

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function thenFinallyGetQuotes() {
    const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('.then chain complete!'))
    .catch((error) => console.error('Oops! An errror occured.'))
    .finally(() => console.log('All done!'));

return result;
}

/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export function thenAsyncGetQuotes() {
    return asyncFinallyGetQuotes().then((result) => console.log('Completed running asyncFinallyGetQuotes with result', result));
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
export async function asyncThenGetQuotes() {
    console.log('`. Before .then fetch');

    const result = await fetch('')
        .then((res) => res.json())
        .then((result) => {
            console.log('2. .then fetch complete');
            return { quote: result[0], totalResults: result.length };
        })
        .catch((error) => console.error('Oops! An error occured.'))
        .finally(() => console.log('All done!'));
    
    console.log('3. After .then fetch');

    return result;
}
