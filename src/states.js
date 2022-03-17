import { atom } from "recoil";

export const searchQueryState = atom({
    key: "searchQueryState",
    default: "",
});

export const totalNumState = atom({
    key: "totalNumState",
    default: 0,
});
export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});
export const bookDataState = atom({
    key: "bookDataState",
    default: {
        kind: "books#volumes",
        totalItems: 367,
        items: [
            {
                kind: "books#volume",
                id: "8Pr_kLFxciYC",
                etag: "TrNZRzay1G4",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC",
                volumeInfo: {
                    title: "Flowers For Algernon",
                    subtitle: "A Modern Literary Classic",
                    authors: ["Daniel Keyes"],
                    publisher: "Hachette UK",
                    publishedDate: "2012-11-15",
                    description:
                        "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
                    industryIdentifiers: [
                        {
                            type: "ISBN_13",
                            identifier: "9780575088498",
                        },
                        {
                            type: "ISBN_10",
                            identifier: "0575088494",
                        },
                    ],
                    readingModes: {
                        text: true,
                        image: false,
                    },
                    pageCount: 224,
                    printType: "BOOK",
                    categories: ["Fiction"],
                    averageRating: 5,
                    ratingsCount: 4,
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: true,
                    contentVersion: "0.14.17.0.preview.2",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    },
                    language: "en",
                    previewLink:
                        "http://books.google.co.kr/books?id=8Pr_kLFxciYC&pg=PT240&dq=flowers+inauthor:keyes&hl=&cd=4&source=gbs_api",
                    infoLink:
                        "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api",
                    canonicalVolumeLink:
                        "https://play.google.com/store/books/details?id=8Pr_kLFxciYC",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "FOR_SALE",
                    isEbook: true,
                    listPrice: {
                        amount: 13292,
                        currencyCode: "KRW",
                    },
                    retailPrice: {
                        amount: 11963,
                        currencyCode: "KRW",
                    },
                    buyLink:
                        "https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api",
                    offers: [
                        {
                            finskyOfferType: 1,
                            listPrice: {
                                amountInMicros: 13292000000,
                                currencyCode: "KRW",
                            },
                            retailPrice: {
                                amountInMicros: 11963000000,
                                currencyCode: "KRW",
                            },
                        },
                    ],
                },
                accessInfo: {
                    country: "KR",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: true,
                        acsTokenLink:
                            "http://books.google.co.kr/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "I stare inward in the center of my unseeing eye at the red spot that transforms itself into a multipetaled \u003cb\u003eflower\u003c/b\u003e – the shimmering, swirling, luminescent \u003cb\u003eflower\u003c/b\u003e that lies deep in the core of my unconscious. I am shrinking.",
                },
            },
            {
                kind: "books#volume",
                id: "gK98gXR8onwC",
                etag: "VxotE9/K0sU",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
                volumeInfo: {
                    title: "Flowers for Algernon",
                    subtitle: "A One-act Play",
                    authors: ["David Rogers", "Daniel Keyes"],
                    publisher: "Dramatic Publishing",
                    publishedDate: "1969",
                    industryIdentifiers: [
                        {
                            type: "ISBN_10",
                            identifier: "0871293870",
                        },
                        {
                            type: "ISBN_13",
                            identifier: "9780871293879",
                        },
                    ],
                    readingModes: {
                        text: false,
                        image: true,
                    },
                    pageCount: 32,
                    printType: "BOOK",
                    categories: ["American drama"],
                    averageRating: 5,
                    ratingsCount: 1,
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "0.1.2.0.preview.1",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    },
                    language: "en",
                    previewLink:
                        "http://books.google.co.kr/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=5&source=gbs_api",
                    infoLink:
                        "http://books.google.co.kr/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    canonicalVolumeLink:
                        "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false,
                },
                accessInfo: {
                    country: "KR",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "\u003cb\u003eFLOWERS\u003c/b\u003e FOR ALGERNON A One - act Play For Four Men And One Woman * CHARACTERS DR . STRAUSS a young neurosurgeon PROFESSOR NEMUR .his older colleague ALICE KINNIAN .. ... a young , dedicated teacher BURT SELDON a young laboratory&nbsp;...",
                },
            },
            {
                kind: "books#volume",
                id: "9ygPPQAACAAJ",
                etag: "ZtXKC6olE2M",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/9ygPPQAACAAJ",
                volumeInfo: {
                    title: "Flores para Algernon",
                    authors: ["Daniel Keyes"],
                    publisher: "Ediciones Sm",
                    publishedDate: "2004",
                    description:
                        'Charlie Gordon, a youth with limited mental capabilities, along with a laboratory rat named Algernon become the the joint objects of a scientific alteration to see if Charlie can become "normal."',
                    industryIdentifiers: [
                        {
                            type: "ISBN_10",
                            identifier: "8467503483",
                        },
                        {
                            type: "ISBN_13",
                            identifier: "9788467503487",
                        },
                    ],
                    readingModes: {
                        text: false,
                        image: false,
                    },
                    pageCount: 91,
                    printType: "BOOK",
                    categories: ["Comics & Graphic Novels"],
                    averageRating: 5,
                    ratingsCount: 1,
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "preview-1.0.0",
                    comicsContent: true,
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=9ygPPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=9ygPPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                    },
                    language: "es",
                    previewLink:
                        "http://books.google.co.kr/books?id=9ygPPQAACAAJ&dq=flowers+inauthor:keyes&hl=&cd=6&source=gbs_api",
                    infoLink:
                        "http://books.google.co.kr/books?id=9ygPPQAACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    canonicalVolumeLink:
                        "https://books.google.com/books/about/Flores_para_Algernon.html?hl=&id=9ygPPQAACAAJ",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false,
                },
                accessInfo: {
                    country: "KR",
                    viewability: "NO_PAGES",
                    embeddable: false,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=9ygPPQAACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "NONE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "Charlie Gordon, a youth with limited mental capabilities, along with a laboratory rat named Algernon become the the joint objects of a scientific alteration to see if Charlie can become &quot;normal.&quot;",
                },
            },
            {
                kind: "books#volume",
                id: "PDTD2hPNcjAC",
                etag: "I80JNZ0mFsE",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/PDTD2hPNcjAC",
                volumeInfo: {
                    title: "Algernon, Charlie, And I",
                    subtitle: "A Writer's Journey",
                    authors: ["Daniel Keyes"],
                    publisher: "HarperCollins",
                    publishedDate: "2004-09-01",
                    description:
                        "In Flowers for Algernon, Daniel Keyes created an unlikely duo-a laboratory mouse and a man-who captured the hearts of millions of readers around the world. Now, in Algernon, Charlie, and I, Keyes reveals his methods of creating fiction as well as the heartbreaks and joys of being published. With admirable insight he shares with readers, writers, teachers, and students the creative life behind his classic novel, included here in its original short-story form. All those who love stories, storytelling, and the remarkable characters of Charlie and Algernon will delight in accompanying their creator on this inspirational voyage of discovery.",
                    industryIdentifiers: [
                        {
                            type: "ISBN_13",
                            identifier: "9780547564081",
                        },
                        {
                            type: "ISBN_10",
                            identifier: "0547564082",
                        },
                    ],
                    readingModes: {
                        text: true,
                        image: false,
                    },
                    pageCount: 228,
                    printType: "BOOK",
                    categories: ["Biography & Autobiography"],
                    averageRating: 4,
                    ratingsCount: 3,
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: true,
                    contentVersion: "1.8.8.0.preview.2",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=PDTD2hPNcjAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=PDTD2hPNcjAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    },
                    language: "en",
                    previewLink:
                        "http://books.google.co.kr/books?id=PDTD2hPNcjAC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=7&source=gbs_api",
                    infoLink:
                        "https://play.google.com/store/books/details?id=PDTD2hPNcjAC&source=gbs_api",
                    canonicalVolumeLink:
                        "https://play.google.com/store/books/details?id=PDTD2hPNcjAC",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "FOR_SALE",
                    isEbook: true,
                    listPrice: {
                        amount: 16304,
                        currencyCode: "KRW",
                    },
                    retailPrice: {
                        amount: 14674,
                        currencyCode: "KRW",
                    },
                    buyLink:
                        "https://play.google.com/store/books/details?id=PDTD2hPNcjAC&rdid=book-PDTD2hPNcjAC&rdot=1&source=gbs_api",
                    offers: [
                        {
                            finskyOfferType: 1,
                            listPrice: {
                                amountInMicros: 16304000000,
                                currencyCode: "KRW",
                            },
                            retailPrice: {
                                amountInMicros: 14674000000,
                                currencyCode: "KRW",
                            },
                        },
                    ],
                },
                accessInfo: {
                    country: "KR",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
                    epub: {
                        isAvailable: true,
                        acsTokenLink:
                            "http://books.google.co.kr/books/download/Algernon_Charlie_And_I-sample-epub.acsm?id=PDTD2hPNcjAC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=PDTD2hPNcjAC&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "Now, in Algernon, Charlie, and I, Keyes reveals his methods of creating fiction as well as the heartbreaks and joys of being published.",
                },
            },
            {
                kind: "books#volume",
                id: "gK98gXR8onwC",
                etag: "95wL3ufx9Dk",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
                volumeInfo: {
                    title: "Flowers for Algernon",
                    subtitle: "A One-act Play",
                    authors: ["David Rogers", "Daniel Keyes"],
                    publisher: "Dramatic Publishing",
                    publishedDate: "1969",
                    industryIdentifiers: [
                        {
                            type: "ISBN_10",
                            identifier: "0871293870",
                        },
                        {
                            type: "ISBN_13",
                            identifier: "9780871293879",
                        },
                    ],
                    readingModes: {
                        text: false,
                        image: true,
                    },
                    pageCount: 32,
                    printType: "BOOK",
                    categories: ["American drama"],
                    averageRating: 5,
                    ratingsCount: 1,
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "0.1.2.0.preview.1",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                    },
                    language: "en",
                    previewLink:
                        "http://books.google.co.kr/books?id=gK98gXR8onwC&printsec=frontcover&dq=flowers+inauthor:keyes&hl=&cd=8&source=gbs_api",
                    infoLink:
                        "http://books.google.co.kr/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    canonicalVolumeLink:
                        "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false,
                },
                accessInfo: {
                    country: "KR",
                    viewability: "PARTIAL",
                    embeddable: true,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "SAMPLE",
                    quoteSharingAllowed: false,
                },
            },
            {
                kind: "books#volume",
                id: "LRlCAAAAYAAJ",
                etag: "APJZfZzysvM",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/LRlCAAAAYAAJ",
                volumeInfo: {
                    title: "Some Environmental Factors Influencing Bud Formation, Abscission and Flower Production of Gardenias",
                    authors: ["Curtis Gilbert Keyes"],
                    publishedDate: "1946",
                    industryIdentifiers: [
                        {
                            type: "OTHER",
                            identifier: "CORNELL:31924002987646",
                        },
                    ],
                    readingModes: {
                        text: false,
                        image: false,
                    },
                    pageCount: 190,
                    printType: "BOOK",
                    categories: ["Gardenia"],
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "0.2.2.0.preview.0",
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=LRlCAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=LRlCAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                    },
                    language: "en",
                    previewLink:
                        "http://books.google.co.kr/books?id=LRlCAAAAYAAJ&q=flowers+inauthor:keyes&dq=flowers+inauthor:keyes&hl=&cd=9&source=gbs_api",
                    infoLink:
                        "http://books.google.co.kr/books?id=LRlCAAAAYAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    canonicalVolumeLink:
                        "https://books.google.com/books/about/Some_Environmental_Factors_Influencing_B.html?hl=&id=LRlCAAAAYAAJ",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false,
                },
                accessInfo: {
                    country: "KR",
                    viewability: "NO_PAGES",
                    embeddable: false,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=LRlCAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "NONE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "Heinicze, A. J. Factors influoncing the abscission of \u003cb\u003eflower\u003c/b\u003e and partially developed fruits of tho apple (oyrus alus L.). Cornell Univ. Agr. Exp. Sta. Bul. 393, 1917. Jones, L. I. Rolation of soil temperature to chlorosis of Gardenia.",
                },
            },
            {
                kind: "books#volume",
                id: "KY_-oAEACAAJ",
                etag: "k6iMTKxd1gQ",
                selfLink:
                    "https://www.googleapis.com/books/v1/volumes/KY_-oAEACAAJ",
                volumeInfo: {
                    title: "Flores Para Algernon",
                    authors: ["Daniel Keyes"],
                    publisher: "Turtleback Books",
                    publishedDate: "2001-01-01",
                    description:
                        "Mentally handicapped Charlie Gordon participates in an experiment which turns him into a genius temporarily.",
                    industryIdentifiers: [
                        {
                            type: "ISBN_10",
                            identifier: "0606340181",
                        },
                        {
                            type: "ISBN_13",
                            identifier: "9780606340182",
                        },
                    ],
                    readingModes: {
                        text: false,
                        image: false,
                    },
                    pageCount: 91,
                    printType: "BOOK",
                    categories: ["Juvenile Fiction"],
                    maturityRating: "NOT_MATURE",
                    allowAnonLogging: false,
                    contentVersion: "preview-1.0.0",
                    imageLinks: {
                        smallThumbnail:
                            "http://books.google.com/books/content?id=KY_-oAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        thumbnail:
                            "http://books.google.com/books/content?id=KY_-oAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                    },
                    language: "es",
                    previewLink:
                        "http://books.google.co.kr/books?id=KY_-oAEACAAJ&dq=flowers+inauthor:keyes&hl=&cd=10&source=gbs_api",
                    infoLink:
                        "http://books.google.co.kr/books?id=KY_-oAEACAAJ&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
                    canonicalVolumeLink:
                        "https://books.google.com/books/about/Flores_Para_Algernon.html?hl=&id=KY_-oAEACAAJ",
                },
                saleInfo: {
                    country: "KR",
                    saleability: "NOT_FOR_SALE",
                    isEbook: false,
                },
                accessInfo: {
                    country: "KR",
                    viewability: "NO_PAGES",
                    embeddable: false,
                    publicDomain: false,
                    textToSpeechPermission: "ALLOWED",
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    webReaderLink:
                        "http://play.google.com/books/reader?id=KY_-oAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    accessViewStatus: "NONE",
                    quoteSharingAllowed: false,
                },
                searchInfo: {
                    textSnippet:
                        "Mentally handicapped Charlie Gordon participates in an experiment which turns him into a genius temporarily.",
                },
            },
        ],
    },
});

