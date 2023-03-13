const cards = [
  {
    id: 1,
    title: "Implement authentication system",
    description: "Set up user authentication using JWT",
    dueDate: "2023-03-31T00:00:00.000Z",
    status: "todo",
    priority: "high",
    assignedTo: "John Doe",
    changes: [
      {
        date: "2023-03-12T14:30:00.000Z",
        user: "Jane Smith",
        status: "in progress",
      },
      {
        date: "2023-03-15T10:45:00.000Z",
        user: "John Doe",
        status: "completed",
      },
    ],
  },
  {
    id: 2,
    title: "Implement authorization system",
    description: "Set up user authorization using JWT",
    dueDate: "2023-03-31T00:00:00.000Z",
    status: "backlog",
    priority: "high",
    assignedTo: "John Doe",
    changes: [
      {
        date: "2023-03-12T14:30:00.000Z",
        user: "Jane Smith",
        status: "in progress",
      },
      {
        date: "2023-03-15T10:45:00.000Z",
        user: "John Doe",
        status: "completed",
      },
    ],
  },
  {
    id: 3,
    title: "Implement database",
    description: "Set up database using MongoDB",
    dueDate: "2023-03-31T00:00:00.000Z",
    status: "todo",
    priority: "high",
    assignedTo: "John Doe",
    changes: [
      {
        date: "2023-03-12T14:30:00.000Z",
        user: "Jane Smith",
        status: "backlog",
      },
      {
        date: "2023-03-15T10:45:00.000Z",
        user: "John Doe",
        status: "completed",
      },
    ],
  },
  {
    id: 4,
    title: "Implement backend",
    description: "Set up backend using Express",
    dueDate: "2023-03-31T00:00:00.000Z",
    status: "todo",
    priority: "high",
    assignedTo: "John Doe",
    changes: [
      {
        date: "2023-03-12T14:30:00.000Z",
        user: "Jane Smith",
        status: "in progress",
      },
      {
        date: "2023-03-15T10:45:00.000Z",
        user: "John Doe",
        status: "completed",
      },
    ],
  },
  {
    id: 5,
    title: "Design landing page",
    description: "Create a visually appealing landing page with a clear message.",
    dueDate: "2023-04-01T00:00:00.000Z",
    status: "todo",
    priority: "high",
    assignedTo: "Mary Johnson",
    changes: [
      {
        date: "2023-03-13T10:30:00.000Z",
        user: "John Doe",
        status: "in progress",
      },
      {
        date: "2023-03-16T12:15:00.000Z",
        user: "Mary Johnson",
        status: "completed",
      },
    ],
  },
  {
    id: 6,
    title: "Create product catalog",
    description: "Compile a catalog of all our products and organize them by category.",
    dueDate: "2023-04-05T00:00:00.000Z",
    status: "todo",
    priority: "medium",
    assignedTo: "Tom Smith",
    changes: [
      {
        date: "2023-03-14T09:00:00.000Z",
        user: "Tom Smith",
        status: "in progress",
      },
    ],
  },
  {
    id: 7,
    title: "Refactor legacy code",
    description: "Update old code to use modern best practices and improve performance.",
    dueDate: "2023-04-15T00:00:00.000Z",
    status: "in progress",
    priority: "high",
    assignedTo: "John Doe",
    changes: [
      {
        date: "2023-03-16T13:00:00.000Z",
        user: "John Doe",
        status: "in progress",
      },
      {
        date: "2023-03-20T11:45:00.000Z",
        user: "Jane Smith",
        status: "in progress",
      },
    ],
  },
  {
    id: 8,
    title: "Design new logo",
    description: "Create a new logo that reflects our brand and values.",
    dueDate: "2023-04-10T00:00:00.000Z",
    status: "in progress",
    priority: "medium",
    assignedTo: "Mary Johnson",
    changes: [
      {
        date: "2023-03-17T14:30:00.000Z",
        user: "Mary Johnson",
        status: "in progress",
      },
    ],
  },
  {
    id: 9,
    title: "Develop new feature",
    description: "Create a new feature for our product that will attract more customers.",
    dueDate: "2023-04-20T00:00:00.000Z",
    status: "in progress",
    priority: "high",
    assignedTo: "Tom Smith",
    changes: [
      {
        date: "2023-03-18T10:00:00.000Z",
        user: "Tom Smith",
        status: "in progress",
      },
    ],
  },
];

export default cards;
