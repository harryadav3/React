import React, {useState} from 'react'

const Question5 = () => {
  return (
    <div>Question5
        <GradeToggle />
    </div>
  )
}

const GradeToggle = () => {
    const [grade, setGrade] = useState('');
  
    const handleGradeChange = (event) => {
      setGrade(event.target.value);
    };
  
    return (
      <div>
        <h2>Enter your grade:</h2>
        <input
          type="text"
          value={grade}
          onChange={handleGradeChange}
          className="border border-gray-400 p-2 mb-4"
        />
        {grade >= 90 && <p>Excellent! Keep up the good work.</p>}
        {grade >= 80 && grade < 90 && <p>Very good performance.</p>}
        {grade >= 70 && grade < 80 && <p>Good, but you can do better.</p>}
        {grade < 70 && <p>You need to work harder.</p>}
      </div>
    );
  };
export default Question5