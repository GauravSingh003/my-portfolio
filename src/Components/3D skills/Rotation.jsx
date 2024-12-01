import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Rotation = () => {
    let tex = useTexture('../../../images/project rotating.png')
    const cyl = useRef(null);

    useFrame((state, delta) => {
        if (cyl.current) {
            cyl.current.rotation.y += delta;
        }
    });

    return (
        <group rotation={[0, 1.0, 0.5]}>
            <mesh ref={cyl} rotation={[0, 1.4, 0.5]}>
                <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};
export default Rotation;