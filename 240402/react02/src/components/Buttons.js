const Buttons = () => {
  const handleOnClick = (btn) => {
    console.log(btn.target.name);
  };

  return (
    <div>
      <button name="A버튼" onClick={handleOnClick}>
        A 버튼입니다
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B 버튼입니다
      </button>
    </div>
  );
};

export default Buttons;
