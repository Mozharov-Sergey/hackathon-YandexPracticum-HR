import React from 'react';

export default function TestInProgress({ messages }) {
  const [isCourseClicked, setIsCourseClicked] = React.useState(false);
  const [chosenCourse, setChosenCourse] = React.useState('');
  const [chosenQualities, setChosenQualities] = React.useState([]);
  const answers = {};

  function handleClickCourse(e) {
    setIsCourseClicked(!isCourseClicked);
    setChosenCourse(e.target.value);
  }

  function handleClickQualities(e) {
    setChosenQualities([...chosenQualities, e.target.value])
    e.target.className.add('test__answer_active');
  }

  function renderBotMessages(data) {
    return data.map((item, index) => {
      return (
        <p className="from-yandex" key={index}>
          {item}
        </p>
      );
    });
  }

  React.useEffect(() => {
    console.log(chosenQualities)
  }, [chosenQualities])

  return (
    <>
      {renderBotMessages(messages.startQuestions)}

      {isCourseClicked ? (
        <p className="from-applicant">{chosenCourse}</p>
      ) : (
        <div className="test__answer-container">
          {messages.startAnswers.map((item) => {
            return (
              <button
                name={item.name}
                className={`test__answer`}
                onClick={handleClickCourse}
                value={item.value}
              >
                {item.value}
              </button>
            );
          })}
        </div>
      )}

      {isCourseClicked && renderBotMessages(messages.qualitiesQuestions)}

      {isCourseClicked && (
        <div className="test__answer-container">
          {messages.qualitiesAnswers.map((item) => {
            return (
              <button
                name={item.name}
                className={`test__answer`}
                value={item.value}
                onClick={handleClickQualities}
              >
                {item.value}
              </button>
            );
          })}
        </div> 
      )}
    </>
  );
}
