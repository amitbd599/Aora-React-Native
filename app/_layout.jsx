import React from 'react';
import { withExpoSnack } from 'nativewind';
import { Stack } from 'expo-router';


const App = () => {
    return (

        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='/search/[query]' options={{ headerShown: false }} />
        </Stack>

    );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);