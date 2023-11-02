import { KeyboardAvoidingView, Platform,LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navegacion/AppNavegacion";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { initFirebase } from "./src/Utilidades";
import "react-native-get-random-values";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </KeyboardAvoidingView>
      <Toast />
    </>
  );
}
