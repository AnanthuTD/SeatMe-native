import React from 'react';
import {DataTable} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Exam} from '../types';

export interface Props {
  upcomingExams: Exam[];
}

const TimeTable: React.FC<Props> = ({upcomingExams}) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Course Name</DataTable.Title>
        <DataTable.Title style={styles.timeColumn}>Time</DataTable.Title>
      </DataTable.Header>

      {upcomingExams.map((item, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{item.date}</DataTable.Cell>
          <DataTable.Cell>{item.courseName}</DataTable.Cell>
          <DataTable.Cell style={styles.timeColumn}>
            {item.timeCode}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export const styles = StyleSheet.create({
  timeColumn: {
    flex: 0,
  },
});

export default TimeTable;
