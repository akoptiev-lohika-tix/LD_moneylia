import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootTabParamList } from '../../interfaces';
import Dashboard from '../../screens/dashboard-screen/dashboard-screen';
import DashboardTab from '../bottom-tabs/dashboard-tab/dashboard-tab';
import ExtractTab from '../bottom-tabs/extract-tab/extract-tab';
import PagoPaTab from '../bottom-tabs/pagoPa-tab/pagoPa-tab';
import ProfileTab from '../bottom-tabs/profile-tab/profile-tab';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import TaxPaymentsScreen from '../../screens/tax-payments-screen/tax-payments-screen';
import HeaderNavigation from '../header-navigation/header-navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainApp: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      backBehavior={'order'}
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 28,
          paddingBottom: 20,
          justifyContent: 'space-around',
        },
        tabBarItemStyle: {
          width: 58,
          maxWidth: 58,
        },
        header: (props) => <HeaderNavigation {...props} />,
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
          headerLeft: () => null,
          headerStyle: { backgroundColor: 'red' },
          tabBarButton: ExtractTab,
        }}
      />
      <Tab.Screen
        name="PagoPA"
        component={TaxPaymentsScreen}
        options={{
          headerShown: false,
          tabBarButton: PagoPaTab,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={NotFoundScreen}
        options={{
          tabBarButton: ProfileTab,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
