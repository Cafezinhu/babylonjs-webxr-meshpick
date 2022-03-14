#Babylon.js WebXR MeshPick

Helps mesh picking on WebXR.

##Installing

###npm
`npm i https://github.com/Cafezinhu/babylonjs-webxr-meshpick`

###yarn
`yarn add https://github.com/Cafezinhu/babylonjs-webxr-meshpick`

##Example usage

```
import { Engine, Scene } from "@babylonjs/core";
import { onWebXRPick } from 'babylonjs-webxr-meshpick';

const canvas = document.querySelector('canvas');

(async () => {

    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const xr = await scene.createDefaultXRExperienceAsync({});

    onWebXRPick(xr, (pickingInfo) => {
        if(pickingInfo.hit){
            console.log(pickingInfo.pickedMesh.name);
        }
    });
});
```

Credits to Jacob Durrant on 
https://forum.babylonjs.com/t/detecting-headset-button-press-with-webxr-on-android-cardboard/8892/7

##Features
- Picking with motion controllers ✅
- Picking with default controllers on Android phones ✅
- Picking with gamepad ❌