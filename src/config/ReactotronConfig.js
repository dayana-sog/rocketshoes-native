import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.74' })
    .useReactNative()
    .connect();

  // Sempre que chamar o console.tron será o console do reactroton. => Console.tron.log .
  console.tron = tron;

  tron.clear();
}
