import {TextField, Tooltip} from '@mui/material';

function AddAmount({value, onChange}) {
  return (
    <Tooltip title="Amount">
      <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
        <TextField
          type="number"
          size="small"
          value={value}
          onChange={onChange}
          InputProps={{
            inputProps: {
              min: 1,
              style: {textAlign: 'center'},
            },
            style: {appearance: 'none', maxWidth: 80},
          }}
        />
      </div>
    </Tooltip>
  );
}

export default AddAmount;