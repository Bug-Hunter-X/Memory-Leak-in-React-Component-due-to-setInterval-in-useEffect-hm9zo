```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a setInterval inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing return statement to clear the interval on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```