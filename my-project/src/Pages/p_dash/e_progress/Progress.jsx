function Progress() {

    const progressbar = (course, value, max) => (<section className="flex gap-2 w-full justify-between items-center">
    <h2 className="w-2/3">{course}</h2>
    <progress value={value} max={max} className="[&::-webkit-progress-bar]:rounded-lg 
    [&::-webkit-progress-value]:rounded-lg
    [&::-webkit-progress-bar]:bg-slate-300 
    [&::-webkit-progress-value]:bg-brand200
    [&::-moz-progress-bar]:bg-brand200
    [&::-moz-progress-bar]:rounded-lg
    w-full rounded-lg"></progress>
    </section>)

  return (
    <div className="w-full border-2 border-blue m-3 rounded-xl p-3 flex flex-col items-center">  
      <h1 className="text-xl text-brand200 font-bold">Course Progress</h1>
      <section id="progress" className="flex flex-col gap-4 w-full items-center">
        {progressbar('Trigonometry', 50, 100)}
        {progressbar('Algebra' , 70, 100)}
        {progressbar('Statistics and Probability', 90, 100)}
      </section>
    </div>
  );
}
export default Progress;