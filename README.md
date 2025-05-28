# 🔄 Trello API Wrapper

<div align="center">

![Trello Logo](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

<p align="center">
  <img src="https://raw.githubusercontent.com/kiuethai/trello-api/main/assets/trello-api-banner.png" alt="Trello API Banner" width="600px" />
</p>

**A powerful JavaScript wrapper for the Trello REST API**

[Installation](#installation) • 
[Quick Start](#quick-start) • 
[Documentation](#documentation) • 
[Examples](#examples) • 
[Contributing](#contributing)

</div>

---

## ✨ Features

- 🔌 Complete access to all Trello API endpoints
- 🛠️ Promise-based interface for easy async operations
- 📦 Lightweight with minimal dependencies
- 🔄 Full support for boards, lists, cards, and all Trello objects
- 📱 Works in Node.js and browser environments
- 🔑 Simple authentication system

---

## 📦 Installation

```bash
npm install @kiuethai/trello-api
# or
yarn add @kiuethai/trello-api
```

---

## 🚀 Quick Start

```javascript
const TrelloAPI = require('@kiuethai/trello-api');

// Initialize with your API credentials
const trello = new TrelloAPI({
  key: 'YOUR_TRELLO_API_KEY',
  token: 'YOUR_TRELLO_TOKEN'
});

// Create a new board
async function createBoard() {
  try {
    const board = await trello.boards.create({
      name: 'My New Board',
      desc: 'A board created with the Trello API wrapper',
      defaultLists: true
    });
    
    console.log('Board created:', board.url);
    return board;
  } catch (error) {
    console.error('Error creating board:', error);
  }
}

createBoard();
```

---

## 📖 Documentation

### Authentication

```javascript
// Initialize with your API credentials
const trello = new TrelloAPI({
  key: 'YOUR_TRELLO_API_KEY',
  token: 'YOUR_TRELLO_TOKEN'
});

// Or set credentials after initialization
trello.setCredentials({
  key: 'YOUR_TRELLO_API_KEY',
  token: 'YOUR_TRELLO_TOKEN'
});
```

### Common Operations

<details>
<summary><b>Working with Boards</b></summary>

```javascript
// Get all boards
const boards = await trello.boards.getAll();

// Get a specific board
const board = await trello.boards.get(boardId);

// Create a board
const newBoard = await trello.boards.create({
  name: 'Board Name',
  desc: 'Board Description',
  defaultLists: true
});

// Update a board
await trello.boards.update(boardId, {
  name: 'Updated Board Name',
  desc: 'Updated description'
});

// Delete a board
await trello.boards.delete(boardId);
```
</details>

<details>
<summary><b>Working with Lists</b></summary>

```javascript
// Get lists on a board
const lists = await trello.lists.getAll(boardId);

// Create a list
const newList = await trello.lists.create({
  name: 'New List',
  idBoard: boardId,
  pos: 'bottom'
});

// Update a list
await trello.lists.update(listId, {
  name: 'Updated List Name'
});

// Archive a list
await trello.lists.archive(listId);
```
</details>

<details>
<summary><b>Working with Cards</b></summary>

```javascript
// Get cards on a list
const cards = await trello.cards.getByList(listId);

// Create a card
const newCard = await trello.cards.create({
  name: 'Card Title',
  desc: 'Card description',
  idList: listId,
  pos: 'bottom'
});

// Update a card
await trello.cards.update(cardId, {
  name: 'Updated Card Title',
  desc: 'Updated description'
});

// Delete a card
await trello.cards.delete(cardId);
```
</details>

---

## 🧩 Examples

### Create a Complete Workflow

```javascript
async function setupProjectWorkflow() {
  // Create a new board
  const board = await trello.boards.create({
    name: 'Project Workflow',
    defaultLists: false
  });
  
  // Add custom lists
  const backlog = await trello.lists.create({
    name: 'Backlog',
    idBoard: board.id
  });
  
  const todo = await trello.lists.create({
    name: 'To Do',
    idBoard: board.id
  });
  
  const inProgress = await trello.lists.create({
    name: 'In Progress',
    idBoard: board.id
  });
  
  const done = await trello.lists.create({
    name: 'Done',
    idBoard: board.id
  });
  
  // Add some cards
  await trello.cards.create({
    name: 'Research competitors',
    idList: backlog.id
  });
  
  await trello.cards.create({
    name: 'Create project plan',
    idList: todo.id
  });
  
  return board.url;
}
```

---

## 📊 API Coverage

| Category | Endpoints Supported | Documentation |
|----------|---------------------|---------------|
| Boards   | 15+                 | [Trello Docs](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/) |
| Lists    | 10+                 | [Trello Docs](https://developer.atlassian.com/cloud/trello/rest/api-group-lists/) |
| Cards    | 20+                 | [Trello Docs](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/) |
| Members  | 15+                 | [Trello Docs](https://developer.atlassian.com/cloud/trello/rest/api-group-members/) |
| Webhooks | 5+                  | [Trello Docs](https://developer.atlassian.com/cloud/trello/rest/api-group-webhooks/) |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  
  **Made with ❤️ by [kiuethai](https://github.com/kiuethai)**
  
  <a href="https://github.com/kiuethai">
    <img src="https://img.shields.io/github/followers/kiuethai?label=Follow&style=social" alt="GitHub followers" />
  </a>
  
</div>
