# Task API

A RESTful API using Express and TypeScript.

## What's this all about?

This API lets you manage tasks. You can create tasks, read them, update them when you feel productive, and delete them when you give up.

## Project Structure

```
.
├── controllers/
│   └── taskController.ts
├── middleware/
│   ├── errorHandler.ts
│   └── validateTask.ts
├── routes/
│   └── taskRoutes.ts
├── types/
│   └── task.ts
└── index.ts
```

## Getting Started

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## API Endpoints

(If you are hosting using localhost, use "http://localhost:3000" before the endpoints.)

- `GET /tasks`: Retrieve all tasks
- `GET /tasks/:id`: Retrieve a specific task
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update an existing task
- `DELETE /tasks/:id`: Remove a task

## Error Handling

Error handling is dealt with using middleware. The data flows first from the `validateTask.ts`, then the respective controller, and if any error occurs, it will hit the `errorHandler.ts`.

## Future Improvements

1. Implement a persistent database solution to replace in-memory storage, ensuring data durability and scalability.
2. Develop and integrate an authentication system to secure the API and protect user data.
3. Create a comprehensive test suite to ensure reliability and facilitate future development.
4. Enhance input validation to maintain data integrity and improve user experience.

## Conclusion

This Task Management API represents a solid foundation for task tracking and management. While it provides core functionality, there's room for enhancement in areas such as data persistence, security, and testing. We welcome contributions and feedback to further improve this project.

Thank you for your interest in our Task Management API. We hope it serves your needs effectively.
