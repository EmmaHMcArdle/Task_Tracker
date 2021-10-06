// Now that we have our interface
import { Task } from "./Task"



// exporting an array called Tasks
// Each element is just an object with an id, text value ... etc
// Since we are using Angular with Typescript we should probably
// create an interface for a task basically like a model of what
// fields it should contain

// Now we want to add Task like a type like you add string or number
// you can add your interface
// Since Task is an array we also want to add our brackets
// If it was just a single object we would just do Task
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
    },
];