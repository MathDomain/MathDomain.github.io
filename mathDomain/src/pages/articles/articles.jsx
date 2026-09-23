import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Article() {
  const { lessonID } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Current lessonID:", lessonID); // Debugging

    fetch("/data/lessons.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched lessons:", data);
        setLessons(data); // Store the array of lessons
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading lessons:", error);
        setLoading(false);
      });
  }, [lessonID]); // Runs when lessonID changes

  console.log("Current lessonID:", lessonID);
  console.log("Lessons loaded:", lessons);

  if (loading) {
    return <p>Loading lesson...</p>;
  }

  if (!lessonID) {
    return <p>Invalid lesson ID</p>;
  }

  const lesson = lessons.find((l) => String(l.lessonID) === String(lessonID));

  if (!lesson) {
    return <p>Lesson not found</p>;
  }

  const renderTable = (tableData) => {
    return (
      <table className="border-collapse border border-gray-400 md:text-xl text-sm">
        <thead>
          <tr>
            {tableData.headers.map((header, i) => (
              <th key={i} className="border border-brand200 p-1">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-brand200 p-2">
                  {typeof cell === "object" && cell.type === "table" ? (
                    // If the cell is a nested table, render it recursively
                    renderTable(cell)
                  ) : typeof cell === "object" && cell.type === "text" ? (
                    // If the cell is a text object, render its value as Markdown
                    <ReactMarkdown>{cell.value}</ReactMarkdown>
                  ) : typeof cell === "object" && cell.type === "space" ? (
                    // If the cell is a space object, render a line break
                    <br />
                  ) : typeof cell === "string" ? (
                    // If the cell is a string, render it as Markdown
                    <ReactMarkdown>{cell}</ReactMarkdown>
                  ) : (
                    // Otherwise, render it as a string (fallback)
                    JSON.stringify(cell)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }; 

  const SideBar = () => {
    return(
      <div className={`${isOpen? '' : 'h-10'} md:h-full md:w-1/4 overflow-x-scroll transition-all duration-300 px-2 py-1 scrollbar-hide sticky top-0 left-0 bg-white border-2 border-brand200 md:border-0`} id="sidebar">
        <div id="hamburger" className="sticky top-0 left-0 flex items-center mt-1 mb-2">
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`w-6 h-6 flex flex-col justify-between p-1 ${isOpen ? "bg-brand200" : ""}`}>
            <div
              className={`w-full h-1 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-full h-1 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-full h-1 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            ></div>
          </div>
        </div>
        <p>Lessons</p>
        </div>
        <ul className="flex items-center md:flex-col text-xs"  id="list">
          {lessons.map((lesson) => (
            <NavLink key={lesson.id} to={`/lessons/${lesson.lessonID}`}>
              <li className='border-2 border-gray-300 p-2 rounded-md mx-1'>
                <h1>{lesson.title}</h1>
              </li>
            </NavLink>
          ))}
          </ul>
      </div>
    )
  }

  

  return (
    <MathJaxContext>
      <div className="flex flex-col-reverse md:flex-row">
        <main>
          <div className="bg-brand200 p-5 text-white">
            <h1 className="md:text-3xl text-2xl">Chapter {lesson.lessonChap}, Lesson {lesson.lessonNum}. <strong>{lesson.title}</strong></h1>
          </div>
          <div className="p-5" id="render">
            {lesson.content.map((item) => {
              switch (item.type) {
                case "text":
                  return (
                    <p className="m-2 md:text-xl">
                      <ReactMarkdown key={item.id || item.value}>
                        {item.value}
                      </ReactMarkdown>
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={item.id || item.value} className="text-2xl">
                      {item.value}
                    </h2>
                  );
                case "list":
                  return (
                    <ul key={item.id || item.value} className="text-xl">
                      {item.items.map((listItem) => (
                        <li key={listItem.id || listItem.value}>
                          <ReactMarkdown>
                            {listItem.value}
                            </ReactMarkdown>
                        </li>
                      ))}
                    </ul>
                  );
                case "table":
                  return renderTable(item);
                case "formula":
                  return (
                    <MathJax
                      key={item.id || item.value}
                      className="border-brand200 border-2 shadow-md p-2 m-2"
                    >
                      {item.value && (
                      <p className="p-2 text-xl">
                        <strong>Formula:</strong> {"\(" + item.value + "\)"}
                      </p>)}
              {Array.isArray(item.equivalent) && (
            <p>
              Where:
                {item.equivalent.map((eqGroup, i) => (
                  <div key={i}>
                    {eqGroup.map((eq, j) => (
                      <span key={j} className="text-xl">
                                    {eq.type === "variable" && <strong>{"\("+eq.value + "\)"}</strong>}
                                    {eq.type === "value" && `: ${eq.value}`}
                                    {/* <br /> */}
                                  </span>
                    ))}
                  </div>
                ))}
            </p>
              )}
                    </MathJax>
                  );
                case "space":
                  return (
                    <div
                      key={item.id || "space"}
                      className="h-6 w-full bg-brand200"
                    ></div>
                  );
                case "image":
                  return (
                    <img
                      key={item.id || item.value}
                      src={item.src}
                      alt={item.alt}
                      className="m-2 border-2 border-brand200 shadow-md"
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </main>
        <SideBar />
      </div>
    </MathJaxContext>
  );
}
