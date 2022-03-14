export function pickMeshWithCamera(camera) {
    const ray = camera.getForwardRay();
    return camera.getScene().pickWithRay(ray);
}
export function onWebXRPick(xr, callback, overrideSceneOnPointerDown = true) {
    const camera = xr.baseExperience.camera;
    const scene = camera.getScene();
    xr.input.onControllerAddedObservable.add(_ => {
        xr.baseExperience.sessionManager.session.onselect = (inputSource) => {
            if (inputSource.inputSource.targetRayMode.toUpperCase().indexOf("GAZE") !== -1) {
                const pickingInfo = pickMeshWithCamera(camera);
                callback(pickingInfo);
            }
        };
    });
    if (overrideSceneOnPointerDown)
        scene.onPointerDown = (_, pickingInfo) => {
            callback(pickingInfo);
        };
}
