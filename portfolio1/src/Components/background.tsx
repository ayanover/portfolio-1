import * as THREE from 'three';
import { useEffect, useRef } from "react";
export default function background(){
    const refContainer = useRef(null);
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        //document.body.appendChild( renderer.domElement );
        console.log(refContainer.current);

        refContainer.current && refContainer.current?.appendChild( renderer.domElement );
        const geometry = new THREE.SphereGeometry(5, 64, 64);
        const material = new THREE.MeshBasicMaterial( { color: 0x3f3f3f } );
        const sphere = new THREE.Mesh( geometry, material );

        scene.add( sphere );

        camera.position.z = 10;
        function animate(){
            requestAnimationFrame( animate );
            sphere.rotation.x += 0.02;
            sphere.rotation.y += 0.02;
            renderer.render( scene, camera );
        }

        animate();
    }, []);


}