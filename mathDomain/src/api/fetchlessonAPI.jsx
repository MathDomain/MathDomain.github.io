import axios from "axios";

const API_URL = "http://mathdomain.unaux.com/mathDomain-backend/api/fetchLesson.php"

export const fetchLesson = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false, // Ensures no cookies are sent (important for CORS)
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
}