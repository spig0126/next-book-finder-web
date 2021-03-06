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
                        "I stare inward in the center of my unseeing eye at the red spot that transforms itself into a multipetaled \u003cb\u003eflower\u003c/b\u003e ??? the shimmering, swirling, luminescent \u003cb\u003eflower\u003c/b\u003e that lies deep in the core of my unconscious. I am shrinking.",
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
            subtitle: "?????? ?????????????????? ????????????",
            authors: ["??? ????????? ??????", "?????? ???????????????"],
            publisher: "Time Content",
            publishedDate: "2010-09-10",
            description:
                "500?????? ?????? ????????? ???????????? ???????????? ????????? ??????????????? ???????????? ????????????????????? ?????????! ????????? ????????? ??????????????? ?????? ???????????? ????????? ?????? ?????? ????????? ????????? ???????????? ?????? ??????, ????????? ??????????????? ????????? ?????? ??? ?????????? ????????? ?????? 400??? ?????? ??????????????? ???????????? ?????? ??????????????? ???????????? ??????????????? ????????? ????????????. 500?????? ????????? ??????????????? ?????? ????????? ???????????? ??? ????????? ?????? ??? ?????? '????????? ??????'??? ???????????? ?????????. ???????????? ??????????????? ????????? MBA?????? ?????? ???????????? ????????? ?????????, ????????? ??????????????? ????????????, ?????????, ????????? ??????????????? ????????? ??? ??????????????? ???????????????. ??? ????????? ???????????? ??????????????? ????????????. ?????? '????????? ????????? ????????? ????????? ?????? ?????? ??????????????? ?????????????????? ???????????? ????????? ???????????? ?????? ????????? ????????? ?????? ?????? ????????? ???????????? ?????? ????????? ??????????', '19?????? ???~20?????? ?????? ???????????? ??? D. ?????????, ????????? ?????????, ??????????????? ???????????? ?????? ????????? ?????? ?????? ????????? ?????????????', '????????? ????????? ????????? ?????? ??????, ????????? ??? ????????? ????????????????????? ????????? ??? ?????? ???????????? ?????????????????? ?????? ????????? ?????? ????????????????' ?????? ????????? ???????????? ????????? ?????? ???????????? ????????????. 100??? ?????? ????????? ???????????? ????????? ???????????? ??????????????? ?????? ????????? ????????? ??? ????????? ???????????? ????????? ????????????. ????????? ???????????? ?????? ????????? ??? ?????? ??? ??????. ????????? ?????? ????????? ??? ?????????, ??? ??? ?????? ???????????? ?????? ???????????? ????????? ????????? ????????? ????????? ????????? ???????????? ?????????? ????????? ????????? ????????? ?????? ?????? ????????? ????????? 100????????? ?????? ?????? ????????? ?????? ?????? ????????? ???????????? ???????????? ??? ???????????? ???????????? ?????? ?????????????????? ??? ?????? ???????????? ???????????? ??????.",
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
                "???????????? ????????? J. ??? (James J. Hill) ??? ?????? ???????????? ?????? (<b>Great</b> Northern) ??? ????????????, ?????? ??? ?????? ??????????????? ????????? ??? ????????? ??? ?????? ?????? ??? ??? ????????? ????????? ????????? ?????? ?????????. ????????? ?????? ??? ????????? ????????? ?????? ????????? ???????????????&nbsp;...",
        },
    },
});
