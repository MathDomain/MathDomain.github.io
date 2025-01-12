function Profile(props) {

    const {dot} = props

    return(
    <section id="profile" className="flex w-full flex-col md:gap-4 md: p-1 rounded-xl">
        <section id="header" className="flex items-center gap-2">
            <img src="./assets/makiii.png" className="border-4 rounded-md border-brand200 h-28"/> 
            <section className="flex flex-col gap-2">
                <h1 className="text-2xl font-Montserrat font-bold text-brand200 md:text-left text-center">Mark Irvin Felas</h1>
                    <p className="text-lg font-Montserrat">@HabibiRon</p>
            </section>
        </section>
        <section id="details" className="flex gap-2">
            <section id="bio" className="flex flex-col">
                {/* {dot} */}
                <p className="text-lg font-Montserrat">Grade 12</p>
                {/* {dot} */}
                <p className="text-lg font-Montserrat">ICT - Caleb</p>
            </section>
        </section>
    </section>);
}
export default Profile;