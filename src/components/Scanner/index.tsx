import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

type Props = {
  type?: String,
  data?: String,
  dataConfirm?: String,
  flag?: String,
  onCodeScanned?: () => void,
  onCodeScannedConfirm?: () => void
}

export function Scanner({ onCodeScanned, onCodeScannedConfirm, type, data, dataConfirm, flag }: Props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const flagHandleBarCodeScannerd = ({ type, data, dataConfirm }) => {
    setScanned(true);

    if (flag != 'scanner') {
      onCodeScannedConfirm(dataConfirm);
    } else {
      onCodeScanned(type, data);
    }
  };


  if (hasPermission === null) {
    return <Text>Aguardando permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Acesso a câmera negado!</Text>;
  }

  return (
    <View
      style={{
        width: "100%",
        height: "90%",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : flagHandleBarCodeScannerd}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          title={"Repetir Escaneamento"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
}