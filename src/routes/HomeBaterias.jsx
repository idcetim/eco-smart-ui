//import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import {
    Box,
    Tabs,
    Tab,
} from '@mui/material'
import PropTypes from 'prop-types';
import "../styles/global.css"
import RegistrarBaterias from '../components/baterias/RegistrarBaterias';
import ConsultarBaterias from '../components/baterias/ConsultarBaterias';

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

const HomeBaterias = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Registrar" {...a11yProps(0)} />
                <Tab label="Consultar" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <RegistrarBaterias />
                </Box>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <ConsultarBaterias />
            </TabPanel>
        </Box>
    );
}

export default HomeBaterias;