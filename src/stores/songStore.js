import { writable } from "svelte/store";

const songStore = writable([
    {
        id:1,
        title: "Something In The Water",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415706/Dale-Bendixen-Music/something-in-the-water_qpltfy.mp3"
    }
]);



export default songStore;