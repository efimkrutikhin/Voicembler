document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search_text');
    
    searchInput.addEventListener('focus', function() {
      createSearchButton();
    });
    
    searchInput.addEventListener('blur', function() {
      removeSearchButton();
    });
    
    function createSearchButton() {
      const container = document.querySelector('.container_search');
      
      // Проверяем, есть ли уже кнопка
      if (!container.querySelector('.search_button')) {
        const button = document.createElement('button');
        button.classList.add('search_button');
        button.textContent = 'Поиск';
        
        container.appendChild(button);
      }
    }
    
    function removeSearchButton() {
      const container = document.querySelector('.container_search');
      const button = container.querySelector('.search_button');
      
      if (button) {
        button.remove();
      }
    }
  });