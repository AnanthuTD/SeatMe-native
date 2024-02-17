import React, {useEffect, useState} from 'react';
import {DataTable} from 'react-native-paper';
import {SeatingInfo} from '../types';

interface ChildItem {
  label: string;
  children: string | number;
}

interface Props {
  seatingInfo?: SeatingInfo;
}

const Seating: React.FC<Props> = ({seatingInfo}) => {
  const [items, setItems] = useState<ChildItem[]>([]);

  useEffect(() => {
    if (seatingInfo) fetchItems();
  }, [seatingInfo]);

  const fetchItems = () => {
    const children: ChildItem[] = [
      {
        label: 'Name',
        children: seatingInfo?.student?.name?.toString() || 'N/A',
      },
      {
        label: 'Course',
        children: seatingInfo?.courseName.toString() || 'N/A',
      },
      {
        label: 'Block',
        children: seatingInfo?.blockId.toString() || 'N/A',
      },
      {
        label: 'Floor Number',
        children: seatingInfo?.floor.toString() || 'N/A',
      },
      {
        label: 'Room',
        children:
          seatingInfo?.roomName.toString() ||
          seatingInfo?.roomId.toString() ||
          'N/A',
      },
      {
        label: 'Seat Number',
        children: seatingInfo?.seatNumber.toString() || 'N/A',
      },
    ];

    setItems(children);
  };

  return (
    <DataTable>
      {items.map((item, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{item.label}</DataTable.Cell>
          <DataTable.Cell>{item.children}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Seating;
