const express = require('express');
const app = express();

app.use(express.json());

// In-memory "database"
let items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' }
];

app.get('/', function (req, res) {
    res.status(200).json(data);
});

app.get("/:id", function (req, res) {
    let found = data.find(function (items) {
        return items.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// **PUT: Replace an entire resource**
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);

    if (index !== -1) {
        // Replace the entire item
        items[index] = {
            id: id, // Ensure the ID remains the same
            name: req.body.name || '', // Default empty if missing
            description: req.body.description || '' // Default empty if missing
        };
        res.json(items[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// **PATCH: Partially update a resource**
app.patch('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        // Update only the provided fields
        if (req.body.name !== undefined) item.name = req.body.name;
        if (req.body.description !== undefined) item.description = req.body.description;

        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
