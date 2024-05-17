import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
    width: 256 * scale,
    height: 144 * scale,
    scale,
    // Canvas will scale regardless of screensize
    letterbox: true,
    // Only use kaboom related functions
    global: false,
})