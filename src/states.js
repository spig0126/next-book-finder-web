import axios from "axios";
import { atom, selector } from "recoil";

const fictionState = atom({
    key: "fictionState",
    default: "hardcover-fiction"
})

const fictionBooks = selector({
    key: "fictionBooks",
    get: async ({ get }) => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${get(fictionState)}.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`)
        console.log(response.data);
        if (response.error) throw response.error;
        return response.data.books;
    },
})

const nonfictionState = atom({
    key: "nonfictionState",
    default:  "hardcover-nonfiction"
})

const nonfictionBooks = selector({
    key: "nonfictionBooks",
    get: async ({ get }) => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${get(nonfictionBooks)}.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`)
        if (response.error) throw response.error;
        return response.data.books;
    },
})

const youngAdultState = atom({
    key: "youngAdultState",
    default: "young-adult-hardcover"
})

const youndAdultBooks = selector({
    key: "youndAdultBooks",
    get: async ({ get }) => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${get(youngAdultState)}.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`)
        if (response.error) throw response.error;
        return response.data.books;
    },
})

const adviceEtcState = atom({
    key: "adviceEtcState",
    default: "advice-how-to-and-miscellaneous"
})

const adviceEtcBooks = selector({
    key: "adviceEtcBooks",
    get: async ({ get }) => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${get(adviceEtcState)}.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`)
        if (response.error) throw response.error;
        return response.data.books;
    },
})

export { fictionState, fictionBooks, nonfictionState, nonfictionBooks, youngAdultState, youndAdultBooks, adviceEtcState, adviceEtcBooks };