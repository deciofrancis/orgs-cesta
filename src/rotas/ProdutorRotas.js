import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../telas/Home";
import Produtor from "../telas/Produtor";

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ ComponetePrincipal = Home }) {
    return <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={ComponetePrincipal} />
                <Stack.Screen name="Produtor" component={Produtor} />
            </Stack.Navigator>
}