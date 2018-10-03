import axios from "axios";
import MockAdapter from "axios-mock-adapter";


if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios)

    mock
        .onGet('/accounts').reply( () => {
            return (
                [
                    200,
                    [
                        {
                            id: 100,
                            title: 'BG56BUIN65431544786321',
                            balance: 342,
                            currency: 'EUR'
                        },
                        {
                            id: 101,
                            title: 'BG56BUIN65431544786321',
                            balance: 900,
                            currency: 'BGN'
                        }
                    ]
                ]
            )
        })

    .onPost('/accounts').reply(config => {
        const data = JSON.parse(config.data)
        // if(data.title.match(/^[BG]*[0-9]{2}[BUIN]*[0-9]{14}$/)) {
            return [201, data];
        // }
    })

    .onDelete('/accounts').reply((config) => {
        const data = JSON.parse(config.data)
        return [204, data];
    })
} 
