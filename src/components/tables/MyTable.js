import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from "mui-datatables";
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});


const MyTable = (props) => {
  const { data, columns, options, classes } = props;
  const actionsColumn = {
    name: "Actions",
    options: {
      filter: true,
      sort: false,
      empty: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <IconButton className={classes.button} aria-label="Delete">
              <EditIcon/>
            </IconButton>
            <IconButton className={classes.button} aria-label="Delete">
              <DeleteIcon/>
            </IconButton>

          </>
        );
      }
    }
  };

  const allColumns = [...columns, actionsColumn];


  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={allColumns}
      options={options}
    />
  );
}

MyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTable);