export const pageState = atom({
    key: "pageState",
    default: 0,
});
export const bookDetailState = atom({
    key: "bookDetailState",
    default: {
        kind: "books#volume",
        id: "tlvEAwAAQBAJ",
        etag: "9jsS7861J1A",
        selfLink: "https://www.googleapis.com/books/v1/volumes/tlvEAwAAQBAJ",
        volumeInfo: {
            title: "GREAT COMPANY 500",
            subtitle: "세계 명문기업들의 흥망성쇠",
            authors: ["린 피어슨 도티", "래리 슈에이카트"],
            publisher: "Time Content",
            publishedDate: "2010-09-10",
            description:
                "500개의 기업 역사가 보여주는 ‘오래된 미래’ 과거로부터 학습하고 흥망성쇠로부터 배우라! 글로벌 경제가 확대되면서 모든 기업들이 전보다 훨씬 많은 위험과 경쟁에 노출되어 있는 지금, 우리는 과거로부터 무엇을 배울 수 있을까? 저자는 지난 400여 년간 흥망성쇠를 거듭하며 현대 비즈니스를 탄생시킨 기업가들의 궤적을 따라간다. 500개에 달하는 드라마틱한 기업 역사를 바라보며 그 안에서 배울 수 있는 '오래된 미래'를 제시하는 것이다. 무일푼의 이민자부터 하버드 MBA까지 온갖 배경에서 출몰한 기업가, 그리고 제조업에서 금융산업, 유통업, 오늘날 정보혁명의 주역이 된 신흥기업에 이르기까지. 이 책에는 다채로운 기업가들이 등장한다. 특히 '대공황 시기에 줄줄이 파산을 면치 못한 기업가들과 대공황이라는 직격탄을 맞고도 성공리에 장편 만화를 무대에 올린 월트 디즈니 사이에는 어떤 차이가 있을까?', '19세기 말~20세기 초에 활약했던 존 D. 록펠러, 앤드루 카네기, 코넬리우스 밴더빌트 등은 어떻게 미국 부의 초석을 다졌을까?', '역사를 통틀어 최초로 모든 기업, 게다가 전 인류의 라이프스타일에 영향을 준 헨리 릴런드의 ‘캐딜락’은 어떤 역경을 딛고 탄생했는가?' 등의 질문에 답해가는 과정은 매우 흥미롭게 다가온다. 100년 장수 기업이 한순간에 역사의 뒤안길로 침몰하는가 하면 새로운 기업이 전 세계를 호령하는 강자로 떠올랐다. 흥망이 교차하는 기업 역사에 서 있는 이 순간. 당신은 지금 어디쯤 와 있으며, 한 치 앞도 내다보기 힘든 대격변의 시기에 새로운 미래의 역사를 어떻게 준비하고 있는가? 책에서 살펴본 그들의 예를 통해 앞으로 다가올 100년이란 시간 앞에 새로운 성장 동력 찾기에 골몰하는 기업이나 그 밑그림을 그리고자 하는 기업가들에게 이 책은 시사점을 전달하고 있다.",
            industryIdentifiers: [
                {
                    type: "ISBN_13",
                    identifier: "9788963898476",
                },
                {
                    type: "ISBN_10",
                    identifier: "8963898474",
                },
            ],
            readingModes: {
                text: true,
                image: true,
            },
            pageCount: 732,
            printType: "BOOK",
            categories: ["Business & Economics"],
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "1.1.1.0.preview.3",
            panelizationSummary: {
                containsEpubBubbles: false,
                containsImageBubbles: false,
            },
            imageLinks: {
                smallThumbnail:
                    "http://books.google.com/books/content?id=tlvEAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                thumbnail:
                    "http://books.google.com/books/content?id=tlvEAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            language: "ko",
            previewLink:
                "http://books.google.co.kr/books?id=tlvEAwAAQBAJ&pg=PT300&dq=great&hl=&cd=4&source=gbs_api",
            infoLink:
                "https://play.google.com/store/books/details?id=tlvEAwAAQBAJ&source=gbs_api",
            canonicalVolumeLink:
                "https://play.google.com/store/books/details?id=tlvEAwAAQBAJ",
        },
        saleInfo: {
            country: "KR",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
                amount: 10000,
                currencyCode: "KRW",
            },
            retailPrice: {
                amount: 9000,
                currencyCode: "KRW",
            },
            buyLink:
                "https://play.google.com/store/books/details?id=tlvEAwAAQBAJ&rdid=book-tlvEAwAAQBAJ&rdot=1&source=gbs_api",
            offers: [
                {
                    finskyOfferType: 1,
                    listPrice: {
                        amountInMicros: 10000000000,
                        currencyCode: "KRW",
                    },
                    retailPrice: {
                        amountInMicros: 9000000000,
                        currencyCode: "KRW",
                    },
                },
            ],
        },
        accessInfo: {
            country: "KR",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
                isAvailable: true,
                acsTokenLink:
                    "http://books.google.co.kr/books/download/GREAT_COMPANY_500-sample-epub.acsm?id=tlvEAwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            pdf: {
                isAvailable: true,
                acsTokenLink:
                    "http://books.google.co.kr/books/download/GREAT_COMPANY_500-sample-pdf.acsm?id=tlvEAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
            },
            webReaderLink:
                "http://play.google.com/books/reader?id=tlvEAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
        },
        searchInfo: {
            textSnippet:
                "유일하게 제임스 J. 힐 (James J. Hill) 의 회사 그레이트 노던 (<b>Great</b> Northern) 을 제외하면, 대다 수 주요 철도회사는 적어도 한 번쯤은 주 정부 혹은 연 방 정부의 원조를 요청한 적이 있었다. 하지만 민간 기 업가가 대중의 철도 수요를 충족시키지&nbsp;...",
        },
    },
});
