// Task Interface
// Similar to a class

// We want to export this so we can bring into other files
export interface Task {
    // We are going to define what we want a task to include
    // The id we set to optional so we add a question mark bc
    // when we create/add a task to form it's not going to 
    // initially have an id until we save it to json server
    // going to be optional so we don't get any error messages
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}