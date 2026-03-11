import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Details() {

    const { produto } = useLocalSearchParams();
    const item = JSON.parse(produto);

    return (

        <View style={{ flex: 1, padding: 20 }}>

            <Image
                source={{ uri: item.thumbnail }}
                style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 10,
                    marginBottom: 20
                }}
            />

            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {item.title}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10, color: "#9e1c1c" }}>
                💰 Preço: ${item.price}
            </Text>

            <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 10, color: "#535353" }}>
                🔻 Desconto: {item.discountPercentage}%
            </Text>

            <Text style={{ fontSize: 16, marginVertical: 10 }}>
                {item.description}
            </Text>

            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    backgroundColor: "#2f95dc",
                    padding: 12,
                    borderRadius: 8,
                    marginTop: 20
                }}
            >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    Voltar
                </Text>
            </TouchableOpacity>

        </View>
    );
}