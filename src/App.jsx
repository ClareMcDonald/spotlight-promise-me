import { asyncGetQuotes, getQuotes } from "./services/promise-me";

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  }

  return (
    <>
      <button onClick={() => console.log(asyncGetQuotes())}>
        Async Get Quotes
      </button>
      <button onClick={() => console.log(getQuotes())}>
        Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        .then() Get Quotes
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
