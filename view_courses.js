// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMbuARIYu3a4XiQPJqoNaUr5-GZEBE4s",
  authDomain: "ousl-bse-34068.firebaseapp.com",
  databaseURL: "https://ousl-bse-34068-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ousl-bse-34068",
  storageBucket: "ousl-bse-34068.firebasestorage.app",
  messagingSenderId: "383659852498",
  appId: "1:383659852498:web:fa20d6d17b43859d3ee30b",
  measurementId: "G-D1VELV6NWM"
};

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const coursesRef = ref(database, 'courses');
const courseListElement = document.getElementById('courseList');

if (courseListElement) {
    onValue(coursesRef, (snapshot) => {
        courseListElement.innerHTML = '';
        const data = snapshot.val();
        if (data) {
            for (const key in data) {
                const course = data[key];
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${course.name}</strong> (Year ${course.year}, Semester ${course.semester})<br>
                    Day Schools: ${course.daySchools || 'None'}<br>
                    Evaluation Details: ${course.evaluationDetails || 'None'}<br><br>
                `;
                courseListElement.appendChild(listItem);
            }
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = "No courses added yet.";
            courseListElement.appendChild(listItem);
        }
    });
}