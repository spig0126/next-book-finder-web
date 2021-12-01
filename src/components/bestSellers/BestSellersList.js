import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Text, Center, Select } from "@chakra-ui/react";

import useFetchBestSellerData from "../../library/useFetchBestSellerData";

export default function BestSellersList() {
    const { setBestSellerQuery, bestSellerData, isLoading, isError } = useFetchBestSellerData();

    const selectList = (e) => {
        setBestSellerQuery(e.target.value);
    }
    
    return (
        <Flex>
            <Flex flexDir="column" w="30%" p="5rem 3rem">
                <Text as="i" fontSize="6xl">Discover</Text>
                <Text fontSize="4xl">New Books</Text>
                <Select name="listType" onChange={selectList} required={true} variant="flushed">
                    <option value="hardcover-fiction" selected>Fiction</option>
                    <option value="ardcover-nonFiction">Nonfiction</option>
                    <option value="advice-how-to-and-miscellaneous">Advice, How-To & Miscellaneous</option>
                    <option value="business">Business</option>
                </Select>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}

const Test = [
    {
        "list_id": 704,
        "list_name": "Combined Print and E-Book Fiction",
        "list_name_encoded": "combined-print-and-e-book-fiction",
        "display_name": "Combined Print & E-Book Fiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "David Baldacci",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by David Baldacci",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "The fourth book in the Atlee Pine series. Atlee discovers her twin sister survived an abduction at the age of 6.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "153871969X",
                "primary_isbn13": "9781538719695",
                "book_uri": "nyt://book/c6399a82-3dda-5938-9e03-6f5aa91ed539",
                "publisher": "Grand Central",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MERCY",
                "updated_date": "2021-11-24 23:24:49",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MERCY&author=David+Baldacci"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538719695"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMERCY%252FDavid%252BBaldacci%252F9781538719695&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMERCY%252BDavid%252BBaldacci"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538719695&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMERCY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538719695%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMERCY%2BDavid%2BBaldacci%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "John Grisham",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by John Grisham",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0385546025",
                "primary_isbn13": "9780385546027",
                "book_uri": "nyt://book/8b6146c8-a02e-5f1a-beb8-aaa91fcdbc6a",
                "publisher": "Doubleday",
                "rank": 2,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "THE JUDGE'S LIST",
                "updated_date": "2021-11-24 23:24:49",
                "weeks_on_list": 5,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+JUDGE%27S+LIST&author=John+Grisham"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385546027"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BJUDGE%252527S%252BLIST%252FJohn%252BGrisham%252F9780385546027&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BJUDGE%252527S%252BLIST%252BJohn%252BGrisham"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385546027&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BJUDGE%2527S%2BLIST"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385546027%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BJUDGE%2527S%2BLIST%2BJohn%2BGrisham%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0316485640?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Michael Connelly",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316485647.jpg",
                "book_image_width": 322,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Michael Connelly",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "A death on New Year’s Eve, an unsolved murder and a hunt for serial rapists bring Bosch and Ballard back together.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0316485640",
                "primary_isbn13": "9780316485647",
                "book_uri": "nyt://book/32bfcd57-19ea-5fd9-8e65-63b2f46d6eef",
                "publisher": "Little, Brown",
                "rank": 3,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "THE DARK HOURS",
                "updated_date": "2021-11-24 23:24:49",
                "weeks_on_list": 2,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0316485640?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+DARK+HOURS&author=Michael+Connelly"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316485647"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BDARK%252BHOURS%252FMichael%252BConnelly%252F9780316485647&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BDARK%252BHOURS%252BMichael%252BConnelly"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316485647&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BDARK%2BHOURS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316485647%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BDARK%2BHOURS%2BMichael%2BConnelly%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Mitch Albom",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062888341.jpg",
                "book_image_width": 345,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Mitch Albom",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "006288834X",
                "primary_isbn13": "9780062888341",
                "book_uri": "nyt://book/bd831017-3ff8-51b6-bbb5-0e4b7d43f62d",
                "publisher": "Harper",
                "rank": 4,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "THE STRANGER IN THE LIFEBOAT",
                "updated_date": "2021-11-24 23:24:49",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+STRANGER+IN+THE+LIFEBOAT&author=Mitch+Albom"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062888341"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252FMitch%252BAlbom%252F9780062888341&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252BMitch%252BAlbom"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062888341&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062888341%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT%2BMitch%2BAlbom%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Amor Towles",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Amor Towles",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0735222355",
                "primary_isbn13": "9780735222359",
                "book_uri": "nyt://book/43839b1f-c8cc-5ef4-8893-bd85582906a4",
                "publisher": "Viking",
                "rank": 5,
                "rank_last_week": 8,
                "sunday_review_link": "",
                "title": "THE LINCOLN HIGHWAY",
                "updated_date": "2021-11-24 23:24:49",
                "weeks_on_list": 7,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LINCOLN+HIGHWAY&author=Amor+Towles"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735222359"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLINCOLN%252BHIGHWAY%252FAmor%252BTowles%252F9780735222359&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLINCOLN%252BHIGHWAY%252BAmor%252BTowles"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735222359&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLINCOLN%2BHIGHWAY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735222359%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLINCOLN%2BHIGHWAY%2BAmor%2BTowles%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 708,
        "list_name": "Combined Print and E-Book Nonfiction",
        "list_name_encoded": "combined-print-and-e-book-nonfiction",
        "display_name": "Combined Print & E-Book Nonfiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "edited  Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593230572.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "edited by Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "contributor_note": "edited by Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "created_date": "2021-11-24 23:20:27",
                "description": "Viewing America’s entanglement with slavery and its legacy, in essays adapted and expanded from The New York Times Magazine.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593230574",
                "primary_isbn13": "9780593230572",
                "book_uri": "nyt://book/a38e3654-a631-555f-92be-bb380296e141",
                "publisher": "One World",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE 1619 PROJECT",
                "updated_date": "2021-11-24 23:24:50",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+1619+PROJECT&author=edited++Nikole+Hannah-Jones%2C+Caitlin+Roper%2C+Ilena+Silverman+and+Jake+Silverstein"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593230572"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252B1619%252BPROJECT%252Fedited%252B%252BNikole%252BHannah-Jones%25252C%252BCaitlin%252BRoper%25252C%252BIlena%252BSilverman%252Band%252BJake%252BSilverstein%252F9780593230572&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252B1619%252BPROJECT%252Bedited%252B%252BNikole%252BHannah-Jones%25252C%252BCaitlin%252BRoper%25252C%252BIlena%252BSilverman%252Band%252BJake%252BSilverstein"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593230572&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2B1619%2BPROJECT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593230572%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2B1619%2BPROJECT%2Bedited%2B%2BNikole%2BHannah-Jones%252C%2BCaitlin%2BRoper%252C%2BIlena%2BSilverman%2Band%2BJake%2BSilverstein%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063046644?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Rachel Campos-Duffy and Sean Duffy",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063046641.jpg",
                "book_image_width": 384,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Rachel Campos-Duffy and Sean Duffy",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:27",
                "description": "A collection of holiday memories from members of the staff of Fox News.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063046644",
                "primary_isbn13": "9780063046641",
                "book_uri": "nyt://book/4a1e0398-3667-54c5-b364-04e287829c05",
                "publisher": "Broadside",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "ALL AMERICAN CHRISTMAS",
                "updated_date": "2021-11-24 23:24:50",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063046644?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ALL+AMERICAN+CHRISTMAS&author=Rachel+Campos-Duffy+and+Sean+Duffy"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063046641"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FALL%252BAMERICAN%252BCHRISTMAS%252FRachel%252BCampos-Duffy%252Band%252BSean%252BDuffy%252F9780063046641&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DALL%252BAMERICAN%252BCHRISTMAS%252BRachel%252BCampos-Duffy%252Band%252BSean%252BDuffy"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063046641&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DALL%2BAMERICAN%2BCHRISTMAS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063046641%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DALL%2BAMERICAN%2BCHRISTMAS%2BRachel%2BCampos-Duffy%2Band%2BSean%2BDuffy%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/059318632X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Jonathan Karl",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593186329.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Jonathan Karl",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:27",
                "description": "The ABC News' chief Washington correspondent gives an account of the end of the Trump presidency.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "059318632X",
                "primary_isbn13": "9780593186329",
                "book_uri": "nyt://book/14a271cf-ba0a-5d14-b8c3-6277b6cbcac9",
                "publisher": "Dutton",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "BETRAYAL",
                "updated_date": "2021-11-24 23:24:50",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/059318632X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BETRAYAL&author=Jonathan+Karl"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593186329"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBETRAYAL%252FJonathan%252BKarl%252F9780593186329&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBETRAYAL%252BJonathan%252BKarl"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593186329&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBETRAYAL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593186329%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBETRAYAL%2BJonathan%2BKarl%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Will Smith with Mark Manson",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984877925.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Will Smith with Mark Manson",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:27",
                "description": "The actor, producer and musician tells his life story and lessons he learned along the way.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1984877925",
                "primary_isbn13": "9781984877925",
                "book_uri": "nyt://book/6c073ae4-fafc-5a46-ab24-d2d69d903ea7",
                "publisher": "Penguin Press",
                "rank": 4,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "WILL",
                "updated_date": "2021-11-24 23:24:50",
                "weeks_on_list": 2,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=WILL&author=Will+Smith+with+Mark+Manson"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984877925"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWILL%252FWill%252BSmith%252Bwith%252BMark%252BManson%252F9781984877925&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWILL%252BWill%252BSmith%252Bwith%252BMark%252BManson"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984877925&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DWILL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984877925%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWILL%2BWill%2BSmith%2Bwith%2BMark%2BManson%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1510766804?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Robert F. Kennedy Jr",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781510766808.jpg",
                "book_image_width": 334,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Robert F. Kennedy Jr",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:27",
                "description": "The anti-vaccine advocate gives his take on the chief medical advisor to the president.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1510766804",
                "primary_isbn13": "9781510766808",
                "book_uri": "nyt://book/550f8b62-0468-502b-a386-32509856b072",
                "publisher": "Skyhorse",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE REAL ANTHONY FAUCI",
                "updated_date": "2021-11-24 23:24:50",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1510766804?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+REAL+ANTHONY+FAUCI&author=Robert+F.+Kennedy+Jr"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781510766808"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BREAL%252BANTHONY%252BFAUCI%252FRobert%252BF.%252BKennedy%252BJr%252F9781510766808&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BREAL%252BANTHONY%252BFAUCI%252BRobert%252BF.%252BKennedy%252BJr"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781510766808&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BREAL%2BANTHONY%2BFAUCI"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781510766808%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BREAL%2BANTHONY%2BFAUCI%2BRobert%2BF.%2BKennedy%2BJr%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 1,
        "list_name": "Hardcover Fiction",
        "list_name_encoded": "hardcover-fiction",
        "display_name": "Hardcover Fiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "John Grisham",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by John Grisham",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:20",
                "description": "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0385546025",
                "primary_isbn13": "9780385546027",
                "book_uri": "nyt://book/8b6146c8-a02e-5f1a-beb8-aaa91fcdbc6a",
                "publisher": "Doubleday",
                "rank": 1,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "THE JUDGE'S LIST",
                "updated_date": "2021-11-24 23:24:43",
                "weeks_on_list": 5,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+JUDGE%27S+LIST&author=John+Grisham"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385546027"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BJUDGE%252527S%252BLIST%252FJohn%252BGrisham%252F9780385546027&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BJUDGE%252527S%252BLIST%252BJohn%252BGrisham"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385546027&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BJUDGE%2527S%2BLIST"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385546027%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BJUDGE%2527S%2BLIST%2BJohn%2BGrisham%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "David Baldacci",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538719725.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by David Baldacci",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:20",
                "description": "The fourth book in the Atlee Pine series. Atlee discovers her twin sister survived an abduction at the age of 6.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "153871972X",
                "primary_isbn13": "9781538719725",
                "book_uri": "nyt://book/245294a1-f507-5ab7-ac39-4f03b01ce601",
                "publisher": "Grand Central",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MERCY",
                "updated_date": "2021-11-24 23:24:43",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/153871972X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MERCY&author=David+Baldacci"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538719725"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMERCY%252FDavid%252BBaldacci%252F9781538719725&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMERCY%252BDavid%252BBaldacci"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538719725&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMERCY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538719725%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMERCY%2BDavid%2BBaldacci%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Mitch Albom",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062888341.jpg",
                "book_image_width": 345,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Mitch Albom",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:20",
                "description": "After a ship explodes, 10 people struggling to survive pull a man who claims to be the Lord out of the sea.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "006288834X",
                "primary_isbn13": "9780062888341",
                "book_uri": "nyt://book/bd831017-3ff8-51b6-bbb5-0e4b7d43f62d",
                "publisher": "Harper",
                "rank": 3,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "THE STRANGER IN THE LIFEBOAT",
                "updated_date": "2021-11-24 23:24:43",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/006288834X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+STRANGER+IN+THE+LIFEBOAT&author=Mitch+Albom"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062888341"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252FMitch%252BAlbom%252F9780062888341&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSTRANGER%252BIN%252BTHE%252BLIFEBOAT%252BMitch%252BAlbom"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062888341&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062888341%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSTRANGER%2BIN%2BTHE%2BLIFEBOAT%2BMitch%2BAlbom%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1538728621?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Nicholas Sparks",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538728628.jpg",
                "book_image_width": 330,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Nicholas Sparks",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:20",
                "description": "Maggie Dawes, a renowned travel photographer, struggles with a medical diagnosis over Christmas.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1538728621",
                "primary_isbn13": "9781538728628",
                "book_uri": "nyt://book/28cad580-eb4e-512f-a790-9fd5eddd45d4",
                "publisher": "Grand Central",
                "rank": 4,
                "rank_last_week": 4,
                "sunday_review_link": "",
                "title": "THE WISH",
                "updated_date": "2021-11-24 23:24:43",
                "weeks_on_list": 8,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1538728621?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+WISH&author=Nicholas+Sparks"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538728628"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BWISH%252FNicholas%252BSparks%252F9781538728628&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BWISH%252BNicholas%252BSparks"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538728628&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BWISH"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538728628%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BWISH%2BNicholas%2BSparks%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Amor Towles",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Amor Towles",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:20",
                "description": "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0735222355",
                "primary_isbn13": "9780735222359",
                "book_uri": "nyt://book/43839b1f-c8cc-5ef4-8893-bd85582906a4",
                "publisher": "Viking",
                "rank": 5,
                "rank_last_week": 8,
                "sunday_review_link": "",
                "title": "THE LINCOLN HIGHWAY",
                "updated_date": "2021-11-24 23:24:43",
                "weeks_on_list": 7,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LINCOLN+HIGHWAY&author=Amor+Towles"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735222359"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLINCOLN%252BHIGHWAY%252FAmor%252BTowles%252F9780735222359&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLINCOLN%252BHIGHWAY%252BAmor%252BTowles"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735222359&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLINCOLN%2BHIGHWAY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735222359%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLINCOLN%2BHIGHWAY%2BAmor%2BTowles%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 2,
        "list_name": "Hardcover Nonfiction",
        "list_name_encoded": "hardcover-nonfiction",
        "display_name": "Hardcover Nonfiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "edited  Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593230572.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "edited by Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "contributor_note": "edited by Nikole Hannah-Jones, Caitlin Roper, Ilena Silverman and Jake Silverstein",
                "created_date": "2021-11-24 23:20:23",
                "description": "Viewing America’s entanglement with slavery and its legacy, in essays adapted and expanded from The New York Times Magazine.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593230574",
                "primary_isbn13": "9780593230572",
                "book_uri": "nyt://book/a38e3654-a631-555f-92be-bb380296e141",
                "publisher": "One World",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE 1619 PROJECT",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593230574?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+1619+PROJECT&author=edited++Nikole+Hannah-Jones%2C+Caitlin+Roper%2C+Ilena+Silverman+and+Jake+Silverstein"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593230572"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252B1619%252BPROJECT%252Fedited%252B%252BNikole%252BHannah-Jones%25252C%252BCaitlin%252BRoper%25252C%252BIlena%252BSilverman%252Band%252BJake%252BSilverstein%252F9780593230572&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252B1619%252BPROJECT%252Bedited%252B%252BNikole%252BHannah-Jones%25252C%252BCaitlin%252BRoper%25252C%252BIlena%252BSilverman%252Band%252BJake%252BSilverstein"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593230572&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2B1619%2BPROJECT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593230572%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2B1619%2BPROJECT%2Bedited%2B%2BNikole%2BHannah-Jones%252C%2BCaitlin%2BRoper%252C%2BIlena%2BSilverman%2Band%2BJake%2BSilverstein%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063046644?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Rachel Campos-Duffy and Sean Duffy",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063046641.jpg",
                "book_image_width": 384,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Rachel Campos-Duffy and Sean Duffy",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "A collection of holiday memories from members of the staff of Fox News.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063046644",
                "primary_isbn13": "9780063046641",
                "book_uri": "nyt://book/4a1e0398-3667-54c5-b364-04e287829c05",
                "publisher": "Broadside",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "ALL AMERICAN CHRISTMAS",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063046644?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ALL+AMERICAN+CHRISTMAS&author=Rachel+Campos-Duffy+and+Sean+Duffy"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063046641"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FALL%252BAMERICAN%252BCHRISTMAS%252FRachel%252BCampos-Duffy%252Band%252BSean%252BDuffy%252F9780063046641&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DALL%252BAMERICAN%252BCHRISTMAS%252BRachel%252BCampos-Duffy%252Band%252BSean%252BDuffy"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063046641&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DALL%2BAMERICAN%2BCHRISTMAS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063046641%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DALL%2BAMERICAN%2BCHRISTMAS%2BRachel%2BCampos-Duffy%2Band%2BSean%2BDuffy%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Will Smith with Mark Manson",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984877925.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Will Smith with Mark Manson",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "The actor, producer and musician tells his life story and lessons he learned along the way.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1984877925",
                "primary_isbn13": "9781984877925",
                "book_uri": "nyt://book/6c073ae4-fafc-5a46-ab24-d2d69d903ea7",
                "publisher": "Penguin Press",
                "rank": 3,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "WILL",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 2,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1984877925?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=WILL&author=Will+Smith+with+Mark+Manson"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984877925"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWILL%252FWill%252BSmith%252Bwith%252BMark%252BManson%252F9781984877925&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWILL%252BWill%252BSmith%252Bwith%252BMark%252BManson"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984877925&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DWILL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984877925%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWILL%2BWill%2BSmith%2Bwith%2BMark%2BManson%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/059318632X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Jonathan Karl",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593186329.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Jonathan Karl",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "The ABC News' chief Washington correspondent gives an account of the end of the Trump presidency.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "059318632X",
                "primary_isbn13": "9780593186329",
                "book_uri": "nyt://book/14a271cf-ba0a-5d14-b8c3-6277b6cbcac9",
                "publisher": "Dutton",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "BETRAYAL",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/059318632X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BETRAYAL&author=Jonathan+Karl"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593186329"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBETRAYAL%252FJonathan%252BKarl%252F9780593186329&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBETRAYAL%252BJonathan%252BKarl"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593186329&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBETRAYAL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593186329%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBETRAYAL%2BJonathan%2BKarl%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/163149256X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Paul McCartney",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781631492563.jpg",
                "book_image_width": 500,
                "book_image_height": 333,
                "book_review_link": "",
                "contributor": "by Paul McCartney",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "A two-volume celebration of 154 songs, with handwritten texts, paintings and photographs from the songwriter’s archives.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "163149256X",
                "primary_isbn13": "9781631492563",
                "book_uri": "nyt://book/3ab1af80-0bb8-5d72-98fe-f7a7642e2de5",
                "publisher": "Liveright",
                "rank": 5,
                "rank_last_week": 5,
                "sunday_review_link": "",
                "title": "THE LYRICS: 1956 TO THE PRESENT",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/163149256X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LYRICS%3A+1956+TO+THE+PRESENT&author=Paul+McCartney"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781631492563"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLYRICS%25253A%252B1956%252BTO%252BTHE%252BPRESENT%252FPaul%252BMcCartney%252F9781631492563&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLYRICS%25253A%252B1956%252BTO%252BTHE%252BPRESENT%252BPaul%252BMcCartney"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781631492563&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLYRICS%253A%2B1956%2BTO%2BTHE%2BPRESENT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781631492563%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLYRICS%253A%2B1956%2BTO%2BTHE%2BPRESENT%2BPaul%2BMcCartney%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 17,
        "list_name": "Trade Fiction Paperback",
        "list_name_encoded": "trade-fiction-paperback",
        "display_name": "Paperback Trade Fiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Colleen Hoover",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
                "book_image_width": 319,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Colleen Hoover",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1501110365",
                "primary_isbn13": "9781501110368",
                "book_uri": "nyt://book/e2a3545e-e9cb-5828-9d97-50a798a0e4f6",
                "publisher": "Atria",
                "rank": 1,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "IT ENDS WITH US",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 29,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=IT+ENDS+WITH+US&author=Colleen+Hoover"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501110368"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781501110368&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DIT%2BENDS%2BWITH%2BUS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501110368%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Taylor Jenkins Reid",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781501161933.jpg",
                "book_image_width": 315,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Taylor Jenkins Reid",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "A movie icon recounts stories of her loves and career to a struggling magazine writer.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1501161938",
                "primary_isbn13": "9781501161933",
                "book_uri": "nyt://book/d9511fac-ee44-5a87-9af7-2cd6a6f8f984",
                "publisher": "Washington Square/Atria",
                "rank": 2,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "THE SEVEN HUSBANDS OF EVELYN HUGO",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 37,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1501161938?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+SEVEN+HUSBANDS+OF+EVELYN+HUGO&author=Taylor+Jenkins+Reid"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501161933"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252FTaylor%252BJenkins%252BReid%252F9781501161933&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSEVEN%252BHUSBANDS%252BOF%252BEVELYN%252BHUGO%252BTaylor%252BJenkins%252BReid"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501161933&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501161933%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSEVEN%2BHUSBANDS%2BOF%2BEVELYN%2BHUGO%2BTaylor%2BJenkins%2BReid%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/The-Song-Achilles-A-Novel/dp/0062060627?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Madeline Miller",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062060624.jpg",
                "book_image_width": 128,
                "book_image_height": 193,
                "book_review_link": "https://www.nytimes.com/2012/04/29/books/review/the-song-of-achilles-by-madeline-miller.html",
                "contributor": "by Madeline Miller",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "A reimagining of Homer’s “Iliad” that is narrated by Achilles' companion Patroclus.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062060627",
                "primary_isbn13": "9780062060624",
                "book_uri": "nyt://book/5404511a-729b-542b-9315-5ef827b7850e",
                "publisher": "Ecco",
                "rank": 3,
                "rank_last_week": 3,
                "sunday_review_link": "https://www.nytimes.com/2012/04/29/books/review/the-song-of-achilles-by-madeline-miller.html",
                "title": "THE SONG OF ACHILLES",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 57,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/The-Song-Achilles-A-Novel/dp/0062060627?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+SONG+OF+ACHILLES&author=Madeline+Miller"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062060624"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSONG%252BOF%252BACHILLES%252FMadeline%252BMiller%252F9780062060624&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSONG%252BOF%252BACHILLES%252BMadeline%252BMiller"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062060624&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSONG%2BOF%2BACHILLES"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062060624%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSONG%2BOF%2BACHILLES%2BMadeline%2BMiller%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593336828?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Ali Hazelwood",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593336823.jpg",
                "book_image_width": 333,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Ali Hazelwood",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "A young professor agrees to pretend to be a third-year Ph.D. candidate’s boyfriend.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593336828",
                "primary_isbn13": "9780593336823",
                "book_uri": "nyt://book/8dcf02f0-c291-571b-ad6b-413b5279252b",
                "publisher": "Berkley",
                "rank": 4,
                "rank_last_week": 4,
                "sunday_review_link": "",
                "title": "THE LOVE HYPOTHESIS",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 9,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593336828?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LOVE+HYPOTHESIS&author=Ali+Hazelwood"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593336823"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BHYPOTHESIS%252FAli%252BHazelwood%252F9780593336823&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BHYPOTHESIS%252BAli%252BHazelwood"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593336823&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLOVE%2BHYPOTHESIS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593336823%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BHYPOTHESIS%2BAli%2BHazelwood%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Delia Owens",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Delia Owens",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:23",
                "description": "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0735219109",
                "primary_isbn13": "9780735219106",
                "book_uri": "nyt://book/08a5730d-43e5-586d-8ce6-4b891eb75fe1",
                "publisher": "Putnam",
                "rank": 5,
                "rank_last_week": 5,
                "sunday_review_link": "",
                "title": "WHERE THE CRAWDADS SING",
                "updated_date": "2021-11-24 23:24:46",
                "weeks_on_list": 34,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219095?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=WHERE+THE+CRAWDADS+SING&author=Delia+Owens"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735219106"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWHERE%252BTHE%252BCRAWDADS%252BSING%252FDelia%252BOwens%252F9780735219106&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWHERE%252BTHE%252BCRAWDADS%252BSING%252BDelia%252BOwens"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735219106&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DWHERE%2BTHE%2BCRAWDADS%2BSING"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735219106%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWHERE%2BTHE%2BCRAWDADS%2BSING%2BDelia%2BOwens%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 4,
        "list_name": "Paperback Nonfiction",
        "list_name_encoded": "paperback-nonfiction",
        "display_name": "Paperback Nonfiction",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Bessel van der Kolk",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",
                "book_image_width": 128,
                "book_image_height": 193,
                "book_review_link": "https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",
                "contributor": "by Bessel van der Kolk",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:25",
                "description": "How trauma affects the body and mind, and innovative treatments for recovery.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0143127748",
                "primary_isbn13": "9780143127741",
                "book_uri": "nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e",
                "publisher": "Penguin",
                "rank": 1,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "THE BODY KEEPS THE SCORE",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 161,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+BODY+KEEPS+THE+SCORE&author=Bessel+van+der+Kolk"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063159988?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Sara G. Forden",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063159983.jpg",
                "book_image_width": 332,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Sara G. Forden",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:25",
                "description": "An account of the murder of Maurizio Gucci in 1995; the basis of the film.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063159988",
                "primary_isbn13": "9780063159983",
                "book_uri": "nyt://book/79d4a460-e030-514f-ab97-4613e2809954",
                "publisher": "Custom House",
                "rank": 2,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "THE HOUSE OF GUCCI",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 4,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063159988?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+HOUSE+OF+GUCCI&author=Sara+G.+Forden"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063159983"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BHOUSE%252BOF%252BGUCCI%252FSara%252BG.%252BForden%252F9780063159983&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BHOUSE%252BOF%252BGUCCI%252BSara%252BG.%252BForden"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063159983&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BHOUSE%2BOF%2BGUCCI"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063159983%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BHOUSE%2BOF%2BGUCCI%2BSara%2BG.%2BForden%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Robin Wall Kimmerer",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781571313560.jpg",
                "book_image_width": 321,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Robin Wall Kimmerer",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:25",
                "description": "A botanist and member of the Citizen Potawatomi Nation espouses having an understanding and appreciation of plants and animals.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1571313567",
                "primary_isbn13": "9781571313560",
                "book_uri": "nyt://book/194ea111-42ad-5795-9fb5-3e155ffa5e79",
                "publisher": "Milkweed Editions",
                "rank": 3,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "BRAIDING SWEETGRASS",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 84,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BRAIDING+SWEETGRASS&author=Robin+Wall+Kimmerer"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781571313560"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBRAIDING%252BSWEETGRASS%252FRobin%252BWall%252BKimmerer%252F9781571313560&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBRAIDING%252BSWEETGRASS%252BRobin%252BWall%252BKimmerer"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781571313560&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBRAIDING%2BSWEETGRASS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781571313560%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBRAIDING%2BSWEETGRASS%2BRobin%2BWall%2BKimmerer%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Sapiens-A-Brief-History-Humankind-ebook/dp/B00ICN066A?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Yuval Noah Harari",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062316097.jpg",
                "book_image_width": 128,
                "book_image_height": 192,
                "book_review_link": "",
                "contributor": "by Yuval Noah Harari",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:25",
                "description": "How Homo sapiens became Earth’s dominant species.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062316117",
                "primary_isbn13": "9780062316110",
                "book_uri": "nyt://book/8396e181-cd69-5074-a009-ec8f051c54f2",
                "publisher": "Harper Perennial",
                "rank": 4,
                "rank_last_week": 5,
                "sunday_review_link": "",
                "title": "SAPIENS",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 171,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Sapiens-A-Brief-History-Humankind-ebook/dp/B00ICN066A?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=SAPIENS&author=Yuval+Noah+Harari"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062316110"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSAPIENS%252FYuval%252BNoah%252BHarari%252F9780062316110&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSAPIENS%252BYuval%252BNoah%252BHarari"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062316110&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DSAPIENS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062316110%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSAPIENS%2BYuval%2BNoah%2BHarari%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Malcolm Gladwell",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316478526.jpg",
                "book_image_width": 330,
                "book_image_height": 491,
                "book_review_link": "https://www.nytimes.com/2019/09/04/books/review-talking-to-strangers-malcolm-gladwell.html",
                "contributor": "by Malcolm Gladwell",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:25",
                "description": "Famous examples of miscommunication serve as the backdrop to explain potential conflicts and misunderstandings.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0316299227",
                "primary_isbn13": "9780316299220",
                "book_uri": "nyt://book/8f9a9575-8d7e-5e74-935c-56865f8addbf",
                "publisher": "Back Bay",
                "rank": 5,
                "rank_last_week": 4,
                "sunday_review_link": "",
                "title": "TALKING TO STRANGERS",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 8,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Talking-Strangers-Should-about-People/dp/0316478520?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=TALKING+TO+STRANGERS&author=Malcolm+Gladwell"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316299220"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTALKING%252BTO%252BSTRANGERS%252FMalcolm%252BGladwell%252F9780316299220&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTALKING%252BTO%252BSTRANGERS%252BMalcolm%252BGladwell"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316299220&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTALKING%2BTO%2BSTRANGERS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316299220%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTALKING%2BTO%2BSTRANGERS%2BMalcolm%2BGladwell%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 24,
        "list_name": "Advice How-To and Miscellaneous",
        "list_name_encoded": "advice-how-to-and-miscellaneous",
        "display_name": "Advice, How-To & Miscellaneous",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0062962760?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Ree Drummond",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062962768.jpg",
                "book_image_width": 395,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Ree Drummond",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:24",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062962760",
                "primary_isbn13": "9780062962768",
                "book_uri": "nyt://book/951db0c2-2a54-52f2-a14b-cf2b2086e370",
                "publisher": "Morrow",
                "rank": 1,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "THE PIONEER WOMAN COOKS--SUPER EASY!",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 5,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0062962760?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+PIONEER+WOMAN+COOKS--SUPER+EASY%21&author=Ree+Drummond"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062962768"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BPIONEER%252BWOMAN%252BCOOKS--SUPER%252BEASY%252521%252FRee%252BDrummond%252F9780062962768&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BPIONEER%252BWOMAN%252BCOOKS--SUPER%252BEASY%252521%252BRee%252BDrummond"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062962768&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BPIONEER%2BWOMAN%2BCOOKS--SUPER%2BEASY%2521"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062962768%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BPIONEER%2BWOMAN%2BCOOKS--SUPER%2BEASY%2521%2BRee%2BDrummond%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Boy-Mole-Fox-Horse/dp/0062976583?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Charlie Mackesy",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062976581.jpg",
                "book_image_width": 330,
                "book_image_height": 445,
                "book_review_link": "",
                "contributor": "by Charlie Mackesy",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:24",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062976583",
                "primary_isbn13": "9780062976581",
                "book_uri": "nyt://book/858fb0b9-07d7-5b8a-b3de-cdcf6ea6fe7a",
                "publisher": "HarperOne",
                "rank": 2,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "THE BOY, THE MOLE, THE FOX AND THE HORSE",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 103,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Boy-Mole-Fox-Horse/dp/0062976583?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+BOY%2C+THE+MOLE%2C+THE+FOX+AND+THE+HORSE&author=Charlie+Mackesy"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062976581"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBOY%25252C%252BTHE%252BMOLE%25252C%252BTHE%252BFOX%252BAND%252BTHE%252BHORSE%252FCharlie%252BMackesy%252F9780062976581&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBOY%25252C%252BTHE%252BMOLE%25252C%252BTHE%252BFOX%252BAND%252BTHE%252BHORSE%252BCharlie%252BMackesy"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062976581&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BBOY%252C%2BTHE%2BMOLE%252C%2BTHE%2BFOX%2BAND%2BTHE%2BHORSE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062976581%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBOY%252C%2BTHE%2BMOLE%252C%2BTHE%2BFOX%2BAND%2BTHE%2BHORSE%2BCharlie%2BMackesy%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "James Clear",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by James Clear",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:24",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0735211299",
                "primary_isbn13": "9780735211292",
                "book_uri": "nyt://book/0398a355-c032-534e-a0af-647b06f0840d",
                "publisher": "Avery",
                "rank": 3,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "ATOMIC HABITS",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 104,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ATOMIC+HABITS&author=James+Clear"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DATOMIC%2BHABITS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063074958?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Charlie Berens",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063074958.jpg",
                "book_image_width": 400,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Charlie Berens",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:24",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063074958",
                "primary_isbn13": "9780063074958",
                "book_uri": "nyt://book/7b7a912c-1286-52b1-9d20-13257618011f",
                "publisher": "Morrow",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE MIDWEST SURVIVAL GUIDE",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063074958?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+MIDWEST+SURVIVAL+GUIDE&author=Charlie+Berens"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063074958"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BMIDWEST%252BSURVIVAL%252BGUIDE%252FCharlie%252BBerens%252F9780063074958&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BMIDWEST%252BSURVIVAL%252BGUIDE%252BCharlie%252BBerens"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063074958&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BMIDWEST%2BSURVIVAL%2BGUIDE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063074958%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BMIDWEST%2BSURVIVAL%2BGUIDE%2BCharlie%2BBerens%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1501153641?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "John Koenig",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781501153648.jpg",
                "book_image_width": 356,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by John Koenig",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:24",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1501153641",
                "primary_isbn13": "9781501153648",
                "book_uri": "nyt://book/ad853606-4d41-5978-ac3d-e745ca45b946",
                "publisher": "Simon & Schuster",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE DICTIONARY OF OBSCURE SORROWS",
                "updated_date": "2021-11-24 23:24:47",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1501153641?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+DICTIONARY+OF+OBSCURE+SORROWS&author=John+Koenig"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501153648"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BDICTIONARY%252BOF%252BOBSCURE%252BSORROWS%252FJohn%252BKoenig%252F9781501153648&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BDICTIONARY%252BOF%252BOBSCURE%252BSORROWS%252BJohn%252BKoenig"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501153648&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BDICTIONARY%2BOF%2BOBSCURE%2BSORROWS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501153648%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BDICTIONARY%2BOF%2BOBSCURE%2BSORROWS%2BJohn%2BKoenig%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 13,
        "list_name": "Childrens Middle Grade Hardcover",
        "list_name_encoded": "childrens-middle-grade-hardcover",
        "display_name": "Children’s Middle Grade Hardcover",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1338790234?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "J.K. Rowling.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338790238.jpg",
                "book_image_width": 338,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by J.K. Rowling. Illustrated by Jim Field",
                "contributor_note": "Illustrated by Jim Field",
                "created_date": "2021-11-24 23:20:21",
                "description": "When a young boy's favorite toy goes missing, it's Christmas Pig to the rescue!",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338790234",
                "primary_isbn13": "9781338790238",
                "book_uri": "nyt://book/a21bcc85-9d14-57ec-bb71-e01aa07398dd",
                "publisher": "Scholastic",
                "rank": 1,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "THE CHRISTMAS PIG",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 6,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1338790234?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+CHRISTMAS+PIG&author=J.K.+Rowling."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338790238"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCHRISTMAS%252BPIG%252FJ.K.%252BRowling.%252F9781338790238&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCHRISTMAS%252BPIG%252BJ.K.%252BRowling."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338790238&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BCHRISTMAS%2BPIG"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338790238%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCHRISTMAS%2BPIG%2BJ.K.%2BRowling.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "America's Test Kitchen Kids",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781492670025.jpg",
                "book_image_width": 330,
                "book_image_height": 419,
                "book_review_link": "",
                "contributor": "by America's Test Kitchen Kids",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:21",
                "description": "Over 100 kid-tested recipes from America's Test Kitchen.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1492670022",
                "primary_isbn13": "9781492670025",
                "book_uri": "nyt://book/894e62dd-9e61-570a-ad32-6f4617d323e5",
                "publisher": "Sourcebooks Jabberwocky",
                "rank": 2,
                "rank_last_week": 6,
                "sunday_review_link": "",
                "title": "THE COMPLETE COOKBOOK FOR YOUNG CHEFS",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 113,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Complete-Cookbook-Young-Chefs/dp/1492670022?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+COMPLETE+COOKBOOK+FOR+YOUNG+CHEFS&author=America%27s+Test+Kitchen+Kids"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781492670025"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCOMPLETE%252BCOOKBOOK%252BFOR%252BYOUNG%252BCHEFS%252FAmerica%252527s%252BTest%252BKitchen%252BKids%252F9781492670025&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCOMPLETE%252BCOOKBOOK%252BFOR%252BYOUNG%252BCHEFS%252BAmerica%252527s%252BTest%252BKitchen%252BKids"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781492670025&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BCOMPLETE%2BCOOKBOOK%2BFOR%2BYOUNG%2BCHEFS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781492670025%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCOMPLETE%2BCOOKBOOK%2BFOR%2BYOUNG%2BCHEFS%2BAmerica%2527s%2BTest%2BKitchen%2BKids%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Complete-Baking-Book-Young-Chefs/dp/1492677698?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "America's Test Kitchen Kids",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781492677697.jpg",
                "book_image_width": 330,
                "book_image_height": 421,
                "book_review_link": "",
                "contributor": "by America's Test Kitchen Kids",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:21",
                "description": "One hundred plus kid-tested baking recipes.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1492677698",
                "primary_isbn13": "9781492677697",
                "book_uri": "nyt://book/cfc8a4ea-1d7f-521c-81db-e806d80f4468",
                "publisher": "Sourcebooks Explore",
                "rank": 3,
                "rank_last_week": 7,
                "sunday_review_link": "",
                "title": "THE COMPLETE BAKING BOOK FOR YOUNG CHEFS",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 39,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Complete-Baking-Book-Young-Chefs/dp/1492677698?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+COMPLETE+BAKING+BOOK+FOR+YOUNG+CHEFS&author=America%27s+Test+Kitchen+Kids"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781492677697"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BCOMPLETE%252BBAKING%252BBOOK%252BFOR%252BYOUNG%252BCHEFS%252FAmerica%252527s%252BTest%252BKitchen%252BKids%252F9781492677697&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BCOMPLETE%252BBAKING%252BBOOK%252BFOR%252BYOUNG%252BCHEFS%252BAmerica%252527s%252BTest%252BKitchen%252BKids"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781492677697&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BCOMPLETE%2BBAKING%2BBOOK%2BFOR%2BYOUNG%2BCHEFS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781492677697%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BCOMPLETE%2BBAKING%2BBOOK%2BFOR%2BYOUNG%2BCHEFS%2BAmerica%2527s%2BTest%2BKitchen%2BKids%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1368077927?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Rick Riordan",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781368077927.jpg",
                "book_image_width": 337,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Rick Riordan",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "Ana Dakkar faces the weekend trials at the Harding-Pencroft Academy.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1368077927",
                "primary_isbn13": "9781368077927",
                "book_uri": "nyt://book/e3e6bb4a-181c-5644-bb05-3cde519e32e8",
                "publisher": "Disney-Hyperion",
                "rank": 4,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "DAUGHTER OF THE DEEP",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 4,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1368077927?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=DAUGHTER+OF+THE+DEEP&author=Rick+Riordan"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781368077927"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDAUGHTER%252BOF%252BTHE%252BDEEP%252FRick%252BRiordan%252F9781368077927&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDAUGHTER%252BOF%252BTHE%252BDEEP%252BRick%252BRiordan"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781368077927&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DDAUGHTER%2BOF%2BTHE%2BDEEP"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781368077927%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDAUGHTER%2BOF%2BTHE%2BDEEP%2BRick%2BRiordan%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1338285262?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Joanna Farrow",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338285260.jpg",
                "book_image_width": 404,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Joanna Farrow",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "Forty-three tasty recipes inspired by the Harry Potter films.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338285262",
                "primary_isbn13": "9781338285260",
                "book_uri": "nyt://book/88793b2b-5061-58be-bf33-1202ee8c8549",
                "publisher": "Scholastic",
                "rank": 5,
                "rank_last_week": 4,
                "sunday_review_link": "",
                "title": "THE OFFICIAL HARRY POTTER BAKING BOOK",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 14,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1338285262?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+OFFICIAL+HARRY+POTTER+BAKING+BOOK&author=Joanna+Farrow"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338285260"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BOFFICIAL%252BHARRY%252BPOTTER%252BBAKING%252BBOOK%252FJoanna%252BFarrow%252F9781338285260&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BOFFICIAL%252BHARRY%252BPOTTER%252BBAKING%252BBOOK%252BJoanna%252BFarrow"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338285260&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BOFFICIAL%2BHARRY%2BPOTTER%2BBAKING%2BBOOK"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338285260%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BOFFICIAL%2BHARRY%2BPOTTER%2BBAKING%2BBOOK%2BJoanna%2BFarrow%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 7,
        "list_name": "Picture Books",
        "list_name_encoded": "picture-books",
        "display_name": "Children’s Picture Books",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593307356?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Nikole Hannah-Jones and Renée Watson.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593307359.jpg",
                "book_image_width": 500,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Nikole Hannah-Jones and Renée Watson. Illustrated by Nikkolas Smith",
                "contributor_note": "Illustrated by Nikkolas Smith",
                "created_date": "2021-11-24 23:20:25",
                "description": "A young Black girl traces her ancestry for a school assignment.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593307356",
                "primary_isbn13": "9780593307359",
                "book_uri": "nyt://book/929f43db-6f7c-5d8f-82fa-abd9bb658dd6",
                "publisher": "Kokila",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE 1619 PROJECT: BORN ON THE WATER",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593307356?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+1619+PROJECT%3A+BORN+ON+THE+WATER&author=Nikole+Hannah-Jones+and+Ren%C3%A9e+Watson."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593307359"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252B1619%252BPROJECT%25253A%252BBORN%252BON%252BTHE%252BWATER%252FNikole%252BHannah-Jones%252Band%252BRen%2525C3%2525A9e%252BWatson.%252F9780593307359&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252B1619%252BPROJECT%25253A%252BBORN%252BON%252BTHE%252BWATER%252BNikole%252BHannah-Jones%252Band%252BRen%2525C3%2525A9e%252BWatson."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593307359&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2B1619%2BPROJECT%253A%2BBORN%2BON%2BTHE%2BWATER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593307359%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2B1619%2BPROJECT%253A%2BBORN%2BON%2BTHE%2BWATER%2BNikole%2BHannah-Jones%2Band%2BRen%25C3%25A9e%2BWatson.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0316592358?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "William H. McRaven.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316592352.jpg",
                "book_image_width": 388,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by William H. McRaven. Illustrated by Howard McWilliam",
                "contributor_note": "Illustrated by Howard McWilliam",
                "created_date": "2021-11-24 23:20:25",
                "description": "Life lessons are learned as Skipper the seal trains to become a Navy SEAL.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0316592358",
                "primary_isbn13": "9780316592352",
                "book_uri": "nyt://book/9d7bf46f-b7d8-59fa-a6a0-77931aa1ab1c",
                "publisher": "Little, Brown",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MAKE YOUR BED WITH SKIPPER THE SEAL",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0316592358?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MAKE+YOUR+BED+WITH+SKIPPER+THE+SEAL&author=William+H.+McRaven."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316592352"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMAKE%252BYOUR%252BBED%252BWITH%252BSKIPPER%252BTHE%252BSEAL%252FWilliam%252BH.%252BMcRaven.%252F9780316592352&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMAKE%252BYOUR%252BBED%252BWITH%252BSKIPPER%252BTHE%252BSEAL%252BWilliam%252BH.%252BMcRaven."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316592352&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMAKE%2BYOUR%2BBED%2BWITH%2BSKIPPER%2BTHE%2BSEAL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316592352%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMAKE%2BYOUR%2BBED%2BWITH%2BSKIPPER%2BTHE%2BSEAL%2BWilliam%2BH.%2BMcRaven.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1419753967?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Andrea Beaty.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781419753961.jpg",
                "book_image_width": 411,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Andrea Beaty. Illustrated by David Roberts",
                "contributor_note": "Illustrated by David Roberts",
                "created_date": "2021-11-24 23:20:25",
                "description": "A young boy with dyslexia expresses himself through his art.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1419753967",
                "primary_isbn13": "9781419753961",
                "book_uri": "nyt://book/7869fb78-9b3a-596d-833b-1d2daf5d73ef",
                "publisher": "Abrams",
                "rank": 3,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "AARON SLATER, ILLUSTRATOR",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1419753967?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=AARON+SLATER%2C+ILLUSTRATOR&author=Andrea+Beaty."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419753961"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FAARON%252BSLATER%25252C%252BILLUSTRATOR%252FAndrea%252BBeaty.%252F9781419753961&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DAARON%252BSLATER%25252C%252BILLUSTRATOR%252BAndrea%252BBeaty."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781419753961&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DAARON%2BSLATER%252C%2BILLUSTRATOR"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781419753961%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DAARON%2BSLATER%252C%2BILLUSTRATOR%2BAndrea%2BBeaty.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063045400?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Jory John.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063045408.jpg",
                "book_image_width": 412,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Jory John. Illustrated by Pete Oswald",
                "contributor_note": "Illustrated by Pete Oswald",
                "created_date": "2021-11-24 23:20:26",
                "description": "Cookie builds up her self-confidence.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063045400",
                "primary_isbn13": "9780063045408",
                "book_uri": "nyt://book/08ef7c19-f4f0-578d-bd4f-a4786ce8da24",
                "publisher": "Harper",
                "rank": 4,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "THE SMART COOKIE",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063045400?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+SMART+COOKIE&author=Jory+John."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063045408"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSMART%252BCOOKIE%252FJory%252BJohn.%252F9780063045408&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSMART%252BCOOKIE%252BJory%252BJohn."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063045408&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSMART%2BCOOKIE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063045408%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSMART%2BCOOKIE%2BJory%2BJohn.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593109821?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Jan Brett",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593109823.jpg",
                "book_image_width": 500,
                "book_image_height": 414,
                "book_review_link": "",
                "contributor": "by Jan Brett",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:26",
                "description": "Marie and the Nutcracker embark on a magical journey.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593109821",
                "primary_isbn13": "9780593109823",
                "book_uri": "nyt://book/2d1d8203-b25e-5d1e-85b4-847583b694b7",
                "publisher": "Putnam",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "JAN BRETT'S THE NUTCRACKER",
                "updated_date": "2021-11-24 23:24:48",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593109821?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=JAN+BRETT%27S+THE+NUTCRACKER&author=Jan+Brett"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593109823"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FJAN%252BBRETT%252527S%252BTHE%252BNUTCRACKER%252FJan%252BBrett%252F9780593109823&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DJAN%252BBRETT%252527S%252BTHE%252BNUTCRACKER%252BJan%252BBrett"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593109823&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DJAN%2BBRETT%2527S%2BTHE%2BNUTCRACKER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593109823%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DJAN%2BBRETT%2527S%2BTHE%2BNUTCRACKER%2BJan%2BBrett%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 10,
        "list_name": "Series Books",
        "list_name_encoded": "series-books",
        "display_name": "Children’s Series",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "and   Jeff Kinney",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781419711329.jpg",
                "book_image_width": 330,
                "book_image_height": 484,
                "book_review_link": "",
                "contributor": "written and illustrated by Jeff Kinney",
                "contributor_note": "written and illustrated by Jeff Kinney",
                "created_date": "2021-11-24 23:20:21",
                "description": "The travails and challenges of adolescence.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1419749153",
                "primary_isbn13": "9781419749155",
                "book_uri": "nyt://book/59a8e30d-c413-52cd-860e-4eab725bb690",
                "publisher": "Amulet",
                "rank": 1,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "DIARY OF A WIMPY KID",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 662,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Diary-Wimpy-Kid-Hard-Luck/dp/1419711326?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=DIARY+OF+A+WIMPY+KID&author=and+++Jeff+Kinney"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781419749155"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDIARY%252BOF%252BA%252BWIMPY%252BKID%252Fand%252B%252B%252BJeff%252BKinney%252F9781419749155&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDIARY%252BOF%252BA%252BWIMPY%252BKID%252Band%252B%252B%252BJeff%252BKinney"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781419749155&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DDIARY%2BOF%2BA%2BWIMPY%2BKID"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781419749155%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDIARY%2BOF%2BA%2BWIMPY%2BKID%2Band%2B%2B%2BJeff%2BKinney%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "J.K. Rowling",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780590353427.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by J.K. Rowling",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:21",
                "description": "A wizard hones his conjuring skills in the service of fighting evil.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338716530",
                "primary_isbn13": "9781338716535",
                "book_uri": "nyt://book/9677b532-703b-58ab-9001-de1ff59105a6",
                "publisher": "Scholastic",
                "rank": 2,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "HARRY POTTER",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 661,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Harry-Potter-And-Order-Phoenix/dp/0439358078?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=HARRY+POTTER&author=J.K.+Rowling"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338716535"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHARRY%252BPOTTER%252FJ.K.%252BRowling%252F9781338716535&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHARRY%252BPOTTER%252BJ.K.%252BRowling"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338716535&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DHARRY%2BPOTTER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338716535%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHARRY%2BPOTTER%2BJ.K.%2BRowling%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Last-Kids-Earth-Nightmare-King/dp/0425288714?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Max Brallier.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780425288719.jpg",
                "book_image_width": 324,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Max Brallier. Illustrated by Douglas Holgate",
                "contributor_note": "Illustrated by Douglas Holgate",
                "created_date": "2021-11-24 23:20:21",
                "description": "Jack and his friends fight for their lives through the zombie apocalypse.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1984835378",
                "primary_isbn13": "9781984835376",
                "book_uri": "nyt://book/bd67c20e-ec10-5641-9621-513d7f02ae40",
                "publisher": "Viking",
                "rank": 3,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "THE LAST KIDS ON EARTH",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 90,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Last-Kids-Earth-Nightmare-King/dp/0425288714?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LAST+KIDS+ON+EARTH&author=Max+Brallier."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984835376"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLAST%252BKIDS%252BON%252BEARTH%252FMax%252BBrallier.%252F9781984835376&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLAST%252BKIDS%252BON%252BEARTH%252BMax%252BBrallier."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984835376&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLAST%2BKIDS%2BON%2BEARTH"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984835376%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLAST%2BKIDS%2BON%2BEARTH%2BMax%2BBrallier.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Holly Jackson",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593379851.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Holly Jackson",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:21",
                "description": "Pippa Fitz-Amobi solves murderous crimes.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1984896393",
                "primary_isbn13": "9781984896391",
                "book_uri": "nyt://book/494423b3-84b1-5f41-ae97-b525e4a5245c",
                "publisher": "Delacorte",
                "rank": 4,
                "rank_last_week": 5,
                "sunday_review_link": "",
                "title": "A GOOD GIRL'S GUIDE TO MURDER",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 8,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593379853?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=A+GOOD+GIRL%27S+GUIDE+TO+MURDER&author=Holly+Jackson"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984896391"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FA%252BGOOD%252BGIRL%252527S%252BGUIDE%252BTO%252BMURDER%252FHolly%252BJackson%252F9781984896391&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DA%252BGOOD%252BGIRL%252527S%252BGUIDE%252BTO%252BMURDER%252BHolly%252BJackson"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984896391&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DA%2BGOOD%2BGIRL%2527S%2BGUIDE%2BTO%2BMURDER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984896391%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DA%2BGOOD%2BGIRL%2527S%2BGUIDE%2BTO%2BMURDER%2BHolly%2BJackson%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Titans-Curse-Percy-Jackson-Olympians/dp/1423101480?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Rick Riordan",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781423131892.jpg",
                "book_image_width": 319,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Rick Riordan",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:21",
                "description": "A boy battles mythological monsters.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1484707230",
                "primary_isbn13": "9781484707234",
                "book_uri": "nyt://book/e2b52b1b-5fd1-5235-ba04-4be032845359",
                "publisher": "Disney-Hyperion",
                "rank": 5,
                "rank_last_week": 4,
                "sunday_review_link": "https://www.nytimes.com/2009/05/31/books/review/Devereaux-t.html",
                "title": "PERCY JACKSON & THE OLYMPIANS",
                "updated_date": "2021-11-24 23:24:44",
                "weeks_on_list": 598,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Titans-Curse-Percy-Jackson-Olympians/dp/1423101480?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=PERCY+JACKSON+%26+THE+OLYMPIANS&author=Rick+Riordan"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781484707234"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPERCY%252BJACKSON%252B%252526%252BTHE%252BOLYMPIANS%252FRick%252BRiordan%252F9781484707234&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPERCY%252BJACKSON%252B%252526%252BTHE%252BOLYMPIANS%252BRick%252BRiordan"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781484707234&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DPERCY%2BJACKSON%2B%2526%2BTHE%2BOLYMPIANS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781484707234%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPERCY%2BJACKSON%2B%2526%2BTHE%2BOLYMPIANS%2BRick%2BRiordan%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 14,
        "list_name": "Young Adult Hardcover",
        "list_name_encoded": "young-adult-hardcover",
        "display_name": "Young Adult Hardcover",
        "updated": "WEEKLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1534457720?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Chloe Gong",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781665915892.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Chloe Gong",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "The White Flowers and the Scarlet Gang join forces against a common enemy.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "None",
                "primary_isbn13": "9781665915892",
                "book_uri": "nyt://book/21a2f0a7-f755-5b38-8969-33884f6cabfb",
                "publisher": "Margaret K. McElderry",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "OUR VIOLENT ENDS",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 1,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1534457720?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=OUR+VIOLENT+ENDS&author=Chloe+Gong"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781665915892"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FOUR%252BVIOLENT%252BENDS%252FChloe%252BGong%252F9781665915892&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DOUR%252BVIOLENT%252BENDS%252BChloe%252BGong"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781665915892&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DOUR%2BVIOLENT%2BENDS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781665915892%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DOUR%2BVIOLENT%2BENDS%2BChloe%2BGong%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/One-Us-Lying-Karen-McManus/dp/1524714682?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Karen M. McManus",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781524714680.jpg",
                "book_image_width": 327,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Karen M. McManus",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "For five students, a detour into detention ends in murder.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1524714682",
                "primary_isbn13": "9781524714680",
                "book_uri": "nyt://book/68977997-3f85-5971-aca2-e80f543b2814",
                "publisher": "Delacorte",
                "rank": 2,
                "rank_last_week": 1,
                "sunday_review_link": "",
                "title": "ONE OF US IS LYING",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 199,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/One-Us-Lying-Karen-McManus/dp/1524714682?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ONE+OF+US+IS+LYING&author=Karen+M.+McManus"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781524714680"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FONE%252BOF%252BUS%252BIS%252BLYING%252FKaren%252BM.%252BMcManus%252F9781524714680&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DONE%252BOF%252BUS%252BIS%252BLYING%252BKaren%252BM.%252BMcManus"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524714680&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DONE%2BOF%2BUS%2BIS%2BLYING"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781524714680%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DONE%2BOF%2BUS%2BIS%2BLYING%2BKaren%2BM.%2BMcManus%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Youve-Reached-Sam-Dustin-Thao/dp/1250762030?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Dustin Thao",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250762030.jpg",
                "book_image_width": 640,
                "book_image_height": 414,
                "book_review_link": "",
                "contributor": "by Dustin Thao",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "After the death of her boyfriend, Sam, Julie can still reach him via cellphone.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1250762030",
                "primary_isbn13": "9781250762030",
                "book_uri": "nyt://book/3249c5e3-150c-5981-9f3d-51bf75c2f921",
                "publisher": "Wednesday",
                "rank": 3,
                "rank_last_week": 2,
                "sunday_review_link": "",
                "title": "YOU'VE REACHED SAM",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 2,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Youve-Reached-Sam-Dustin-Thao/dp/1250762030?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=YOU%27VE+REACHED+SAM&author=Dustin+Thao"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250762030"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FYOU%252527VE%252BREACHED%252BSAM%252FDustin%252BThao%252F9781250762030&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DYOU%252527VE%252BREACHED%252BSAM%252BDustin%252BThao"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250762030&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DYOU%2527VE%2BREACHED%2BSAM"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250762030%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DYOU%2527VE%2BREACHED%2BSAM%2BDustin%2BThao%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1534457690?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Chloe Gong",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781534457690.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Chloe Gong",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "A reimagining of Romeo and Juliet set in 1920s Shanghai.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1534457690",
                "primary_isbn13": "9781534457690",
                "book_uri": "nyt://book/a0c3d116-39ca-5a12-8f67-a058808c4e2a",
                "publisher": "Margaret K. McElderry",
                "rank": 4,
                "rank_last_week": 4,
                "sunday_review_link": "",
                "title": "THESE VIOLENT DELIGHTS",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 26,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1534457690?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THESE+VIOLENT+DELIGHTS&author=Chloe+Gong"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781534457690"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHESE%252BVIOLENT%252BDELIGHTS%252FChloe%252BGong%252F9781534457690&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHESE%252BVIOLENT%252BDELIGHTS%252BChloe%252BGong"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781534457690&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHESE%2BVIOLENT%2BDELIGHTS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781534457690%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHESE%2BVIOLENT%2BDELIGHTS%2BChloe%2BGong%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1250618843?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Marissa Meyer",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250618849.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Marissa Meyer",
                "contributor_note": "",
                "created_date": "2021-11-24 23:20:22",
                "description": "A reimagining of the Brothers Grimm tale \"Rumpelstiltskin.\"",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1250618843",
                "primary_isbn13": "9781250618849",
                "book_uri": "nyt://book/a358666a-033c-58e9-b8bb-fc9123e640d3",
                "publisher": "Feiwel & Friends",
                "rank": 5,
                "rank_last_week": 3,
                "sunday_review_link": "",
                "title": "GILDED",
                "updated_date": "2021-11-24 23:24:45",
                "weeks_on_list": 3,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1250618843?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GILDED&author=Marissa+Meyer"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250618849"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGILDED%252FMarissa%252BMeyer%252F9781250618849&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGILDED%252BMarissa%252BMeyer"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250618849&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGILDED"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250618849%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGILDED%2BMarissa%2BMeyer%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 301,
        "list_name": "Audio Fiction",
        "list_name_encoded": "audio-fiction",
        "display_name": "Audio Fiction",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0441013597?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Frank Herbert",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781427201447.jpg",
                "book_image_width": 333,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Frank Herbert",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:16",
                "description": "The 1965 science fiction novel that is the basis of several adaptations, including the recent film directed by Denis Villeneuve. Read by Scott Brick, Orlagh Cassidy, Euan Morton, Simon Vance and Ilyana Kadushin. 21 hours, 2 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781427201447",
                "book_uri": "nyt://book/15e1267d-7730-50b7-bb4a-bdde1187f69d",
                "publisher": "Macmillan Audio",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "DUNE",
                "updated_date": "2021-11-03 23:05:16",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0441013597?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=DUNE&author=Frank+Herbert"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781427201447"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDUNE%252FFrank%252BHerbert%252F9781427201447&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDUNE%252BFrank%252BHerbert"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781427201447&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DDUNE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781427201447%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDUNE%2BFrank%2BHerbert%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "John Grisham",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by John Grisham",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:16",
                "description": "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge. Read by Mary-Louise Parker. 11 hours, 36 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593168496",
                "primary_isbn13": "9780593168493",
                "book_uri": "nyt://book/9b050eef-c0db-5d7f-8be2-e4e2ad89a0a3",
                "publisher": "Random House Audio",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE JUDGE'S LIST",
                "updated_date": "2021-11-03 23:05:16",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+JUDGE%27S+LIST&author=John+Grisham"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593168493"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BJUDGE%252527S%252BLIST%252FJohn%252BGrisham%252F9780593168493&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BJUDGE%252527S%252BLIST%252BJohn%252BGrisham"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593168493&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BJUDGE%2527S%2BLIST"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593168493%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BJUDGE%2527S%2BLIST%2BJohn%2BGrisham%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1250220254?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Liane Moriarty",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250220257.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Liane Moriarty",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:16",
                "description": "The Delaney siblings suspect their father of causing the disappearance of their mother. Read by Caroline Lee. 18 hours, 3 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781250810700",
                "book_uri": "nyt://book/d324fe6c-6abd-5702-8611-de04f2a3c8d9",
                "publisher": "Macmillan Audio",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "APPLES NEVER FALL",
                "updated_date": "2021-11-03 23:05:16",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1250220254?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=APPLES+NEVER+FALL&author=Liane+Moriarty"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250810700"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FAPPLES%252BNEVER%252BFALL%252FLiane%252BMoriarty%252F9781250810700&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DAPPLES%252BNEVER%252BFALL%252BLiane%252BMoriarty"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250810700&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DAPPLES%2BNEVER%2BFALL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250810700%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DAPPLES%2BNEVER%2BFALL%2BLiane%2BMoriarty%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Amor Towles",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Amor Towles",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:16",
                "description": "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in 1954. Read by Edoardo Ballerini, Marin Ireland and Dion Graham. 16 hours, 39 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593452100",
                "primary_isbn13": "9780593452103",
                "book_uri": "nyt://book/6fe304fb-889e-5687-b1cb-c3c2a9200a7e",
                "publisher": "Penguin Audio",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE LINCOLN HIGHWAY",
                "updated_date": "2021-11-03 23:05:16",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+LINCOLN+HIGHWAY&author=Amor+Towles"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593452103"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLINCOLN%252BHIGHWAY%252FAmor%252BTowles%252F9780593452103&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLINCOLN%252BHIGHWAY%252BAmor%252BTowles"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593452103&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BLINCOLN%2BHIGHWAY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593452103%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLINCOLN%2BHIGHWAY%2BAmor%2BTowles%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/198217367X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Hillary Rodham Clinton and Louise Penny",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982173678.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Hillary Rodham Clinton and Louise Penny",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:16",
                "description": "In the wake of the previous administration’s mishandling of international affairs, the new Secretary of State Ellen Adams confronts interconnected global threats. Read by Joan Allen. 15 hours, 41 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781797128511",
                "book_uri": "nyt://book/5d870598-78c4-56b8-aa9d-f2390460be38",
                "publisher": "Simon & Schuster Audio",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "STATE OF TERROR",
                "updated_date": "2021-11-03 23:05:16",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/198217367X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=STATE+OF+TERROR&author=Hillary+Rodham+Clinton+and+Louise+Penny"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781797128511"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSTATE%252BOF%252BTERROR%252FHillary%252BRodham%252BClinton%252Band%252BLouise%252BPenny%252F9781797128511&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSTATE%252BOF%252BTERROR%252BHillary%252BRodham%252BClinton%252Band%252BLouise%252BPenny"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781797128511&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DSTATE%2BOF%2BTERROR"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781797128511%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSTATE%2BOF%2BTERROR%2BHillary%2BRodham%2BClinton%2Band%2BLouise%2BPenny%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 302,
        "list_name": "Audio Nonfiction",
        "list_name_encoded": "audio-nonfiction",
        "display_name": "Audio Nonfiction",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0063076098?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Dave Grohl",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063076099.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Dave Grohl",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:10",
                "description": "A memoir by the musician known for his work with Foo Fighters and Nirvana. Read by the author. 10 hours, 35 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0063076128",
                "primary_isbn13": "9780063076129",
                "book_uri": "nyt://book/2ad778f1-9690-5818-b874-16fce14bb681",
                "publisher": "HarperAudio",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE STORYTELLER",
                "updated_date": "2021-11-03 23:05:10",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0063076098?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+STORYTELLER&author=Dave+Grohl"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063076129"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BSTORYTELLER%252FDave%252BGrohl%252F9780063076129&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BSTORYTELLER%252BDave%252BGrohl"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063076129&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BSTORYTELLER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063076129%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BSTORYTELLER%2BDave%2BGrohl%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593139135?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Matthew McConaughey",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593139134.jpg",
                "book_image_width": 392,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Matthew McConaughey",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:10",
                "description": "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years. Read by the author. 6 hours, 42 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9780593294185",
                "book_uri": "nyt://book/cdd69a90-455d-5194-8060-86c0df2ea509",
                "publisher": "Random House Audio",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "GREENLIGHTS",
                "updated_date": "2021-11-03 23:05:10",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593139135?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GREENLIGHTS&author=Matthew+McConaughey"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593294185"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGREENLIGHTS%252FMatthew%252BMcConaughey%252F9780593294185&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGREENLIGHTS%252BMatthew%252BMcConaughey"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593294185&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGREENLIGHTS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593294185%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGREENLIGHTS%2BMatthew%2BMcConaughey%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/059323152X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Adam Schiff",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593231524.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Adam Schiff",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:10",
                "description": "The congressman from California describes risks to our democracy and the resurgence of autocracy. Read by the author. 17 hours, 45 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593508610",
                "primary_isbn13": "9780593508619",
                "book_uri": "nyt://book/946e5aa8-b5a3-55c6-98d2-a679c7a90440",
                "publisher": "Random House Audio",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MIDNIGHT IN WASHINGTON",
                "updated_date": "2021-11-03 23:05:10",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/059323152X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MIDNIGHT+IN+WASHINGTON&author=Adam+Schiff"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593508619"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMIDNIGHT%252BIN%252BWASHINGTON%252FAdam%252BSchiff%252F9780593508619&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMIDNIGHT%252BIN%252BWASHINGTON%252BAdam%252BSchiff"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593508619&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMIDNIGHT%2BIN%2BWASHINGTON"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593508619%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMIDNIGHT%2BIN%2BWASHINGTON%2BAdam%2BSchiff%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1982182911?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Bob Woodward and Robert Costa",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982182915.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Bob Woodward and Robert Costa",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:10",
                "description": "The Washington Post journalists detail the dangers and challenges during the transition to the Biden presidency. Read by Robert Petkoff. 13 hours, 35 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781797137971",
                "book_uri": "nyt://book/3fff4217-abfc-5b14-bcdf-2193c7885da3",
                "publisher": "Simon & Schuster Audio",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "PERIL",
                "updated_date": "2021-11-03 23:05:10",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1982182911?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=PERIL&author=Bob+Woodward+and+Robert+Costa"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781797137971"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPERIL%252FBob%252BWoodward%252Band%252BRobert%252BCosta%252F9781797137971&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPERIL%252BBob%252BWoodward%252Band%252BRobert%252BCosta"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781797137971&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DPERIL"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781797137971%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPERIL%2BBob%2BWoodward%2Band%2BRobert%2BCosta%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0316535869?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Katie Couric",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316535861.jpg",
                "book_image_width": 323,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Katie Couric",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:10",
                "description": "The former anchor of the “CBS Evening News” and “Today” describes some of the personal and professional challenges she faced. Read by the author. 15 hours, 27 minutes unabridged.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781549151200",
                "book_uri": "nyt://book/6f5146b6-2d20-5143-8d43-a6f9c8e5379d",
                "publisher": "Hachette Audio",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "GOING THERE",
                "updated_date": "2021-11-03 23:05:10",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0316535869?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GOING+THERE&author=Katie+Couric"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781549151200"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGOING%252BTHERE%252FKatie%252BCouric%252F9781549151200&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGOING%252BTHERE%252BKatie%252BCouric"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781549151200&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGOING%2BTHERE"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781549151200%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGOING%2BTHERE%2BKatie%2BCouric%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 532,
        "list_name": "Business Books",
        "list_name_encoded": "business-books",
        "display_name": "Business",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "James Clear",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by James Clear",
                "contributor_note": "",
                "created_date": "2021-11-16 23:51:02",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0735211299",
                "primary_isbn13": "9780735211292",
                "book_uri": "nyt://book/0398a355-c032-534e-a0af-647b06f0840d",
                "publisher": "Avery",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "ATOMIC HABITS",
                "updated_date": "2021-11-16 23:51:02",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ATOMIC+HABITS&author=James+Clear"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DATOMIC%2BHABITS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0062964615?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Anderson Cooper and Katherine Howe",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062964618.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Anderson Cooper and Katherine Howe",
                "contributor_note": "",
                "created_date": "2021-11-16 23:51:02",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062964615",
                "primary_isbn13": "9780062964618",
                "book_uri": "nyt://book/1181e7a7-dc31-5080-a309-a6f11ed90d8a",
                "publisher": "Harper",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "VANDERBILT",
                "updated_date": "2021-11-16 23:51:02",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0062964615?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=VANDERBILT&author=Anderson+Cooper+and+Katherine+Howe"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062964618"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FVANDERBILT%252FAnderson%252BCooper%252Band%252BKatherine%252BHowe%252F9780062964618&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DVANDERBILT%252BAnderson%252BCooper%252Band%252BKatherine%252BHowe"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062964618&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DVANDERBILT"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062964618%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DVANDERBILT%2BAnderson%2BCooper%2Band%2BKatherine%2BHowe%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Maid-Hard-Work-Mothers-Survive/dp/0316505110?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Stephanie Land",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316505116.jpg",
                "book_image_width": 327,
                "book_image_height": 495,
                "book_review_link": "https://www.nytimes.com/2019/01/31/books/review/stephanie-land-maid.html",
                "contributor": "by Stephanie Land",
                "contributor_note": "",
                "created_date": "2021-11-16 23:51:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0316505099",
                "primary_isbn13": "9780316505093",
                "book_uri": "nyt://book/296168c0-2c2d-5a51-b5f3-a540c2d88328",
                "publisher": "Hachette",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MAID",
                "updated_date": "2021-11-16 23:51:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Maid-Hard-Work-Mothers-Survive/dp/0316505110?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MAID&author=Stephanie+Land"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316505093"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMAID%252FStephanie%252BLand%252F9780316505093&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMAID%252BStephanie%252BLand"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316505093&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMAID"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316505093%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMAID%2BStephanie%2BLand%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0593299213?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Robert Greene",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780593299210.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Robert Greene",
                "contributor_note": "",
                "created_date": "2021-11-16 23:51:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0593299213",
                "primary_isbn13": "9780593299210",
                "book_uri": "nyt://book/b648ff67-8085-5db1-914c-39e3a6457f3a",
                "publisher": "Viking",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE DAILY LAWS",
                "updated_date": "2021-11-16 23:51:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0593299213?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+DAILY+LAWS&author=Robert+Greene"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593299210"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BDAILY%252BLAWS%252FRobert%252BGreene%252F9780593299210&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BDAILY%252BLAWS%252BRobert%252BGreene"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593299210&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BDAILY%2BLAWS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593299210%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BDAILY%2BLAWS%2BRobert%2BGreene%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Brené Brown",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780399592522.jpg",
                "book_image_width": 326,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Brené Brown",
                "contributor_note": "",
                "created_date": "2021-11-16 23:51:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0399592520",
                "primary_isbn13": "9780399592522",
                "book_uri": "nyt://book/e9569270-fe3a-5fe4-a068-7eca3da622e7",
                "publisher": "Random House",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "DARE TO LEAD",
                "updated_date": "2021-11-16 23:51:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Dare-Lead-Brave-Conversations-Hearts/dp/0399592520?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=DARE+TO+LEAD&author=Bren%C3%A9+Brown"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399592522"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDARE%252BTO%252BLEAD%252FBren%2525C3%2525A9%252BBrown%252F9780399592522&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDARE%252BTO%252BLEAD%252BBren%2525C3%2525A9%252BBrown"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780399592522&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DDARE%2BTO%2BLEAD"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780399592522%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDARE%2BTO%2BLEAD%2BBren%25C3%25A9%2BBrown%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 719,
        "list_name": "Graphic Books and Manga",
        "list_name_encoded": "graphic-books-and-manga",
        "display_name": "Graphic Books and Manga",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1338680455?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Dav Pilkey",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338680454.jpg",
                "book_image_width": 338,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Dav Pilkey",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:07",
                "description": "The 10th book in the Dog Man series. Can the power of love overcome the darkness and despair created by new villains?",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338680455",
                "primary_isbn13": "9781338680454",
                "book_uri": "nyt://book/f5823fce-ef79-5334-b592-3de792fac91d",
                "publisher": "Scholastic",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MOTHERING HEIGHTS",
                "updated_date": "2021-11-03 23:05:07",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1338680455?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MOTHERING+HEIGHTS&author=Dav+Pilkey"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338680454"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMOTHERING%252BHEIGHTS%252FDav%252BPilkey%252F9781338680454&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMOTHERING%252BHEIGHTS%252BDav%252BPilkey"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338680454&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMOTHERING%2BHEIGHTS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338680454%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMOTHERING%2BHEIGHTS%2BDav%2BPilkey%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1974720969?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Tatsuki Fujimoto",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781974720965.jpg",
                "book_image_width": 333,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Tatsuki Fujimoto",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:07",
                "description": "Assassins target Denji after he appears on a news program.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1974720969",
                "primary_isbn13": "9781974720965",
                "book_uri": "nyt://book/aeb0b52e-e462-521d-b598-8493eac981f7",
                "publisher": "VIZ Media",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "CHAINSAW MAN, VOL. 7",
                "updated_date": "2021-11-03 23:05:07",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1974720969?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=CHAINSAW+MAN%2C+VOL.+7&author=Tatsuki+Fujimoto"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781974720965"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCHAINSAW%252BMAN%25252C%252BVOL.%252B7%252FTatsuki%252BFujimoto%252F9781974720965&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCHAINSAW%252BMAN%25252C%252BVOL.%252B7%252BTatsuki%252BFujimoto"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781974720965&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DCHAINSAW%2BMAN%252C%2BVOL.%2B7"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781974720965%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCHAINSAW%2BMAN%252C%2BVOL.%2B7%2BTatsuki%2BFujimoto%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1646512367?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Hajime Isayama",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781646514595.jpg",
                "book_image_width": 332,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Hajime Isayama",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:07",
                "description": "The fate of humanity depends on an epic showdown.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "",
                "primary_isbn13": "9781646514595",
                "book_uri": "nyt://book/9b5c5e1e-9c14-52bc-b4dd-f2ea8a20b481",
                "publisher": "Kodansha",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "ATTACK ON TITAN, VOL. 34",
                "updated_date": "2021-11-03 23:05:07",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1646512367?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ATTACK+ON+TITAN%2C+VOL.+34&author=Hajime+Isayama"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781646514595"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATTACK%252BON%252BTITAN%25252C%252BVOL.%252B34%252FHajime%252BIsayama%252F9781646514595&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATTACK%252BON%252BTITAN%25252C%252BVOL.%252B34%252BHajime%252BIsayama"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781646514595&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DATTACK%2BON%2BTITAN%252C%2BVOL.%2B34"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781646514595%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATTACK%2BON%2BTITAN%252C%2BVOL.%2B34%2BHajime%2BIsayama%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1338304607?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Ann M. Martin.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338304602.jpg",
                "book_image_width": 344,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Ann M. Martin. Illustrated by Chan Chau",
                "contributor_note": "Illustrated by Chan Chau",
                "created_date": "2021-11-03 23:05:07",
                "description": "The 10th book in the Baby-sitters Club series. The unfriendly kids in the ritzy neighborhood across town mock and criticize.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338304607",
                "primary_isbn13": "9781338304602",
                "book_uri": "nyt://book/d1bb203b-5784-5743-95a3-3f9485171a9f",
                "publisher": "Scholastic",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "KRISTY AND THE SNOBS",
                "updated_date": "2021-11-03 23:05:07",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1338304607?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=KRISTY+AND+THE+SNOBS&author=Ann+M.+Martin."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338304602"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FKRISTY%252BAND%252BTHE%252BSNOBS%252FAnn%252BM.%252BMartin.%252F9781338304602&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DKRISTY%252BAND%252BTHE%252BSNOBS%252BAnn%252BM.%252BMartin."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338304602&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DKRISTY%2BAND%2BTHE%2BSNOBS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338304602%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DKRISTY%2BAND%2BTHE%2BSNOBS%2BAnn%2BM.%2BMartin.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1984859153?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Timothy Snyder.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984859150.jpg",
                "book_image_width": 356,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Timothy Snyder. Illustrated by Nora Krug",
                "contributor_note": "Illustrated by Nora Krug",
                "created_date": "2021-11-03 23:05:07",
                "description": "A graphic edition of the book with 20 lessons from the 20th century about the course of tyranny.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1984859153",
                "primary_isbn13": "9781984859150",
                "book_uri": "nyt://book/303ab34e-c86f-5f8b-9d99-1a79986fd019",
                "publisher": "Ten Speed",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "ON TYRANNY",
                "updated_date": "2021-11-03 23:05:07",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1984859153?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=ON+TYRANNY&author=Timothy+Snyder."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984859150"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FON%252BTYRANNY%252FTimothy%252BSnyder.%252F9781984859150&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DON%252BTYRANNY%252BTimothy%252BSnyder."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984859150&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DON%2BTYRANNY"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984859150%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DON%2BTYRANNY%2BTimothy%2BSnyder.%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 10018,
        "list_name": "Mass Market Monthly",
        "list_name_encoded": "mass-market-monthly",
        "display_name": "Mass Market",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/19th-Christmas-Womens-Murder-Club-ebook/dp/B07P1SSF9S?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "James Patterson and Maxine Paetro",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316494021.jpg",
                "book_image_width": 321,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by James Patterson and Maxine Paetro",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:13",
                "description": "In the 19th installment of the Women's Murder Club series, Detective Lindsay Boxer and company take on a fearsome criminal known only as \"Loman.\"",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1538715953",
                "primary_isbn13": "9781538715956",
                "book_uri": "nyt://book/a8f0698e-3507-5c7d-96bc-232d51f07fbb",
                "publisher": "Grand Central",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE 19TH CHRISTMAS",
                "updated_date": "2021-11-10 16:30:06",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/19th-Christmas-Womens-Murder-Club-ebook/dp/B07P1SSF9S?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+19TH+CHRISTMAS&author=James+Patterson+and+Maxine+Paetro"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538715956"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252B19TH%252BCHRISTMAS%252FJames%252BPatterson%252Band%252BMaxine%252BPaetro%252F9781538715956&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252B19TH%252BCHRISTMAS%252BJames%252BPatterson%252Band%252BMaxine%252BPaetro"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538715956&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2B19TH%2BCHRISTMAS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538715956%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2B19TH%2BCHRISTMAS%2BJames%2BPatterson%2Band%2BMaxine%2BPaetro%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1524745049?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Lisa Gardner",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781524745042.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Lisa Gardner",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:13",
                "description": "A recovering alcoholic puts herself in danger when she searches for a Haitian teenager in a Boston neighborhood.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1524745065",
                "primary_isbn13": "9781524745066",
                "book_uri": "nyt://book/6a70dd57-ef4f-5fdd-b48a-5d59797c37b8",
                "publisher": "Dutton",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "BEFORE SHE DISAPPEARED",
                "updated_date": "2021-11-10 16:30:06",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1524745049?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=BEFORE+SHE+DISAPPEARED&author=Lisa+Gardner"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781524745066"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FBEFORE%252BSHE%252BDISAPPEARED%252FLisa%252BGardner%252F9781524745066&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DBEFORE%252BSHE%252BDISAPPEARED%252BLisa%252BGardner"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524745066&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DBEFORE%2BSHE%2BDISAPPEARED"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781524745066%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DBEFORE%2BSHE%2BDISAPPEARED%2BLisa%2BGardner%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/0062853465?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "J.A. Jance",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062853462.jpg",
                "book_image_width": 333,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by J.A. Jance",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:13",
                "description": "The 19th book in the Joanna Brady Mysteries series. The Cochise County Sheriff's daughter becomes involved in a missing persons case.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062853473",
                "primary_isbn13": "9780062853479",
                "book_uri": "nyt://book/bc144136-a85b-5ce9-babb-ecad21e202d7",
                "publisher": "Morrow",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "MISSING AND ENDANGERED",
                "updated_date": "2021-11-10 16:30:06",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/0062853465?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=MISSING+AND+ENDANGERED&author=J.A.+Jance"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062853479"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FMISSING%252BAND%252BENDANGERED%252FJ.A.%252BJance%252F9780062853479&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DMISSING%252BAND%252BENDANGERED%252BJ.A.%252BJance"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062853479&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DMISSING%2BAND%2BENDANGERED"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062853479%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DMISSING%2BAND%2BENDANGERED%2BJ.A.%2BJance%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/The-Perfect-Christmas-Debbie-Macomber-ebook/dp/B005JSK3BY?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Debbie Macomber",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781459215153.jpg",
                "book_image_width": 313,
                "book_image_height": 495,
                "book_review_link": "https://www.nytimes.com/2011/11/30/books/reviews-of-picture-books-fancy-nancy-splendiferous-christmas-the-money-well-save-the-perfect-christmas.html",
                "contributor": "by Debbie Macomber",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:13",
                "description": "A matchmaker assigns Cassie Beaumont three tasks before revealing her perfect mate; includes the 1998 story \"Can This Be Christmas?\"",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0778311260",
                "primary_isbn13": "9780778311263",
                "book_uri": "nyt://book/0e710e1a-32d7-5d8e-96ef-a2b6a744bda9",
                "publisher": "Mira",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE PERFECT CHRISTMAS",
                "updated_date": "2021-11-10 16:30:06",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/The-Perfect-Christmas-Debbie-Macomber-ebook/dp/B005JSK3BY?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+PERFECT+CHRISTMAS&author=Debbie+Macomber"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780778311263"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BPERFECT%252BCHRISTMAS%252FDebbie%252BMacomber%252F9780778311263&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BPERFECT%252BCHRISTMAS%252BDebbie%252BMacomber"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780778311263&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BPERFECT%2BCHRISTMAS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780778311263%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BPERFECT%2BCHRISTMAS%2BDebbie%2BMacomber%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/198213254X?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Mary Higgins Clark and Alafair Burke",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982132545.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Mary Higgins Clark and Alafair Burke",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:13",
                "description": "As their wedding approaches, a television producer and her fiancé must search for his missing 7-year-old nephew.",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1982132558",
                "primary_isbn13": "9781982132552",
                "book_uri": "nyt://book/442590d1-4edc-59ef-8df7-984a12fe581f",
                "publisher": "Pocket",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "PIECE OF MY HEART",
                "updated_date": "2021-11-10 16:30:06",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/198213254X?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=PIECE+OF+MY+HEART&author=Mary+Higgins+Clark+and+Alafair+Burke"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982132552"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPIECE%252BOF%252BMY%252BHEART%252FMary%252BHiggins%252BClark%252Band%252BAlafair%252BBurke%252F9781982132552&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPIECE%252BOF%252BMY%252BHEART%252BMary%252BHiggins%252BClark%252Band%252BAlafair%252BBurke"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982132552&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DPIECE%2BOF%2BMY%2BHEART"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982132552%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPIECE%2BOF%2BMY%2BHEART%2BMary%2BHiggins%2BClark%2Band%2BAlafair%2BBurke%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 10015,
        "list_name": "Middle Grade Paperback Monthly",
        "list_name_encoded": "middle-grade-paperback-monthly",
        "display_name": "Middle Grade Paperback",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Linda Sue Park",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780547577319.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Linda Sue Park",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:05",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0547577311",
                "primary_isbn13": "9780547577319",
                "book_uri": "nyt://book/72728168-095d-521b-90d2-2380bdc74220",
                "publisher": "Houghton Mifflin Harcourt",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "A LONG WALK TO WATER",
                "updated_date": "2021-11-03 23:05:05",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Long-Walk-Water-Based-Story/dp/0547577311?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=A+LONG+WALK+TO+WATER&author=Linda+Sue+Park"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780547577319"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FA%252BLONG%252BWALK%252BTO%252BWATER%252FLinda%252BSue%252BPark%252F9780547577319&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DA%252BLONG%252BWALK%252BTO%252BWATER%252BLinda%252BSue%252BPark"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780547577319&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DA%2BLONG%2BWALK%2BTO%2BWATER"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780547577319%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DA%2BLONG%2BWALK%2BTO%2BWATER%2BLinda%2BSue%2BPark%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Barbara O'Connor",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
                "book_image_width": 330,
                "book_image_height": 485,
                "book_review_link": "",
                "contributor": "by Barbara O'Connor",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:05",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1250144051",
                "primary_isbn13": "9781250144058",
                "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
                "publisher": "Square Fish",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "WISH",
                "updated_date": "2021-11-03 23:05:05",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=WISH&author=Barbara+O%27Connor"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DWISH"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Katherine Applegate.",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780061992278.jpg",
                "book_image_width": 330,
                "book_image_height": 466,
                "book_review_link": "",
                "contributor": "by Katherine Applegate. Illustrated by Patricia Castelao",
                "contributor_note": "Illustrated by Patricia Castelao",
                "created_date": "2021-11-03 23:05:05",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0061992275",
                "primary_isbn13": "9780061992278",
                "book_uri": "nyt://book/f6738b4d-ccb6-5abe-9fa1-1db4ff0313c0",
                "publisher": "HarperCollins",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE ONE AND ONLY IVAN",
                "updated_date": "2021-11-03 23:05:05",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/The-Only-Ivan-Katherine-Applegate/dp/0061992275?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+ONE+AND+ONLY+IVAN&author=Katherine+Applegate."
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780061992278"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BONE%252BAND%252BONLY%252BIVAN%252FKatherine%252BApplegate.%252F9780061992278&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BONE%252BAND%252BONLY%252BIVAN%252BKatherine%252BApplegate."
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780061992278&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BONE%2BAND%2BONLY%2BIVAN"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780061992278%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BONE%2BAND%2BONLY%2BIVAN%2BKatherine%2BApplegate.%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1338280120?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Claribel A. Ortega",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338280135.jpg",
                "book_image_width": 329,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Claribel A. Ortega",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:05",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338280139",
                "primary_isbn13": "9781338280135",
                "book_uri": "nyt://book/8954c1b7-23c6-5fc3-99d9-9ba5ec1620aa",
                "publisher": "Scholastic",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "GHOST SQUAD",
                "updated_date": "2021-11-03 23:05:05",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1338280120?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GHOST+SQUAD&author=Claribel+A.+Ortega"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338280135"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGHOST%252BSQUAD%252FClaribel%252BA.%252BOrtega%252F9781338280135&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGHOST%252BSQUAD%252BClaribel%252BA.%252BOrtega"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338280135&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGHOST%2BSQUAD"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338280135%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGHOST%2BSQUAD%2BClaribel%2BA.%2BOrtega%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/Restart-Gordon-Korman/dp/1338053809?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Gordon Korman",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781338053807.jpg",
                "book_image_width": 330,
                "book_image_height": 480,
                "book_review_link": "",
                "contributor": "by Gordon Korman",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:05",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1338053809",
                "primary_isbn13": "9781338053807",
                "book_uri": "nyt://book/33e0a0a4-8158-58ef-9e88-1c49b4167580",
                "publisher": "Scholastic",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "RESTART",
                "updated_date": "2021-11-03 23:05:05",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/Restart-Gordon-Korman/dp/1338053809?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=RESTART&author=Gordon+Korman"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781338053807"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FRESTART%252FGordon%252BKorman%252F9781338053807&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DRESTART%252BGordon%252BKorman"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781338053807&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DRESTART"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781338053807%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DRESTART%2BGordon%2BKorman%26aff%3DNYT"
                    }
                ]
            }
        ]
    },
    {
        "list_id": 10016,
        "list_name": "Young Adult Paperback Monthly",
        "list_name_encoded": "young-adult-paperback-monthly",
        "display_name": "Young Adult Paperback",
        "updated": "MONTHLY",
        "list_image": null,
        "list_image_width": null,
        "list_image_height": null,
        "books": [
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/They-Both-Die-at-End/dp/0062457799?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Adam Silvera",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780062457790.jpg",
                "book_image_width": 327,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Adam Silvera",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0062457802",
                "primary_isbn13": "9780062457806",
                "book_uri": "nyt://book/ee569b8a-1b59-5af7-ab27-c6e697978460",
                "publisher": "Quill Tree",
                "rank": 1,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THEY BOTH DIE AT THE END",
                "updated_date": "2021-11-03 23:05:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/They-Both-Die-at-End/dp/0062457799?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THEY+BOTH+DIE+AT+THE+END&author=Adam+Silvera"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062457806"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHEY%252BBOTH%252BDIE%252BAT%252BTHE%252BEND%252FAdam%252BSilvera%252F9780062457806&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHEY%252BBOTH%252BDIE%252BAT%252BTHE%252BEND%252BAdam%252BSilvera"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062457806&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHEY%2BBOTH%2BDIE%2BAT%2BTHE%2BEND"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062457806%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHEY%2BBOTH%2BDIE%2BAT%2BTHE%2BEND%2BAdam%2BSilvera%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/We-Were-Liars-E-Lockhart-ebook/dp/B00FPOSDGY?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "E. Lockhart",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780375984402.jpg",
                "book_image_width": 128,
                "book_image_height": 194,
                "book_review_link": "",
                "contributor": "by E. Lockhart",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0385741278",
                "primary_isbn13": "9780385741279",
                "book_uri": "nyt://book/a474c5c9-ee75-5774-bda1-74f7bc37f83b",
                "publisher": "Ember",
                "rank": 2,
                "rank_last_week": 0,
                "sunday_review_link": "https://www.nytimes.com/2014/05/11/books/review/we-were-liars-by-e-lockhart.html",
                "title": "WE WERE LIARS",
                "updated_date": "2021-11-03 23:05:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/We-Were-Liars-E-Lockhart-ebook/dp/B00FPOSDGY?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=WE+WERE+LIARS&author=E.+Lockhart"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385741279"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWE%252BWERE%252BLIARS%252FE.%252BLockhart%252F9780385741279&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWE%252BWERE%252BLIARS%252BE.%252BLockhart"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385741279&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DWE%2BWERE%2BLIARS"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385741279%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWE%2BWERE%2BLIARS%2BE.%2BLockhart%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/Girl-Pieces-Kathleen-Glasgow/dp/1101934719?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Kathleen Glasgow",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9781101934715.jpg",
                "book_image_width": 328,
                "book_image_height": 495,
                "book_review_link": "",
                "contributor": "by Kathleen Glasgow",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "1101934743",
                "primary_isbn13": "9781101934746",
                "book_uri": "nyt://book/4c61a5f1-f0f8-5184-978c-c7056c96a644",
                "publisher": "Ember",
                "rank": 3,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "GIRL IN PIECES",
                "updated_date": "2021-11-03 23:05:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/Girl-Pieces-Kathleen-Glasgow/dp/1101934719?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=GIRL+IN+PIECES&author=Kathleen+Glasgow"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781101934746"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGIRL%252BIN%252BPIECES%252FKathleen%252BGlasgow%252F9781101934746&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGIRL%252BIN%252BPIECES%252BKathleen%252BGlasgow"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781101934746&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DGIRL%2BIN%2BPIECES"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781101934746%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGIRL%2BIN%2BPIECES%2BKathleen%2BGlasgow%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "https://www.amazon.com/dp/1368052401?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Jennifer Lynn Barnes",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780759554085.jpg",
                "book_image_width": 331,
                "book_image_height": 500,
                "book_review_link": "",
                "contributor": "by Jennifer Lynn Barnes",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0759555400",
                "primary_isbn13": "9780759555402",
                "book_uri": "nyt://book/e2abd326-9377-54d9-bf9c-5125478dd1c1",
                "publisher": "Little, Brown",
                "rank": 4,
                "rank_last_week": 0,
                "sunday_review_link": "",
                "title": "THE INHERITANCE GAMES",
                "updated_date": "2021-11-03 23:05:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "https://www.amazon.com/dp/1368052401?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+INHERITANCE+GAMES&author=Jennifer+Lynn+Barnes"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780759555402"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BINHERITANCE%252BGAMES%252FJennifer%252BLynn%252BBarnes%252F9780759555402&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BINHERITANCE%252BGAMES%252BJennifer%252BLynn%252BBarnes"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780759555402&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BINHERITANCE%2BGAMES"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780759555402%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BINHERITANCE%2BGAMES%2BJennifer%2BLynn%2BBarnes%26aff%3DNYT"
                    }
                ]
            },
            {
                "age_group": "",
                "amazon_product_url": "http://www.amazon.com/The-Book-Thief-Markus-Zusak/dp/0375842209?tag=NYTBSREV-20",
                "article_chapter_link": "",
                "author": "Markus Zusak",
                "book_image": "https://storage.googleapis.com/du-prd/books/images/9780375842207.jpg",
                "book_image_width": 321,
                "book_image_height": 495,
                "book_review_link": "https://www.nytimes.com/2006/03/27/books/27masl.html",
                "contributor": "by Markus Zusak",
                "contributor_note": "",
                "created_date": "2021-11-03 23:05:03",
                "description": "",
                "first_chapter_link": "",
                "price": "0.00",
                "primary_isbn10": "0375842209",
                "primary_isbn13": "9780375842207",
                "book_uri": "nyt://book/535c6937-87ea-5803-a820-cc3cb3114056",
                "publisher": "Knopf",
                "rank": 5,
                "rank_last_week": 0,
                "sunday_review_link": "https://www.nytimes.com/2006/05/14/books/review/14greenj.html",
                "title": "THE BOOK THIEF",
                "updated_date": "2021-11-03 23:05:03",
                "weeks_on_list": 0,
                "buy_links": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.com/The-Book-Thief-Markus-Zusak/dp/0375842209?tag=NYTBSREV-20"
                    },
                    {
                        "name": "Apple Books",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/buy?title=THE+BOOK+THIEF&author=Markus+Zusak"
                    },
                    {
                        "name": "Barnes and Noble",
                        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780375842207"
                    },
                    {
                        "name": "Books-A-Million",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBOOK%252BTHIEF%252FMarkus%252BZusak%252F9780375842207&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBOOK%252BTHIEF%252BMarkus%252BZusak"
                    },
                    {
                        "name": "Bookshop",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780375842207&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Fkeywords%3DTHE%2BBOOK%2BTHIEF"
                    },
                    {
                        "name": "IndieBound",
                        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780375842207%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBOOK%2BTHIEF%2BMarkus%2BZusak%26aff%3DNYT"
                    }
                ]
            }
        ]
    }
]