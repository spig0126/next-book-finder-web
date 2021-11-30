import SearchForm from "../src/components/SearchForm";
import BookFindList from "../src/components/BookFindList";
import { ResultContextProvider } from "../src/contexts/context"; //provider 불러오기

export default function Home() {
    return (
        <ResultContextProvider>
            <div>
                <SearchForm />
                <BookFindList />
            </div>
        </ResultContextProvider>
    );
}
