
import IUIList from "../../common/IUIList";
import IUIInvoiceItems from "../../common/shared/IUIInvoiceItems";
import IUIPage from "../../common/IUIPage"

export const ListInvoice = () => {

    const schema = {
        module: 'invoice',
        title: 'Invoice Management',
        paging: true,
        searching: true,
        editing: true,
        adding: true,
        fields: [
            { text: 'Invoice ID', field: 'name', type: 'link', sorting: true, searching: true },
            { text: 'Customer Name', field: 'customerName', type: 'text', sorting: true, searching: true },
            { text: 'Phone No.', field: 'phoneNo', type: 'phone', sorting: true, searching: true },
            { text: 'Payment Mode', field: 'paymentMode', type: 'text', sorting: true, searching: true },
            { text: 'Invoice Date', field: 'invoiceDate', type: 'date', sorting: true, searching: true },
        ]
    }


    return (<IUIList schema={schema} />)
}

export const ViewInvoice = () => {
    const schema = {
        module: 'invoice',
        title: 'Invoice Management',
        editing: true,
        adding: false,
        back: true,
        readonly: true,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Invoice No.', field: 'name', fieldIcon: 'star', placeholder: 'Invoice ID here...', type: 'text', required: true, width: 6 },
                    { text: 'Invoice Date', field: 'invoiceDate', fieldIcon: 'star', placeholder: 'Invoice Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No./ GST', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'State', field: 'state', fieldIcon: 'star', placeholder: 'State here...', type: 'text', required: false, width: 6 },
                    {
                        text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [
                                { name: 'Cash' },
                                { name: 'Card' },
                                { name: 'Cheque' }
                            ]
                        }
                    },
                    { text: 'Discount Amount', field: 'discountAmount', fieldIcon: 'star', placeholder: 'Discount Amount...', type: 'text', required: true, width: 6 },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },
            {
                type: "area", width: 12
                , fields: [
                    {
                        type: 'module-relation',
                        schema: {
                            module: 'invoiceItem',
                            relationKey: "invoiceId",
                            title: 'Invoice Items',
                            paging: false,
                            searching: false,
                            editing: true,
                            adding: true,

                            fields: [
                                { text: 'Item', field: 'item', fieldIcon: 'star', placeholder: 'Item here...', type: 'text', required: true, width: 3 },
                                { text: 'Quantity', field: 'quantity', fieldIcon: 'star', placeholder: 'Quantity here...', type: 'text', required: true, width: 3 },
                                { text: 'Weight(gms)', field: 'weight', fieldIcon: 'star', placeholder: 'Weight here...', type: 'text', required: true, width: 3 },
                                { text: 'Rate[per Item]/Date', field: 'rate', fieldIcon: 'star', placeholder: 'Rate here...', type: 'text', required: true, width: 3 },
                                { text: 'HSN Code', field: 'hsnCode', fieldIcon: 'star', placeholder: 'HSN Code here..', type: 'text', required: true, width: 3 },
                                { text: 'SGST', field: 'sgst', fieldIcon: 'star', placeholder: 'SGST here...', type: 'text', required: false, width: 3 },
                                { text: 'CGST', field: 'cgst', fieldIcon: 'star', placeholder: 'CGST here...', type: 'text', required: false, width: 3 },
                                { text: 'Making Charge', field: 'makingCharge', fieldIcon: 'star', placeholder: 'Making Charge...', type: 'text', required: true, width: 3 },
                                { text: 'Additional Charge', field: 'addCharge', fieldIcon: 'star', placeholder: 'Additional Charge...', type: 'text', required: true, width: 3 },
                                { text: 'H. Mark Charge', field: 'hmCharge', fieldIcon: 'star', placeholder: 'H. Mark Charge...', type: 'text', required: true, width: 3 },
                            ]
                        },
                    }
                ]
            }
        ]
    }

    return (<IUIPage schema={schema} />)
}

