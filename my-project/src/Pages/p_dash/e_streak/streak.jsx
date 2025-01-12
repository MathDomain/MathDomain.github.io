function Streak() {

  let streak = 1; 

  return (
    <section id="stats" className="flex flex-col w-full items-center border-2 border-blue gap-4 md: p-1 rounded-xl">
        <h1 className="text-2xl font-Montserrat font-bold text-brand200">Streak</h1>
            <section id="streak" className="flex items-center justify-between w-full md:px-12">
                {[...Array(streak)].map((_, i) => (
                    <section key={i} className="flex flex-col items-center gap-2">
                        <img src="./assets/icons/Streak.png" className="rounded-full md:h-16 md:w-16"/>
                        <p className="text-xs md:text-lg text-center font-Montserrat">Day {i+1}</p>
                    </section>
                ))}
                {[...Array(7-streak)].map((_, j) => (
                    <section key={j + streak} className="flex flex-col items-center gap-2">
                        <img src="./assets/icons/Streak unlit.png" className="rounded-full md:h-16 md:w-16"/>
                        <p className="text-xs md:text-lg text-center font-Montserrat">Day {j+streak+1}</p>
                    </section>
                ))}
            </section>
    </section>
  );
}
export default Streak;