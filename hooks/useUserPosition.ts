import type { CoordsT } from "@/assets/types/global";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export const useUserPosition = () => {
  const [coords, setCoords] = useState<CoordsT | null>(null);

  useEffect(() => {
    userPosition();
  }, []);

  async function userPosition() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 47.21, lng: -1.55 });
    }
  }

  return coords;
};
