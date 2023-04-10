import {TextField, Tooltip} from '@mui/material';

function AddUserId({value, onChange}) {
  return (
    <Tooltip title="User ID">
      <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
        <TextField
          type="number"
          size="small"
          value={value}
          onChange={onChange}
          InputProps={{
            inputProps: {
              min: 0,
              style: {textAlign: 'center'},
            },
            style: {appearance: 'none', maxWidth: 60},
          }}
        />
      </div>
    </Tooltip>
  );
}

export default AddUserId;