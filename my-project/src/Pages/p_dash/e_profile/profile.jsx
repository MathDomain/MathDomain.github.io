function Profile(props) {

    const {dot} = props

    return(
    <section id="profile" className="flex w-full items-center md:gap-4 md: p-1 rounded-xl">
        <img src="./assets/makiii.png" className="rounded-full h-32"/>
        <section id="details" className="">
            <h1 className="text-2xl font-Montserrat font-bold text-brand200 md:text-left text-center">Mark Irvin Felas</h1>
            <section id="bio" className="flex items-center gap-2 md:flex-row flex-col">
                <p className="text-lg font-Montserrat">@HabibiRon</p>
                {dot}
                <p className="text-lg font-Montserrat">Grade 12</p>
                {dot}
                <p className="text-lg font-Montserrat">ICT - Caleb</p>
            </section>
        </section>
    </section>);
}
export default Profile;