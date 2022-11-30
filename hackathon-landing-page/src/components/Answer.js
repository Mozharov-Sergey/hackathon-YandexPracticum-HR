import React from 'react';

export default function Answer({ item, onClick }) {

  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick(e) {
    setIsClicked(!isClicked);
    onClick(e, setIsClicked);
  }


  return (
    <button
      name={item.name}
      className={`test__answer ${isClicked && 'test__answer_active'}`}
      onClick={handleClick}
      value={item.value}
    >
      {item.value}
    </button>
  );
}
