 // JavaScript for handling user input and displaying suggestions
 const searchInput = document.getElementsByClassName('search_input');
 searchInput.addEventListener('input', showSuggestions);

 function showSuggestions() {
   const inputText = searchInput.value.toLowerCase();
   const suggestions = document.getElementById('suggestions').children;

   for (let i = 0; i < suggestions.length; i++) {
     const suggestionValue = suggestions[i].value.toLowerCase();
     if (suggestionValue.includes(inputText)) {
       suggestions[i].style.display = 'block';
     } else {
       suggestions[i].style.display = 'none';
     }
   }
 }

 