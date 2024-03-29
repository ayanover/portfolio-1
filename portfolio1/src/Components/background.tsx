import * as THREE from 'three';
import { useEffect, useRef } from "react";
import '../Styles/Background.css'
export default function background(){
    const refContainer = useRef(null);
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        //document.body.appendChild( renderer.domElement );
        console.log(refContainer.current);

        refContainer.current && (refContainer.current as HTMLDivElement).appendChild( renderer.domElement );
        const geometry = new THREE.SphereGeometry(6, 15, 15);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                color1: {
                    value: new THREE.Color("red")
                },
                color2: {
                    value: new THREE.Color("purple")
                }
            },
            vertexShader:
                `
                varying vec2 vUv;
            
                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                }
              `,
            fragmentShader:
                `
                uniform vec3 color1;
                uniform vec3 color2;
              
                varying vec2 vUv;
                
                void main() {
                  
                  gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
                }
              `,
            wireframe: true
        });
        const sphere = new THREE.Mesh( geometry, material );
        scene.background = new THREE.Color(0x1111)
        scene.add( sphere );

        function handleWindowResize(){
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        camera.position.y = 2;
        camera.position.z = 5;
        camera.position.x = -7;
        function animate(){
            window.addEventListener('resize', handleWindowResize, false)
            requestAnimationFrame( animate );
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.001;
            sphere.rotation.z += 0.001;
            renderer.render( scene, camera );
        }

        animate();

    }, []);
    return(
        <div className='container' ref={refContainer} >

        </div>
    )
}