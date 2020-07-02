import {registerScreens} from './core/navigation';
import {Navigation} from 'react-native-navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
              id: 'HomeScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Prueba técnica Level 1',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
