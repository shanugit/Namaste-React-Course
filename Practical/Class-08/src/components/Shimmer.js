const Shimmer = () => {
  return (
    <div id="testid">
      {new Array(20).fill("").map((item, index) => {
        return (
          <div id="shimmer-card" key={index}>
            <img></img>
            <p></p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
