import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProviderCustom, useThemeContext } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const lightTheme = {
  colors: {
    bg: '#f0f0f0',
    text: '#000',
    footer: '#ccc',
  },
};

const darkTheme = {
  colors: {
    bg: '#1a202c',
    text: '#fff',
    footer: '#2d3748',
  },
};

function ThemedApp() {
  const { theme } = useThemeContext();
  const currentTheme = extendTheme({
    styles: {
      global: {
        body: {
          bg: theme === 'light' ? lightTheme.colors.bg : darkTheme.colors.bg,
          color: theme === 'light' ? lightTheme.colors.text : darkTheme.colors.text,
        },
      },
    },
  });

  return (
    <ChakraProvider theme={currentTheme}>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </ChakraProvider>
  );
}

export default function App() {
  return (
    <ThemeProviderCustom>
      <AuthProvider>
        <ThemedApp />
      </AuthProvider>
    </ThemeProviderCustom>
  );
}
