function filterExercises() {
    const language = document.getElementById('language').value;
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
      if (language === 'all' || exercise.dataset.language === language) {
        exercise.style.display = 'block';
      } else {
        exercise.style.display = 'none';
      }
    });
  }
  
  function searchExercises() {
    const searchText = document.getElementById('search').value.toLowerCase();
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
      if (exercise.innerText.toLowerCase().includes(searchText)) {
        exercise.style.display = 'block';
      } else {
        exercise.style.display = 'none';
      }
    });
  }
  