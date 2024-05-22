import {Routes, Route, Navigate} from 'react-router-dom';
import ColorList from './ColorList';
import { FilterColorDetails } from './FilterDetails';

const ColorRouteList = ({colors}) => {
    console.log("ROUTES",colors)
    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/:name" element={<FilterColorDetails colors={colors} />} />

            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
    );
}
export default ColorRouteList;