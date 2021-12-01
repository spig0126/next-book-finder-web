import BookCard from "./BookCard";

import { Wrap, Text, Flex } from "@chakra-ui/layout";
import styled from "styled-components";

export default function BookFindList() {
    // 2. Use at the root of your app
    //bookList만 api에서 받아온 걸로 수정하면 됨.

    //검색 결과 test
    const input = "Elizabeth"

    const books = bookList.items.map((book, index) => (
            <BookCard key={book.id} index={index} book={book} />
        ));

    return (
        <Flex flexDir="column" py={{base: "1rem", md: "3rem"}} px={{base: "5%", md: "15%"}}>
            <Text fontSize={{ base: "2xl", md: "4xl" }} mb="1rem">"{ input}" search results: {bookList.totalItems}</Text>
            <Wrap name="BookContainer" direction="row" spacing={5}>{books}</Wrap>
        </Flex>
    );
}
const BookContainer = styled.div``;

//test cases
const bookList = {
    "kind": "books#volumes",
    "totalItems": 541,
    "items": [
        {
            "kind": "books#volume",
            "id": "fwk2DwAAQBAJ",
            "etag": "LX82IQspvr4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/fwk2DwAAQBAJ",
            "volumeInfo": {
                "title": "Flower Children빈티지 영어 그림책 01",
                "authors": [
                    "Elizabeth Gordon",
                    "Yeonhee",
                    "Jimin"
                ],
                "publisher": "북테라스",
                "publishedDate": "2016-02-01",
                "description": "* 본문이 모두 원문인 영어로 쓰여 있는 그림 동화책입니다.(‘빈티지 영어 그림책’ 시리즈는 국내에 많이 알려지지 않은 영미권의 오래된 그림책들을 원문 그대로 소개합니다) * Flower Children은 1910년 출판 이후 많은 사랑을 받고 있는 그림책으로 시적 감성이 가득한 Elizabeth Gordon의 글과 M.T. Ross의 매력적인 컬러 일러스트 82컷이 담겨 있습니다. * 특히 아름답게 채색된 그림은 아이들이 꽃을 통해 자연 세계에 대한 호기심을 갖는 작은 선물이며, 어른들에게는 동심의 세계로 돌아간 듯 순수한 감성과 영감을 불러일으키는 멋진 소개자 역할을 할 것입니다.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9791186883068"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.1.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=fwk2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=fwk2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ko",
                "previewLink": "http://books.google.co.kr/books?id=fwk2DwAAQBAJ&pg=PT2&dq=flower)&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=fwk2DwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fwk2DwAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 3000,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 2700,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=fwk2DwAAQBAJ&rdid=book-fwk2DwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 3000000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 2700000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Flower_Children%EB%B9%88%ED%8B%B0%EC%A7%80_%EC%98%81%EC%96%B4_%EA%B7%B8%EB%A6%BC-sample-epub.acsm?id=fwk2DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Flower_Children%EB%B9%88%ED%8B%B0%EC%A7%80_%EC%98%81%EC%96%B4_%EA%B7%B8%EB%A6%BC-sample-pdf.acsm?id=fwk2DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=fwk2DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "To every Child-<b>flower</b> that Blooms Within the Glorious Garden That we Call Home This Little Book is Lovingly Dedicated. F O R E W O R D A <b>flower</b>, a child, and a mother&#39;s heart— These three are never so far apart. A child, a <b>flower</b>,&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "N4UyDwAAQBAJ",
            "etag": "KRqL2LpJP+4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/N4UyDwAAQBAJ",
            "volumeInfo": {
                "title": "Flower Is You",
                "authors": [
                    "Min-K"
                ],
                "publisher": "좋은땅",
                "publishedDate": "2017-08-21",
                "description": "로맨티스트(남자)가 플라워(여자)에게 남자에 대해 이야기 하며 일 깨워 주는 말 등 스토리는 다양하다 가끔 플라워가 말하는 메세지도 볼 수 있다. 본 내용은 작가와 전혀 상관없는 허구적, 창의적 Fiction입니다.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9791159829857"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Poetry"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.1.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=N4UyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=N4UyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ko",
                "previewLink": "http://books.google.co.kr/books?id=N4UyDwAAQBAJ&pg=PT5&dq=flower)&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=N4UyDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=N4UyDwAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 6000,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 5400,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=N4UyDwAAQBAJ&rdid=book-N4UyDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 6000000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 5400000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Flower_Is_You-sample-epub.acsm?id=N4UyDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Flower_Is_You-sample-pdf.acsm?id=N4UyDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=N4UyDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "로맨티스트(남자)가 <b>플라워</b>(여자)에게 남자에 대해 이야기하며 일깨워 주는 말 등 스토리는 다양하다. 가끔 <b>플라워</b>가 말하는 메시지도 볼 수 있다. 본 내용은 작가와 전혀 상관없는 허구적, 창의적Fiction입니다. 1. Hey, <b>Flower</b> 2. LoveThe Rain 1."
            }
        },
        {
            "kind": "books#volume",
            "id": "JEUmDwAAQBAJ",
            "etag": "NXvY/kd1FZg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/JEUmDwAAQBAJ",
            "volumeInfo": {
                "title": "킬 미 플라워 (Kill Me Flower) (무삭제판) 1",
                "authors": [
                    "웨인"
                ],
                "publisher": "에피루스",
                "publishedDate": "2017-06-02",
                "description": "쾌락과 스릴을 사랑하던, 전직 르포 라이터 오질경. G&E 그룹 상무이자 첫사랑의 아픔을 지닌, 백목련. 남자라곤 현직, 전직 범죄자밖에 몰랐던 29살 모솔 질경은 맞선을 보러 나간 자리에서, 우연히 G&E 그룹의 백목련과 엘리베이터에 갇히는 사고를 겪고, 그 뜻밖에 사고 이후, 목련이 질경에게 말도 안 되는 손해배상을 청구하면서, 둘은 얽히고 설키기 시작하는데…… “내가 원할 때 18번을 부르는 거죠. 계약 기간은 전 직장처럼 9년?” “그, 그게 9년은 좀. 조금만 에누리해 주시면. 어떻게 안 되겠습니까? 1년이라도.” “나 그렇게 야박한 사람 아니에요. 흠. 좋아. 선택지를 주죠.” “받아들이거나 혹은…….” “혹은?” “받아들이거나.”",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "PKEY:C20170602B45501"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": false
                },
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.1.1.0.preview.2",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=JEUmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=JEUmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ko",
                "previewLink": "http://books.google.co.kr/books?id=JEUmDwAAQBAJ&pg=PT1&dq=flower)&hl=&cd=3&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=JEUmDwAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=JEUmDwAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 3600,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 3240,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=JEUmDwAAQBAJ&rdid=book-JEUmDwAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 3600000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 3240000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/%ED%82%AC_%EB%AF%B8_%ED%94%8C%EB%9D%BC%EC%9B%8C_Kill_Me_Flower_%EB%AC%B4%EC%82%AD-sample-epub.acsm?id=JEUmDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=JEUmDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "킬 미 <b>플라워</b> (Kill Me <b>Flower</b>)(무삭제판) 1 제작일 | 2017년 06월 01일 지은이 | 웨인 펴낸곳 | 에피루스 전자책값 | 3600원 전자책_(주)블루마운틴소프트 www.ebookclub.co.kr 이 전자책은 저작권법의 보호를 받는 저작물이므로 어떠 한 수단으로도&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "YqcQAQAAMAAJ",
            "etag": "3HQbLo7ObVY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/YqcQAQAAMAAJ",
            "volumeInfo": {
                "title": "Wild Flower",
                "subtitle": "Official National Organ of the Wild Flower Preservation Society, Inc., Washington, D.C.",
                "publishedDate": "1954",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "PSU:000018618150"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "printType": "BOOK",
                "categories": [
                    "Plants, Protection of"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.3.5.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=YqcQAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=YqcQAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=YqcQAQAAMAAJ&q=flower)&dq=flower)&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.co.kr/books?id=YqcQAQAAMAAJ&dq=flower)&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Wild_Flower.html?hl=&id=YqcQAQAAMAAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=YqcQAQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Official National Organ of the Wild <b>Flower</b> Preservation Society, Inc., Washington. BOOKS and CIRCULARS Pictured Key Nature Book*. Living things, how to know them, 434 ill. How to know the trees, 323 ill. Plant families, how to know them&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "ldUfgjOJgT0C",
            "etag": "CuWrK7vg+uQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ldUfgjOJgT0C",
            "volumeInfo": {
                "title": "Flower Children",
                "subtitle": "The Little Cousins of the Field and Garden",
                "authors": [
                    "Elizabeth Gordon",
                    "M. T. Ross"
                ],
                "publisher": "Applewood Books",
                "publishedDate": "2008-02",
                "description": "Published originally in 1910, this charming collection of flower poems and full-color illustrations animates the 82 flowers included in the book. From Crocus to Holly, the flowers are ordered in the book as each would appear throughout the year in a garden. Each illustration is half child and half flower, creating a wonderful way for children to see themselves in the natural world. \"\"All children are flowers in the garden of God's love. A flower is the mystical counterpart of a child. To the understanding heart a child is a flower and a flower is a child. God made flowers on the day that He made the world beautiful. Then He gave the world children to play amid the flowers. God has implanted in the breasts of children a natural love for flowers-and no one who keeps that love in his heart has entirely forsaken the land of childhood.\"\"-from the Foreword",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781557090867"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1557090866"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 96,
                "printType": "BOOK",
                "categories": [
                    "Juvenile Nonfiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.0.0.preview.1",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ldUfgjOJgT0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ldUfgjOJgT0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=ldUfgjOJgT0C&pg=PT10&dq=flower)&hl=&cd=5&source=gbs_api",
                "infoLink": "http://books.google.co.kr/books?id=ldUfgjOJgT0C&dq=flower)&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Flower_Children.html?hl=&id=ldUfgjOJgT0C"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ldUfgjOJgT0C&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "FOREWORD .4 <b>flower</b>, a child, and a mothers heart — These three are never so far apart. A child, a <b>flower</b>, and a mother&#39;s love — This world&#39;s best gifts from the world above. eLL children are <b>flowers</b> in the garden of God&#39;s love."
            }
        },
        {
            "kind": "books#volume",
            "id": "URlCAAAAYAAJ",
            "etag": "XXyMRrwvsNE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/URlCAAAAYAAJ",
            "volumeInfo": {
                "title": "Principles of Flower Arrangement",
                "authors": [
                    "Edward Albert White"
                ],
                "publishedDate": "1936",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "CORNELL:31924003368259"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 199,
                "printType": "BOOK",
                "categories": [
                    "Flower arrangement"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.3.1.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=URlCAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=URlCAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=URlCAAAAYAAJ&q=flower)&dq=flower)&hl=&cd=6&source=gbs_api",
                "infoLink": "http://books.google.co.kr/books?id=URlCAAAAYAAJ&dq=flower)&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Principles_of_Flower_Arrangement.html?hl=&id=URlCAAAAYAAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=URlCAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "171 Exhibitions in America of commercial varieties of cut <b>flowers</b>. ... 100 Expression of sympathy with <b>flowers</b>. ... 19 Japanese <b>flower</b> arrangement, Acquaintance with material used in, 87; appropriateness, 88, 92; combination of species&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "RoxODQAAQBAJ",
            "etag": "YaKK8gLcfAY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/RoxODQAAQBAJ",
            "volumeInfo": {
                "title": "Floret Farm's Cut Flower Garden",
                "subtitle": "Grow, Harvest, and Arrange Stunning Seasonal Blooms",
                "authors": [
                    "Erin Benzakein"
                ],
                "publisher": "Chronicle Books",
                "publishedDate": "2017-03-07",
                "description": "#1 Amazon Best Seller — Welcome to the farm! The Cut Flower Garden: Erin Benzakein is a florist-farmer, leader in the locaflor farm-to-centerpiece movement, and owner of internationally renowned Floret Flower Farm in Washington's lush Skagit Valley. A stunning flower book: This beautiful guide to growing, harvesting, and arranging gorgeous blooms year-round provides readers with vital tools to nurture a stunning flower garden and use their blossoms to create show-stopping arrangements. Floret Farm's Cut Flower Garden: Cut Flower Garden is equal parts instruction and inspiration—a book overflowing with lush photography of magnificent flowers and breathtaking arrangements organized by season. Find inspiration in this lush flower book: Irresistible photos of Erin's flower farm that showcase exquisite blooms Tips for growing in a variety of spaces and climates Step-by-step instructions for lavish garlands, airy centerpieces, and romantic floral décor for every season If you liked Paris in Bloom, you'll love Floret Farm's Cut Flower Garden.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781452150932"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1452150931"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 308,
                "printType": "BOOK",
                "categories": [
                    "Gardening"
                ],
                "averageRating": 4,
                "ratingsCount": 11,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.6.7.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=RoxODQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=RoxODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=RoxODQAAQBAJ&pg=PA10&dq=flower)&hl=&cd=7&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=RoxODQAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=RoxODQAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 26227,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 23604,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=RoxODQAAQBAJ&rdid=book-RoxODQAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 26227000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 23604000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Floret_Farm_s_Cut_Flower_Garden-sample-epub.acsm?id=RoxODQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/Floret_Farm_s_Cut_Flower_Garden-sample-pdf.acsm?id=RoxODQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=RoxODQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "into my My time is now spent growing, teaching, and sharing the beauty of <b>flowers</b> with people all over the world. Those first two rows of sweet peas have since turned into Floret Farm, a thriving <b>flower</b> farm that supplies shops,&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "7PYREAAAQBAJ",
            "etag": "P4YfNLR99E8",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/7PYREAAAQBAJ",
            "volumeInfo": {
                "title": "The RHS Book of Flower Poetry and Prose",
                "authors": [
                    "Charles Elliott"
                ],
                "publisher": "Frances Lincoln",
                "publishedDate": "2021-03-09",
                "description": "Artists and writers have always been drawn to flowers, as sources of inspiration, for simple enjoyment, and flowers themselves have been the muses for many of our greatest and most memorable works of art. This volume brings together the best flower poetry and prose from a broad range of writers, from Shakespeare and Milton, to Reginald Farrer and Edward Augustus Bowles, to twentieth-century poets such as Marianne Moore and Theodore Roethke. Wild and garden flowers are here explored in all their moods and mysteries. The poems and extracts are illustrated with botanical art from the Royal Horticultural Society’s Lindley Library, acknowledged as the world’s finest horticultural library. Addison • Betjeman • Bowles • Bradley and Cooper • Burns • Burroughs • Capek • Carroll • Clare • Colette • Crabbe • Ellacombe • Farrer • Fish • Gerard • Gilbert • Hanmer • Hardy • Hopkins • Housman • Hudson • Hunt • Jekyll • Johnson • Lawrence • Longfellow • Marvell • Milton • Mitchell • Moore • Parkinson • Pitter • Plunkett • Ridler • Roethke • Rohde • Rossetti • Sackville West • Seward • Shakespeare • Silkin • Sitwell • Stevenson • Swinburne • Thomas • Williams • Williamson • Wither • Wordsworth",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780711261976"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0711261970"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 148,
                "printType": "BOOK",
                "categories": [
                    "Gardening"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "2.2.2.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=7PYREAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=7PYREAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=7PYREAAAQBAJ&pg=PA30&dq=flower)&hl=&cd=8&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 15472,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 13925,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=7PYREAAAQBAJ&rdid=book-7PYREAAAQBAJ&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 15472000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 13925000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/The_RHS_Book_of_Flower_Poetry_and_Prose-sample-epub.acsm?id=7PYREAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/The_RHS_Book_of_Flower_Poetry_and_Prose-sample-pdf.acsm?id=7PYREAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=7PYREAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "The other fritillary of which I must speak as one of the grandest of April <b>flowers</b> – I might almost say one of the grandest <b>flowers</b> of the year – is the great fritillary, the Crown Imperial. It is a native of Persia, Afghanistan and&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "kv_yDwAAQBAJ",
            "etag": "pH1089ZPBpA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/kv_yDwAAQBAJ",
            "volumeInfo": {
                "title": "The American Flower Garden Directory",
                "authors": [
                    "Hibbert and Buist"
                ],
                "publisher": "BoD – Books on Demand",
                "publishedDate": "2020-07-25",
                "description": "Reproduction of the original: The American Flower Garden Directory by Hibbert and Buist",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9783752336993"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "3752336994"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 224,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=kv_yDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=kv_yDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=kv_yDwAAQBAJ&pg=PA63&dq=flower)&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.co.kr/books?id=kv_yDwAAQBAJ&dq=flower)&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_American_Flower_Garden_Directory.html?hl=&id=kv_yDwAAQBAJ"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=kv_yDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "They are all fine evergreens, (which the name denotes,) and easily cultivated, Lìnums, Flax, two or three species are very fine, and <b>flower</b> freely. L. trigynum has large yellow <b>flowers</b> in clusters, and L. ascyrifôlium, whose <b>flowers</b> are&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "U5UDLFF_SIYC",
            "etag": "8div59giemk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/U5UDLFF_SIYC",
            "volumeInfo": {
                "title": "A Flower's Stem",
                "subtitle": "A Special Story About a Special Woman with a Very Special Kind of Love",
                "authors": [
                    "Samuel Kigelman"
                ],
                "publisher": "Author House",
                "publishedDate": "2005-09-23",
                "description": "<p>After winning the local lottery and moving to Boston with husband and teenage son, a beautiful high school teacher is haunted by mysterious visions. As she looks for answers, she runs into a strange-looking man in a coffee shop who gives her a flower and a business card without a name. Not long after, she notices a boy in her class with the same flower for a bookmark. As tragedy falls upon her, the woman is left short on hope. She approaches the boy trying to understand the meaning of the flower, and what follows turns both their worlds upside down.</p>",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1463449763"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781463449766"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 130,
                "printType": "BOOK",
                "categories": [
                    "Fiction"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.5.4.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=U5UDLFF_SIYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=U5UDLFF_SIYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.co.kr/books?id=U5UDLFF_SIYC&pg=PA31&dq=flower)&hl=&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=U5UDLFF_SIYC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=U5UDLFF_SIYC"
            },
            "saleInfo": {
                "country": "KR",
                "saleability": "FOR_SALE",
                "isEbook": true,
                "listPrice": {
                    "amount": 4988,
                    "currencyCode": "KRW"
                },
                "retailPrice": {
                    "amount": 4489,
                    "currencyCode": "KRW"
                },
                "buyLink": "https://play.google.com/store/books/details?id=U5UDLFF_SIYC&rdid=book-U5UDLFF_SIYC&rdot=1&source=gbs_api",
                "offers": [
                    {
                        "finskyOfferType": 1,
                        "listPrice": {
                            "amountInMicros": 4988000000,
                            "currencyCode": "KRW"
                        },
                        "retailPrice": {
                            "amountInMicros": 4489000000,
                            "currencyCode": "KRW"
                        }
                    }
                ]
            },
            "accessInfo": {
                "country": "KR",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/A_Flower_s_Stem-sample-epub.acsm?id=U5UDLFF_SIYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.co.kr/books/download/A_Flower_s_Stem-sample-pdf.acsm?id=U5UDLFF_SIYC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=U5UDLFF_SIYC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Take a look at that <b>flower</b> for an instant, the one you&#39;re hiding in your coat. It&#39;s not from your husband, ... And I can&#39;t expect him to buy me <b>flowers</b> every day, now, can I.” He raised his eye brows in reply. “Well, let me ask you this&nbsp;..."
            }
        }
    ]
}