import { Flex } from "@chakra-ui/layout";
import axios from "axios";

import BestSellers from "../src/components/bestSellers/BestSellers";
import MainSection from "../src/mainPageSections/MainSection";

function Home() {
    return (
        <Flex m="0" p="0" flexDir="column">

            <MainSection />
            <BestSellers />
        </Flex>
    );
}

// export async function getStaticProps() {
//     const { data } = await axios.get(
//         `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`
//     );

//     // const res = await fetch(
//     //     `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`
//     // );
//     // const data = await res.json();
//     return { props: { data: data || {} } };
// }

// Home.getInitialProps = async function () {
//     const res = await fetch(
//         "https://api.covid19api.com/total/dayone/country/kr"
//     );
//     const data = await res.json();

//     return {
//         data: data
//     };
// };

// export async function getStaticProps() {
//     const response = await axios.get(
//         `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`
//     );
//     const bookData = await response;
//     const fetchData = async () => {
//         const response = await axios.get(
//             `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=tjMAjnSX1uGpTJGgrI5ceHScPxTpQ9WM`
//         );
//         console.log(response.data);
//         bookData = response.data;
//     };
//     return {
//         props: {
//             bookData,
//         },
//     };
// }

export default Home;
