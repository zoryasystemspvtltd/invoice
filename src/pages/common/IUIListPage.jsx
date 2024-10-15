import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleData, editData, addData, selectModuleItem } from '../../store/api-db'
import { useDispatch, useSelector } from 'react-redux'
import IUIPageElement from './shared/IUIPageElement';
import IUIModuleMessage from './shared/IUIModuleMessage';

const IUIListPage = (props) => {
    // Properties
    const schema = props?.schema;
    const module = schema?.module;

    // Parameter
    const { id } = useParams();

    // Global State
    const saved = useSelector((state) => state.api[module]?.saved)
    const items = useSelector((state) => state.api[module]?.items)
    const loggedInUser = useSelector((state) => state.api.loggedInUser)
    const [dirty, setDirty] = useState(false)
    // Local State
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [privileges, setPrivileges] = useState({});

    // Usage
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            const u = items?.find((element) => {
                return `${element.id}` === id;
            });

            setData(u);
            dispatch(getSingleData({ module: module, id: id }));
            dispatch(selectModuleItem({ module: module, id: id }));
        }
    }, []);

    useEffect(() => {
        const modulePrivileges = loggedInUser?.privileges?.filter(p => p.module === module)?.map(p => p.name);
        if (modulePrivileges) {
            let access = {};
            modulePrivileges.forEach(p => {
                access = { ...access, ...{ [p]: true } }
            })
            setPrivileges(access)
        }
    }, [loggedInUser, module]);

    useEffect(() => {
        if (dirty) {
            const error = validate(data, schema?.fields)
            setErrors(error);
        }
    }, [data]);

    useEffect(() => {
        const u = items?.find((element) => {
            return `${element.id}` === id;
        });
        setData(u);
    }, [items]);

    const handleChange = (e) => {
        e.preventDefault();
        const newData = { ...data, ...e.target.value }
        setData(newData);
    };

    const validate = (values, fields) => {
        let errors = {};

        for (let i = 0; i < fields?.length; i++) {
            let item = fields[i];
            if (item.type === 'area') {
                errors = { ...errors, ...validate(values, item.fields) }
            }
            if (item.required && values && !values[item?.field]) {
                errors[item.field] = `Required field.`;
            }
            if (item.type === 'email' && values && values[item?.field]) {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[item.field])) {
                    errors[item.field] = 'Invalid email address.'
                }
            }
            if (item.type === 'phone' && values && values[item?.field]) {
                const regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                //var pattern = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/); // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
                if (!regex.test(values[item.field])) {
                    errors[item.field] = 'Invalid phone number.'
                }
            }
        }
        return errors;
    };

    const savePageValue = (e) => {
        e.preventDefault();
        if (!props?.readonly) {
            setDirty(true);
            const error = validate(data, schema?.fields)
            setErrors(error);
            if (Object.keys(error).length === 0) {
                if (!data)
                    return

                if (id !== undefined)
                    dispatch(editData({ module: module, data: data }));
                else
                    dispatch(addData({ module: module, data: data }));
            }
        }
    };

    // Redirection after save
    useEffect(() => {
        if (!props.readonly) {

            if (saved === 'saved') {
                if (module) {
                    //dispatch(resetSave({ module: module }));
                    if (data?.id) {
                        let url = `/${module}s/${data.id}`;
                        navigate(url);
                    }
                    else {
                        let url = `/${module}s`;
                        navigate(url);
                    }
                }
                else {
                    navigate("/");
                }
            }
        }
    }, [saved])

    return (
        <tbody>
            <tr>
                {schema?.fields?.map((fld, f) => (
                    <td key={f}>
                        <IUIPageElement
                            id={schema.module}
                            schema={[fld]}
                            value={data}
                            errors={errors}
                            onChange={handleChange}
                            readonly={schema.readonly}
                            inline={true}
                        />
                    </td>
                ))}
                {schema?.editing &&
                    <td>
                        <Link to={{ path: "about:blank" }} onClick={savePageValue} ><i className="fa-solid fa-save" title='Save'></i></Link>
                        <Link to={{ path: "about:blank" }} onClick={savePageValue}><i className="fa-solid fa-cancel" title='Cancel'></i></Link>
                    </td>
                }
            </tr>
        </tbody>
    )
}

export default IUIListPage;