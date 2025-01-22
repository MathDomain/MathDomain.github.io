import HisCard from "./e_card/card";

function History() {
    
  // Array of quiz data
  const quizData = [
    { course: "Algebra", subject: "Functions", score: 90, total: 100 },
    { course: "Statistics and Probability", subject: "Standard Deviation", score: 80, total: 100},
    { course: "Geometry", subject: "Triangles", score: 85, total: 100 },
    { course: "Trigonometry", subject: "Sin, Cos, Tan", score: 95, total: 100 },
    { course: "Trigonometry", subject: "Sin, Cos, Tan", score: 95, total: 100 },
    { course: "Trigonometry", subject: "Sin, Cos, Tan", score: 95, total: 100 },
    { course: "Trigonometry", subject: "Sin, Cos, Tan", score: 95, total: 100 },
  ];

    let numberQuiz = quizData.length;

  return (
    <div className="p-2">
      <h1 className="text-3xl">Quiz History</h1>
      <div id="cards" className="m-4 flex flex-wrap gap-2">
        {quizData.slice(0, numberQuiz).map((quiz, index) => (
          <HisCard
            key={index}
            course={quiz.course}
            subject={quiz.subject}
            score={quiz.score}
            total={quiz.total}
          />
        ))}
      </div>
    </div>
  );
}

export default History;
