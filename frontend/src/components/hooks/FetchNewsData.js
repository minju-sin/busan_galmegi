// 뉴스 api 훅 

import { useState, useEffect } from 'react';

function FetchNewsData() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('/news');
                if (!response.ok) {
                    throw new Error('서버로부터 데이터를 가져오는 데 실패하였습니다.');
                }

                const data = await response.json();
                setNewsData(data.items);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNewsData();

    }, []);

    return newsData;
}

export default FetchNewsData;
