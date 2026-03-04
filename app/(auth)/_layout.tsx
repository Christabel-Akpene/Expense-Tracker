import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const _layout = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack screenOptions={{headerShown: false}}/>
        </SafeAreaView>
    )
}
export default _layout;