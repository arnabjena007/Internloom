import React from 'react';

const Navbar = () => {
    return (
        <nav className="black-600 p-4">
            <h1 className="text-white text-2xl font-bold">Course Catalog</h1>
        </nav>
    );
};

const ColorfulCourseCard: React.FC<{ course: { title: string; instructor: string; rating: number; reviews: number; price: string } }> = ({ course }) => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg p-6 flex flex-col h-80">
            <h2 className="text-2xl font-bold text-white mb-2">{course.title}</h2>
            <p className="text-lg text-white mb-1 font-semibold">Instructor: {course.instructor}</p>
            <div className="flex items-center mb-4">
                <span className="text-yellow-300">{course.rating} ★</span>
                <span className="text-white ml-2">({course.reviews} reviews)</span>
            </div>
            <div className="flex justify-between items-center mt-auto">
                {course.title === "Figma UI UX Design Essentials" ? (
                    <>
                        <span className="text-xl font-bold text-white">Free</span>
                        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                            Enroll Now
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-xl font-bold text-white">{course.price} ₹</span>
                        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                            Buy Now
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

const CourseGrid = () => {
    const courses = [
        {
            title: "Figma UI UX Design Essentials",
            instructor: "Daniel Walter Scott",
            rating: 4.7,
            reviews: 25145,
            price: "1,500",
        },
        {
            title: "Learn UI/UX Design in a weekend",
            instructor: "Jesse Showalter",
            rating: 4.1,
            reviews: 146,
            price: "2,000",
        },
        
    ];

    return (
        <>
            <Navbar />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {courses.map((course, index) => (
                    <ColorfulCourseCard key={index} course={course} />
                ))}
            </div>
        </>
    );
};

export default CourseGrid; 