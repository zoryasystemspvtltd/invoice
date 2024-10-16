import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Button, Col, Row } from "react-bootstrap";
import IUILookUp from './shared/IUILookUp'
import IUIListPage from './IUIListPage';

const IUIListInline = (props) => {
    const schema = props.schema;
    const [value, setValue] = useState([])
    

    useEffect(() => {
        if (props?.value) {
            setValue(props?.value);
        }
    }, [props?.value]);


    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <Table responsive>
                                        <thead>
                                            <tr>

                                                {schema?.fields?.map((fld, f) => (
                                                    <th key={f}>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-link text-white"
                                                        >
                                                            {fld.text}
                                                        </button>
                                                    </th>
                                                ))}
                                                {schema?.editing &&
                                                    <th>
                                                        <button type="submit" className="btn btn-link text-white">#</button>
                                                    </th>
                                                }
                                            </tr>
                                        </thead>
                                        {
                                            <tbody>

                                                {
                                                    value?.map((item, i) => (
                                                        <tr key={i}>

                                                            {schema?.fields?.map((fld, f) => (
                                                                <td key={f}>
                                                                    {fld.type === 'link' &&
                                                                        <Link to={`${item.id}`}>{item[fld.field]}</Link>
                                                                    }
                                                                    {(!fld.type || fld.type === 'text') && item[fld.field]}
                                                                    {fld.type === 'date' && item[fld.field].substring(0, 10)}
                                                                    {(fld.type === 'lookup') &&
                                                                        <IUILookUp
                                                                            value={item[fld.field]}
                                                                            schema={fld.schema}
                                                                            readonly={true}
                                                                            textonly={true}
                                                                        />
                                                                    }
                                                                </td>
                                                            ))}
                                                            {schema?.editing &&
                                                                <td width={10}>
                                                                    <Link to={`${item.id}/edit`}><i className="fa-solid fa-pencil"></i></Link>
                                                                </td>
                                                            }
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        }
                                        {schema.adding &&

                                            <IUIListPage schema={schema} />
                                        }

                                        

                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IUIListInline