import { useState } from 'react';
import Select from './Select';
import Option from './Option';

function BreedsSelect() {
    const [value, setValue] = useState('All breeds');

    return (
        <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            $width="14.125rem"
        >
            <Option>All breeds</Option>
        </Select>
    );
}

export default BreedsSelect;
