import { StatusBar } from 'react-native';
import Routes from './src/routes/app.route';
import { ThemeProvider } from 'styled-components/native';
import { darkMode } from './src/theme';
import AuthContextProvider from './src/contexts/auth';

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={darkMode}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
