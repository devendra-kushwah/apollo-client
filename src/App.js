import React, { useState } from "react";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, DarkTheme, ThemeProvider} from 'baseui';
import {Button} from 'baseui/button';
import userData from "./apollo/userData";


const engine = new Styletron();
const THEME = {
  light: 'light',
  dark: 'dark',
};

function App() {
 
  const [theme, setTheme] = useState(THEME.light);



  return (
      <StyletronProvider value={engine}>
          <BaseProvider>
                 <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
                 <h1>Hello .....</h1>
                  <Button
                    onClick={() =>
                      setTheme(theme === THEME.light ? THEME.dark : THEME.light)
                    }
                  >
                    Toggle light/dark theme!
                  </Button>
                </ThemeProvider>
          </BaseProvider>
      </StyletronProvider>
  );
}

export default App;
