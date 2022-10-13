import { StatusBar } from 'react-native';
import Routes from './src/routes/app.route';
import { ThemeProvider } from 'styled-components/native';
import { darkMode } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <StatusBar  />
      <Routes />
    </ThemeProvider>
  );
}
