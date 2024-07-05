import React, { useState } from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Box
  ,
  Typography
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

const departments: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success']
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design']
  },
  {
    department: 'engineering',
    sub_departments: ['frontend', 'backend', 'devops']
  },
 
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const handleToggle = (department: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [department]: !prevOpen[department] }));
  };

  const handleSelect = (department: string, isSubDept: boolean = false) => {
    setSelected(prevSelected => {
      const newSelected = { ...prevSelected };
      if (isSubDept) {
        newSelected[department] = !newSelected[department];
        const parentDept = department.split('-')[0];
        const subDepts = departments.find(d => d.department === parentDept)?.sub_departments || [];
        const allSubDeptsSelected = subDepts.every(sd => newSelected[`${parentDept}-${sd}`]);
        newSelected[parentDept] = allSubDeptsSelected;
      } else {
        newSelected[department] = !newSelected[department];
        const subDepts = departments.find(d => d.department === department)?.sub_departments || [];
        subDepts.forEach(sd => {
          newSelected[`${department}-${sd}`] = newSelected[department];
        });
      }
      return newSelected;
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="90%"
      margin="auto"
      marginTop='-200px'
      flexDirection='column'
    >
       <Typography variant="h4" gutterBottom>
                  Second Component
                </Typography>
      <List>
        {departments.map(dept => (
          <div key={dept.department}>
            <ListItem button onClick={() => handleToggle(dept.department)}>
              <Checkbox
                edge="start"
                checked={!!selected[dept.department]}
                onChange={() => handleSelect(dept.department)}
                tabIndex={-1}
                disableRipple
                style={{ marginRight: '8px' }}
              />
              <ListItemText primary={dept.department} />
              <IconButton>
                {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItem>
            <Collapse in={!!open[dept.department]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {dept.sub_departments.map(subDept => (
                  <ListItem
                    key={subDept}
                    style={{ paddingLeft: '32px' }}
                    button
                    onClick={() => handleSelect(`${dept.department}-${subDept}`, true)}
                  >
                    <Checkbox
                      edge="start"
                      checked={!!selected[`${dept.department}-${subDept}`]}
                      onChange={() => handleSelect(`${dept.department}-${subDept}`, true)}
                      tabIndex={-1}
                      disableRipple
                      style={{ marginRight: '8px' }}
                    />
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default DepartmentList;
