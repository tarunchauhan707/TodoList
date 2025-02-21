import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        setTodos(Array.isArray(parsedTodos) ? parsedTodos : []);
      } catch (error) {
        console.error("Error parsing todos:", error);
        setTodos([]);
      }
    } else {
      setTodos([]);
    }
  }, []);

  const deleteTodo = (title) => {
    const newTodos = todos.filter(item => item.title !== title);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const editTodo = (first) => { /* implementation here */ };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
            Your Todos
          </h1>
          {(!todos || todos.length === 0) && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Your Todos will show up here. Please add a todo by going to the homepage.
            </p>
          )}
        </div>
        <div className="flex flex-wrap -m-4">
          {todos.map(item => (
            <div key={item.title} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="todo"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={`https://picsum.photos/600/900?a=${item.title}`}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mb-4">{item.desc}</p>
                  <span className="inline-flex">
                    <a
                      className="text-gray-500 cursor-pointer"
                      onClick={() => deleteTodo(item.title)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="20px"
                        height="20px"
                      >
                        <path d="M14.984375 2.4863281A1.0001 1.0001 0 0 0 14 3.5L14 4L8.5 4A1.0001 1.0001 0 0 0 7.4863281 5L6 5A1.0001 1.0001 0 1 0 6 7L24 7A1.0001 1.0001 0 1 0 24 5L22.513672 5A1.0001 1.0001 0 0 0 21.5 4L16 4L16 3.5A1.0001 1.0001 0 0 0 14.984375 2.4863281zM6 9L7.7929688 24.234375C7.9109687 25.241375 8.7633438 26 9.7773438 26L20.222656 26C21.236656 26 22.088031 25.241375 22.207031 24.234375L24 9L6 9z" />
                      </svg>
                    </a>
                    <a
                      className="ml-2 text-gray-500 cursor-pointer"
                      href={`/edit/${item.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="20px"
                        height="20px"
                      >
                        <path d="M43.125 2C41.878906 2 40.636719 2.488281 39.6875 3.4375L38.875 4.25L45.75 11.125C45.746094 11.128906 46.5625 10.3125 46.5625 10.3125C48.464844 8.410156 48.460938 5.335938 46.5625 3.4375C45.609375 2.488281 44.371094 2 43.125 2ZM37.34375 6.03125C37.117188 6.0625 36.90625 6.175781 36.75 6.34375L4.3125 38.8125C4.183594 38.929688 4.085938 39.082031 4.03125 39.25L2.03125 46.75C1.941406 47.09375 2.042969 47.457031 2.292969 47.707031C2.542969 47.957031 2.90625 48.058594 3.25 47.96875L10.75 45.96875C10.917969 45.914063 11.070313 45.816406 11.1875 45.6875L43.65625 13.25C44.054688 12.863281 44.058594 12.226563 43.671875 11.828125C43.285156 11.429688 42.648438 11.425781 42.25 11.8125L9.96875 44.09375L5.90625 40.03125L38.1875 7.75C38.488281 7.460938 38.578125 7.011719 38.410156 6.628906C38.242188 6.246094 37.855469 6.007813 37.4375 6.03125C37.40625 6.03125 37.375 6.03125 37.34375 6.03125Z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todos;
