let userInput = prompt('Choose an option from the list');

const todos = ['to clean the kitchen', 'to do JS challenges'];

while (userInput !== 'quit' && userInput != 'q') {
    if (userInput === 'list') {
        console.log('***************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************');
    } else if (userInput === 'new') {
        const newTodo = prompt('What to add to the Todo List?')
        todos.push(newTodo);
        console.log(`${newTodo} was added to the Todo List`);
    } else if (userInput === 'delete') {
        const index = prompt('Enter an index to delete from the Todo List');
        const deletedIndex = todos.splice(index, 1);
        console.log(`The ${deletedIndex} is removed from the Todo List`);
    }
    userInput = prompt('Choose an option from the list');
}
console.log('Ok, quit the app');
