import {
  asyncGetQuotes,
  thenGetQuotes,
  asyncTryGetQuotes,
  thenTryGetQuotes,
  asyncFinallyGetQuotes,
  thenFinallyGetQuotes,
  thenAsyncGetQuotes,
  asyncThenGetQuotes, } from './services/promise-me';

export default function App() {
  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        Async Get Quotes
      </button>
      <button onClick={() => console.log(getQuotes())}>
        Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        thenGetQuotes
      </button>
      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        asyncTryGetQuotes
      </button>
      <button onClick={async () => console.log(await thenTryGetQuotes())}>
        thenTryGetQuotes
      </button>
      <button onClick={async () => console.log(await asyncFinallyGetQuotes())}>
        asyncFinallyGetQuotes
      </button>
      <button onClick={async () => console.log(await thenFinallyGetQuotes())}>
        thenFinallyGetQuotes
      </button>
      <button onClick={async () => console.log(await thenAsyncGetQuotes())}>
        thenAsyncGetQuotes
      </button>
      <button onClick={async () => console.log(await asyncThenGetQuotes())}>
        asyncThenGetQuotes
      </button>
    </>
  );
}
