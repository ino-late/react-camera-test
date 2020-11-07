import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App() {
  const [photo, setPhoto] = useState('');
  const handleTakePhoto = dataUri => {
    setPhoto(dataUri);
  };

  const handleCameraError = error => {
    alert(error);
  };

  const handleClick = () => {
    setPhoto('');
  };

  return (
    <div className='App'>
      {photo ? (
        <>
          <img src={photo} alt='camera' />
          <button onClick={handleClick}>クリア</button>
        </>
      ) : (
        <Camera
          onTakePhoto={handleTakePhoto}
          onCameraError={handleCameraError}
          isSilentMode={true} // シャッター音OFF
          isImageMirror={false} // 鏡像OFF
          idealResolution={{ width: 960, height: 540 }}
          idealFacingMode={FACING_MODES.ENVIRONMENT} // 背面カメラ指定
          imageType={IMAGE_TYPES.PNG}
        />
      )}
    </div>
  );
}

export default App;
