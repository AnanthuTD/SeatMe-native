import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Segment from './components/Segment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';
import axios from '../lib/axiosPublic';
import {Exam, SeatingInfo} from './types';

const Home = () => {
  const [studentId, setStudentId] = useState('');
  const [seatingInfo, setSeatingInfo] = useState<SeatingInfo | undefined>(
    undefined,
  );
  const [upcomingExams, setUpcomingExams] = useState<Exam[]>([]);
  const [invalidInput, setInvalidInput] = useState(false);
  const [count, setCount] = useState(0);

  const storeUpcomingExamsInAsyncStorage = async (examsData: Exam[]) => {
    try {
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      const storageData = {
        expirationTime,
        examsData,
      };
      await AsyncStorage.setItem('upcomingExams', JSON.stringify(storageData));
    } catch (error) {
      console.error('Error storing upcoming exams in AsyncStorage:', error);
    }
  };

  const getUpcomingExamsFromAsyncStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem('upcomingExams');
      if (storedData) {
        const {expirationTime, examsData} = JSON.parse(storedData);
        if (expirationTime && new Date().getTime() > expirationTime) {
          await AsyncStorage.removeItem('upcomingExams');
          return [];
        }
        return examsData;
      }
      return [];
    } catch (error) {
      console.error('Error getting upcoming exams from AsyncStorage:', error);
      return [];
    }
  };

  const fetchSeatingInfo = async (studentId: string) => {
    try {
      const response = await axios.get('/', {
        params: {studentId},
      });

      if (response.status === 204) {
        return null;
      }

      const {data} = response;
      const {seatingInfo} = data;

      return seatingInfo;
    } catch (error) {
      console.error('Error fetching seating info:', error);
      return null;
    }
  };

  const fetchUpcomingExams = async () => {
    try {
      const examsResponse = await axios.get('/exams');

      const examsData: Exam[] = examsResponse.data;
      const sortedExams = examsData
        .slice()
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
      return sortedExams;
    } catch (error) {
      console.error('Error fetching upcoming exams:', error);
      return [];
    }
  };

  const onFinish = async () => {
    if (!checkValidInput(studentId)) {
      return;
    }

    AsyncStorage.setItem('studentId', studentId);

    const existingStudentId = await AsyncStorage.getItem('studentId');
    let upcomingExamLength = upcomingExams ? upcomingExams.length : 0;

    if (studentId !== existingStudentId) {
      await AsyncStorage.removeItem('upcomingExams');
      setUpcomingExams([]);
      upcomingExamLength = 0;
    }

    try {
      const seatingInfo = await fetchSeatingInfo(studentId);
      setSeatingInfo(seatingInfo);
    } catch (error) {
      setSeatingInfo(undefined);
    }

    if (!upcomingExamLength) {
      const examsData = await fetchUpcomingExams();
      setUpcomingExams(examsData);
      storeUpcomingExamsInAsyncStorage(examsData);
    }
  };

  useEffect(() => {
    // Check if value has been assigned for the second time
    if (count === 2) {
      onFinish();
    }
    if (count <= 2) {
      setCount(prev => prev + 1);
    }
  }, [studentId, count]);

  useEffect(() => {
    (async () => {
      try {
        AsyncStorage.getItem('studentId', (error, studentId) => {
          error &&
            console.error(
              'Error while fetching studentId from asyncStorage: ',
              error,
            );
          studentId && setStudentId(studentId);
        });
        const cachedExams = await getUpcomingExamsFromAsyncStorage();
        setUpcomingExams(cachedExams);
      } catch (error) {
        console.error(
          'Error retrieving cached exams from AsyncStorage:',
          error,
        );
      }
    })();
  }, []);

  const checkValidInput = (id: string): boolean => {
    // Check if the input value is a valid 6 or 12-digit number
    if (/^\d{6}$|^\d{12}$/.test(id)) {
      setInvalidInput(false);
      return true;
    }
    setInvalidInput(true);
    return false;
  };

  return (
    <View style={styles.content}>
      <TextInput
        label="Enter Student ID"
        value={studentId}
        onChangeText={text => setStudentId(text)}
        keyboardType="numeric"
        maxLength={12}
        style={styles.input}
        right={<TextInput.Icon icon="magnify" onPress={onFinish} />}
        onSubmitEditing={() => {
          onFinish();
        }}
        error={invalidInput}
      />
      <Segment seatingInfo={seatingInfo} upcomingExams={upcomingExams} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
});

export default Home;
