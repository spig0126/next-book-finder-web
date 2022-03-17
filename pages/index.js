import { Flex } from "@chakra-ui/layout";

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

export default Home;
