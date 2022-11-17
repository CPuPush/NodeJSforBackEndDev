function addTodo(event) {
  event.preventDefault();
}
function updateTodo(todoId) {
  return $.ajax({
    method: "put",
    url: `/todo/${todoId}`,
    contentType: "application/json",
    cache: false,
    error: (error) => {
      console.log(error);
    },
  });
}
function deleteTodo(todoId) {
  return $.ajax({
    method: "delete",
    url: `/todo/${todoId}`,
    contentType: "application/json",
    cache: false,
    success: () => {
      location.reload();
    },
    error: (error) => {
      console.log(error);
    },
  });
}
