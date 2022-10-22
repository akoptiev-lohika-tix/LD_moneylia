import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootTabParamList } from '../../interfaces';
import Dashboard from '../../screens/dashboard-screen/dashboard-screen';
import { colors } from '../../variables';
import DashboardTabIcon from '../../svg-icons/dashboard-tab-icon';
import ExtractTabIcon from '../../svg-icons/extract-tab-icon';
import PagoPaTabIcon from '../../svg-icons/pago-pa-tab-icon';
import ProfileTabIcon from '../../svg-icons/profile-tab-icon';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainApp: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          switch (route.name) {
            case 'Dashboard': {
              return <DashboardTabIcon width={22} height={22} color={color} />;
            }

            case 'Extract': {
              return <ExtractTabIcon width={28} height={28} color={color} />;
            }

            case 'PagoPA': {
              return <PagoPaTabIcon width={28} height={28} color={color} />;
            }

            default:
              return <ProfileTabIcon width={28} height={28} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary.dark,
        tabBarInactiveTintColor: colors.grey.light,
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Extract" component={Dashboard} />
      <Tab.Screen name="PagoPA" component={Dashboard} />
      <Tab.Screen name="Profile" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default MainApp;
