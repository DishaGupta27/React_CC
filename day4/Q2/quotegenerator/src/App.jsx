
import { useEffect, useState } from "react";

export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Quote of the Moment</h1>
      {loading ? (
        <p>Loading...</p>
      ) : quote ? (
        <div>
          <p>"{quote.content}"</p>
          <p>— {quote.author}</p>
        </div>
      ) : (
        <p>No quote loaded</p>
      )}
      <button onClick={fetchQuote} style={{ marginTop: "20px" }}>
        Get New Quote
      </button>
    </div>
  );
}
