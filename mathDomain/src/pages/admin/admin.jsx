import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [json, setJson] = useState("");
  const [uri, setUri] = useState("");

  const uriHandler = (e) => {
    let u = e.target.value;
    u = u.split(" ").join("-").toLowerCase(); // Formatting the URI
    setUri(u); // Updating the state with formatted URI
    console.log(uri); // Optional: For debugging
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const lessonData = {
        title: title,
        content: JSON.parse(json), // Convert input string to actual JSON
        lessonID: uri // Pass the formatted URI here
      };
  
      const response = await axios.post(
        "http://localhost/mathDomain-backend/api/insertLesson.php",
        lessonData,
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("Response Data:", response.data);
      alert(response.data.message || "Unexpected response structure");
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Failed to insert data.");
    }
  };

  return (
    <div className="flex w-full border-2 border-red-500">
      <div className="w-1/2">
        <h1>Admin Page</h1>
        <h1>Add Lesson</h1>

        <form
          className="flex flex-col border-2 border-gray-300 p-4 rounded-md m-2"
          onSubmit={handleSubmit}
        >
          <label>Lesson Title</label>
          <input
            type="text"
            name="title"
            placeholder="Lesson Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Lesson URI</label>
          <input
            type="text"
            name="uri"
            placeholder="Lesson URI"
            onChange={(e) => uriHandler(e)}
          />
          <label>Lesson Content (JSON)</label>
          <textarea
            name="content"
            placeholder='{"data": [{"type": "text", "value": "Example"}]}'
            onChange={(e) => setJson(e.target.value)}
            value={json}
          ></textarea>

          <button type="submit">Add Lesson</button>
        </form>
      </div>
      <div>
        <p>Example &#123;"data": [&#123;"type": "text", "value": "Example"&#125;]&#125;</p>
        <p>Don't create lines</p>
      </div>
    </div>
  );
}
