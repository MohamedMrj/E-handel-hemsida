import {useState} from 'react';
import {TextField, Tooltip} from '@mui/material';

function AddNumber() {
  const [value, setValue] = useState(1);

  return (
    <Tooltip title="User ID">
      <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
        <TextField
          type="number"
          size="small"
          onChange={(event) => setValue(event.target.value)}
          InputProps={{
            inputProps: {
              style: {textAlign: 'center'},
            },
            style: {appearance: 'none', maxWidth: 60},
          }}
        />
      </div>
    </Tooltip>
  );
}

export default AddNumber;