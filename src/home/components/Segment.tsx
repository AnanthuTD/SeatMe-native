import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import TimeTable from './TimeTable';
import Seating from './Seating';
import Swiper from 'react-native-swiper';
import {Exam, SeatingInfo} from '../types';

interface Props {
  seatingInfo?: SeatingInfo;
  upcomingExams?: Exam[];
}

const Segment: React.FC<Props> = ({seatingInfo, upcomingExams}) => {
  const [tab, setTab] = useState<number>(0);

  const tab1 = 0;
  const tab2 = 1;

  useEffect(() => {
    if (seatingInfo) setTab(tab1);
    else if (upcomingExams) setTab(tab2);
  }, [seatingInfo, upcomingExams]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SegmentedButtons
          value={tab.toString()}
          onValueChange={(newValue: string) => setTab(Number(newValue))}
          buttons={[
            {
              value: tab1.toString(),
              label: 'Seating',
            },
            {
              value: tab2.toString(),
              label: 'Upcoming Exams',
            },
          ]}
        />
        <Swiper
          loop={false}
          index={tab !== undefined ? tab : 0}
          onIndexChanged={(index: number) => setTab(index)}>
          <View /* style={styles.slide} */>
            <Seating seatingInfo={seatingInfo} />
          </View>
          <View /* style={styles.slide} */>
            <TimeTable upcomingExams={upcomingExams || []} />
          </View>
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Segment;
