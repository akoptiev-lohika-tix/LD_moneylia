import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootTabParamList } from '../../interfaces';
import Dashboard from '../../screens/dashboard-screen/dashboard-screen';
import DashboardTab from '../bottom-tabs/dashboard-tab/dashboard-tab';
import ExtractTab from '../bottom-tabs/extract-tab/extract-tab';
import PagoPaTab from '../bottom-tabs/pagoPa-tab/pagoPa-tab';
import ProfileTab from '../bottom-tabs/profile-tab/profile-tab';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainApp: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 86,
          paddingHorizontal: 28,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarButton: DashboardTab,
        }}
      />
      <Tab.Screen
        name="Extract"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          tabBarButton: ExtractTab,
        }}
      />
      <Tab.Screen
        name="PagoPA"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarButton: PagoPaTab,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          tabBarButton: ProfileTab,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
