/*
 * 音频播放组件
 */
import React from 'react';

export default ({ q }) => {
  if (!q.ext || !q.ext.audio) {
    return '';
  }

  return q.ext.audio.map(a => (
    <div>
      {a.name}
      <audio
        key={`${q.id}_${a.name}`}
        src={a.src}
        controls="controls"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  ));
};
