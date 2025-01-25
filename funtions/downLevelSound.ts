import playSound from "./playSoundElevator";

const downLevelSound = async () => {
  try {
    await playSound(require("../assets/audio/dtmf_1.wav"), 1, 400);
    await playSound(require("../assets/audio/dtmf_3.wav"), 1, 400);
  } catch (error) {
    console.error("Error en upLevelSound:", error);
  }
};

export default downLevelSound;
