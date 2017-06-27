(() => {
    let x = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let viewAngle = 45;
    let near = 1;
    let far = 1000;
    let container = document.getElementById('container');

    let geomteryCube = new THREE.CubeGeometry(100, 100, 100);
    let geometry = new THREE.IcosahedronGeometry(200, 2);
    let material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            wireframe: true,
            wireframeLinewidth: 2
        }
    );
    let mesh = new THREE.Mesh(geometry, material);
    let cube = new THREE.Mesh(geomteryCube, material);

    let renderer = new THREE.WebGLRenderer();
    let camera = new THREE.PerspectiveCamera(viewAngle, width / height, near, far);

    camera.position.z = 900;

    let scene = new THREE.Scene();

    renderer.setSize(width, height);

    let custom = new THREE.Geometry()

    custom.vertices = [
        new THREE.Vector2 (0, 50),
        new THREE.Vector2 (50, 50),
        new THREE.Vector2 (50, 0)
    ];
    let mesh3 = new THREE.Mesh(geometry3, material);

    scene.add(mesh, cube, mesh3)

    container.appendChild(renderer.domElement)

    let animate = function () {
        requestAnimationFrame(animate)

        mesh.rotation.x = x++/120;
        mesh.rotation.y = x++/60;

        cube.position.x = x/10;
        cube.position.y  = x/10;
        cube.position.z  = x/10;

        renderer.render(scene, camera);
    };

    animate();
})();