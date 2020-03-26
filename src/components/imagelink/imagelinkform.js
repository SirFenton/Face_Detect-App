import React from "react";
import './imagelinkform.css';


const ImageLinkForm = ({handleInputChange , handleClick}) => {
  return (
    <div>
      <p className="f3 light-blue">{"This app will detect faces in your pictures"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={handleInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue" onClick={handleClick}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;


// GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
// FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
// TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
// NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
// WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
// WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
// COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
// CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
// FACE_DETECT_MODEL: 'a403429f2ddf4b49b307e318f00e528b',
// LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
// DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
// GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
// FACE_EMBED_MODEL: 'd02b4508df58432fbb84e800597b8959',
// APPAREL_MODEL: 'e0be3b9d6a454f0493ac3a30784001ff',
// MODERATION_MODEL: 'd16f390eb32cad478c7ae150069bd2c6',
// TEXTURES_AND_PATTERNS: 'fbefb47f9fdb410e8ce14f24f54b47ff',
// LANDSCAPE_QUALITY: 'bec14810deb94c40a05f1f0eb3c91403',
// PORTRAIT_QUALITY: 'de9bd05cfdbf4534af151beb2a5d0953',
// CELEBRITY_MODEL: 'e466caa0619f444ab97497640cefc4dc'
