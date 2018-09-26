import axios from "axios";
import MockAdapter from "axios-mock-adapter";


if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios)

    // mock.onPost('/login').reply((response) => {
    //     console.log('i am in a mock1')
    //     const data = JSON.parse(response.data)
    //     if(data.username === 'admin' && data.password === 'admin') {
    //         return ([200, { message: console.log('hi') } ]);
    //     } else {
    //         return([500, { success: false } ]);
    //     }
    // }); 

    mock
        .onGet('/accounts').reply( () => {
            console.log('i am in a mock2')
            return (
                [
                    200, {
                    data: [
                        {
                            id: 1,
                            title: 'BG56BUIN65431544786321',
                            balance: 342,
                            currency: 'USD'
                        },
                    
                        {
                            id: 2,
                            title: 'BG56BUIN64563424786321',
                            balance: 894,
                            currency: 'EUR'
                        },
                    
                        {
                            id: 3,
                            title: 'BG56BUIN65412345686321',
                            balance: 657,
                            currency: 'BGN'
                        }
                    ]
                }
                ]
            )
        })

    .onPost('/accounts').reply(config => {
        const data = JSON.parse(config.data)
        return [201, data];
    })

    .onDelete('/accounts').reply(() => {
        return [204, console.log('delete')];
    })
} 
