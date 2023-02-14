import { writable } from "svelte/store";

const songStore = writable([
    {
        id:1,
        title: "Something In The Water",
        url: "./src/assets/something-in-the-water.mp3"
    }
]);



export default songStore;