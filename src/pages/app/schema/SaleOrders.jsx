
import IUIList from "../../common/IUIList";
import IUIPage from "../../common/IUIPage"

export const ListSaleOrder = () => {

    const schema = {
        module: 'saleOrder',
        title: 'Sale Order Management',
        paging: true,
        searching: true,
        editing: true,
        adding: true,
        fields: [
            { text: 'Order Number', field: 'orderNumber', type: 'link', sorting: true, searching: true },
            { text: 'Date', field: 'date', type: 'date', sorting: true, searching: true },
            { text: 'Customer Name', field: 'customerName', type: 'text', sorting: true, searching: true },
            { text: 'Order Items', field: 'orderItems', type: 'text', sorting: true, searching: true },
        ]
    }


    return (<IUIList schema={schema} />)
}

export const ViewSaleOrder = () => {
    const schema = {
        module: 'saleOrder',
        title: 'Sale Order Management',
        editing: true,
        adding: false,
        back: true,
        readonly: true,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Order Number', field: 'orderNumber', fieldIcon: 'star', placeholder: 'Order Number here...', type: 'text', required: true, width: 6 },
                    { text: 'Order Date', field: 'date', fieldIcon: 'star', placeholder: 'Order Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No.', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [ 
                                { name: 'Cash' },
                                { name: 'Card' },
                            ]
                        }
                     },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },
        ]
    }

    return (<IUIPage schema={schema} />)
}

export const EditSaleOrder = () => {
    const schema = {
        module: 'saleOrder',
        title: 'Sale Order Management',
        back: false,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Order Number', field: 'orderNumber', fieldIcon: 'star', placeholder: 'Order Number here...', type: 'text', required: true, width: 6 },
                    { text: 'Order Date', field: 'date', fieldIcon: 'star', placeholder: 'Order Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No.', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [ 
                                { name: 'Cash' },
                                { name: 'Card' },
                            ]
                        }
                     },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },
        ]
    }

    return (<IUIPage schema={schema} />)
}

export const AddSaleOrder = () => {
    const schema = {
        module: 'saleOrder',
        title: 'Sale Order Management',
        back: false,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Order Number', field: 'orderNumber', fieldIcon: 'star', placeholder: 'Order Number here...', type: 'text', required: true, width: 6 },
                    { text: 'Order Date', field: 'date', fieldIcon: 'star', placeholder: 'Order Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No.', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [ 
                                { name: 'Cash' },
                                { name: 'Card' },
                            ]
                        }
                     },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },
            // {
            //     type: "area", width: 12
            //     , fields: [
            //         { text: 'Invoice Items', field: 'invoiceItems', type: 'invoice-items' },
            //     ]
            // },
        ]
    }

    return (<IUIPage schema={schema} />)
}