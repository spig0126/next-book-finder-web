import styled from "styled-components";
import { Wrap } from "@chakra-ui/react";
import { withRouter } from "next/router";
import Link from "next/link";
function bookDescription({ router: { query } }) {
    // const book = JSON.parse(query.book);
    return (
        <Wrap spacing="0.3rem" align="center">
            <BookImage src={book.smallThumbnail} />
            <Description> {book.description} </Description>
            <Link href={book.buyLink}>
                <a>
                    <Buy>click to buy</Buy>
                </a>
            </Link>
        </Wrap>
    );
}
export default withRouter(bookDescription);
const Description = styled.div``;
const Buy = styled.div``;
const BookImage = styled.img``;

const book = {
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
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=fwk2DwAAQBAJ",
    }
}