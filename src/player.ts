import * as Tone from 'tone'

function playSomething() {
  
  //const synth = new Tone.Synth().toDestination();
  const synth = new Tone.MonoSynth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");

}

function downloadMusic() {

  const recorder = new Tone.Recorder();
  const synth = new Tone.Synth().connect(recorder);

  recorder.start();
  
  // generate a few notes
  synth.triggerAttackRelease("C3", 0.5);
  synth.triggerAttackRelease("C4", 0.5, "+1");
  synth.triggerAttackRelease("C5", 0.5, "+2");
  
  // wait for the notes to end and stop the recording
  setTimeout(downloadFile, 4000);

  async function downloadFile() {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
  }

}

export function setupPlayer(element: HTMLButtonElement) {
  element.addEventListener('click', () => {
    //playSomething();
    downloadMusic();
  })
}
