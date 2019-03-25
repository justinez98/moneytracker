import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './Homescreen';
import Expenses from './Expenses';
import Category from './Category';
import Budget from './Budget';
import expensesform from './Form/expensesform';
import Login  from './Login';
import budgetform from './Form/budgetform';
import categoryform from './Form/categoryform';
import Splash from './Splash';

const MyDrawerNavigator = DrawerNavigator({
    Splash:{
      screen:Splash,
      navigationOptions: { header: null, drawerLabel: () => null },
      drawerLockMode:"locked-closed"
    },
    Login:{
      screen:Login,
      navigationOptions: { header: null, drawerLabel: () => null },
      drawerLockMode:"locked-closed"
    },
    Home: {
      screen: HomeScreen,
    },
    Expenses:{
      screen: Expenses,
    },
    Category:{
      screen:Category,
    },
    Budget:{
      screen:Budget,
    },
    expensesform:{
      screen:expensesform,
      navigationOptions: { header: null, drawerLabel: () => null }
    },
    budgetform:{
      screen:budgetform,
      navigationOptions: { header: null, drawerLabel: () => null }
    },
    categoryform:{
      screen:categoryform,
      navigationOptions: { header: null, drawerLabel: () => null }
    }

  });

class App extends Component{
    
    render(){
        return(
            <MyDrawerNavigator/>
        )
    }
}



export default App;