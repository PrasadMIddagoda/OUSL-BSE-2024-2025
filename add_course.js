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
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const coursesRef = ref(database, 'courses');

const addCourseForm = document.getElementById('addCourseForm');
if (addCourseForm) {
    addCourseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const courseName = document.getElementById('courseName').value;
        const year = document.getElementById('year').value;
        const semester = document.getElementById('semester').value;
        const daySchools = document.getElementById('daySchools').value;
        const evaluationDetails = document.getElementById('evaluationDetails').value;

        const newCourse = {
            name: courseName,
            year: year,
            semester: semester,
            daySchools: daySchools,
            evaluationDetails: evaluationDetails
        };

        push(coursesRef, newCourse)
            .then(() => {
                alert(`"${courseName}" added successfully.`);
                addCourseForm.reset();
            })
            .catch((error) => {
                console.error("Error adding course: ", error);
                alert("Error adding course.");
            });
    });
}