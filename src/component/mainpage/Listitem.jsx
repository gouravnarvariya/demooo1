import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {
  return (
    <List sx={{ width: '100%',   bgcolor: 'white' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <div className='felxxx'>
        <ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="Photos"
  secondary="Jan 9, 2014"
/>
<ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="-3259"
/>
        </div>
      

      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <div className='felxxx'>
        <ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="Photos"
  secondary="Jan 9, 2014"
/>
<ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="-3259"
/>
        </div>
      

      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <div className='felxxx'>
        <ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="Photos"
  secondary="Jan 9, 2014"
/>
<ListItemText
  sx={{
    flex: '0 0 auto'
  }}
  primary="-3259"
/>
        </div>
      

      </ListItem>
    </List>
  );
}