export const EditInvoice = () => {
    const schema = {
        module: 'invoice',
        title: 'Invoice Management',
        back: false,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Invoice No.', field: 'name', fieldIcon: 'star', placeholder: 'Invoice ID here...', type: 'text', required: true, width: 6 },
                    { text: 'Invoice Date', field: 'invoiceDate', fieldIcon: 'star', placeholder: 'Invoice Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No./ GST', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'State', field: 'state', fieldIcon: 'star', placeholder: 'State here...', type: 'text', required: false, width: 6 },
                    {
                        text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [
                                { name: 'Cash' },
                                { name: 'Card' },
                                { name: 'Cheque' }
                            ]
                        }
                    },
                    { text: 'Discount Amount', field: 'discountAmount', fieldIcon: 'star', placeholder: 'Discount Amount...', type: 'text', required: true, width: 6 },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },
        ]
    }

    return (<IUIPage schema={schema} />)
}

export const AddInvoice = () => {
    const schema = {
        module: 'invoice',
        title: 'Invoice Management',
        back: false,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Invoice No.', field: 'name', fieldIcon: 'star', placeholder: 'Invoice ID here...', type: 'text', required: true, width: 6 },
                    { text: 'Invoice Date', field: 'invoiceDate', fieldIcon: 'star', placeholder: 'Invoice Date here...', type: 'date', required: true, width: 6 },
                    { text: 'Phone No.', field: 'phoneNo', fieldIcon: 'star', placeholder: 'Phone No. here...', type: 'text', required: true, width: 6 },
                    { text: 'Customer Name', field: 'customerName', fieldIcon: 'star', placeholder: 'Customer Name here...', type: 'text', required: true, width: 6 },
                    { text: 'PAN No./ GST', field: 'panNo', fieldIcon: 'star', placeholder: 'PAN NO. here..', type: 'text', required: true, width: 6 },
                    { text: 'State', field: 'state', fieldIcon: 'star', placeholder: 'State here...', type: 'text', required: false, width: 6 },
                    {
                        text: 'Payment Mode', field: 'paymentMode', fieldIcon: 'star', placeholder: 'Payment Mode here...', type: 'lookup', required: true, width: 6,
                        schema: {
                            items: [
                                { name: 'Cash' },
                                { name: 'Card' },
                                { name: 'Cheque' }
                            ]
                        }
                    },
                    { text: 'Discount Amount', field: 'discountAmount', fieldIcon: 'star', placeholder: 'Discount Amount...', type: 'text', required: true, width: 6 },
                    { text: 'Address', field: 'address', fieldIcon: 'star', placeholder: 'Address here...', type: 'textarea', required: true, width: 12 },
                ]
            },




        ]
    }

    return (<>
        <IUIPage schema={schema} />
        {/* <AddInvoiceItem /> */}
    </>)

}

export const AddInvoiceItem = () => {
    const schema = {
        module: 'invoiceItem',
        title: 'Invoice Item',
        back: false,
        fields: [
            {
                type: "area", width: 12
                , fields: [
                    { text: 'Item', field: 'item', fieldIcon: 'star', placeholder: 'Item here...', type: 'text', required: true, width: 3 },
                    { text: 'Quantity', field: 'quantity', fieldIcon: 'star', placeholder: 'Quantity here...', type: 'text', required: true, width: 3 },
                    { text: 'Weight(gms)', field: 'weight', fieldIcon: 'star', placeholder: 'Weight here...', type: 'text', required: true, width: 3 },
                    { text: 'Rate[per Item]/Date', field: 'rate', fieldIcon: 'star', placeholder: 'Rate here...', type: 'text', required: true, width: 3 },
                    { text: 'HSN Code', field: 'hsnCode', fieldIcon: 'star', placeholder: 'HSN Code here..', type: 'text', required: true, width: 3 },
                    { text: 'SGST', field: 'sgst', fieldIcon: 'star', placeholder: 'SGST here...', type: 'text', required: false, width: 3 },
                    { text: 'CGST', field: 'cgst', fieldIcon: 'star', placeholder: 'CGST here...', type: 'text', required: false, width: 3 },
                    { text: 'Making Charge', field: 'makingCharge', fieldIcon: 'star', placeholder: 'Making Charge...', type: 'text', required: true, width: 3 },
                    { text: 'Additional Charge', field: 'addCharge', fieldIcon: 'star', placeholder: 'Additional Charge...', type: 'text', required: true, width: 3 },
                    { text: 'H. Mark Charge', field: 'hmCharge', fieldIcon: 'star', placeholder: 'H. Mark Charge...', type: 'text', required: true, width: 3 },
                ]
            },

        ]
    }

    return (<IUIPage schema={schema} />)

}