import { writable } from "svelte/store";

const songStore = writable([
    {
        id:1,
        title: "Something In The Water",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415706/Dale-Bendixen-Music/something-in-the-water_qpltfy.mp3",
        nowPlaying: false
    },
    {
        id:2,
        title: "Not Alone",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415927/Dale-Bendixen-Music/not-alone_wmnihw.mp3",
        nowPlaying:false
    }
]);



export default songStore;