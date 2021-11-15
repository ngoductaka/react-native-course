import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINT } from '../../config/end_point';

// import * as services from './services';

const Page = (props) => {
    const [listApp, setListApp] = useState([]);
    const [listAllApp, setListAllApp] = useState([]);
    useEffect(() => {
        // services.getAllUser()
        //     .then(({ data }) => {
        //         console.log('dadasd', data)
        //         setListApp(data)
        //     })

        // services.getApplication
        //     .then(({ data }) => {
        //         console.log('dadasd', data)
        //         setListAllApp(data)
        //     })
    }, [])
    return <div>sadfasdf</div>

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', alignContent: 'flex-start' }}>
            {
                listAllApp.map(app => {
                    return (
                        <div
                            onClick={() => props.history.push(`/${map_link[app.name]}`)}
                            style={{
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'center', alignItems: 'center', padding: 40
                            }}>
                            <img style={{ height: 100, width: 100, opacity: listApp.includes(app.name) ? 1 : 0.5, }} src={`${ENDPOINT.BASE}/application/${app.name}.png`} />
                            <span style={{ marginTop: 6 }}> {app.title}</span>
                        </div>
                    )
                })
            }

            <div style={{ position: 'fixed', bottom: 5, right: 15, opacity: 0.8 }}>
                <span style={{ fontSize: 12, fontStyle: 'italic' }}>Powered by <Link to='/about'>Rostek</Link></span>
            </div>
        </div>

    )
}

const map_link = {
    application: 'welcome',

    employees: 'account',

    sales: 'sales',

    purchase: 'purchase',

    outsource: 'outsource',

    inventory: 'inventory',

    plm: 'plm',

    manufacture: 'manufacture',

    quality: 'quality',

    realtime: 'realtime',

    maintenance: 'maintenance',

    setting: 'setting',

    task: 'task'
}

export default Page;