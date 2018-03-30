import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 200,
  },
  toggle: {
    marginBottom: 5,
  },
};

const DisasterType = (props) => (
  <div>
    <h4>Disaster Classification</h4>
    <div style={styles.block}>
      <Toggle
        label="Climatological"
        defaultToggled={false}
        labelPosition="right"
        onToggle={props.changeDisasterTypeView}
        style={styles.toggle}
        id={"Climatological"}
      />
      <Toggle
        label="Geophysical"
        defaultToggled={false}
        labelPosition="right"
        onToggle={props.changeDisasterTypeView}
        style={styles.toggle}
        id={"Geophysical"}
      />
      <Toggle
        label="Hydrological"
        defaultToggled={false}
        labelPosition="right"
        onToggle={props.changeDisasterTypeView}
        style={styles.toggle}
        id={"Hydrological"}
      />
      <Toggle
        label="Meteorological"
        defaultToggled={false}
        labelPosition="right"
        onToggle={props.changeDisasterTypeView}
        style={styles.toggle}
        id={"Meteorological"}
      />
    </div>
  </div>
);

export default DisasterType;