import { atom } from "recoil";

export const keywordState = atom({
    key: "keywordState",
    default: "great",
});

export const scopeState = atom({
    key: "scopeState",
    default: "all",
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
