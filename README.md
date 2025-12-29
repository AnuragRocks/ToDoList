# To-Do List Application

A simple file-based to-do list application built with Express.js and EJS templating engine. To-dos are stored as text files in the local file system.

## Features

✅ **Create To-Dos** - Add new to-do items with a title and detailed description  
✅ **View All To-Dos** - Display all to-dos in a responsive card layout  
✅ **View To-Do Details** - Read the full content of individual to-dos  
✅ **Edit To-Do Names** - Rename existing to-do items  
✅ **File-Based Storage** - No database required, to-dos stored as `.txt` files  

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Templating engine
- **Tailwind CSS** - Styling (via CDN)
- **File System (fs)** - Data storage

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AnuragRocks/ToDoList.git
cd ToDoList
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
practice/
├── files/              # Stores to-do files (.txt)
├── views/              # EJS templates
│   ├── index.ejs      # Homepage - displays all to-dos
│   ├── show.ejs       # To-do detail page
│   └── edit.ejs       # Edit to-do name page
├── public/            # Static assets
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── index.js           # Main application file
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Routes

### GET Routes

- **`GET /`** - Homepage displaying all to-dos
- **`GET /file/:filename`** - View individual to-do details
- **`GET /edit/:filename`** - Edit to-do name form

### POST Routes

- **`POST /create`** - Create a new to-do
  - Body: `{ title: string, details: string }`
  - Creates a `.txt` file with the to-do details
  
- **`POST /edit`** - Rename an existing to-do
  - Body: `{ previous: string, new: string }`
  - Renames the to-do file

## Usage

### Creating a To-Do

1. Enter a to-do title in the input field
2. Add to-do details in the textarea
3. Click "create task" button
4. To-do will be saved as `ToDoTitle.txt` in the `files/` folder

### Viewing To-Dos

- All to-dos are displayed as cards on the homepage
- Click "Read More" to view full to-do details

### Editing To-Do Names

1. Navigate to a to-do detail page
2. Click the edit option
3. Enter the new to-do name
4. Click "Update Name" to save changes

## File Storage

- To-dos are stored in the `files/` directory
- Each to-do is a separate `.txt` file
- Filename format: To-do title with spaces removed (e.g., "My To-Do" → "MyTo-Do.txt")
- File content: To-do details/description

## Dependencies

```json
{
  "express": "^5.0.1",
  "ejs": "^3.1.10"
}
```

## Future Enhancements

### Planned: Full Stack Development with Database

This application will be upgraded to a full-stack MERN application with the following enhancements:

- [ ] **Database Integration** - Migrate from file-based storage to MongoDB
- [ ] **Delete To-Do Functionality** - Add ability to remove completed or unwanted to-dos
- [ ] **Complete CRUD Operations** - Full Create, Read, Update, Delete functionality
- [ ] **User Authentication** - Implement user login/signup with JWT tokens
- [ ] **To-Do Completion Status** - Add checkboxes to mark to-dos as complete/incomplete
- [ ] **Categories & Tags** - Organize to-dos with custom categories and tags
- [ ] **Search & Filter** - Search by title, filter by status, category, or date
- [ ] **Due Dates & Priorities** - Add deadlines and priority levels (high, medium, low)
- [ ] **Responsive UI** - Enhanced mobile-friendly design
- [ ] **Backend API** - RESTful API endpoints for all operations
- [ ] **Frontend Framework** - Potentially migrate to React for better interactivity

**Goal:** Transform this into a production-ready full-stack to-do list application using the MERN stack (MongoDB, Express.js, React, Node.js).

## Author

**Anurag**  
GitHub: [@AnuragRocks](https://github.com/AnuragRocks)

## License

This project is open source and available for learning purposes.
