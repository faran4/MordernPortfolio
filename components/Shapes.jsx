import React from 'react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {ContactShadows, Float, Environment} from "@react-three/drei";
import {Suspense, useRef, useState} from "react";
import {gsap} from "gsap";
import {useGSAP} from '@gsap/react';

const Shapes = () => {
    return (
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas className="z-0" shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }} dpr={[1, 2]} camera={{
                position: [0, 0, 25], fov: 30,
                near: 1, far: 40
            }}>
                <Suspense fallback={null}>
                    <Geometries />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.65}
                        scale={40}
                        blur={1}
                        far={9}/>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                    <pointLight position={[0, 10, 0]} intensity={0.5} />
                    <Environment files="/hdri/studio2_4k.hdr" />
                </Suspense>
            </Canvas>
        </div>
    )
}

function Geometries() {
    const geometries = [
        {
            position: [1.5, 0, 0], // Icosahedron - right center
            r: 0.5,
            geometry: new THREE.IcosahedronGeometry(3), //Gem
        },
        {
            position: [0, 1, 2], // Capsule - top front
            r: 0.8,
            geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), //pill
        },
        {
            position: [-2, 2, -2], // Dodecahedron - left top back
            r: 0.8,
            geometry: new THREE.DodecahedronGeometry(1.5), //Soccer Ball
        },
        {
            position: [0, -1, 3], // Torus - right bottom front
            r: 0.9,
            geometry: new THREE.TorusGeometry(0.8, 0.25, 16, 32), //donut
        },
        {
            position: [-1.5, 0, 0], // Octahedron - center left
            r: 0.5,
            geometry: new THREE.OctahedronGeometry(3), //diamond
        },
        {
            position: [1.5, 2, -1], // TorusKnot - top left front
            r: 0.9,
            geometry: new THREE.TorusKnotGeometry(0.8, 0.3, 15, 30), //diamond
        },
    ];

    const materials = [
        // Special Materials
        new THREE.MeshNormalMaterial(),
        new THREE.MeshPhysicalMaterial({color: 0xffffff, roughness: 0.1, metalness: 0.9, clearcoat: 1.0}), // Chrome-like
        new THREE.MeshPhysicalMaterial({color: 0xffd700, roughness: 0.2, metalness: 1.0}), // Gold

        // Vibrant Colors
        new THREE.MeshStandardMaterial({color: 0x3498db, roughness: 0.1}), // Bright Blue
        new THREE.MeshStandardMaterial({color: 0x8e44ad, roughness: 0.2}), // Purple
        new THREE.MeshStandardMaterial({color: 0x2ecc71, roughness: 0.5}), // Green
        new THREE.MeshStandardMaterial({color: 0xc0392b, roughness: 0.4}), // Red
        new THREE.MeshStandardMaterial({color: 0xf1c40f, roughness: 0.2, metalness: 1}), // Yellow Metal
        new THREE.MeshStandardMaterial({color: 0xED4C67, roughness: 0.3}), // Pink
        new THREE.MeshStandardMaterial({color: 0xF79F1F, roughness: 0.6}), // Orange

        // Neon/Electric Colors
        new THREE.MeshStandardMaterial({color: 0x00ff88, roughness: 0.1, emissive: 0x002211}), // Neon Green
        new THREE.MeshStandardMaterial({color: 0xff0080, roughness: 0.2, emissive: 0x220011}), // Electric Pink
        new THREE.MeshStandardMaterial({color: 0x0088ff, roughness: 0.1, emissive: 0x001122}), // Electric Blue
        new THREE.MeshStandardMaterial({color: 0xff8800, roughness: 0.3, emissive: 0x221100}), // Electric Orange

        // Metallic Variations
        new THREE.MeshStandardMaterial({color: 0x34495e, roughness: 0, metalness: 1}), // Dark Metal
        new THREE.MeshStandardMaterial({color: 0x7f8c8d, roughness: 0.2, metalness: 0.8}), // Silver
        new THREE.MeshStandardMaterial({color: 0xe84393, roughness: 0.2, metalness: 0.5}), // Pink Metal
        new THREE.MeshStandardMaterial({color: 0x006266, roughness: 0.5, metalness: 0.75}), // Teal Metal
        new THREE.MeshStandardMaterial({color: 0x6F1E51, roughness: 0.5, metalness: 0.6}), // Dark Purple Metal
        new THREE.MeshStandardMaterial({color: 0x8B4513, roughness: 0.4, metalness: 0.7}), // Bronze
        new THREE.MeshStandardMaterial({color: 0xC0C0C0, roughness: 0.1, metalness: 0.9}), // Polished Silver

        // Matte Variations
        new THREE.MeshStandardMaterial({color: 0x2C3E50, roughness: 0.9}), // Matte Dark Blue
        new THREE.MeshStandardMaterial({color: 0x27AE60, roughness: 0.8}), // Matte Green
        new THREE.MeshStandardMaterial({color: 0xE74C3C, roughness: 0.9}), // Matte Red
        new THREE.MeshStandardMaterial({color: 0xF39C12, roughness: 0.7}), // Matte Orange

        // Jewel Tones
        new THREE.MeshStandardMaterial({color: 0x9B59B6, roughness: 0.3, metalness: 0.2}), // Amethyst
        new THREE.MeshStandardMaterial({color: 0x1ABC9C, roughness: 0.2, metalness: 0.3}), // Turquoise
        new THREE.MeshStandardMaterial({color: 0xE67E22, roughness: 0.4, metalness: 0.1}), // Amber
        new THREE.MeshStandardMaterial({color: 0x8E44AD, roughness: 0.3, metalness: 0.4}), // Deep Purple

        // Pastel Colors
        new THREE.MeshStandardMaterial({color: 0xFFB6C1, roughness: 0.6}), // Light Pink
        new THREE.MeshStandardMaterial({color: 0x98FB98, roughness: 0.5}), // Pale Green
        new THREE.MeshStandardMaterial({color: 0x87CEEB, roughness: 0.4}), // Sky Blue
        new THREE.MeshStandardMaterial({color: 0xDDA0DD, roughness: 0.5}), // Plum

        // Gradient-like Colors with Emission
        new THREE.MeshStandardMaterial({color: 0xFF6B6B, roughness: 0.3, emissive: 0x331111}), // Warm Red
        new THREE.MeshStandardMaterial({color: 0x4ECDC4, roughness: 0.2, emissive: 0x113322}), // Mint
        new THREE.MeshStandardMaterial({color: 0xFFE66D, roughness: 0.4, emissive: 0x332211}), // Sunshine
        new THREE.MeshStandardMaterial({color: 0xFF6B9D, roughness: 0.3, emissive: 0x331122}), // Rose

        // Dark/Gothic Colors
        new THREE.MeshStandardMaterial({color: 0x2F1B69, roughness: 0.8, metalness: 0.2}), // Dark Purple
        new THREE.MeshStandardMaterial({color: 0x0F3460, roughness: 0.7, metalness: 0.3}), // Dark Blue
        new THREE.MeshStandardMaterial({color: 0x16213E, roughness: 0.9, metalness: 0.1}), // Midnight
    ]

    const soundEffects = [
        new Audio("/sounds/knock1.ogg"),
        new Audio("/sounds/knock2.ogg"),
        new Audio("/sounds/knock3.ogg"),
        new Audio("/sounds/knock4.ogg"),
        new Audio("/sounds/knock5.ogg"),
        new Audio("/sounds/knock6.ogg"),
        new Audio("/sounds/knock7.ogg"),
        new Audio("/sounds/knock8.ogg"),
        new Audio("/sounds/knock9.ogg"),
        new Audio("/sounds/knock10.ogg"),
        new Audio("/sounds/knock11.ogg"),
        new Audio("/sounds/knock12.ogg"),
        new Audio("/sounds/knock13.ogg"),
    ]

    return geometries.map(({position, r, geometry}) => (
        <Geometry
            key={JSON.stringify(position)}
            position={position.map((p)=>p*2)}
            geometry={geometry}
            soundEffects={soundEffects}
            materials={materials}
            r={r}
        />
    ))

}

function Geometry({ r, position, geometry, materials, soundEffects }) {
    const meshRef = useRef();
    const [visible, setVisible] = useState(false);

    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    function handleClick(e) {
        const mesh = e.object;

        gsap.utils.random(soundEffects).play();

        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 2)}`,
            z: `+=${gsap.utils.random(0, 2)}`,
            duration: 1.0,
            ease: "elastic.out(1, 0.4)",
            yoyo: true,
        });

        mesh.material = getRandomMaterial();
    }

    const handlePointerOver = () => {
        document.body.style.cursor = "pointer";
    }

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    }

    useGSAP(() => {
        let ctx = gsap.context(() => {
            setVisible(true);
            gsap.from(meshRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)",
                delay: 0.5,
            });
        });
        return () => ctx.revert();
    });

    return (
        <group position={position} ref={meshRef}>
            <Float
                speed={8 * r}
                rotationIntensity={10 * r}
                floatIntensity={8 * r}
            >
                <mesh
                    geometry={geometry}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    visible={visible}
                    material={startingMaterial}
                />
            </Float>
        </group>
    )
}


export default Shapes