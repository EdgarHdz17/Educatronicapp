import { Audio, AVPlaybackSource } from "expo-av";

const playSound = async (
  soundFile: AVPlaybackSource,
  times: number,
  interval?: number
) => {
  let soundObject;
  try {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    soundObject = sound;
    for (let i = 0; i < times; i++) {
      await sound.replayAsync();
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  } catch (error) {
    console.log("Error al reproducir el sonido:", error);
  } finally {
    if (soundObject) {
      await soundObject.unloadAsync();
    }
  }
};

export default playSound;
