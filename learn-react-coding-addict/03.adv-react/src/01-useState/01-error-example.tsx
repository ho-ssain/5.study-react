const ErrorExample = () => {
  let count = 0;

  const handleIncrease = () => {
    count++;
  };

  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleIncrease}>
        Increase(➕)
      </button>
    </div>
  );
};

export default ErrorExample;
