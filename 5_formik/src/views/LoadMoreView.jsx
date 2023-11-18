const LoadMoreView = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="d-flex justify-content-center my-5"
    >
      <button class="button type1">
        <span class="btn-txt">Daha Fazla</span>
      </button>
    </div>
  );
};

export default LoadMoreView;
