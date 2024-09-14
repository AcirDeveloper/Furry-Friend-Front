import { KeyboardTypeOptions } from "react-native";

export const getKeyboardType = (type: string): KeyboardTypeOptions => {
  switch (type) {
    case "email":
      return "email-address";
    case "number":
      return "numeric";
    case "text":
        return "default";
    default:
      return "default";
  }
}