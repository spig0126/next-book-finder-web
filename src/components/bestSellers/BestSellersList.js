import { useEffect, useState } from "react";
import {
    Flex,
    Text,
    Grid,
    IconButton,
    Heading,
    Box,
    Spinner,
} from "@chakra-ui/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import BestSellerBookCard from "./BestSellerBookCard";

export default function BestSellersList({
    genre,
    hlColor,
    hoverColor,
    data,
    isLoading,
}) {
    const [count, setCount] = useState(0);

    const nextBook = () => {
        if (count == Test.length - 5) setCount(0);
        else setCount(count + 1);
    };
    const beforeBook = () => {
        if (count == 0) setCount(Test.length - 5);
        else setCount(count - 1);
    };

    return (
        <Flex
            flexDir="column"
            alignItems="center"
            w="90vw"
            color={hlColor}
            mb="10rem"
        >
            <Flex w="100vw" flexDir="column" alignItems="center">
                <Box w="2rem" h="0.5px" m="1rem" bgColor={hlColor} />
                <Text fontSize="3xl">{genre}</Text>
                <Heading fontSize="5xl">BESTSELLERS</Heading>
                <Box w="2rem" h="0.5px" m="1rem" bgColor={hlColor} />
            </Flex>
            {isLoading ? (
                <Spinner />
            ) : (
                <Grid
                    templateColumns="1fr 4fr 4fr 4fr 4fr 4fr 1fr"
                    gap={10}
                    alignItems="center"
                    w="90%"
                    mt="2rem"
                >
                    <IconButton
                        icon={<BsChevronCompactLeft size="md" />}
                        onClick={beforeBook}
                        size="lg"
                        variant="ghost"
                        color={hlColor}
                        _hover={{ bg: "none", color: hoverColor }}
                        _focus={{ border: "none" }}
                    />
                    <BestSellerBookCard book={data[count]} />
                    <BestSellerBookCard book={data[count + 1]} />
                    <BestSellerBookCard book={data[count + 2]} />
                    <BestSellerBookCard book={data[count + 3]} />
                    <BestSellerBookCard book={data[count + 4]} />
                    <IconButton
                        icon={<BsChevronCompactRight size="md" />}
                        onClick={nextBook}
                        variant="ghost"
                        color={hlColor}
                        _hover={{ bg: "none", color: hoverColor }}
                        _focus={{ border: "none" }}
                    />
                </Grid>
            )}
        </Flex>
    );
}

