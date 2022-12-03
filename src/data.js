import { v4 as uuid } from 'uuid';


const musicData = [{
    title: 'Кабы не было зимы',
    cover: "https://static.mp3xa.me/images/40x40/valentina-tolkunova-kaby-ne-bylo-zimy.jpg",
    artist: "Валентина Толкунова",
    audio: "https://cdn.mp3xa.me/Oaa1w0EPNl9WO--HGRnxhA/1670112130/L29ubGluZS9tcDMvMjAyMC8xMS_QktCw0LvQtdC90YLQuNC90LAg0KLQvtC70LrRg9C90L7QstCwIC0g0JrQsNCx0Ysg0L3QtSDQsdGL0LvQviDQt9C40LzRiy5tcDM",
    color: ["fff", "000"],
    id: uuid(),
    active: false,
}, {
    title: 'Снег над Ленинградом',
    cover: "https://static.mp3xa.me/images/400x400/mikajel-tariverdiev-sneg-nad-leningradom.jpg",
    artist: "Микаэл Таривердиев",
    audio: "https://cdn.mp3xa.me/SDprvPCkTJolYzHy-SHuyg/1670112130/L29ubGluZS9tcDMvMjAyMC8xMS_QnNC40LrQsNGN0Lsg0KLQsNGA0LjQstC10YDQtNC40LXQsiAtINCh0L3QtdCzINC90LDQtCDQm9C10L3QuNC90LPRgNCw0LTQvtC8Lm1wMw",
    color: ["red", "yellow"],
    id: uuid(),
    active: false,
}, {
    title: 'Падает снег',
    cover: "https://static.mp3xa.me/images/400x400/muslim-magomaev-padaet-sneg.jpg",
    artist: "Муслим Магомаев",
    audio: "https://cdn.mp3xa.me/3aCeo5aiQBcUpiOX-yMhWQ/1670112130/L29ubGluZS9tcDMvMjAyMC8xMS_QnNGD0YHQu9C40Lwg0JzQsNCz0L7QvNCw0LXQsiAtINCf0LDQtNCw0LXRgiDRgdC90LXQsy5tcDM",
    color: ["green", "blue"],
    id: uuid(),
    active: false,
}]

export default musicData;