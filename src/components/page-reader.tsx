'use client'
import { CircleStop, FastForward, Pause, Play, Rewind, SlidersHorizontal, Square } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function PageReader() {
  const allowedtags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'li']
  let lines: NodeListOf<HTMLDivElement>;
  const utterance = new window.SpeechSynthesisUtterance();
  const [options, setOptions] = useState(false) // toggle options menu

  let playing = false // playing or paused
  let index = 0 // current line
  let position = 0 // position in current line

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    const voicesSelect = document.getElementById('page-reader-voices');
    if (voicesSelect) {
      voicesSelect.innerHTML = "";

      voices.forEach(function (voice, index) {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = voice.name;
        voicesSelect.appendChild(option);
      });
    }
  }

  function speakLine() {
    const currentLine = lines[index];
    const text = currentLine.textContent;
    if (text == null) {
      return
    }
    utterance.text = text.substring(position);
    speechSynthesis.speak(utterance);
    utterance.onend = function () {
      if (index < lines.length - 1) {
        index++
        position = 0
        speakLine();
        update();
      }
      else {
        index = 0
        position = 0
        stop()
      }
    };
  }

  function play() {
    playing = !playing
    document.getElementById('page-reader-play')?.classList.toggle('hidden', playing)
    document.getElementById('page-reader-pause')?.classList.toggle('hidden', !playing)
    if (playing) {
      const voices = speechSynthesis.getVoices();
      const voiceElement = document.getElementById('page-reader-voices');
      const speedElement = document.getElementById('page-reader-speed');
      const voice = voiceElement instanceof HTMLSelectElement ? parseFloat(voiceElement.value) : undefined;
      const speed = speedElement instanceof HTMLSelectElement ? parseFloat(speedElement.value) : undefined;
      if (voice == undefined || speed == undefined) {
        alert(voice)
        return
      }
      utterance.voice = voices[voice];
      utterance.rate = speed;
      document.getElementById('page-reader-controls')?.classList.add('fixed', 'bottom-8', 'right-1/2', 'transform', 'translate-x-1/2')
      document.getElementById('page-reader-stop')?.classList.remove('hidden')
      speakLine();
      update();
    } else {
      speechSynthesis.cancel();
    }
  }


  function stop() {
    speechSynthesis.cancel();
    playing = false
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.setProperty('background-color', 'transparent', 'important')
    }
    document.getElementById('page-reader-controls')?.classList.remove('fixed', 'bottom-8', 'right-1/2', 'transform', 'translate-x-1/2')
    document.getElementById('page-reader-stop')?.classList.add('hidden')
    document.getElementById('page-reader-play')?.classList.remove('hidden')
    document.getElementById('page-reader-pause')?.classList.add('hidden')

    index = 0
    position = 0
  }

  function previous() {
    if (index > 0) {
      index--
      position = 0
      update();
    }
  }

  function next() {
    if (index < lines.length - 1) {
      index++
      position = 0
      update();
    }
  }

  function update() {
    const currentLine = lines[index];
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.setProperty('background-color', 'transparent', 'important')
    }
    currentLine.style.setProperty('background-color', '#bae4fe', 'important')

    window.scrollTo({
      top: currentLine.offsetTop - 200,
      behavior: 'smooth'
    });

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      speakLine();
    } else {
      speechSynthesis.cancel();
    }
  }

  // Check browser compatibility
  useEffect(() => {
    // handle Click outside the toggle window
    function handleClick(e: Event) {
      const target = e.target
      if (target instanceof Element) {
        if (!target.closest('#page-reader-toggleoptions, #page-reader-options')) {
          setOptions(false)
        }
      }
    }

    // when voice rate is changed
    function handleSpeedChange(e: Event) {
      const target = e.target
      if (target instanceof HTMLSelectElement) {
        const speed = parseFloat(target.value);
        utterance.rate = speed;
        update();
      }
    }

    // when voice is changed
    function handleVoicesChange(e: Event) {
      const target = e.target
      if (target instanceof HTMLSelectElement) {
        const voice = parseFloat(target.value);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[voice];
        update();
      }
    }


    // Keyboard and media button events
    function handleKeyDown(e: KeyboardEvent) {
      e.preventDefault();
      if (e.code === 'Space' || e.key === 'MediaPlayPause') {             // space and play button
        play();
      } else if (e.key === 'ArrowRight' || e.key === 'MediaTrackNext') {      // right arrow key and next button
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'MediaTrackPrevious') {      // left arrow key and previous button
        previous();
      }
    }


    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      populateVoices()

      const selector = allowedtags.map(tag => `#content ${tag}`).join(', ');

      // Select elements using the constructed selector
      lines = document.querySelectorAll(selector);

      utterance.addEventListener('boundary', function (e) {
        position = e.charIndex;
      });

      speechSynthesis.onvoiceschanged = (): void => {
        populateVoices();
      };

      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);
      document.getElementById('page-reader-speed')?.addEventListener('change', handleSpeedChange);
      document.getElementById('page-reader-voices')?.addEventListener('change', handleVoicesChange);


      return () => {
        utterance.removeEventListener('boundary', function (e) {
          position = e.charIndex;
        });
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
        document.getElementById('page-reader-speed')?.removeEventListener('change', handleSpeedChange);
        document.getElementById('page-reader-voices')?.removeEventListener('change', handleVoicesChange);
      };
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  }, [])

  return (
    <div>
      {/* <div>
        <Play id="page-reader-play" />
      </div> */}
      <div id="page-reader-controls" className="flex max-w-fit w-max gap-4 h-12 mx-auto bg-gray-700 text-white text-lg rounded-lg p-3 z-[999999]">
        <button type="button" title="page-reader-previous" id="page-reader-previous" onClick={() => { previous() }} className="outline-none hover:scale-110 duration-150">
          <Rewind fill="currentcolor" />
        </button>
        <button type="button" title="page-reader-stop" id="page-reader-stop" onClick={() => { stop() }} className="outline-none hover:scale-110 duration-150 hidden">
          <Square fill='currentcolor'/>
        </button>
        <button type="button" title="page-reader-play-pause" id="page-reader-play-pause" onClick={() => { play() }} className="outline-none hover:scale-110 duration-150">
          <Play id="page-reader-play" fill="currentcolor" className="" />
          <Pause id="page-reader-pause" fill="currentcolor" className="hidden" />
        </button>
        <button type="button" title="page-reader-next" id="page-reader-next" onClick={() => { next() }} className="outline-none hover:scale-110 duration-150">
          <FastForward fill="currentcolor" />
        </button>
        <button type="button" title="page-reader-toggleoptions" id="page-reader-toggleoptions" onClick={() => { setOptions(!options) }} className="outline-none hover:scale-110 duration-150">
          <SlidersHorizontal />
        </button>
      </div>

      <div id="page-reader-options" className={`z-[99999] fixed top-40 left-1/2 transform -translate-x-1/2 flex-wrap bg-gray-800 text-white rounded-lg shadow-lg p-3 ${options ? 'visible' : 'hidden'}`}>
        <div className="p-2">
          <label htmlFor="page-reader-speed">Speed:</label>
          <select id="page-reader-speed" defaultValue="1" className="bg-gray-700 text-white p-1 ml-2 border-none outline-none cursor-pointer">
            <option value='0.5'>0.5x</option>
            <option value='1'>1x</option>
            <option value='1.5'>1.5x</option>
            <option value='2'>2x</option>
          </select>
        </div>

        <div className="p-2">
          <label htmlFor="page-reader-voices">Voices:</label>
          <select id="page-reader-voices" className="bg-gray-700 text-white p-1 ml-2 border-none outline-none cursor-pointer"></select>
        </div>
      </div>
    </div>
  )
}