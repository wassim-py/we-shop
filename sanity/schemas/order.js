export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            options: {
                maxLength: 40
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            options: {
                maxLength: 10
            }
        },
        {
            name: 'fullAddress',
            title: 'Full Address',
            type: 'string',
            options: {
                maxLength: 100
            }
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
    ]
}