const Test = [
    {
        rank: 1,
        rank_last_week: 3,
        weeks_on_list: 5,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0385546025",
        primary_isbn13: "9780385546027",
        publisher: "Doubleday",
        description:
            "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
        price: "0.00",
        title: "THE JUDGE'S LIST",
        author: "John Grisham",
        contributor: "by John Grisham",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
        book_image_width: 329,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0385546025",
                isbn13: "9780385546027",
            },
            {
                isbn10: "0385546033",
                isbn13: "9780385546034",
            },
            {
                isbn10: "0593168496",
                isbn13: "9780593168493",
            },
            {
                isbn10: "0593168488",
                isbn13: "9780593168486",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+JUDGE%27S+LIST&author=John+Grisham",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385546027",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BJUDGE%252527S%252BLIST%252FJohn%252BGrisham%252F9780385546027&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BJUDGE%252527S%252BLIST%252BJohn%252BGrisham",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385546027&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BJUDGE%2527S%2BLIST",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385546027%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BJUDGE%2527S%2BLIST%2BJohn%2BGrisham%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/8b6146c8-a02e-5f1a-beb8-aaa91fcdbc6a",
    },
    {
        rank: 2,
        rank_last_week: 0,
        weeks_on_list: 1,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "153871972X",
        primary_isbn13: "9781538719725",
        publisher: "Grand Central",
        description:
            "The fourth book in the Atlee Pine series. Atlee discovers her twin sister survived an abduction at the age of 6.",
        price: "0.00",
        title: "MERCY",
        author: "David Baldacci",
        contributor: "by David Baldacci",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "153871972X",
                isbn13: "9781538719725",
            },
            {
                isbn10: "1538719703",
                isbn13: "9781538719701",
            },
            {
                isbn10: "153871969X",
                isbn13: "9781538719695",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MERCY&author=David+Baldacci",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538719725",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMERCY%252FDavid%252BBaldacci%252F9781538719725&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMERCY%252BDavid%252BBaldacci",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538719725&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMERCY",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538719725%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMERCY%2BDavid%2BBaldacci%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/245294a1-f507-5ab7-ac39-4f03b01ce601",
    },
    {
        rank: 3,
        rank_last_week: 1,
        weeks_on_list: 3,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "006288834X",
        primary_isbn13: "9780062888341",
        publisher: "Harper",
        description:
            "After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.",
        price: "0.00",
        title: "THE STRANGER IN THE LIFEBOAT",
        author: "Mitch Albom",
        contributor: "by Mitch Albom",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780062888341.jpg",
        book_image_width: 345,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "",
                isbn13: "",
            },
            {
                isbn10: "006288834X",
                isbn13: "9780062888341",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+STRANGER+IN+THE+LIFEBOAT&author=Mitch+Albom",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062888341",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252FMitch%252BAlbom%252F9780062888341&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252BMitch%252BAlbom",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062888341&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062888341%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT%2BMitch%2BAlbom%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/bd831017-3ff8-51b6-bbb5-0e4b7d43f62d",
    },
    {
        rank: 4,
        rank_last_week: 4,
        weeks_on_list: 8,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1538728621",
        primary_isbn13: "9781538728628",
        publisher: "Grand Central",
        description:
            "Maggie Dawes, a renowned travel photographer, struggles with a medical diagnosis over Christmas.",
        price: "0.00",
        title: "THE WISH",
        author: "Nicholas Sparks",
        contributor: "by Nicholas Sparks",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781538728628.jpg",
        book_image_width: 330,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/1538728621?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "1538728621",
                isbn13: "9781538728628",
            },
            {
                isbn10: "1478992689",
                isbn13: "9781478992684",
            },
            {
                isbn10: "1549109200",
                isbn13: "9781549109201",
            },
            {
                isbn10: "154919383X",
                isbn13: "9781549193835",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/1538728621?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+WISH&author=Nicholas+Sparks",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538728628",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BWISH%252FNicholas%252BSparks%252F9781538728628&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BWISH%252BNicholas%252BSparks",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538728628&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BWISH",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538728628%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BWISH%2BNicholas%2BSparks%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/28cad580-eb4e-512f-a790-9fd5eddd45d4",
    },
    {
        rank: 5,
        rank_last_week: 8,
        weeks_on_list: 7,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0735222355",
        primary_isbn13: "9780735222359",
        publisher: "Viking",
        description:
            "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.",
        price: "0.00",
        title: "THE LINCOLN HIGHWAY",
        author: "Amor Towles",
        contributor: "by Amor Towles",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0735222355",
                isbn13: "9780735222359",
            },
            {
                isbn10: "0735222371",
                isbn13: "9780735222373",
            },
            {
                isbn10: "0593452100",
                isbn13: "9780593452103",
            },
            {
                isbn10: "0593452097",
                isbn13: "9780593452097",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LINCOLN+HIGHWAY&author=Amor+Towles",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735222359",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLINCOLN%252BHIGHWAY%252FAmor%252BTowles%252F9780735222359&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLINCOLN%252BHIGHWAY%252BAmor%252BTowles",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735222359&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLINCOLN%2BHIGHWAY",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735222359%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLINCOLN%2BHIGHWAY%2BAmor%2BTowles%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/43839b1f-c8cc-5ef4-8893-bd85582906a4",
    },
    {
        rank: 6,
        rank_last_week: 2,
        weeks_on_list: 2,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0316485640",
        primary_isbn13: "9780316485647",
        publisher: "Little, Brown",
        description:
            "A death on New Year’s Eve, an unsolved murder and a hunt for serial rapists bring Bosch and Ballard back together.",
        price: "0.00",
        title: "THE DARK HOURS",
        author: "Michael Connelly",
        contributor: "by Michael Connelly",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780316485647.jpg",
        book_image_width: 322,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0316485640?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0316485640",
                isbn13: "9780316485647",
            },
            {
                isbn10: "0316301299",
                isbn13: "9780316301299",
            },
            {
                isbn10: "0316256560",
                isbn13: "9780316256568",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0316485640?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+DARK+HOURS&author=Michael+Connelly",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316485647",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BDARK%252BHOURS%252FMichael%252BConnelly%252F9780316485647&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BDARK%252BHOURS%252BMichael%252BConnelly",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316485647&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BDARK%2BHOURS",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316485647%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BDARK%2BHOURS%2BMichael%2BConnelly%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/32bfcd57-19ea-5fd9-8e65-63b2f46d6eef",
    },
    {
        rank: 7,
        rank_last_week: 6,
        weeks_on_list: 4,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1984818503",
        primary_isbn13: "9781984818508",
        publisher: "Delacorte",
        description:
            "The 26th book in the Jack Reacher series. Reacher helps an F.B.I. agent look for her missing brother and takes on a foe named Dendoncker.",
        price: "0.00",
        title: "BETTER OFF DEAD",
        author: "Lee Child and Andrew Child",
        contributor: "by Lee Child and Andrew Child",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781984818508.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/1984818503?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "1984818503",
                isbn13: "9781984818508",
            },
            {
                isbn10: "1984818511",
                isbn13: "9781984818515",
            },
            {
                isbn10: "0593452747",
                isbn13: "9780593452745",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/1984818503?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BETTER+OFF+DEAD&author=Lee+Child+and+Andrew+Child",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984818508",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBETTER%252BOFF%252BDEAD%252FLee%252BChild%252Band%252BAndrew%252BChild%252F9781984818508&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBETTER%252BOFF%252BDEAD%252BLee%252BChild%252Band%252BAndrew%252BChild",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984818508&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBETTER%2BOFF%2BDEAD",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984818508%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBETTER%2BOFF%2BDEAD%2BLee%2BChild%2Band%2BAndrew%2BChild%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/d6f5e37b-916e-56d4-b13f-4029f0176a96",
    },
    {
        rank: 8,
        rank_last_week: 7,
        weeks_on_list: 3,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "198215487X",
        primary_isbn13: "9781982154875",
        publisher: "Atria",
        description:
            "The 28th book in the Stephanie Plum series. Diesel and Stephanie track the international computer hacker Oswald Wednesday.",
        price: "0.00",
        title: "GAME ON",
        author: "Janet Evanovich",
        contributor: "by Janet Evanovich",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781982154875.jpg",
        book_image_width: 329,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/198215487X?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "198215487X",
                isbn13: "9781982154875",
            },
            {
                isbn10: "198215490X",
                isbn13: "9781982154905",
            },
            {
                isbn10: "1432891499",
                isbn13: "9781432891497",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/198215487X?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GAME+ON&author=Janet+Evanovich",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982154875",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGAME%252BON%252FJanet%252BEvanovich%252F9781982154875&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGAME%252BON%252BJanet%252BEvanovich",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982154875&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGAME%2BON",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982154875%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGAME%2BON%2BJanet%2BEvanovich%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/9b564e0d-3355-509c-8774-5070a8d5d28f",
    },
    {
        rank: 9,
        rank_last_week: 0,
        weeks_on_list: 1,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0593419642",
        primary_isbn13: "9780593419649",
        publisher: "Putnam",
        description:
            "Dirk Pitt’s latest adventure involves a missing Buddhist artifact, a failed hypersonic missile and a hijacked ship.",
        price: "0.00",
        title: "CLIVE CUSSLER'S THE DEVIL'S SEA",
        author: "Dirk Cussler",
        contributor: "by Dirk Cussler",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780593419649.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0593419642?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0593419642",
                isbn13: "9780593419649",
            },
            {
                isbn10: "0593419650",
                isbn13: "9780593419656",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0593419642?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=CLIVE+CUSSLER%27S+THE+DEVIL%27S+SEA&author=Dirk+Cussler",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593419649",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCLIVE%252BCUSSLER%252527S%252BTHE%252BDEVIL%252527S%252BSEA%252FDirk%252BCussler%252F9780593419649&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCLIVE%252BCUSSLER%252527S%252BTHE%252BDEVIL%252527S%252BSEA%252BDirk%252BCussler",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593419649&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DCLIVE%2BCUSSLER%2527S%2BTHE%2BDEVIL%2527S%2BSEA",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593419649%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCLIVE%2BCUSSLER%2527S%2BTHE%2BDEVIL%2527S%2BSEA%2BDirk%2BCussler%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/407ea2cb-5c12-5753-8b0a-9f27c6231403",
    },
    {
        rank: 10,
        rank_last_week: 11,
        weeks_on_list: 8,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1982168439",
        primary_isbn13: "9781982168438",
        publisher: "Scribner",
        description:
            "An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.",
        price: "0.00",
        title: "CLOUD CUCKOO LAND",
        author: "Anthony Doerr",
        contributor: "by Anthony Doerr",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781982168438.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/1982168439?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "1982168439",
                isbn13: "9781982168438",
            },
            {
                isbn10: "1982168455",
                isbn13: "9781982168452",
            },
            {
                isbn10: "1797128523",
                isbn13: "9781797128528",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/1982168439?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=CLOUD+CUCKOO+LAND&author=Anthony+Doerr",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982168438",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCLOUD%252BCUCKOO%252BLAND%252FAnthony%252BDoerr%252F9781982168438&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCLOUD%252BCUCKOO%252BLAND%252BAnthony%252BDoerr",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982168438&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DCLOUD%2BCUCKOO%2BLAND",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982168438%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCLOUD%2BCUCKOO%2BLAND%2BAnthony%2BDoerr%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/d7de00f6-afc5-58c4-b106-0dcb33c8eed9",
    },
    {
        rank: 11,
        rank_last_week: 5,
        weeks_on_list: 2,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0593300017",
        primary_isbn13: "9780593300015",
        publisher: "Viking",
        description:
            "Tensions escalate around the globe as President Pauline Green works to prevent a world war.",
        price: "0.00",
        title: "NEVER",
        author: "Ken Follett",
        contributor: "by Ken Follett",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780593300015.jpg",
        book_image_width: 329,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0593300017?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0593300017",
                isbn13: "9780593300015",
            },
            {
                isbn10: "0593300025",
                isbn13: "9780593300022",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0593300017?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=NEVER&author=Ken+Follett",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593300015",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FNEVER%252FKen%252BFollett%252F9780593300015&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DNEVER%252BKen%252BFollett",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593300015&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DNEVER",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593300015%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DNEVER%2BKen%2BFollett%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/ef814132-fa9e-52ff-94b5-85c4958521f1",
    },
    {
        rank: 12,
        rank_last_week: 10,
        weeks_on_list: 16,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1982173610",
        primary_isbn13: "9781982173616",
        publisher: "Scribner",
        description:
            "A killer for hire who only takes out bad guys seeks redemption as he does one final job.",
        price: "0.00",
        title: "BILLY SUMMERS",
        author: "Stephen King",
        contributor: "by Stephen King",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781982173616.jpg",
        book_image_width: 327,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "1982173610",
                isbn13: "9781982173616",
            },
            {
                isbn10: "1982173637",
                isbn13: "9781982173630",
            },
            {
                isbn10: "179712269X",
                isbn13: "9781797122694",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BILLY+SUMMERS&author=Stephen+King",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982173616",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBILLY%252BSUMMERS%252FStephen%252BKing%252F9781982173616&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBILLY%252BSUMMERS%252BStephen%252BKing",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982173616&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBILLY%2BSUMMERS",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982173616%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBILLY%2BSUMMERS%2BStephen%2BKing%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/718759e4-3da8-561f-bd45-c0b5e1769e06",
    },
    {
        rank: 13,
        rank_last_week: 0,
        weeks_on_list: 1,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0593188160",
        primary_isbn13: "9780593188163",
        publisher: "Putnam",
        description:
            "The 21st book in the Jack Ryan series. A shadowy billionaire plans to kidnap the first lady to get President Jack Ryan out of his way.",
        price: "0.00",
        title: "TOM CLANCY: CHAIN OF COMMAND",
        author: "Marc Cameron",
        contributor: "by Marc Cameron",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780593188163.jpg",
        book_image_width: 329,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0593188160?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0593188160",
                isbn13: "9780593188163",
            },
            {
                isbn10: "0593188187",
                isbn13: "9780593188187",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0593188160?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=TOM+CLANCY%3A+CHAIN+OF+COMMAND&author=Marc+Cameron",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593188163",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTOM%252BCLANCY%25253A%252BCHAIN%252BOF%252BCOMMAND%252FMarc%252BCameron%252F9780593188163&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTOM%252BCLANCY%25253A%252BCHAIN%252BOF%252BCOMMAND%252BMarc%252BCameron",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593188163&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTOM%2BCLANCY%253A%2BCHAIN%2BOF%2BCOMMAND",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593188163%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTOM%2BCLANCY%253A%2BCHAIN%2BOF%2BCOMMAND%2BMarc%2BCameron%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/f98e5f69-9cb7-5ce9-82cf-044adea05a76",
    },
    {
        rank: 14,
        rank_last_week: 12,
        weeks_on_list: 50,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0525559477",
        primary_isbn13: "9780525559474",
        publisher: "Viking",
        description:
            "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
        price: "0.00",
        title: "THE MIDNIGHT LIBRARY",
        author: "Matt Haig",
        contributor: "by Matt Haig",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "0525559477",
                isbn13: "9780525559474",
            },
            {
                isbn10: "0525559485",
                isbn13: "9780525559481",
            },
            {
                isbn10: "0655697071",
                isbn13: "9780655697077",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+MIDNIGHT+LIBRARY&author=Matt+Haig",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780525559474",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BMIDNIGHT%252BLIBRARY%252FMatt%252BHaig%252F9780525559474&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BMIDNIGHT%252BLIBRARY%252BMatt%252BHaig",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780525559474&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BMIDNIGHT%2BLIBRARY",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780525559474%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BMIDNIGHT%2BLIBRARY%2BMatt%2BHaig%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/60d0ee2d-3d05-50c9-a484-050d17a2308e",
    },
    {
        rank: 15,
        rank_last_week: 13,
        weeks_on_list: 29,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1501171348",
        primary_isbn13: "9781501171345",
        publisher: "Simon & Schuster",
        description:
            "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
        price: "0.00",
        title: "THE LAST THING HE TOLD ME",
        author: "Laura Dave",
        contributor: "by Laura Dave",
        contributor_note: "",
        book_image:
            "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
        book_image_width: 331,
        book_image_height: 500,
        amazon_product_url:
            "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
            {
                isbn10: "1501171348",
                isbn13: "9781501171345",
            },
            {
                isbn10: "1501171364",
                isbn13: "9781501171369",
            },
            {
                isbn10: "1797124749",
                isbn13: "9781797124742",
            },
            {
                isbn10: "1638080992",
                isbn13: "9781638080992",
            },
        ],
        buy_links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
            },
            {
                name: "Apple Books",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LAST+THING+HE+TOLD+ME&author=Laura+Dave",
            },
            {
                name: "Barnes and Noble",
                url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501171345",
            },
            {
                name: "Books-A-Million",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252FLaura%252BDave%252F9781501171345&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLAST%252BTHING%252BHE%252BTOLD%252BME%252BLaura%252BDave",
            },
            {
                name: "Bookshop",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501171345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME",
            },
            {
                name: "IndieBound",
                url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501171345%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLAST%2BTHING%2BHE%2BTOLD%2BME%2BLaura%2BDave%26aff%3DNYT",
            },
        ],
        book_uri: "nyt://book/b38ae769-e873-5272-bb5a-c58a35162db1",
    },
];
