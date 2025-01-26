import styles from './coursepage.module.css'

export default function Algebra(props) {

    return (
        <div>
            <div id="hero" className="flex flex-col items-center relative w-full h-full">
                <img src="/assets/courses/Algebra.jpg" alt="Algebra" className="w-full h-96 object-cover" />
                <div id={styles.coursehero} className="absolute inset-0 flex items-end w-full bg-gradient-to-t from-brandmid/100 to-transparent p-4">
                    <div>
                        <h1 className="text-9xl align-bottom text-white font-bold">Algebra</h1>
                        <p className="text-4xl text-white">This is a course on Algebra</p>
                    </div>
                </div>
            </div>
            <div id="body" className="p-10 text-white bg-brandMid">
                <h1 className="text-4xl font-bold">Course Overview</h1>
                <p className="text-lg">This is a course on Algebra. It is designed to help you understand the basic concepts of Algebra and how to solve Algebraic problems.</p>
                <h1 className="text-4xl font-bold">Course Content</h1>
                <ul className="list-disc list-inside">
                    <li className="text-lg">Introduction to Algebra</li>
                    <li className="text-lg">Algebraic Expressions</li>
                    <li className="text-lg">Solving Algebraic Equations</li>
                    <li className="text-lg">Algebraic Fractions</li>
                    <li className="text-lg">Quadratic Equations</li>
                </ul>
                <h1 className="text-4xl font-bold">Course Requirements</h1>
                <ul className="list-disc list-inside">
                    <li className="text-lg">Basic knowledge of Mathematics</li>
                    <li className="text-lg">Access to a computer and internet</li>
                    <li className="text-lg">Willingness to learn</li>
                </ul>
                <h1 className="text-4xl font-bold">Course Instructor</h1>
                <p className="text-lg">This course is taught by John Doe. John is a Mathematics teacher with over 10 years of experience. He has a degree in Mathematics and has taught Algebra to students of all ages.</p>
            </div>
        </div>
    )
}