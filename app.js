(() => {
    'use strict';

    import THREE from './node_modules/three/src/Three'

    let width = window.innerWidth;
    let height = window.innerHeight;
    let viewAngle = 45;
    let near = 0.1;
    let far = 1000;
    let body = document.getElementsByTagName('body');

    const render = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(viewAngle, width/height, near, far);

    const scene = new THREE.Scene();

    scene.add(camera);

    render.setSize(width, height);

    body.appendChild(render.domElement)
})();