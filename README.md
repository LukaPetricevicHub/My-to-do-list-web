# To-Do List Application

## Overview
This To-Do List application helps users stay organized. It offers a user-friendly interface to add, edit, delete, and mark tasks as complete.
Adding and editing tasks is quick and intuitive, while deleting helps maintain a clutter-free list. Marking tasks as complete clearly distinguishes 
finished tasks from pending ones. Perfect for personal and professional use, this application streamlines task management, enhancing total efficiency.
## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete
- Filter tasks by status (all, active, completed)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/LukaPetricevicHub/ToDoList.git
    cd ToDoList
    ```
2. Install the required packages:
    ```bash
    pip install flask
    ```

## Usage
1. Run the Flask application:
    ```bash
    python app.py
    ```
2. Open your web browser and navigate to `http://127.0.0.1:5000` to access the To-Do List application.

## Code Explanation
The main components of the application are:

- `app.py`: The main application file that sets up the Flask server and routes.
- `templates/`: Directory containing HTML templates for rendering the web pages.
- `static/`: Directory containing static files such as CSS and JavaScript.

### Example Code
Here is a brief example of how to add a new task:
```python
@app.route('/add', methods=['POST'])
def add_task():
    task_content = request.form['content']
    new_task = Task(content=task_content)
    db.session.add(new_task)
    db.session.commit()
    return redirect('/')
```

## Purpose
The application provides a responsive interface for real-time task management, helping users stay organized.
