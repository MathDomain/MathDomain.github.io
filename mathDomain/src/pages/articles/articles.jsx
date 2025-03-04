import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function Article() {
  const { lessonID } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {tableData.headers.map((header, i) => (
              <th key={i} className="border border-brand200 p-2">{header}</th>
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

  return (
    <MathJaxContext>
      <div className="bg-brand200 p-5 text-white">
        <h1 className="md:text-5xl text-2xl">{lesson.title}</h1>
      </div>
      <div className="p-2 md:w-3/4">
        {lesson.content.map((item) => {
          switch (item.type) {
            case "text":
              return <ReactMarkdown key={item.id || item.value}>{item.value}</ReactMarkdown>;
            case "heading":
              return <h2 key={item.id || item.value} className="text-2xl">{item.value}</h2>;
            case "list":
              return (
                <ul key={item.id || item.value}>
                  {item.items.map((listItem) => (
                    <li key={listItem.id || listItem.value}>
                      <ReactMarkdown>{listItem.value}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              );
            case "table":
              return renderTable(item);
            case "formula":
              return (
                <MathJax key={item.id || item.value}>
                  <p>
                    <strong>Formula:</strong> {"\\(" + item.value + "\\)"}
                  </p>
                </MathJax>
              );
            case "space":
              return <div key={item.id || "space"} className="h-6 w-full bg-brand200"></div>;
            default:
              return null;
          }
        })}
      </div>
    </MathJaxContext>
  );
}