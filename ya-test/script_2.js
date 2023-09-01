/**
 * @param {{
 *  urls: [string],
 *  fetcher: (url: string) => Promise,
 *  maximumRetryCount: number
 * }}
 * @returns {Promise<[string]>}
 */
async function solution({ urls, fetcher, maximumRetryCount }) {
  const successfulUrls = [];
  const MAX_CONCURRENT_REQUESTS = 10;
  const DELAY_BETWEEN_REQUESTS = 100;

  for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQUESTS) {
    const currentUrls = urls.slice(i, i + MAX_CONCURRENT_REQUESTS);
    const promises = currentUrls.map((url) =>
      retryFetch(url, fetcher, maximumRetryCount)
    );

    const results = await Promise.allSettled(promises);
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        successfulUrls.push(currentUrls[index]);
      }
    });

    if (i + MAX_CONCURRENT_REQUESTS < urls.length) {
      await new Promise((resolve) =>
        setTimeout(resolve, DELAY_BETWEEN_REQUESTS)
      );
    }
  }

  return successfulUrls;
}

async function retryFetch(url, fetcher, maximumRetryCount) {
  for (let i = 0; i < maximumRetryCount; i++) {
    try {
      await fetcher(url);
      return;
    } catch (error) {
      if (i === maximumRetryCount - 1) {
        throw error;
      }
    }
  }
}

// Возвращает пустой массив
console.log(
  solution({
    urls: [],
    fetcher: (url) => Promise.resolve(url),
    maximumRetryCount: 0,
  })
);
// Вызывает fetcher и возвращает массив urls в правильном порядке
console.log(
  solution({
    urls: ["https://test.com/1", "https://test.com/2", "https://test.com/3"],
    fetcher: (url) => Promise.resolve(url),
    maximumRetryCount: 1,
  })
);
// Поочерёдно выполняем запросы. Пробуем 3 раза перезапросить недоступный адрес.
// Когда заканчивается количество попыток — возвращаем успешно запрошенные адреса
const fetcher = () => (url) => {
  // Иммитируем недоступность адреса
  return url.includes("2") ? Promise.reject() : Promise.resolve(url);
};

console.log(
  solution({
    urls: ["https://test.com/1", "https://test.com/2", "https://test.com/3"],
    fetcher: fetcher(),
    maximumRetryCount: 3,
  })
);
