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
    },
    {
        id:3,
        title: "Friend Like James Dean",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415927/Dale-Bendixen-Music/friend-like-james-dean_tpkgt8.mp3",
        nowPlaying:false
    },
    {
        id:4,
        title: "All That You Are",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415928/Dale-Bendixen-Music/all-that-you-are_ytid4w.mp3",
        nowPlaying:false
    },
    {
        id:5,
        title: "Wait A Minute",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415927/Dale-Bendixen-Music/wait-a-minute_uurd6y.mp3",
        nowPlaying:false
    },
    {
        id:6,
        title: "Evanesce",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415927/Dale-Bendixen-Music/evanesce_qetnwp.mp3",
        nowPlaying:false
    },
    {
        id:7,
        title: "Waiting On",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676416049/Dale-Bendixen-Music/waiting-on_bqtbst.mp3",
        nowPlaying:false
    },
    {
        id:8,
        title: "Sex And Costumes",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415927/Dale-Bendixen-Music/sex-and-costumes_bnkl9v.mp3",
        nowPlaying:false
    },
    {
        id:9,
        title: "Drop The Bomb",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415926/Dale-Bendixen-Music/drop-the-bomb_ncnjkl.mp3",
        nowPlaying:false
    },
    {
        id:10,
        title: "Rabid",
        url: "https://res.cloudinary.com/rush-media/video/upload/v1676415924/Dale-Bendixen-Music/rabid_pj8uqp.mp3",
        nowPlaying:false
    }
]);



export default songStore;