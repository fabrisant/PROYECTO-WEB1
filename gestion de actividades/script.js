// Agregar un "escuchador de eventos" a la lista de tareas pendientes
document.getElementById('pendingTasks').addEventListener('click', function(event) {
  // Verificar si el elemento en el que se hizo clic es un elemento de lista (<li>)
  if (event.target.tagName === 'LI') {
      // Alternar la clase 'completed' del elemento de lista para marcar visualmente si la tarea está completada
      event.target.classList.toggle('completed');
      // Obtener la lista padre del elemento de lista
      const list = event.target.parentNode;
      // Quitar el elemento de lista de la lista de tareas pendientes
      const taskItem = list.removeChild(event.target);
      // Agregar el elemento de lista a la lista de tareas completadas
      document.getElementById('completedTasks').appendChild(taskItem);
  }
});

// Agregar un "escuchador de eventos" a la lista de tareas completadas
document.getElementById('completedTasks').addEventListener('click', function(event) {
  // Verificar si el elemento en el que se hizo clic es un elemento de lista (<li>)
  if (event.target.tagName === 'LI') {
      // Alternar la clase 'completed' del elemento de lista
      event.target.classList.toggle('completed');
      // Obtener la lista padre del elemento de lista
      const list = event.target.parentNode;
      // Quitar el elemento de lista de la lista de tareas completadas
      const taskItem = list.removeChild(event.target);
      // Agregar el elemento de lista a la lista de tareas pendientes
      document.getElementById('pendingTasks').appendChild(taskItem);
  }
});