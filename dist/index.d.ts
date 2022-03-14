import { Camera, PickingInfo, WebXRDefaultExperience } from "@babylonjs/core";
export declare type WebXrPickCallback = (pickingInfo: PickingInfo) => void;
export declare function pickMeshWithCamera(camera: Camera): PickingInfo;
export declare function onWebXRPick(xr: WebXRDefaultExperience, callback: WebXrPickCallback, overrideSceneOnPointerDown?: boolean): void;
