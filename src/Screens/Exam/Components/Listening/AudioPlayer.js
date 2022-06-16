/* eslint-disable */
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';

const AudioPlayer = ({ track, ended, title }) => {
  return (
    <>
      <div className="display-flex-space-between">
        <div></div>
        <h3 className="pt-2">
          <b>{title}</b>
        </h3>
        <ReactAudioPlayer
          src={track}
          autoPlay
          controls={true}
          controlsList={'nofullscreen nodownload noremoteplayback noplaybackrate foobar'}
          onEnded={() => {
            ended(2);
          }}
          onPause={() => console.log('')}
          style={{ width: 200 }}
        />
      </div>
      <hr />
    </>
  );
};

export default AudioPlayer;
