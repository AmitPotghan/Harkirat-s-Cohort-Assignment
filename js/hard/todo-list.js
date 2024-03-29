/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(list){
    this.list = new Array();
  }
  add(todo){
    this.list.push(todo);
  }
  remove(idx){
    if (idx >= 0 && idx < this.list.length){
      this.list.splice(idx,1);
    }
  }
  update(idx,updatetodo){
    if (idx >= 0 && idx < this.list.length){
      this.list[idx] = updatetodo;
    }
  }
  getAll(todos){
    return this.list;
  }
  get(idx){
    if (idx >= 0 && idx < this.list.length){
      return this.list[idx];
    }
    return null;
  }
  clear(){
    this.list.length = 0;
  }
}

module.exports = Todo;
