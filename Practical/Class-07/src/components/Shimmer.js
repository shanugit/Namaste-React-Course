const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {new Array(20).fill("").map((item, index) => {
        return <div id="shimmer-card"></div>;
      })}
    </div>
  );
};

export default Shimmer;
