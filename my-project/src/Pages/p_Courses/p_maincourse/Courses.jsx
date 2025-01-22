import React from 'react';
import E_Header from '../../../Components/e_header/Header.jsx';
import CardCourses from './e_cards/Card_courses.jsx';

function Courses() {
  const courses = [
    {
      image: '/assets/courses/Algebra.jpg',
      alt: 'Algebra',
      course: 'Algebra',
      // description: 'This is a brief description of Algebra.'
    },
    {
      image: '/assets/courses/Statistics.jpg',
      alt: 'Statistics',
      course: 'Statistics',
      // description: 'This is a brief description of Statistics.'
    },
    // Add more courses as needed
  ];

  return (
    <>
      <E_Header page="Courses" />
      <div className="p-10 flex flex-wrap justify-center gap-2">
        {courses.map((course, index) => (
          <CardCourses
            key={index}
            image={course.image}
            alt={course.alt}
            course={course.course}
            // description={course.description}
          />
        ))}
      </div>
    </>
  );
}

export default Courses;