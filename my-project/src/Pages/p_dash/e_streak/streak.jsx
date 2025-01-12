function Streak() {
  return (
    <section id="stats" className="flex flex-col w-full items-center border-2 border-blue gap-4 md: p-1 rounded-xl">
        <h1 className="text-2xl font-Montserrat font-bold text-brand200">Streak</h1>
            <section id="streak" className="flex items-center justify-between w-full px-12">
                {[...Array(7)].map((_, i) => (
                    <section key={i} className="flex flex-col items-center gap-2">
                        <img src="./assets/icons/Streak unlit.png" className="rounded-full h-16 w-16"/>
                        <p className="text-lg font-Montserrat">Day {i+1}</p>
                    </section>
                ))}
            </section>
    </section>
  );
}
export default Streak;