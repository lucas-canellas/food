import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
      </View>
    </ScrollView>
  );
}

// O <Slot /> é o ponto onde o conteúdo da rota atual será injetado. Por exemplo, se você tiver várias rotas definidas
// no seu aplicativo, o <Slot /> será substituído pelo componente correspondente à rota que o usuário está acessando.

// showsVerticalScrollIndicator = sem barra de rolagem
