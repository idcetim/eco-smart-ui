import { useState } from 'react'
import {
    Box,
    Tab,
    Tabs
} from '@mui/material'
import PropTypes from 'prop-types';
import Origen from './celulosa2/Origen';
import Procesos from './celulosa2/Procesos';
import ProductosTerminados from './celulosa2/productosTerminados';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const HomeCelulosa2 = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Materias primas" {...a11yProps(0)} />
                <Tab label="Procesos" {...a11yProps(1)} />
                <Tab label="Productos terminados" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Origen />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Procesos />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <ProductosTerminados />
            </TabPanel>
        </Box>
    )
}

export default HomeCelulosa2