import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/8dc00502fa820e633e39b46b/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                // Ensure that the response contains data for the specified currency
                setData(res?.conversion_rates);
            })
            .catch((error) => {
                // Handle fetch errors gracefully
                console.error("Error fetching currency data:", error);
            });
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
